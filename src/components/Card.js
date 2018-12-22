import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row';

const Div = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
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
  line-height: 20px;
`;

class Card extends React.Component {

  constructor({card}) {
    super();
    this.card = card;
  }
  
  render() {
    return (
      <Div>
        <Container>
          <Title>{this.card.title}</Title>
          {this.card.rows.map((name, index) => (
            <Row key={index} name={name}/>
          ))}
        </Container>
      </Div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.any.isRequired, // eslint-disable-line
};

export default Card;