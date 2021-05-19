import React, { createContext, useState } from "react";
export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [authProps, setAuthProps] = useState(undefined)
    const [customerState, setCustomerState] = useState('')
    const [cardState, setCardState] = useState({})
    const [reviewType, setReviewType] = useState('lookml')

    const logIn = (res) => {
        setAuthProps({token: {...res.tokenObj}, user: {...res.profileObj}})
    }
    const logOut = (res) => {
        console.error(`Auth error: ${res}`)
        setAuthProps(undefined);
    }

    const resetState = () => {
        setCardState({})
        setCustomerState(undefined)
    }

    const hasScore = (obj, k) => {
        return Object.values(obj[k].rows).map(v => v.score)
        .reduce((a,b) => a + b, 0) > 0
    }

    const generateScores = () => {
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
        return JSON.stringify({cards: {...tmp}, customer: customerState})
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

    // Make helpers for setCardState functions

    const contextValue = {
        authProps,
        logIn,
        logOut,
        customerState,
        setCustomerState,
        cardState,
        setCardState,
        reviewType,
        setReviewType,
        resetState,
        generateScores,
        updateRowScore,
        updateRowNotes,
        setupState
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
