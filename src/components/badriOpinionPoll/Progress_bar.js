import React from 'react'
import "./styles.css"
const Progress_bar = ({bgcolor,progress,height,displayText}) => {
	
	const Parentdiv = {
		height: height,
	
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 50,
        marginLeft:-20
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:'15px',
		textAlign: 'right'
	}
	
	const progresstext = {
		
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv} className="progress-bar-parent">
	<div style={Childdiv}><span>{`${displayText}`}</span>
	</div>
    <span style={progresstext} className="progress-bar-percent-value">{`${progress}%`}</span>
	</div>
	)
}

export default Progress_bar;
