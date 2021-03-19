import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className="ui container">
   
    <NavBar />
     
    </div>
  );
}

const mapStateToPorps = (storeState) => {
  console.log(storeState, "------hi-----")
}


export default connect(mapStateToPorps)(App);
