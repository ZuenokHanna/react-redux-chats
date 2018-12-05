import webService from "./service";

export function getRooms(){ /// Action creator
	return function(dispatch){
		webService.getData("http://localhost:6060/api")
		.then( rooms => {
			dispatch({
				type: "ALL_ROOMS",
				payload: rooms,
			});
		})
	}	
};


export function setRoom(id){
	return {
		type: "CURR_ROOM",
		payload: id,
	}
};

// let res = postMessage();
// if(type of res == "function"){
// 	reduxThunk(res, dispatch){
// 		res(dispatch);
// 	}
// }

export function postMessage(text, roomId){
	return function(dispatch){
		let obj = {
			text,
			roomId,
			userId: 12345,
		}
		webService.postData(`http://localhost:6060/api/addmessage/`, JSON.stringify(obj))
		.then( response => {
			console.log(response);
			webService.getData(`http://localhost:6060/api/${roomId}/messages`)
			.then( msgs => {
				dispatch({
					type: "MSGS",
					payload: msgs,
				});
			})


		});
	}
}

export function getMessages(roomId){
	let getMsgPromise = webService.getData(`http://localhost:6060/api/${roomId}/messages`);
	return {
		type:"MSGS",
		payload: getMsgPromise,
	}
}


