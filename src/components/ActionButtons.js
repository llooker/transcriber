import React from 'react';
import styled from 'styled-components';

const Clear = styled.span`
  padding-left: 100px;
`;

class ActionButtons extends React.Component {

  constructor() {
    super();
    this.save = this.save.bind(this);
  }

  clear() {
    if (window.confirm("Are you sure you want to start over?")) {
      localStorage.clear();
      window.location.reload();
    }
  }

  dispatchChange(reviewType, i) {
    reviewType.value = reviewType.options[i].value
    reviewType.dispatchEvent(new Event('change', { bubbles: true, cancelable: false}));
  }

  save() {
    // Force the shadow JSON object to get built for each section if the user has just refreshed the page
    let reviewType = window.document.getElementById('reviewType')
    let pause = 100
    for (let i = 0; i < reviewType.options.length; i++){
      // We need to let React have enough time to render the components which will in turn build the JSON object
      // Advance through the sections one-by-one and pause for 100ms in between:
      window.setTimeout(this.dispatchChange.bind(null, reviewType, i), pause * i)
    }

    window.setTimeout(function() {
      console.log(JSON.stringify(window.jsonForGoogleApps))
      window.jsonForGoogleApps.customer = prompt("Who is the customer?");

      let googleScriptsEndpoint = 'https://script.google.com/a/looker.com/macros/s/AKfycbzAAHv7EHgJRbZ5f8IqnK3IPqWDlnuUZWZTC-zIfw/exec';
      fetch(googleScriptsEndpoint, {
          mode: 'no-cors',
          headers: {
              'Access-Control-Allow-Origin':'*'
          },
          method: 'post',
          body: JSON.stringify(window.jsonForGoogleApps)
      }).then(function(response) {
          console.log(response)
          alert('Success, check the Transcriber Output folder.');
      }); 
    }, reviewType.options.length * pause)
  }

  render() {
    return (
        <div>
            <input type="button" onClick={this.save} value="Save to Google Doc"/>&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/u/0/folders/1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI">Transcriber Output</a>
            <Clear><input type="button" onClick={this.clear} value="Clear"/></Clear>
            <p>&nbsp;</p>
        </div>
    )
  }
}

export default ActionButtons;