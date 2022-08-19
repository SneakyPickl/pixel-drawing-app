import './App.css';
import React, { useState } from 'react';
import MainMenu from './AppStates/MainMenu';
import CanvasScreen from './AppStates/CanvasScreen';

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
