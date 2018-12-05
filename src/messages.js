import React from "react";
import { connect } from "react-redux";
import { getMessages } from "./actions";
import { bindActionCreators } from "redux";

class Messages extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}

	}

	// componentDidMount(){
	// 	if(this.props.currentRoom){
	// 		this.props.getMessages(this.props.currentRoom);
	// 	}	
	// }

	// componentWillReceiveProps(nextProps){
	// 	this.props.getMessages(nextProps.currentRoom);
	// }

	render(){
		console.log("Messages:", this.props.messages);
		let messages;
		if(this.props.messages){
			messages = this.props.messages.map( (msg, index) => {
				return (
					<li 
						className="list-group-item" 
						key={index}>
						<p className="list-group-item-text">
							{msg.text}
						</p>
					</li>
					)
			} )
		}
		return (
			<ul className="list-group">
				<li className="list-group-item">
					<h3 className="list-group-item-heading">Messages</h3>
				</li>
				{messages}
			</ul>
			) 
	}
};

function mapStateToProps(state){
	return {messages: state.messages}
};

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({getMessages}, dispatch)
// }

export default connect(mapStateToProps)(Messages);




