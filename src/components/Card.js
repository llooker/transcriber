import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Row = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
`;

function Card({ card }) {
  let LookMLWords = /\b(access_filter|sql_always_where|required_access_grants|no-report-backend-errors|datagroup_trigger|\._in_query|system__activity|i__looker|_dialect\._name|\$\{TABLE\}\.column|persist_for|label|view_label|group_label|description|value_format|named_value_format|sql_trigger_value)/gi
  let styledLookMLWords = '<span class="lookml">$1</span>';

  let ports = /\b(1551|61616|22|443|587|9000|19999|9999)/gi
  let styledPorts = '<span class="port">$1</span>'

  let specialWords = /\b(mysql_secure_installation|utf8mb4_general_ci|utf8mb4)/gi
  let styledSpecialWords = '<span class="special">$1</span>'

  return (
    <Div>
      <Container>
        <Title>{card.title}</Title>
        {card.rows.map((name, index) => (
          <Row key={index} dangerouslySetInnerHTML={{__html: name.text
            .replace(LookMLWords, styledLookMLWords)
            .replace(ports, styledPorts)
            .replace(specialWords, styledSpecialWords)
          }}>
          
          </Row>
        ))}
      </Container>
    </Div>
  );
}

Card.propTypes = {
  card: PropTypes.any.isRequired, // eslint-disable-line
};

export default Card;