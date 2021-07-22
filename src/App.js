import React, { useContext, useEffect } from "react";
import { CardList } from "./components/CardList";
import { ActionButtons } from "./components/ActionButtons";
import { logoImg, urls } from "./components/Constants";
import { AppContext, AppContextProvider } from "./components/AppContext";
import { Auth } from "./components/Auth";
import { Box, Container, FormControl, MenuItem, Paper, Typography, InputLabel, Select, Tooltip} from "@material-ui/core";
import { useStyles } from "./components/Styles";
import { LoadingComponent } from './components/LoadingComponent'
import CancelIcon from '@material-ui/icons/Cancel';

const SectionChooser = () => {
  const {cardState, setData, section, setSection } =  useContext(AppContext)
  const classes = useStyles()

  const handleChange = (e) => {
    setData(cardState[e.target.value]);
    setSection(e.target.value);
  };

  return (
    <Box className={classes.appSectionChoice}>
      <FormControl className={classes.chooseSection}>
        <InputLabel  className={classes.inputLabel}>Section</InputLabel>
          <Select
            variant='outlined'
            value={section}
            onChange={handleChange}
            >
          {Object.keys(cardState).map((k) => (
            <MenuItem key={k} value={k}>{k}</MenuItem>
            ))}
          </Select>
      </FormControl>
      <Typography className={classes.tipSpan}>Tip: remove cards you're not interested in by clicking the <CancelIcon fontSize='inherit'/></Typography>
    </Box>
  )
}

const StyledWord = (props) => {
  const classes = useStyles();
  return (
    <>
      <span className={classes.underline}>{props.text.slice(0, 1)}</span>
      {props.text.slice(1)}{" "}
    </>
  )
  };

const AppInner = () => {
  const classes = useStyles();
  const { setupState, setData, data, cardState, section, gClient, loading } = useContext(AppContext);
  const words = [
    "transcriber", "reproduces","analytical,","neat","similarly","comprehensive","reviews","incorporating","best practices","every","rendition"
  ]
  useEffect(() => {
    setupState(gClient)
    setData(cardState[section]);
  }, [loading]);

  {
    return (
      <Paper className={classes.mainContainer}>
        <Box id='header' className={classes.appHeader}>
          <img src={logoImg} className={classes.appLogo} alt="logo" />
            <Tooltip
              title={words.map(w => <StyledWord text={w} key={w}/>)}
              >
                <Typography>
              Transcriber&nbsp;helps you conduct different types of reviews and audits
              <br/>It is powered by content from this{" "}
            <a target="_blank" rel="noopener noreferrer" href={urls.gSheets}>
              Google Sheet
            </a>
            <br/>
            <span className={classes.version}>v1.0.0</span>
            </Typography>
            </Tooltip>
            <hr style={{width:'60%'}}/>
        </Box>
        {loading ? <LoadingComponent /> : (
          <>
          <SectionChooser/>
            <CardList />
          </>
        )}
        <ActionButtons />
        
      </Paper>
    );
  }
};


const AppAuthLayer = () => {
  const { loggedIn } = useContext(AppContext)
  return (
    loggedIn ? <AppInner/> : <Auth />
  )
}

export const App = () => {
  const classes = useStyles()
  return (
  <AppContextProvider>
    <Container>
      <AppAuthLayer />
    </Container>
  </AppContextProvider>
  )
};
