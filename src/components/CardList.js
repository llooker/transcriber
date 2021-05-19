import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GuruQuery, cardChoices } from "./Constants";
import PropTypes from "prop-types";
import { Card } from "./Card";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Tip = styled.span`
  font-size: 11px;
`;
export const CardList = () => {
  const { reviewType, setReviewType, setupState } = useContext(AppContext);
  const { loading, error, data } = useQuery(GuruQuery)

  useEffect(() => {
    if (data) {
      setupState(data.cards)
    }
  }, [data])

  const handleChange = (e) => {
    setReviewType(e.target.value);
  };
  
  if (error) {
    return <p>{error.message}</p>;
  } else if (loading) {
    return (
      <div>
        <p>&nbsp;</p>
        <p>Loading cards from Guru...</p>
        <p>&nbsp;</p>
      </div>
        );
    } else {
      let includedCards = cardChoices[reviewType]?.included || [];
      let cards = data.cards.filter(
        (c) => includedCards.indexOf(c.title) !== -1
      );
      return (
        <div>
          <p>&nbsp;</p>
          <label htmlFor="reviewType">Section:</label>
          <select id="reviewType" value={reviewType} onChange={handleChange}>
            {Object.keys(cardChoices).map((k) => (
              <option key={k} value={k}>
                {cardChoices[k].label}
              </option>
            ))}
          </select>{" "}
          <Tip>
            Tip: remove cards you&rsquo;re not interested in by clicking the X
          </Tip>
          <p>&nbsp;</p>
          <div>
            {cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
          <p>&nbsp;</p>
        </div>
      );
    }
  }

CardList.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
};
