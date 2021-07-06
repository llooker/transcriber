import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { urls } from './Constants'
import styled from 'styled-components';
import { GoogleLogout } from 'react-google-login';

const Clear = styled.span`
  padding-left: 100px;
`;

const ActionButtons = () => {
  const { generateScores, gClient, handleOauthLogOut } = useContext(AppContext)
  const clear = () => {
    window.confirm("Are you sure you want to start over?") && window.location.reload()
  }

  const generateForCustomer = async () => {
    let cust = await prompt("Who is the customer?")
    return generateScores(cust)
  }

  const postGDocError = (msg) => {
    window.alert('Problem communicating with Google Drive! Check the console')
    console.error(msg)
  }

  const save = async () => {
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
          let msg = 'All done, check the Transcriber Output folder. Do you want to clear?'
          window.confirm(msg) && window.location.reload()
          console.log(resp.msg)
        } else {
          postGDocError(resp.msg)
        }
        // TO DO - replace with a nice custom modal!
      } else {postGDocError(r)}
    } catch (e) {postGDocError(e)}
  }
    return (
      <>
        <div>
            <input type="button" onClick={save} value="Save to Google Doc"/>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href={urls.gDrive}>Transcriber Output Location</a>
            <Clear><input type="button" onClick={clear} value="Clear"/></Clear>
            <p>&nbsp;</p>
        </div>
        <div>
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={handleOauthLogOut}
            />
        </div>
        </>
    )
}

export default ActionButtons;