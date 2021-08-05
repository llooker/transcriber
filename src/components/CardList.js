import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { useStyles } from "./Styles";
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { Row } from "./Row";
import clsx from "clsx";
import { Box, Card, CardContent, CardHeader, Checkbox, Typography } from "@material-ui/core";

const TranscriberCard = (props) => {
  const { cardState, section } = useContext(AppContext);
  const [isHidden, setIsHidden] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);
  const [score, setScore] = useState(0);
  const classes = useStyles();
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  useEffect(() => {
    if (cardState[section][props.data]) {
      calcScores(cardState[section][props.data]);
    }
  }, [cardState[section][props.data]]);

  const calcScores = (rows) => {
    let total = Object.values(rows)
      .filter((v) => v.score > 0 && v.score < 6)
      .map((s) => s.score - 1)
      .reduce((a, b) => a + b, 0);
    setScore(total);
  };

  const remove = () => {
    setIsRemoved(true);
    setIsHidden(true);
  };

  let title = Object.values(props.data)[0].Card
  let scoreDenom = Object.keys(props.data).length * 4
  let scorePercent = Math.round((score / scoreDenom) * 100);
  if (isRemoved) {
      return <></>
  } else return (
    <Card className={classes.cardContainer} elevation={3}>
       <CardHeader
        onClick={toggleHidden}
        title={(<Box className={clsx(classes.cardHeader,classes.hoverAction)}>
          <Box className={classes.cardHeaderSection}>
            <Checkbox readOnly checked={!isHidden}/> 
            <Typography variant='h6' >{title}</Typography>
          </Box>
          <Box className={classes.cardHeaderSection}>
            <Typography className={classes.scoreText}>
              {`${score}/${scoreDenom} [${scorePercent}%]`}
            </Typography>
            {isHidden && <IconButton onClick={remove}>
             <CancelIcon />
           </IconButton>}
          </Box>
        </Box>)}
      >
      </CardHeader>
      {!isHidden && <CardContent>
        <Box className={classes.rowContainer}>
          {Object.keys(props.data).map((k, ix) => (
              <Row
                key={ix}
                ix={ix}
                card={k}
                data={props.data[k]}
                calcScores={calcScores}
              ></Row>
            ))}
            </Box>
      </CardContent>}
    </Card>
  )
};

export const CardList = () => {
  const { data } = useContext(AppContext);
  const classes = useStyles();

  return (
    <Box id='cards' className={classes.allCardContainer}>
        {data && Object.keys(data).map(k => <TranscriberCard key={k} data={data[k]} />)}
    </Box>
  );
};
