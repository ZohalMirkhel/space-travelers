import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import Mission from '../components/Mission';

function App() {
  return (
    <Provider store={store}>
      <Mission />
    </Provider>
  );
}

export default App;
