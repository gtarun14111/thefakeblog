import { GET_USER } from './constants';

export const user = (user) => ({
	type: "GET_USER",
	payload: user
});