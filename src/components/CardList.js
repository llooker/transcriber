import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ data: { loading, error, cards } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
        {cards.map((name, index) => (
          <Card key={index} card={name} />
        ))}
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
};

export const UserQuery = gql`
  query UserQuery {
    cards (id:["TkEzzk6c"
              ,"TbXzz78c"
              ,"ckEzzkki"
              ,"c5KnnjRi"
              ,"iqKnn74T"
              ,"ioEzzokT"
              ,"ikEzzkeT"
              ,"cAB66Egi"
              ,"TqKnnjnc"
              ,"ceXzzbRi"
              ,"T5KnzGqc"
              ,"c8e5bg7i"
              ,"iGB6RkXT"
              ,"TXrjjBpc"]) {
      title
      rows {
        rowId
        text
      }
      statusCode
    }
  }
`;

export default graphql(UserQuery, {
  options: () => ({
    variables: {
    },
    pollInterval: 10000,
  }),
})(CardList);
