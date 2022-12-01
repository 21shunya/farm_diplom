import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { checkAuth } from './store/reducers/auth/ActionCreators';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
