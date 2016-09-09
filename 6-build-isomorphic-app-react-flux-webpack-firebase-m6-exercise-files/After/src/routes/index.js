import React from 'react';
import App from '../components/App.jsx';
import Dogs from '../components/Dogs.jsx';
import Cats from '../components/Cats.jsx';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Dogs} />
    <Route path="dogs" handler={Dogs} />
    <Route path="cats" handler={Cats} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(<Root />, document.getElementById('container'));
});
