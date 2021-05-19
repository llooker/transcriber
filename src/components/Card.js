import React, { useContext, useEffect, useState } from "react";
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

const Card = (props) => {
  const [isHidden, setIsHidden] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false);
  const [rowScores, setRowScores] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  // const [isExpanded, setIsExpanded] = useState(false); // TODO
  const toggleHidden = () => {setIsHidden(!isHidden)};

  const remove = () => {
    setIsRemoved(true);
    setIsHidden(true);
  };

  const addScores = (a, b) => {
    return Number(a) + Number(b);
  };

  const updateScore = (value, idx) => {
    let newScores = Object.assign({}, rowScores);
    newScores[idx] = value;
    const scoreSum = Object.values(newScores).reduce(addScores, 0);
    setRowScores(newScores);
    setTotalScore(scoreSum);
  };

  let title = props.card.title;
  let score_percent = Math.round(
    (totalScore / (props.card.rows.length * 4)) * 100
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
                ({totalScore}/{props.card.rows.length * 4})
              </Super>
            </Score>
          </Title>
          {props.card.rows.map((name, index) => (
            <Row
              key={index}
              card={title}
              name={name}
              score={rowScores[index]}
              idx={index}
              updateScore={updateScore}
            ></Row>
          ))}
        </Container>
      </Div>
    );
  } else if (!isRemoved) {
    return (
      <Div>
        <Container>
          <Remove onClick={remove} alt="Remove">
            x
          </Remove>
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

export default Card;
