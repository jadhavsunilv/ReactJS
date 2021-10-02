import logo from './logo.svg';
import './App.css';
import {Provider } from "react-redux"
import store from './reducers/store'
import { Container, Typography } from '@material-ui/core';
//import CustomerFrom from './components/customer/customerFrom';
import Order from './components/order';
function App() {
  return (
         <Provider store={store}>
         <Container maxWidth="md" >
         <Typography color="primary" gutterBottom variant="h2" align="center">Restaurant App</Typography>
             <Order></Order>
             </Container>
      </Provider>
  );
}

export default App;
