import React, { useReducer, useContext } from "react";
import { graphql } from "react-apollo";
import { Query } from "react-apollo";
import { UserQuery, cardChoices } from "./Constants";
import PropTypes from "prop-types";
import Card from "./Card";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Tip = styled.span`
  font-size: 11px;
`;

const CardList = () => {
  const { reviewType, setReviewType, setupState } = useContext(AppContext);
  // const [_ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleChange = (e) => {
    setReviewType(e.target.value);
    // forceUpdate(); // necessary?
  };


  return (
    <Query query={UserQuery}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div>
              <p>&nbsp;</p>
              <p>Loading cards from Guru...</p>
              <p>&nbsp;</p>
            </div>
          );
        }
        if (error) {
          return <p>{error.message}</p>;
        }
        let includedCards = cardChoices[reviewType]?.included || [];
        let cards = data.cards.filter(
          (c) => includedCards.indexOf(c.title) !== -1
        );
        setupState(cards);
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
      }}
    </Query>
  );
};

CardList.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
};

export default graphql(UserQuery, {
  options: () => ({
    variables: {},
    pollInterval: 1000000,
  }),
})(CardList);
