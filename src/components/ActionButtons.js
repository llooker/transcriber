import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { urls } from './Constants'
import styled from 'styled-components';

const Clear = styled.span`
  padding-left: 100px;
`;

const ActionButtons = () => {
  const { reviewType, authProps, setCustomerState, generateScores } = useContext(AppContext)
  const clear = () => {
    if (window.confirm("Are you sure you want to start over?")) {
      localStorage.clear();
      window.location.reload();
    }
  }
  const save = () => {
    let pause = 100
    window.setTimeout(function() {
      let scores = generateScores()
      console.log(scores)
      setCustomerState(prompt("Who is the customer?"))

      fetch(urls.googleScripts, {
          mode: 'no-cors',
          headers: {
              'Access-Control-Allow-Origin':'*',
              'Authorization': `Bearer ${authProps?.token?.access_token}`
          },
          method: 'post',
          body: scores
      }).then((res) => {
          console.log(res)
          if (res.ok) {
            if (window.confirm('All done, check the Transcriber Output folder. Do you want to clear?')) {
              localStorage.clear();
              window.location.reload();      
            }
          } 
          else {
            window.alert('Problem communicating with Google Drive! Check the console')
          }
      }); 
    }, reviewType.options.length * pause)
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