import React from 'react';
import { graphql } from 'react-apollo';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {reviewType: 'model'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({reviewType: event.target.value});
    this.forceUpdate();
  }

  render() {
    return (
      <Query query={UserQuery}>
      {({ loading, error, data }) => {

        if (loading) {
          return <p>Loading ...</p>;
        }
        if (error) {
          return <p>{error.message}</p>;
        }

        let cards = data.cards;
        let includedCards = [];

        switch (this.state.reviewType) {
          case 'model':
            includedCards = ['LookML Development'];
          break;
          case 'architecture':
            includedCards = ['Application Servers (On-Premise)',
                             'Application Database (On-Premise)',
                             'Monitoring',
                             'Data Security',
                             'Data Pipeline'];
          break;
          case 'dataculture':
            includedCards = ['User Enablement',
                             'Content Management']
          break;
          case 'performance':
            includedCards = ['Database Connections',
                             'Performance',
                             'Release Management']
          break;
          default:
        }

        cards = cards.filter(function(card, index, arr){
          return (includedCards.indexOf(card.title) !== -1);
        });

        return (
          <div>
            <label htmlFor="reviewType">Choose Review:</label>
            <select id="reviewType" value={this.state.reviewType} onChange={this.handleChange}>
              <option value="model">Model</option>
              <option value="architecture">On-Premise Architecture</option>
              <option value="dataculture">Data Culture</option>
              <option value="performance">Performance</option>
            </select>
            <div>
                {cards.map((card, index) => (
                  <Card key={card.title} card={card} />
                ))}
            </div>
          </div>
        )
      }}
      </Query>
    )
  }
};

CardList.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
};

export const UserQuery = gql`
  query UserQuery {
    cards (id:["TkEzzk6c" # Database Connections
              ,"TbXzz78c" # Data Pipeline
              ,"ckEzzkki" # Data Security
              ,"iqKnn74T" # Application Servers (On-Premise)
              ,"ioEzzokT" # Application Database (On-Premise)
              ,"ikEzzkeT" # Performance
              ,"cAB66Egi" # Monitoring
              ,"ceXzzbRi" # LookML Development
              ,"TqKnnjnc" # Release Management
#              ,"T5KnzGqc" # LookML Project Organization
#              ,"c8e5bg7i" # LookML Explore Organization
#              ,"iGB6RkXT" # LookML Model & View Organization
              ,"TXrjjBpc" # Content Management
              ,"c5KnnjRi" # User Enablement
              ]) {
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
    pollInterval: 1000000,
  }),
})(CardList);
