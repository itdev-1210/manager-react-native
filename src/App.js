import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBoPLMmhdXYsZ3pwq5HdXGm4I2kK6ZPqzU',
      authDomain: 'manager-93667.firebaseapp.com',
      databaseURL: 'https://manager-93667.firebaseio.com',
      projectId: 'manager-93667',
      storageBucket: 'manager-93667.appspot.com',
      messagingSenderId: '308729063763'
  };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
