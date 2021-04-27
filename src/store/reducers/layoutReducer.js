import actionTypes from '../types'
import {HYDRATE} from 'next-redux-wrapper';

const initialState = 
{
	sidebarIsOpen: false,
	device: "desktop",
	messageStatus: null,
	link:null,
	footerLink:false,
	isLoading:false
}


const layoutReducer = (state = initialState, action) =>
{
    switch (action.type) 
    {
		case HYDRATE:
			return {...state, ...action.payload};
			
		case actionTypes.GET_DEVICE:

			let device;
			const deviceWidth = action.payload

			//iPad Portrait
			if(deviceWidth >= 768 && deviceWidth <= 1024)
			{
				device = "ipad portrait"
			}

			//Mobile / Tablet Portrait
			if(deviceWidth >= 320 && deviceWidth <= 767)
			{
				device = "mobile portrait"
			}


			return {...state, device: device}


		case actionTypes.SET_LOADING:
			return {...state , isLoading: action.payload}

		
		default:
			return state;
	}

}

export default layoutReducer;