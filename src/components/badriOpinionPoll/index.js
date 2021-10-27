import React, { Component } from 'react';
import "./styles.css"
import Progressbar from './Progress_bar';
class BadriOpinionPoll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            addClass:false,
            percetage:false
         }
      }
      toggle(opinion) {
          console.log(opinion)
          this.setState({addClass: opinion.id});
      }
      poll(){
        console.log(this)
        this.setState({percetage: true});
        for (var i = 0; i < this.props.opinionpoll.opinions.length; i++) {
            this.props.opinionpoll.opinions[i].percetage=Math.floor(Math.random() * 100) + 1 
        }

      }
      
    render() {
    
        return (
		<div className="badri-opinion-poll">
	            <label className="label">{this.props.opinionpoll.question.displayText}</label>
                <ul>
                {this.props.opinionpoll.opinions.map(opinion => (
        <li key={opinion.id}>{!this.state.percetage? <button  className={this.state.addClass==opinion.id?'select':''} onClick={this.toggle.bind(this,opinion)}>{opinion.displayText}</button>: <button className="progressbar"><Progressbar bgcolor="#0b86e5" displayText={opinion.displayText} progress={opinion.percetage}  height={30} /></button>}</li>
      ))}
                </ul>
                {!this.state.percetage? <button onClick={this.poll.bind(this)} className="badri-opinion-poll-button">Poll</button>:''}
		</div>
        )
    }
}
export default BadriOpinionPoll;