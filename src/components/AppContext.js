import React, { createContext, useState, useMemo, useEffect } from "react";
import { OAuth2Client } from 'google-auth-library'
export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [cardState, setCardState] = useState({})
    const [reviewType, setReviewType] = useState('lookml')
    const [loggedIn, setLoggedIn] = useState(false)
    const [gClient, setGClient] = useState(undefined)
    
    useEffect(() => {
        setGClient(new OAuth2Client(process.env.REACT_APP_GCLIENT_ID))
    }, [])

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
        return Object.values(obj[k].rows).map(v => v.score)
        .reduce((a,b) => a + b, 0) > 0
    }

    const generateScores = (customer_name) => {
        let tmp = {}
        Object.keys(cardState).forEach(k => {
            if (hasScore(cardState, k)) {
                tmp[k] = {rows: {}}
                Object.keys(cardState[k].rows).forEach(r => {
                    let tmpScore = cardState[k].rows[r].score
                    if(tmpScore > 0 && tmpScore < 6) {
                        let tmpRow = {...cardState[k].rows[r]}
                        tmpRow.score -=1
                        tmp[k].rows[r] = {...tmpRow}
                    }
                })
            }
        })
        return JSON.stringify({cards: {...tmp}, customer: customer_name})
    }

    const setupState = (cards) => {
        let tmp = {}
        cards.forEach(c => {
            let rowtmp = {}
            c.rows.forEach(r => {
                rowtmp[r.text] = {notes: '', score: 0}
            })
            tmp[c.title] = {rows: rowtmp}
        })
        setCardState({...tmp})
    }

    const updateRowScore = (cardKey, rowKey, val) => {
        let tmp = {...cardState}
        tmp[cardKey].rows[rowKey].score = val
        setCardState({...tmp})
    }

    const updateRowNotes = (cardKey, rowKey, val) => {
        let tmp = {...cardState}
        tmp[cardKey].rows[rowKey].notes = val
        setCardState({...tmp})
    }

    const contextValue = {
        gClient,
        loggedIn,
        handleOAuthLogIn,
        handleOauthLogOut,
        cardState,
        reviewType,
        setReviewType,
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
