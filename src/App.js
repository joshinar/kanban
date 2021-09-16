import React from 'react';
import StateList from './components/states/StateList';
import AddMember from './components/members/AddMember';
import { AppProvider } from './context/Context';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <AddMember />
        <StateList />
      </div>
    </AppProvider>
  );
};

export default App;
