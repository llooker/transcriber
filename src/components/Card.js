import React, { useState, useEffect, useContext } from "react";
import { AppContext } from './AppContext';
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "./Row";

const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  margin: auto;
  width: 600px;
  max-width: 100%;
  text-align: left;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 16px;
  font-weight: bold;
`;

const Remove = styled.div`
  padding: 15px 15px;
  float: right;
  cursor: pointer;
  color: #ddd;
`;

const Score = styled.div`
  float: right;
  font-weight: normal;
`;

const Super = styled.span`
  font-size: 12px;
  color: #bbb;
  padding-left: 10px;
`;

export const Card = (props) => {
  const { cardState } = useContext(AppContext)
  const [isHidden, setIsHidden] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false);
  const [score, setScore] = useState(0);
  const toggleHidden = () => {setIsHidden(!isHidden)};

  useEffect(() => {
    if (cardState[props.card].rows) {
      calcScores(cardState[props.card].rows)
    }
  }, [cardState[props.card].rows])

  const calcScores = (rows) => {
    let total = Object.values(rows)
      .filter(v => (v.score > 0 && v.score < 6))
      .map(s => (s.score - 1))
      .reduce((a,b) => a + b, 0)
    setScore(total)
  }

  const remove = () => {
    setIsRemoved(true);
    setIsHidden(true);
  };

  let title = props.card.title;
  let score_percent = Math.round(
    (score / (props.card.rows.length * 4)) * 100
  );
  if (!isHidden) {
    return (
      <Div>
        <Container>
          <Title onClick={toggleHidden}>
            <input type="checkbox" readOnly checked={!isHidden} /> {title}{" "}
            <Score>
              {score_percent}%{" "}
              <Super>
                ({score}/{props.card.rows.length * 4})
              </Super>
            </Score>
          </Title>
          {props.card.rows.map((name, ix) => (
            <Row
              key={ix}
              card={title}
              name={name}
              calcScores={calcScores}
            ></Row>
          ))}
        </Container>
      </Div>
    );
  } else if (!isRemoved) {
    return (
      <Div>
        <Container>
          <Remove onClick={remove} alt="Remove">x</Remove>
          <Title onClick={toggleHidden}>
            <input type="checkbox" readOnly checked={!isHidden} /> {title}
          </Title>
        </Container>
      </Div>
    );
  } else {
    return <Div></Div>;
  }
};

Card.propTypes = {
  card: PropTypes.any.isRequired, // eslint-disable-line
};

