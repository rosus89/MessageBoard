import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import {reducer, initialState} from './store';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Board from './pages/board';
import Boards from './pages/boards';
import ProtectedRoutes from './hooks/Protected';
import jwtDecode from "jwt-decode";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    if (localStorage.token) {
      dispatch({type:"setUser", payload:jwtDecode(localStorage.token)})
      
    }
  }, [])


  
  return (
    
  <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes haveToken={localStorage.token ? true : false }/> }> 
            <Route path='/' element={<Boards state={state}/>}/>
          </Route>
          <Route path='/signin' element={<SignIn dispatch={dispatch}/>}/>
          <Route path='/signup' element={<SignUp dispatch={dispatch}/>}/>
          <Route path='/board' element={<Board state={state}/>}/>
        </Routes>
  </BrowserRouter>
  
  );
}

export default App;