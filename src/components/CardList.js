import React from 'react';
import { graphql } from 'react-apollo';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {reviewType: 'cs'};
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
          return <div><p>&nbsp;</p><p>Loading cards from Guru...</p><p>&nbsp;</p></div>;
        }
        if (error) {
          return <p>{error.message}</p>;
        }

        let cards = data.cards;
        let includedCards = [];

        switch (this.state.reviewType) {
          case 'cs':
            includedCards = ['Top 10 Behaviors and Characteristics of Successful Customers'];
          break;
          case 'lookml':
            includedCards = ['LookML Development',
                             'LookML Project Organization',
                             'LookML Explore Organization',
                             'Comprehensive Project, Model & View Organization'];
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
          <div><p>&nbsp;</p>
            <label htmlFor="reviewType">Section:</label>
            <select id="reviewType" value={this.state.reviewType} onChange={this.handleChange}>
              <option value="cs">Customer Success</option>
              <option value="lookml">LookML</option>
              <option value="architecture">On-Premise Architecture</option>
              <option value="dataculture">Data Culture</option>
              <option value="performance">Performance</option>
            </select>
            <p>&nbsp;</p>
            <div>
                {cards.map((card, index) => (
                  <Card key={card.title} card={card} />
                ))}
            </div>
            <p>&nbsp;</p>
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
              ,"T5KnzGqc" # LookML Project Organization
              ,"c8e5bg7i" # LookML Explore Organization
              ,"iGB6RkXT" # LookML Project, Model & View Organization
              ,"TXrjjBpc" # Content Management
              ,"c5KnnjRi" # User Enablement
              ,"inEpreBT" # Customer Success Top 10
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
