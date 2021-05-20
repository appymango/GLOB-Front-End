import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Home from './Tabs/Home';
import Favorites from './Tabs/Favorites';
import Documents from './Tabs/Documents';
import Contact from './Tabs/Contact';
import Scrollbar from '../../components/Scrollbar';


const HomeScreen = (props) =>
{

    const [tab, setTab] = useState(0)

    let tabUi
    switch (tab) 
    {
        case 0:
            tabUi = <Home />
            break;

        case 1:
            tabUi = <Favorites />
            break;

        case 2:
            tabUi = <Documents />
            break;

        case 3:
            tabUi = <Contact />
            break;
    
        default:
            break;
    }




    return(
        <div className="flex h-screen flex-col">

            <div className="flex bg-bg-image opacity-50 h-screen w-full fixed z-0 bg-no-repeat bg-cover 
            smd:opacity-70
            md:opacity-70
            lg:opacity-70
            xl:opacity-70
            2xl:opacity-70
            
            " />

            <Scrollbar>
            <div className="flex flex-col w-full z-10 pb-14">
                {tabUi}
            </div>
            </Scrollbar>
            
            

             <AppBar tab={tab} setTab={setTab}/>
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;