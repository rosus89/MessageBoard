function setToken(token) {
  let request =  { Authorization : `Bearer ${token}`,
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },}
  if (token) {     
    return request
  } else {
    delete request.Authorization;
    return request
  }
}

export async function apiAuth(route,dispatch, sentData, ){
  let token =  localStorage.getItem('token');
  let response = await fetch('http://localhost:3001/user/'+route, {...setToken(token), body:JSON.stringify(sentData)})
  let data = await response.json();
    await dispatch({type:"setUser", payload:data})
    localStorage.setItem("token", data.token);
  }



