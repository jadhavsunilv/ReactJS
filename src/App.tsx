import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import Login from './components/login/Login';
import CustomerForm from './components/customer/CustomerForm';
import { Provider } from 'react-redux';
import store from './state/store/store';
import Order from './components/order/index';
import { BrowserRouter ,Link,NavLink,Switch,Route } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
       <Container maxWidth="md" >
                <Typography color="primary" gutterBottom variant="h2" align="center">Restaurant App</Typography>
                
                 <Switch>
                  <Route  path="/login" component ={Login}></Route>
                  <Route exact path="/customer" component ={CustomerForm}></Route>
                  <Route exact path="/order" component ={Order}></Route>
                  <Route  path="/" component ={Login}></Route>
                </Switch>
          

          </Container>
     </Provider>
  );
}

export default App;
