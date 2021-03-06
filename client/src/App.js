import Home from './pages/Home'
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Nav from './components/Nav';
import Profile from "./pages/Profile";
import Results from "./pages/Results"
import {AddButton}from './components/AddButton'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import VenueResults from './pages/VenueResult'
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql' 

});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it existsauthLink.concat(httpLink),
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  
});


function App(props) {
   
		
    return(
      <ApolloProvider client={client}>
        <Router>
              <Nav />
            <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
           
              <Route exact path="/adder" element={AddButton} >
                <AddButton />
              </Route>
              <Route exact path="/profile" element={Profile} >
                <Profile />
              </Route>
              <Route exact path="/results" render={(data) =>  <Results  {...data}/>}>
                </Route>
              <Route exact path="/venueresults" render={(data) =>  <VenueResults  {...data}/>}>

           
              </Route>
            </Switch>
          </Router>
      </ApolloProvider>
  );
}

export default App;
