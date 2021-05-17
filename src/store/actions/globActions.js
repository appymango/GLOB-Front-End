import types from '../types'

//Api
// import { NEXTApi } from '../../api/axios'



const setLoading = (status) =>
{
	return {
		type: types.SET_LOADING,
		payload: status
	}
}

export const setSplashLoading = (value) =>
{
	return {
		type: types.SET_SPLASH_LOADING,
		payload:value
	}
}


//Middleware
// export const submitContactForm = (fname, lname,	email, message) =>
// {
// 	const contactFormBody = {fname, lname,	email, message}

// 	return dispatch =>
// 	{
// 		dispatch(messageStatus(null))
// 		dispatch(setLoading(true))


// 		NEXTApi.post("/email", contactFormBody)
// 		.then(resp => 
// 		{
// 			dispatch(messageStatus("Success"))
// 			dispatch(setLoading(false))
// 		})
// 		.catch(err => 
// 		{
// 			dispatch(setLoading(false))
// 			dispatch(messageStatus("Error"))
// 		})
// 	}
// }