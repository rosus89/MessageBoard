function setRequest(token, method) {
  let request =  { Authorization : `Bearer ${token}`,
                      method: method,
                      headers: { 'Content-Type': 'application/json' },}
  if (token) {     
    return request
  } else {
    delete request.Authorization;
    return request
  }
}
const APIhost = 'http://localhost:3001/'

export async function apiAuth(route,dispatch, sentData, ){
  let token =  localStorage.getItem('token');
  let response = await fetch(APIhost+route, {...setRequest(token, 'POST'), body:JSON.stringify(sentData)})
  let data = await response.json();
    await dispatch({type:"setUser", payload:data})
    localStorage.setItem("token", data.token);
  }


export async function apiBoard(route,dispatch, sentData, ){
  let token =  localStorage.getItem('token');
  let response = await fetch(APIhost+route, {...setRequest(token, 'POST'), body:JSON.stringify(sentData)})
  let data = await response.json();
    dispatch({type:{route}, payload:data})
  }
  
export async function apiPost(route, sentData ){
  let token =  localStorage.getItem('token');
  let response = await fetch(APIhost+route, {...setRequest(token, 'POST'), body:JSON.stringify(sentData)})
  let data = await response.json();
  return data
    // dispatch({type:{route}, payload:data})
  }
export async function apiGetPosts(route, sentData ){
  let token =  localStorage.getItem('token');
  let response = await fetch(APIhost+route, {...setRequest(token, 'POST'), body:JSON.stringify(sentData)})
  let data = await response.json();
  return data
    // dispatch({type:{route}, payload:data})
  }
  
export async function apiGetBoards(route){
  let token =  localStorage.getItem('token');
  let response = await fetch(APIhost+route, {...setRequest(token, 'GET')})
  let data = await response.json();
    return ({route,data})
}
  
