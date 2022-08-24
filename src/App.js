import './CSS/App.css';
import React, { useState } from 'react';
import MainMenu from './Components/MainMenu';
import CanvasScreen from './Components/CanvasScreen';

import { AppContext } from './Helpers/Contexts';

function App() {
  const [appState, setAppState] = useState('menu');
  return (
    <div className='App'>
      <AppContext.Provider value={ { appState, setAppState } }>
        { appState === 'menu' && <MainMenu /> }
        { appState === 'canvas' && <CanvasScreen /> }
      </AppContext.Provider>
    </div>
  );
}

export default App;
