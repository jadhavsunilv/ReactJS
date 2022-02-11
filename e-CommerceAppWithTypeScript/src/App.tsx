import React ,{ useEffect}from 'react';
import Homepage from './pages/Homepage';
import HomepageLayout from './layouts/HomepageLayouts';
import {BrowserRouter as Router, Routes,} from 'react-router-dom';
import {Route} from 'react-router-dom'
import './default.scss';
import MainLayout from './layouts/MainLayout';
import Registrarion from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import { auth, handleUserProfile } from './firebase/utils';
import { connect, Provider} from 'react-redux';
import Dashboard from './pages/Dashboard';
import { setCurrentUser } from './Redux/User/userAction';
import store from './Redux/createStore';
import WithAuth from './hoc/withAuth';
import AdminToolbar from './components/AdminToolbar';
import Admin from './pages/Admin';
import AdminLayout from './layouts/AdminLayout';
import Search from './pages/Search';
import WithAdminAuth from './hoc/withAdminAuth';
import Cart from './pages/Cart';
import DashboardLayout from './layouts/DashboardLayout';

const App = (props:any)=> {
  const { setCurrentUser} = props;
    useEffect(()=>{
    const authListener=  auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
          const userRef = await handleUserProfile(userAuth);
          userRef?.onSnapshot(snapshot=>{
             setCurrentUser({
              currentUser:{
                id:snapshot.id,
                ...snapshot.data()
              }
            })
          })
        }
        setCurrentUser(userAuth)
      })
      return () => {
        authListener();
      };
    }, [setCurrentUser]);
  return (
  <Provider store={store}>
     <div className="App">
  <Router>
  <AdminToolbar/>
    <Routes>
      <Route path="/" element ={
          <HomepageLayout >
             <Homepage/>
          </HomepageLayout> }/>
      <Route path="/registration" element={
         <MainLayout>
             <Registrarion/>
         </MainLayout> }/>    
      <Route path="/login" element={
         <MainLayout >
             <Login/>
          </MainLayout> }/>    
      <Route path="/recovery" element={
          <MainLayout >
             <Recovery/>
          </MainLayout> }/>    
      <Route path="/dashbord" element={
         <WithAuth>
           <DashboardLayout >
             <Dashboard/>
           </DashboardLayout> 
         </WithAuth> }/>    
     <Route path="/admin" element={
         <WithAdminAuth>
           <AdminLayout>
            <Admin/>
          </AdminLayout>
         </WithAdminAuth>}/> 
     <Route path="/search" element={
         <MainLayout>
            <Search/>
         </MainLayout>}/> 
     <Route path="/search/:filterType" element={
         <MainLayout>
            <Search/>
         </MainLayout>}/>     
     <Route path="/cart" element={
         <MainLayout>
            <Cart/>
         </MainLayout>}/>   
      </Routes>
      </Router>    
    </div>
    </Provider>
  );
}
const mapStateToProps = (user:any) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch:any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default  connect(mapStateToProps, mapDispatchToProps)(App);
