import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    // alignItems: 'flex-start',
    textAlign: "center",
    padding: theme.spacing(3),
  },
  appLogo: {
    height: "80px",
    paddingBottom: "20px",
  },
  appHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  progressBar: {
    margin: theme.spacing(2),
    // width: '80%'
  },
  appSectionChoice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: "20px 50px 20px 50px",
  },
  authChild: {
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "6px 0px",
  },
  authCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    width: "400px",
    height: "200px",
    margin: "auto",
    marginTop: theme.spacing(5),
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 2px 2px 0 rgba(0, 0, 0, 0.3)",
  },
  authGLogo: {
    width: "16px",
    height: "16px",
  },
  authImg: {
    width: '200px'
  },
  authHeader: {
    fontFamily: "Google Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "36px",
    lineHeight: "32px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontVariant: "small-caps",
    color: "#1A73E8",
  },
  authRule: {
    width: "60%",
    background: "#5F6368",
  },
  authButton: {
    boxShadow:
      "0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)",
    borderRadius: "10px",
    fontFamily: "Google Sans",
    fontStyle: "normal",
    fontWeight: "00",
    color: '#3C4043',
    fontSize: "16px",
    lineHeight: "16px",
    padding: "12px",
  },
  tipSpan: {
    fontStyle: "italic",
    fontSize: "11px",
  },
  chooseSection: {
    minWidth: "200px",
    textAlign: "left",
  },
  version: {
    fontFamily: "'Source Code Pro', monospace",
    color: "#000",
    fontWeight: "bold",
    fontSize: "10px",
  },
  underline: {
    textDecoration: "underline",
  },
  allCardContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px",
  },
  hoverAction: {
    cursor: "pointer",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
  },
  cardHeaderSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardContainer: {
    marginBottom: "30px",
    width: "90%",
    textAlign: "left",
  },
  rowContainer: {
    display: "flex",
    flexDirection: " column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 80px 0px 80px",
    // width: '80%'
  },
  rowContentCompact: {
    marginBottom: theme.spacing(1),
    padding: '10px 30px 10px 30px',
    boxShadow: '0px'
  },
  rowContentSpaced: {
    marginBottom: theme.spacing(4),
    padding: '30px',
  },
  rowContent: {
    width: "100%",
  },
   bottomButton: {
    minWidth: "150px",
  },
  actionButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  inputLabel: {
    background: "white",
    zIndex: 10,
    transform: "translate(-5px, -5px)",
    fontSize: "10pt",
  },
  rowCardStyle: {
    paddingBottom: "10px",
  },
  rowCardStyleDisabled: {
      textDecoration: "line-through",
      color: "#9AA0A6",
  },
  cardStyleDisabled: {
    background: "#F1F3F4"
  }
}));
