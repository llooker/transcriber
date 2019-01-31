import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row';

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
`

class Card extends React.Component {

  constructor({card}) {
    super();
    this.card = card;
    this.state = {
      isHidden: true,
      isRemoved: false,
    }
    this.toggleHidden = this.toggleHidden.bind(this);
    this.remove = this.remove.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  remove() {
    this.setState({
      isRemoved: true,
      isHidden: true
    })
  }
  
  render() {
    let title = this.card.title;
    if (!this.state.isHidden) {
      return (
        <Div>
          <Container>
            <Title onClick={this.toggleHidden}><input type="checkbox" readOnly checked={!this.state.isHidden}/> {title}</Title>
            {this.card.rows.map((name, index) => (
              <Row key={index} card={title} name={name}/>
            ))}
          </Container>
        </Div>
      );
    }
    else if (!this.state.isRemoved) {
      return (
        <Div>
          <Container>
            <Remove onClick={this.remove} alt="Remove">x</Remove>
            <Title onClick={this.toggleHidden}><input type="checkbox" readOnly checked={!this.state.isHidden}/> {title}</Title>
          </Container>
        </Div>
      );
    }
    else {
      return (
        <Div></Div>
      )
    }
  }
}

Card.propTypes = {
  card: PropTypes.any.isRequired, // eslint-disable-line
};

export default Card;