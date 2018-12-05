import React from "react";
import Rooms from "./rooms";
import Messages from "./messages";
import PostMessage from "./postmessage"


export default class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}



	render(){
		
		return (
			<div className="col-xs-12 col-md-6 col-md-offset-3">
				<Rooms />
				<Messages />
				<PostMessage />
			</div>
			)
		
	}
};



