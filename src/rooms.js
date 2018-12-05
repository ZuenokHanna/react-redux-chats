import React from "react";
import { connect } from "react-redux";
import { getRooms, getMessages, setRoom } from "./actions";
import { bindActionCreators } from "redux";

class Rooms extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}

	}

	componentDidMount(){
		this.props.getRooms();
	}

	componentDidUpdate(){
		console.log("Updated!");
	}

	render(){
		console.log("From render", this.props.allRooms);
		let rooms;
		if(this.props.allRooms){
			rooms = this.props.allRooms.map( room => {
				return (
					<li 
						className="list-group-item" 
						key={room.id}
						onClick={() => {
							this.props.getMessages(room.id);
							this.props.setRoom(room.id);

						}}

						>
						<p className="list-group-item-text">
							{room.name}
						</p>
					</li>
					)
			} )
		}
		return (
			<ul className="list-group">
				<li className="list-group-item">
					<h3 className="list-group-item-heading">Rooms</h3>
				</li>
				{rooms}
			</ul>
			) 
	}
};

function mapStateToProps(state){
	return {allRooms: state.rooms}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({getRooms, getMessages, setRoom}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);




