import React, { useContext, useEffect, useState } from "react";
import { AppContext } from './AppContext';
import { clickSettings } from './Constants'
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245);
  }
`;

const ScoreBase = styled.span`
  border-radius: 25px;
  padding: 3px;
`;

const Notes = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
`;

const Row = (props) => {
  const { cardState, updateRowScore, updateRowNotes } = useContext(AppContext)
  const [clicks, setClicks] = useState(0);
  const [displayNotes, setDisplayNotes] = useState(null); 

  useEffect(() => {
    if (cardState[props.card]) {
      setDisplayNotes(cardState[props.card].rows[props.name.text].notes)
      setClicks(cardState[props.card].rows[props.name.text].score)
    }
  }, [cardState[props.card]])

  const setScore = (val) => {
    setClicks(val)
    updateRowScore(props.card, props.name.text, val)
    props.calcScores(cardState[props.card].rows)
  }

  const setNotes = (val) => {
    setDisplayNotes(val)
    updateRowNotes(props.card, props.name.text, val)
  }

  const handleClick = () => {
    let tmpScore = (clicks + 1) % 7
    setScore(tmpScore)
  };

  const handleChange = (e) => {
    setNotes(e.target.value);
  };

  let markdownLinks = /\[([^\]]+)\]\(([^)]+)\)/gi;
  let htmlLinks = '<a target="_blank" href="$2">$1</a>';
  let notes = (<Notes><textarea onChange={handleChange} value={displayNotes} cols="69" rows="3" /></Notes>)
  let text = (
    <span dangerouslySetInnerHTML={{
        __html: props.name.text.replace(markdownLinks, htmlLinks),
      }}
    ></span>
  );

  const displayScore = () => {
    let data = clickSettings[Number(clicks)]
    if (data) {
      return (
        <ScoreBase style={{backgroundColor: data.color}}>
          <span aria-label="yes" role="img">&nbsp;{data.icon}</span>
        </ScoreBase>
      )
    } 
    return (<></>)
  }

    return (
      <div>
        <Text
          data-text={props.name.text}
          onClick={handleClick}
          key={props.name.index}
          style={(clicks === 6) ? {backgroundColor: '#eee', textDecoration: 'line-through'} : {}}
        >
          {displayScore()} {text}
        </Text>
        {clicks >= 1 && notes}
      </div>
    );
};

Row.propTypes = {
  name: PropTypes.any.isRequired, // eslint-disable-line
};

export default Row;
