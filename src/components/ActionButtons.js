import React from 'react';
import styled from 'styled-components';
import { useAuth } from './Auth';
import { urls } from './Constants'

const Clear = styled.span`
  padding-left: 100px;
`;

const ActionButtons = () => {
  const { authProps } = useAuth()
  console.log(authProps)

  const clear = () => {
    if (window.confirm("Are you sure you want to start over?")) {
      localStorage.clear();
      window.location.reload();
    }
  }

  const dispatchChange = (reviewType, i) => {
    reviewType.value = reviewType.options[i].value
    reviewType.dispatchEvent(new Event('change', { bubbles: true, cancelable: false}));
  }

  const save = () => {
    // Force the shadow JSON object to get built for each section if the user has just refreshed the page
    let reviewType = window.document.getElementById('reviewType')
    let pause = 100
    for (let i = 0; i < reviewType.options.length; i++){
      // We need to let React have enough time to render the components which will in turn build the JSON object
      // Advance through the sections one-by-one and pause for 100ms in between:
      window.setTimeout(dispatchChange.bind(null, reviewType, i), pause * i)
    }

    window.setTimeout(function() {
      console.log(JSON.stringify(window.jsonForGoogleApps))
      window.jsonForGoogleApps.customer = prompt("Who is the customer?");

      fetch(urls.googleScripts, {
          mode: 'no-cors',
          headers: {
              'Access-Control-Allow-Origin':'*',
              'Authorization': `Bearer ${authProps?.token?.access_token}`
          },
          method: 'post',
          body: JSON.stringify(window.jsonForGoogleApps)
      }).then(function(response) {
          console.log(response)
          if (window.confirm('All done, check the Transcriber Output folder. Do you want to clear?')) {
            localStorage.clear();
            window.location.reload();      
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