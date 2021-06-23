import React, { createContext, useState, useMemo } from "react";
import Cookie from 'js-cookie'
import { OAuth2Client } from 'google-auth-library'
const gClient = new OAuth2Client(process.env.REACT_APP_GCLIENT_ID);

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [cardState, setCardState] = useState({})
    const [reviewType, setReviewType] = useState('lookml')

    const validateToken = async (token) => {
        const ticket = await gClient.verifyIdToken({
            idToken: token,
            audience: process.env.REACT_APP_GCLIENT_ID
        });
        try {
            ticket.getPayload()
            return true
        } catch (e) {
            console.error(e)
        }
        return false
      }

    const handleOAuthLogIn = (res) => {
        console.log(res.tokenId)
        Cookie.set('gtoken', res.tokenId)
        Cookie.set('guser', res.profileObj)
        window.location.reload()
    }

    const shouldLogIn = () => {
        const existing = Cookie.get('gtoken')
        if (existing) {
            if (validateToken(existing)) {
                return false
            }
        }
        return true
    }

    const handleOauthLogOut = () => {
        Cookie.remove('gtoken')
        Cookie.remove('guser')
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
        shouldLogIn,
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
