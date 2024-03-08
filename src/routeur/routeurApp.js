import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import { AddMovie } from '../components/AddMovie/AddMovie';
import { ListMovies } from '../components/ListMovies/ListMovies';

const routeurApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={ListMovies} path="/" exact={true} />
            <Route component={AddMovie} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default routeurApp;