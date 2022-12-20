import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import {reducer, initialState} from './store';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
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
            <Route path='/' element={<Boards state={state} dispatch={dispatch}/>}/>
          </Route>
          <Route path='/signin' element={<SignIn dispatch={dispatch}/>}/>
          <Route path='/signup' element={<SignUp dispatch={dispatch}/>}/>
        </Routes>
  </BrowserRouter>
  
  );
}

export default App;
