import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";


import Register from "../Authentification/Register";
import Login from "../Authentification/Login";
import Profile from "../Profile/profile"
import Advice from "../advices/advices"
import Accueil from "../accueil/Accueil"
import CardDesc from "../Card"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      /************************************************************************************/
      
      /************************************************************************************/
      const getCurrentUser = async () => {
        await axios
          .get(`http://localhost:5001/users/${decoded.id}`)
          .then((resp) => this.setState({ currentUser: resp.data }));
      };
      getCurrentUser();
      /************************************************************************************/ 
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Profil" component={Profile}/>
          <Route exact path="/advices">
            <Advice/>
          </Route>
          <Route exact path="/accueil">
            <Accueil/>
          </Route>
          <Route exact path="/card">
            <CardDesc/>
          </Route>
          
          
        </Switch>
      </div>
    );
  }
}
export default MainPage;
