import React, { useContext } from 'react'
import { AppContext } from '../Helpers/Contexts';



function MainMenu() {
    const { setAppState } = useContext(AppContext);

    return (
        <div className='mainMenu'>
            <h1>Main Menu</h1> 
            <button onClick={ () => { setAppState('canvas') } }>Click to Get Started</button>
        </div>
    )
}

export default MainMenu