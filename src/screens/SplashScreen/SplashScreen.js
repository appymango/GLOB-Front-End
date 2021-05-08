import {useEffect} from 'react'

import Proptypes from 'prop-types'

//Css
// import classes from './SplashScreen.module.css'

//Components
import Logo from '../../components/Logo/Logo';



const SplashScreen = ({setIsSplashLoading}) =>
{

    useEffect(() => {
        setTimeout(() => {
            setIsSplashLoading(false)
        }, 3000);
        
    }, [])

  

    return(
        <div className="flex items-center justify-center h-screen ">
           <Logo />
        </div>
    )
};


SplashScreen.propTypes = 
{
    setIsSplashLoading: Proptypes.func.isRequired
}

export default SplashScreen;