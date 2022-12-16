import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoutes = ({haveToken}) => {
  
return (
    haveToken ? <Outlet/> : <Navigate to='/signin'/>
  )
}
export default ProtectedRoutes