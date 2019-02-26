import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
`;

const Score0 = styled.span`
  border-radius: 25px;
  background-color: #FF4600;
  padding: 3px;
`;

const Score1 = styled.span`
  border-radius: 25px;
  background-color: #FF8C00;
  padding: 3px;
`;

const Score2 = styled.span`
  border-radius: 25px;
  background-color: #FFD300;
  padding: 3px;
`;

const Score3 = styled.span`
  border-radius: 25px;
  background-color: #E5FF00;
  padding: 3px;
`;

const Score4 = styled.span`
  border-radius: 25px;
  background-color: #9FFF00;
  padding: 3px;
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
          clicks: 0, 
          score: this.props.score
        };
    }

    handleClick(e) {
        let score = this.state.clicks
        
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
                window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')] = {"notes": existingNote, score: score};
                if (score > 6) {
                    delete window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')]
                }
                break;
            }
        }
        if (!exists) {
            let obj = {};
            obj[el.getAttribute('data-text')] = {"notes": "", score: score};
            window.jsonForGoogleApps['cards'][this.card] = {rows: obj};
        }

        // update the colour of the row and save the score:
        this.setState((state, props) => ({
            clicks: score
        }));
        // roll the state back to the beginning if you click through every state
        if (score>=6) {
            let score = 0;
            this.props.updateScore(score,this.idx)
            this.setState((state, props) => ({
                clicks: score
            }));
        }
        // not all states have scores associated with them
        else if (score >= 1 && score <= 4) {
            this.props.updateScore(score,this.idx)
        }

        score = this.state.clicks + 1
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
        let LookMLWords = /\b(access_filter|sql_always_where|required_access_grants|no-report-backend-errors|datagroups|datagroup_trigger|\._in_query|system__activity|i__looker|_dialect\._name|\$\{TABLE\}\.column|persist_with|persist_for|view_label|group_label|value_format|named_value_format|sql_trigger_value)/gi
        let styledLookMLWords = '<span class="lookml">$1</span>'
      
        let ports = /\b(1551|61616|22|443|587|9000|19999|9999)/gi
        let styledPorts = '<span class="port">$1</span>'
      
        let specialWords = /\b(mysql_secure_installation|utf8mb4_general_ci|utf8mb4)/gi
        let styledSpecialWords = '<span class="special">$1</span>'
    
        const clicks = this.state.clicks;
        let score = ""
        let notes = ""
        let text = <span dangerouslySetInnerHTML={{__html: this.name.text
            .replace(LookMLWords, styledLookMLWords)
            .replace(ports, styledPorts)
            .replace(specialWords, styledSpecialWords)}}></span>

        switch (clicks) {
            case 1:
                score = <Score0><span aria-label="yes" role="img">&nbsp;0️⃣</span></Score0>
            break;
            case 2:
                score = <Score1><span aria-label="no" role="img">&nbsp;1️⃣</span></Score1>
            break;
            case 3:
                score = <Score2><span aria-label="no" role="img">&nbsp;2️⃣</span></Score2>
            break;
            case 4:
                score = <Score3><span aria-label="no" role="img">&nbsp;3️⃣</span></Score3>
            break;
            case 5:
                score = <Score4><span aria-label="no" role="img">&nbsp;4️⃣</span></Score4>
            break;
            default:
        }

        if (clicks >= 1) {
            notes = <Notes><textarea onChange={this.handleChange} value={this.state.value} cols="78" rows="3"/></Notes>
        }

        if (clicks <= 5) {
            return (
                <div>
                    <Text data-text={this.name.text} onClick={this.handleClick} key={this.name.index}>
                    {score} {text}
                    </Text>
                    {notes}
                </div>
            );
        } else {
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