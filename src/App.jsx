import { useEffect } from 'react';
import './App.css';
import MainLayout from './mainLayout/MainLayout';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  useEffect(() => {})

  return (
      <MainLayout />
  );
}

export default App;
