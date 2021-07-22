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
    margin: "12px 0px",
  },
  authCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    width: "800px",
    height: "400px",
    margin: "auto",
    marginTop: theme.spacing(5),
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0px 2px 2px 0 rgba(0, 0, 0, 0.3)",
  },
  authGLogo: {
    width: "32px",
    height: "32px",
  },
  authHeader: {
    fontFamily: "Google Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "48px",
    lineHeight: "44px",
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
    borderRadius: "100px",
    fontFamily: "Google Sans",
    fontStyle: "normal",
    fontWeight: "00",
    fontSize: "20px",
    lineHeight: "20px",
    padding: "20px",
  },
  innerHeader: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
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
  tooltip: {
    position: "relative",
    display: "inline-block",
    borderBottom: "1px dotted black",
  },
  tooltipText: {
    visibility: "hidden",
    width: "300px",
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "5px 0",
    borderRadius: "6px",
    position: "absolute",
    zIndex: 1,
    "&:hover": {
      visibility: "visible",
    },
  },
  underline: {
    textDecoration: "underline",
  },
  clearButton: {
    paddingLeft: "100px",
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
    padding: "0px 60px 0px 60px",
    // width: '80%'
  },
  rowContent: {
    width: "100%",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
  },
  cardTitle: {
    borderBottom: "1px solid #e6ecf0",
    padding: "15px 15px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  cardRemove: {
    padding: "15px 15px",
    float: "right",
    cursor: "pointer",
    color: "#ddd",
  },
  cardScore: {
    fontWeight: "normal",
  },
  cardSuper: {
    fontSize: "12px",
    color: "#bbb",
    paddingLeft: "10px",
  },
  rowText: {
    borderBottom: "1px solid #e6ecf0",
    padding: "15px 15px",
    fontSize: "14px",
    lineHeight: "20px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgb(245, 245, 245)",
    },
  },
  rowScoreBase: {
    borderRadius: "25px",
    padding: "3px",
  },
  rowNotes: {
    borderbottom: "1px solid #e6ecf0",
    padding: "15px 15px",
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
    background: "#FFFFFF",
      textDecoration: "line-through",
      color: "#9AA0A6",
  }
}));
