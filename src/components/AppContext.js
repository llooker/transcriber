import React, { createContext, useState, useMemo, useEffect } from "react";
import { OAuth2Client } from 'google-auth-library'
import { urls, defaultSection } from "./Constants";
export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [cardState, setCardState] = useState({})
    const [section, setSection] = useState(defaultSection) 
    const [data, setData] = useState({})   
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const [gClient, setGClient] = useState(undefined)

    useEffect(() => {
        setupClient()
    }, [])

    const setupClient = () => {
        setGClient(new OAuth2Client(process.env.REACT_APP_GCLIENT_ID))
    }

    const handleOAuthLogIn = async (res) => {
        try {
            let tmp = gClient
            tmp.setCredentials(res.tokenObj)
            setGClient(tmp)
            setLoggedIn(true)
        }
        catch (e) {
            window.alert("Problem authenticating. See console")
            setLoggedIn(false)
            console.error(e)
        }
    }

    const handleOauthLogOut = () => {
        if (gClient) {
            let tmp = gClient
            tmp.revokeCredentials()
            setGClient(tmp)
        }
        setLoggedIn(false)
    }

    const hasScore = (obj, k) => {
        return Object.values(obj[k]).map(v => v.score)
        .reduce((a,b) => a + b, 0) > 0
    }

    const generateScores = (customer_name) => {
        let tmp = {}
        let data = cardState[section]
        Object.keys(data).forEach(k => {
            if (hasScore(data, k)) {
                tmp[k] = {rows: {}}
                Object.keys(data[k]).forEach(k2 => {
                    let tmpScore = data[k][k2].score
                    if(tmpScore > 0 && tmpScore < 6) {
                        let tmpRow = {...data[k][k2]}
                        tmpRow.score -=1
                        tmp[k]['rows'][k2] = {...tmpRow}
                    }
                })
            }
        })
        return {cards: {...tmp}, customer: customer_name}
    }

    const parseCsv = (data) => {
        let lines = data.split("\n");
        let headers = lines[0].split("\t");
        lines = lines.slice(1);
        let parsed = [];
        lines.forEach((l) => {
        let cols = l.split("\t");
        let zip = cols.reduce((acc, cur, ix) => {
            acc[headers[ix].replace(/[\n\r]/g, '')] = cur.replace(/[\n\r]/g, '')
            return acc;
        }, {});
        parsed.push(zip);
        });
        return parsed;
    };


    const fetchData = async (client) => {
        let r = await client.request({
            url: urls.gSheetsData,
          });
          if (r.status === 200) {
            return parseCsv(r.data);
          } else {
            alert("Problem loading data from Google sheets, check console!");
            console.error(
              `Something failed! Check the sheet at ${urls.gSheets} and the response:`
            );
            console.info(r);
          }
    }

    const setupState = async (client) => {
        let cards = await fetchData(client)
        let tmp = cards.reduce((acc, cur) => {
            let section = cur['Section']
            let card = cur['Card']
            let content = cur['Content'] 
            let data = {score: 0, notes: '', ...cur}
            if (!(section in acc)) {
                acc[section] = {}
                acc[section][card] = {}
            } else if (!(card in acc[section])) {
                acc[section][card] = {}
            }
            acc[section][card][content] = data
            return acc
        }, {})
        setCardState({...tmp})
        setLoading(false)
    }

    const updateRowScore = (cardKey, rowKey, val) => {
        let tmp = {...cardState}
        tmp[section][cardKey][rowKey].score = val
        setCardState({...tmp})
    }

    const updateRowNotes = (cardKey, rowKey, val) => {
        let tmp = {...cardState}
        tmp[section][cardKey][rowKey].notes = val
        setCardState({...tmp})
    }

    const contextValue = {
        gClient,
        loggedIn,
        loading,
        handleOAuthLogIn,
        handleOauthLogOut,
        cardState,
        section,
        setSection,
        data,
        setData,
        generateScores: useMemo(() => generateScores, [cardState]),
        updateRowScore,
        updateRowNotes,
        setupState: useMemo(() => setupState, [cardState])
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
