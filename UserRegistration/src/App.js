import logo from './logo.svg';
import { Container } from "@material-ui/core"
import './App.css';
import {store } from "./actions/store"
import {Provider } from "react-redux"
import Dcandidates from './components/Dcandidates';

function App() {
  
  return (
    <Provider store={store}>
      <Container maxWidth="lg"> 
            <Dcandidates></Dcandidates>
      </Container>
    </Provider>
    
  );
}

export default App;
