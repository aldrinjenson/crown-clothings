import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Homepage from "./pages/homepge/homepage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    // auth.onAuthStateChanged((user) => {   // here, i think the user is the new user-object-data recieved when a new user signs up with google
    // we are subscribing to the firebase auth
    // this.setState({ currentUser: user }); //This connection is always open as long as the application in mounted
    // console.log(user); // whenver some changes happen, firebase will immediately send a different user object and we will be able to get it immediately as well
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
        // console.log(this.state.currentUser)
      } else {
        this.setState({ currentUser: userAuth }); // like currentUser : null, since now the userObject will be giving a null value only
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
