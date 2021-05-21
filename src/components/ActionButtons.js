import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { urls } from './Constants'
import styled from 'styled-components';
import Cookie from 'js-cookie'

const Clear = styled.span`
  padding-left: 100px;
`;

const ActionButtons = () => {
  const { generateScores } = useContext(AppContext)
  const clear = () => {
    if (window.confirm("Are you sure you want to start over?")) {
      window.location.reload();
    }
  }

  const generateForCustomer = async () => {
    let cust = await prompt("Who is the customer?")
    return generateScores(cust)
  }

  const save = async () => {
    let scores = await generateForCustomer()
    fetch(urls.googleScripts, {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ${Cookie.get('gtoken')}`
        },
        method: 'post',
        body: scores
      }).then((res) => {
        console.log(res)
        if (res.ok) {
          if (window.confirm('All done, check the Transcriber Output folder. Do you want to clear?')) {
            window.location.reload();      
          }
        } 
        else {
          window.alert('Problem communicating with Google Drive! Check the console')
        }
      }); 
    }
    return (
        <div>
            <input type="button" onClick={save} value="Save to Google Doc"/>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href={urls.gDrive}>Transcriber Output</a>
            <Clear><input type="button" onClick={clear} value="Clear"/></Clear>
            <p>&nbsp;</p>
        </div>
    )
}

export default ActionButtons;