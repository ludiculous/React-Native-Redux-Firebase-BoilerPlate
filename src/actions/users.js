export const ADD_USER = 'ADD_USER'

export function addUser(userData){
	return{
		type: ADD_USER,
		payload: userData
	}
}