import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { useStyles } from './Styles';
import { Box, Button } from '@material-ui/core';

export const ActionButtons = () => {
  const classes = useStyles()
  const { generateScores, gClient, handleOauthLogOut, setLoadingOut } = useContext(AppContext)
  const clear = () => {
    window.confirm("Are you sure you want to start over?") && window.location.reload()
  }

  const generateForCustomer = async () => {
    let cust = await prompt("Who is the customer?")
    return generateScores(cust)
  }

  const postGDocError = (msg) => {
    console.error(msg)
    window.alert('Problem communicating with Google Drive! Check the console')
  }

  const save = async () => {
    setLoadingOut(true)
    let scores = await generateForCustomer()
    let requestTokenHeaders = await gClient.getRequestHeaders()
    let headers = {
      ...requestTokenHeaders,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }

    try {
      let r = await fetch('/api/generate', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(scores)
      })  
      if (r.ok) {
        let resp = await r.json()
        if (resp.ok) {
          setLoadingOut(false)
          let msg = 'Document has been saved in the root of your Google Drive. Do you want to clear?'
          if (window.confirm(msg))
            { window.location.reload();
              window.open(resp.data, "_blank")
          } else {
            window.open(resp.data, "_blank")
          }
        } else {
          setLoadingOut(false)
          postGDocError(resp.error)
        }
        // TO DO - replace with a nice custom modal!
      } else {postGDocError(r)}
    } catch (e) {postGDocError(e)}
  }
    return (
      <Box className={classes.actionButtonContainer}>
          <Button variant='contained' color='primary' className={classes.bottomButton} onClick={save}>Save to Google Doc</Button>
          <Button variant='contained' color='secondary' className={classes.bottomButton} onClick={clear}>Clear</Button>
          <Button variant='outlined'  className={classes.bottomButton} onClick={handleOauthLogOut}>Logout</Button>
        </Box>
    )
}