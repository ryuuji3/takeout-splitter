import React from 'react';
import './App.css';
import store, { StoreContext as Store } from "./store";
import FoodSplitter from './components/FoodSplitter';

function App() {
  return (
    <Store.Provider value={store}>
      <div className="App">
        <FoodSplitter />
      </div>
    </Store.Provider>
  );
}

export default App;
