import React from "react";
import { connect } from "react-redux";
import { postMessage, getMessages } from "./actions";
import { bindActionCreators } from "redux";

class PostMessage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: ""
		}
		this.setText = this.setText.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

	}

	setText(e){
		this.setState({text: e.target.value})
	}

	sendMessage(e){
		e.preventDefault();
		this.props.postMessage(this.state.text, this.props.currRoom);
		// this.props.getMessages(this.props.currRoom);
		this.setState({text: ""});
	}

	render(){
				
		return (
			<ul className="list-group">
				<li className="list-group-item">
					<form onSubmit={this.sendMessage}>
						<input value={this.state.text} onChange={this.setText} type="text" />
					</form>
				</li>
			</ul>
			) 
	}
};

function mapStateToProps(state){
	return {currRoom: state.currentRoom}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({postMessage, getMessages}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostMessage);




