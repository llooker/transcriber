import React, { useContext, useEffect, useState } from "react";
import { AppContext } from './AppContext';
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

const Score0 = styled(ScoreBase)`background-color: #ff4600;`;
const Score1 = styled(ScoreBase)`background-color: #ff8c00;`;
const Score2 = styled(ScoreBase)`background-color: #ffd300;`;
const Score3 = styled(ScoreBase)`background-color: #e5ff00;`;
const Score4 = styled(ScoreBase)`background-color: #9fff00;`;

const NotApplicableText = styled.div`
  border-bottom: 1px solid #e6ecf0;
  background-color: #eee;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: line-through;
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
    props.updateScore(val)
    updateRowScore(props.card, props.name.text, val)
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
  let displayScore = ''
  let notes = ''
  let text = (
    <span
      dangerouslySetInnerHTML={{
        __html: props.name.text.replace(markdownLinks, htmlLinks),
      }}
    ></span>
  );

  switch (clicks) {
    case 1:
      displayScore = (
        <Score0>
          <span aria-label="yes" role="img">
            &nbsp;0️⃣
          </span>
        </Score0>
      );
      break;
    case 2:
      displayScore = (
        <Score1>
          <span aria-label="no" role="img">
            &nbsp;1️⃣
          </span>
        </Score1>
      );
      break;
    case 3:
      displayScore = (
        <Score2>
          <span aria-label="no" role="img">
            &nbsp;2️⃣
          </span>
        </Score2>
      );
      break;
    case 4:
      displayScore = (
        <Score3>
          <span aria-label="no" role="img">
            &nbsp;3️⃣
          </span>
        </Score3>
      );
      break;
    case 5:
      displayScore = (
        <Score4>
          <span aria-label="no" role="img">
            &nbsp;4️⃣
          </span>
        </Score4>
      );
      break;
    default:
  }

  if (clicks >= 1) {
    notes = (
      <Notes>
        <textarea onChange={handleChange} value={displayNotes} cols="69" rows="3" />
      </Notes>
    );
  }

  if (clicks <= 5) {
    return (
      <div>
        <Text
          data-text={props.name.text}
          onClick={handleClick}
          key={props.name.index}
        >
          {displayScore} {text}
        </Text>
        {notes}
      </div>
    );
  } else {
    return (
      <div>
        <NotApplicableText
          data-text={props.name.text}
          onClick={handleClick}
          key={props.name.index}
        >
          {text}
        </NotApplicableText>
        {notes}
      </div>
    );
  }
};

Row.propTypes = {
  name: PropTypes.any.isRequired, // eslint-disable-line
};

export default Row;
