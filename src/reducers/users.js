import {
	ADD_USER
} from '../actions/users'

const intialState = {
	users:[]
}

export default function reducer(state = intialState, action){
	let list

	console.log(action)
	switch(action.type){
		case ADD_USER:
		list = state.users.concat([action.payload])
		return{
			...state,
			users:list
		}
		default:
			return state
	}

}