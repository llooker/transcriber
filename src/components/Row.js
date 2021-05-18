import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ls from 'local-storage'

const Text = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 15px;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
    background-color: rgb(245,245,245)
  }
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
          clicks: ls.get(this.name.text + '_clicks') || 0,
          value: ls.get(this.name.text + '_notes') || '',
          score: this.props.score
        };

      // Populate shadow JSON object on component load with values from localStorage
      if (!window.jsonForGoogleApps['cards'][this.card]) {
          window.jsonForGoogleApps['cards'][this.card] = {rows: {}}
      }
      if (ls.get(this.name.text + '_clicks') !== null) {
          window.jsonForGoogleApps['cards'][this.card].rows[this.name.text] = {"notes": ls.get(this.name.text + '_notes'), score: (ls.get(this.name.text + '_clicks')-1)};
      }
    }

    handleClick(e) {
        let score = this.state.clicks
        
        // Maintain global shadow JSON object based on user input
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
                if (score > 5) {
                    delete window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')]
                    ls.remove(this.name.text + '_clicks')
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
            ls.set(this.name.text + '_clicks',0)
        }
        // not all states have scores associated with them
        else if (score >= 1 && score <= 4) {
            this.props.updateScore(score,this.idx)
        }

        score = this.state.clicks + 1
        ls.set(this.name.text + '_clicks',score)
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        ls.set(this.name.text + '_notes',e.target.value)
        let el = e.target.parentElement.previousElementSibling;
        for (var key in window.jsonForGoogleApps['cards']) {
            if (window.jsonForGoogleApps['cards'].hasOwnProperty(key) && key === this.card) {
                window.jsonForGoogleApps['cards'][key].rows[el.getAttribute('data-text')].notes = e.target.value;
                break;
            }
        }
    }

    render() {
        let markdownLinks = /\[([^\]]+)\]\(([^)]+)\)/gi
        let htmlLinks = '<a target="_blank" href="$2">$1</a>';
    
        const clicks = this.state.clicks;
        let score = ""
        let notes = ""
        let text = <span dangerouslySetInnerHTML={{__html: this.name.text
            .replace(markdownLinks, htmlLinks)}}></span>

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
            notes = <Notes><textarea onChange={this.handleChange} value={this.state.value} cols="69" rows="3"/></Notes>
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