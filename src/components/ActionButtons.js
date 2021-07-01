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

  const save = async () => {
    let scores = await generateForCustomer()
    let requestTokenHeaders = await gClient.getRequestHeaders()
    let headers = {
      ...requestTokenHeaders,
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json"
    }
    let pubsubPayload = {
      messages: [
        {
          data: btoa(JSON.stringify({
            token: requestTokenHeaders,
            data: scores
          }))
        },
      ]
    }

    try {
      let r = await gClient.request({
        url: urls.pubsub,
        method: 'POST',
        headers: headers,
        body: JSON.stringify(pubsubPayload)
      })
        if (r.status === 200) {
          let msg = 'All done, check the Transcriber Output folder (in a minute or two). Do you want to clear?'
          if (window.confirm(msg)) {
            window.location.reload();      
          }
        } else {
          window.alert('Problem communicating with Google Drive! Check the console')
          console.error(r)
        }
    } catch (e) {
      window.alert('Problem communicating with Google Drive! Check the console')
      console.error(e)
    }
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