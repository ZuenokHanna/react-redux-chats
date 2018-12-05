import {combineReducers} from "redux";
import roomsReducer from "./reducers/roomsreducer";
import msgReducer from "./reducers/msgreducer";
import currRoomReducer from "./reducers/currroomreducer";

let rootReducer = combineReducers({
	rooms: roomsReducer, /// []
	messages: msgReducer,
	currentRoom: currRoomReducer,
});

export default rootReducer;