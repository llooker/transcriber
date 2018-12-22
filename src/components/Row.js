import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
`;

const GreenText = styled.div`
  border-bottom: 1px solid #e6ecf0;
  background-color: #90EE90;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
`;

const RedText = styled.div`
  border-bottom: 1px solid #e6ecf0;
  background-color: #F08080;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
`;

class Row extends React.Component {

    constructor({name}) {
      super();
      this.name = name;
      this.handleClick = this.handleClick.bind(this);
      this.state = {textClicks: 0};
    }

    handleClick() {
        this.setState((state, props) => ({
            textClicks: state.textClicks + 1
        }));
        if (this.state.textClicks>=2) {
            this.setState((state, props) => ({
                textClicks: 0
            }));
        }
}
    
    render() {
        let LookMLWords = /\b(access_filter|sql_always_where|required_access_grants|no-report-backend-errors|datagroup_trigger|\._in_query|system__activity|i__looker|_dialect\._name|\$\{TABLE\}\.column|persist_for|label|view_label|group_label|description|value_format|named_value_format|sql_trigger_value)/gi
        let styledLookMLWords = '<span class="lookml">$1</span>';
      
        let ports = /\b(1551|61616|22|443|587|9000|19999|9999)/gi
        let styledPorts = '<span class="port">$1</span>'
      
        let specialWords = /\b(mysql_secure_installation|utf8mb4_general_ci|utf8mb4)/gi
        let styledSpecialWords = '<span class="special">$1</span>'
    
        const textClicks = this.state.textClicks;
        let text = this.name.text
        .replace(LookMLWords, styledLookMLWords)
        .replace(ports, styledPorts)
        .replace(specialWords, styledSpecialWords);
        
        if (textClicks===0) {
            return (
                <Text onClick={this.handleClick} key={this.name.index}>
                {text}
                </Text>
            );
        } else if (textClicks===1) {
            return (
                <GreenText onClick={this.handleClick} key={this.name.index}>
                <span aria-label="yes" role="img">👍</span>{text}
                </GreenText>
            );    
        } else if (textClicks===2) {
            return (
                <RedText onClick={this.handleClick} key={this.name.index}>
                <span aria-label="no" role="img">👎</span>{text}
                </RedText>
            );    
        }
    }
}

Row.propTypes = {
    name: PropTypes.any.isRequired, // eslint-disable-line
};
  
export default Row;