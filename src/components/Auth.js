import React from "react";
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login';


const AuthCard = styled.div`
  margin: auto;
  padding: 20px;
  width: 600px;
  max-width: 100%;
  text-align: left;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

const clientID = process.env.REACT_APP_GCLIENT_ID;

export const Auth = (props) => {
    const authSuccess = (res) => {
        props.setToken(res.tokenObj.access_token)
    }
    const authFail = (res) => {console.error(`Auth error: ${res}`)}
    return (
        <AuthCard>
            <h5 style={{marginBottom:'10px'}}>Authenticate with Google to view this Content</h5>
            <GoogleLogin
                clientId={clientID}
                buttonText="Login with Google"
                onSuccess={authSuccess}
                onFailure={authFail}
                cookiePolicy={'single_host_origin'}
                />
        </AuthCard>
    )
}
  