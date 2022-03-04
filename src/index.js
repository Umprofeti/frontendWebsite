import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, InMemoryCache} from '@apollo/client';
import {  HashRouter } from 'react-router-dom';
import { Fomulario } from './Components/NewsLetter/Fomulario';
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_DOMAIN}api`,
  cache: new InMemoryCache()
})
ReactDOM.render( 
    <HashRouter forceRefresh={true}>
        {!sessionStorage.getItem("newsletter")?<Fomulario/>: null}
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </HashRouter>,
  document.getElementById('root')
);

