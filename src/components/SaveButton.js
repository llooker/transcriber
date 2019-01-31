import React from 'react';

class SaveButton extends React.Component {

  constructor() {
    super();
    this.save = this.save.bind(this);
    this.googleScriptsEndpoint = 'https://script.google.com/a/looker.com/macros/s/AKfycbzAAHv7EHgJRbZ5f8IqnK3IPqWDlnuUZWZTC-zIfw/exec';
  }

  save() {
    window.jsonForGoogleApps.customer = prompt("Who is the customer?");
    console.log(JSON.stringify(window.jsonForGoogleApps));
    fetch(this.googleScriptsEndpoint, {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin':'*'
        },
        method: 'post',
        body: JSON.stringify(window.jsonForGoogleApps)
    }).then(function(response) {
        console.log(response)
        alert('Success, check the "Output from Checklists App" folder!');
    });  
  }

  render() {
    return (
        <div>
            <input type="button" onClick={this.save} value="Save to Google Doc"/> then check the
            <a href="https://drive.google.com/drive/u/0/folders/1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI"> Output from Checklists App</a> folder
        </div>
    )
  }
}

export default SaveButton;