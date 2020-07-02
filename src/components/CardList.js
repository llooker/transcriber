import React from 'react';
import { graphql } from 'react-apollo';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Card from './Card';
import styled from 'styled-components';
import ls from 'local-storage'

const Tip = styled.span`
  font-size: 11px;
`;

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {reviewType: (ls.get('reviewType') == null ? 'lookml' : ls.get('reviewType'))};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({reviewType: event.target.value});
    ls.set('reviewType', event.target.value)
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
          case 'pbl':
            includedCards = ['Client-Side Performance'];
          break;
          case 'lookml':
            includedCards = ['Development Process & Environment',
                             'Views',
                             'Explores',
                             'Models',
                             'Projects',
                             'Performance',
                             'Security',
                             'Database Connections',
                             'Data Pipeline'];
          break;
          case 'architecture':
            includedCards = ['Application Servers (On-Premise)',
                             'Application Database (On-Premise)',
                             'Monitoring'];
          break;
          case 'dataculture':
            includedCards = ['User Enablement',
                             'Content Management',
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
              <option value="pbl">PBL</option>
            </select> <Tip>Tip: remove cards you&rsquo;re not interested in by clicking the X</Tip>
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
    cards (id:["iqKnn74T" # Application Servers (On-Premise)
              ,"ioEzzokT" # Application Database (On-Premise)
              ,"cAB66Egi" # Monitoring

              ,"ceXzzbRi" # Development Process & Environment
              ,"TLKg5Gbc" # LookML Views
              ,"c8e5bg7i" # LookML Explores
              ,"iGB6RkXT" # LookML Models
              ,"T5KnzGqc" # LookML Projects
              ,"ikEzzkeT" # Performance
              ,"ckEzzkki" # Security
              ,"TkEzzk6c" # Database Connections
              ,"TbXzz78c" # Data Pipeline

              ,"c5KnnjRi" # User Enablement
              ,"TqKnnjnc" # Release Management
              ,"TXrjjBpc" # Content Management

              ,"inEpreBT" # Customer Success Top 10

              ,"cbbeybKi" # Client-Side Performance
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
