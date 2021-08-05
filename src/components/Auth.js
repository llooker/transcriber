import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import { GoogleLogin } from 'react-google-login';
import { gLogo, authScopes, logoImg } from './Constants'
import { useStyles } from './Styles';
import { Box, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';

const GIcon = () => {
    const classes = useStyles()
    return (
        <img src={gLogo} className={classes.authGLogo}/>
    )
}

export const Auth = () => {
    const classes = useStyles()
    const { handleOAuthLogIn, handleOauthLogOut } = useContext(AppContext)
    return (
            <div className={classes.authCardBackground}>
                <Box className={classes.authCard}>
                <img src={logoImg} className={clsx(classes.authImg, classes.authChild)} alt="logo" />
                <Typography className={clsx(classes.authHeader, classes.authChild)}>
                    transcriber
                    </Typography>
                <hr className={clsx(classes.authRule, classes.authChild)}/>
                <GoogleLogin
                    render={renderProps => (
                        <Button 
                        onClick={renderProps.onClick} disabled={renderProps.disabled}
                        className={clsx(classes.authButton, classes.authChild)}
                        variant='outlined'
                        startIcon={<GIcon/>}
                        >Log in with Google
                        </Button>
                    )}
                    clientId={process.env.REACT_APP_GCLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={handleOAuthLogIn}
                    scope={authScopes.join(' ')}
                    onFailure={handleOauthLogOut}
                    cookiePolicy={'single_host_origin'}
                    />
            </Box>
            </div>
    )
}