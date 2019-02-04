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

const NotApplicableText = styled.div`
  border-bottom: 1px solid #e6ecf0;
  background-color: #EEE;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: line-through;
`;

const Notes = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
`;

const Score = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
`;

class Row extends React.Component {

    constructor(props) {
      super(props);
      this.idx = this.props.idx
      this.name = this.props.name;
      this.card = this.props.card;
      this.updateScore = this.props.updateScore;
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
          textClicks: 0, 
          score: this.props.score
        };
    }

    handleClick(e) {
        // update the colour of the row:
        let newValue = this.state.textClicks + 1
        this.setState((state, props) => ({
            textClicks: newValue
        }));
        if (this.state.textClicks>=3) {
            let newValue = 0;
            this.setState((state, props) => ({
                textClicks: newValue
            }));
        }

        // maintain a global shadow JSON object to store the user input
        let el = e.target;
        if (!el.getAttribute('data-text')) {
            el = e.target.parentElement;
        }
        for (var key in window.jsonForGoogleApps['cards']) {
            if (window.jsonForGoogleApps['cards'].hasOwnProperty(key) && key === this.card) {
                var exists = true;
                var existingNote = "";
                if (window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')]) {
                    existingNote = window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')].notes
                }
                window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')] = {"notes": existingNote, state: newValue};
                if (newValue > 3) {
                    delete window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')]
                }
                break;
            }
        }
        if (!exists) {
            let obj = {};
            obj[el.getAttribute('data-text')] = {"notes": "", state: newValue};
            window.jsonForGoogleApps['cards'][this.card] = {rows: obj};
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        let el = e.target.parentElement.previousElementSibling;
        for (var key in window.jsonForGoogleApps['cards']) {
            if (window.jsonForGoogleApps['cards'].hasOwnProperty(key) && key === this.card) {
                window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')].notes = e.target.value;
                break;
            }
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
        let text = <span dangerouslySetInnerHTML={{__html: this.name.text
            .replace(LookMLWords, styledLookMLWords)
            .replace(ports, styledPorts)
            .replace(specialWords, styledSpecialWords)}}></span>

        let notes = <Notes><textarea onChange={this.handleChange} value={this.state.value} cols="90" rows="3"/></Notes>

        let score = <Score><input type="number" pattern="[0-9]*" onInput={(e)=>this.props.updateScore(e.target.value,this.idx)} value={this.state.score}/> Score: 0-10</Score>
        
        if (textClicks===0) {
            return (
                <div>
                    <Text data-text={this.name.text} onClick={this.handleClick} key={this.name.index}>
                    {text}
                    </Text>
                    {score}
                </div>
            );
        } else if (textClicks===1) {
            return (
                <div>
                    <GreenText data-text={this.name.text} onClick={this.handleClick} key={this.name.index}>
                        <span aria-label="yes" role="img">👍</span>{text}
                    </GreenText>
                    {notes}
                </div>
            );
        } else if (textClicks===2) {
            return (
                <div>
                    <RedText data-text={this.name.text} onClick={this.handleClick} key={this.name.index}>
                        <span aria-label="no" role="img">👎</span>{text}
                    </RedText>
                    {notes}
                </div>
            );    
        } else if (textClicks===3) {
            return (
                <div>
                    <NotApplicableText data-text={this.name.text} onClick={this.handleClick} key={this.name.index}>
                        {text}
                    </NotApplicableText>
                    {notes}
                </div>
            );    
        }
    }
}

Row.propTypes = {
    name: PropTypes.any.isRequired, // eslint-disable-line
};
  
export default Row;