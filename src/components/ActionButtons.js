import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { urls, outputSummary } from './Constants'
import { generateDocument } from './Utils'
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
    // generateDocument(gClient, scores)
    
    let headers = {
      ...await gClient.getRequestHeaders(),
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json; charset=utf-8"
    }
    // APPSCRIPT /exec doesn't work with CORS -> find an alternative!
    try {
        let r = await gClient.request({
          url: urls.googleScripts,
          method: 'POST',
          headers: headers,
          body: scores
        });
        console.log(r);
        if (r.ok) {
          let msg = 'All done, check the Transcriber Output folder. Do you want to clear?'
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