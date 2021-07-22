import { Card, CardContent, CardHeader, FormControl, InputLabel, Box, TextField, Tooltip, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from './AppContext';
import clsx from 'clsx';
import { useStyles } from "./Styles";
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const StarDisplay = (props) => {
  let clicks = props.value - 1
  // console.log(clicks)
  let colors = {
    0: '#FCC934',
    1: '#FCC934',
    2: '#FBBC04',
    3: '#F9AB00',
    4: '#F29900'
  }

  return (
    <Box>
      {(clicks > 0 && clicks < 5) ? (<>
      {clicks >= 1 ? <StarIcon style={{color: colors[clicks]}} /> : <StarOutlineIcon style={{color: colors[clicks]}}/>}
      {clicks >= 2 ? <StarIcon style={{color: colors[clicks]}} /> : <StarOutlineIcon style={{color: colors[clicks]}}/>}
      {clicks >= 3 ? <StarIcon style={{color: colors[clicks]}} /> : <StarOutlineIcon style={{color: colors[clicks]}}/>}
      {clicks >= 4 ? <StarIcon style={{color: colors[clicks]}} /> : <StarOutlineIcon style={{color: colors[clicks]}}/>}
      </> )
      : <></>}
      </Box>

  )
}

export const Row = (props) => {
  const { cardState, section, updateRowScore, updateRowNotes } = useContext(AppContext)
  const [clicks, setClicks] = useState(0);
  const [displayNotes, setDisplayNotes] = useState(props.data.notes); 
  const classes = useStyles()
  
  useEffect(() => {
    if (cardState[section][props.card]) {
      setDisplayNotes(cardState[section][props.card][data.name].notes)
      setClicks(cardState[section][props.card][props.name].score)
    }
  }, [cardState[props.card]])
  
  const setScore = (val) => {
    setClicks(val)
    // updateRowScore(props.card, props.name, val)
    // props.calcScores(cardState[props.card])
  }

  const setNotes = (val) => {
    setDisplayNotes(val)
    updateRowNotes(props.card, props.name, val)
  }

  const handleClick = () => {
    let tmpScore = (clicks + 1) % 7
    setScore(tmpScore)
  };

  const handleChange = (e) => {
    setNotes(e.target.value);
  };
  const cardDetails = (
    <span dangerouslySetInnerHTML={{
        __html: props.data.Content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/gi, 
          '<a target="_blank" href="$2">$1</a>'),
      }}
    ></span>
    )

    return (
    <Card className={classes.rowContent} elevation={3}>
    <Box className={classes.hoverAction} onClick={handleClick}>
    <StarDisplay value={clicks}/>
    <CardHeader className={clsx(classes.rowCardStyle, {
          [classes.rowCardStyleDisabled] : clicks === 6
        })}
      title={
      <>
        <Tooltip
          title={`Added by ${props.data['Added By']} on ${props.data['Last updated']}`}
        >
        <Typography>{cardDetails}</Typography>
        </Tooltip>
      </>}
    >
    </CardHeader>
    </Box>
    {(clicks >= 1 && clicks < 6) && 
    <CardContent style={{padding: '10px'}}>
      <FormControl fullWidth>
      <InputLabel className={classes.inputLabel}>Notes</InputLabel>
      <TextField
      multiline
      variant='outlined'
      value={displayNotes}
      onChange={handleChange}
      />
        </FormControl>
    </CardContent>
    }
  </Card>)




  //   return (
  //     <div>
  //       <div
  //         className={classes.rowText}
  //         data-text={props.name}
  //         onClick={handleClick}
  //         key={props.ix}
  //         style={(clicks === 6) ? {backgroundColor: '#eee', textDecoration: 'line-through'} : {}}
  //       >
  //         {displayScore()} {text}
  //       </div>
  //       {clicks >= 1 && notes}
  //     </div>
  //   );
};
