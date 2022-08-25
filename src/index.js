import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage"; // A new page of now playing movies
import PopularMoviesPage from "./pages/popularMoviesPage"; // A new page of popular movies
import TopRatedMoviesPage from "./pages/topRatedMoviesPage" // A new page of top rated movies
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PlaylistMoviesPage from "./pages/playlistMoviesPage";

import PersonPage from "./pages/personDetailsPage"
import PersonsPage from "./pages/personsPage"; // A new page of popular persons
import LikesPersonsPage from "./pages/likesPersonsPage"

import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";

import ContextProvider from "./contexts/context";
import PrivateRoute from "./route/privateRoute";
import AuthProvider from "./contexts/authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SiteHeader />
          <ContextProvider>
            {" "}
            <Switch>

              <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
              <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />


              <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <PrivateRoute exact path="/movies/nowPlaying" component={NowPlayingMoviesPage} />
              <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
              <PrivateRoute exact path="/movies/topRated" component={TopRatedMoviesPage} />
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/movies/playlist" component={PlaylistMoviesPage} />
              <PrivateRoute path="/movies/:id" component={MoviePage} />

              <PrivateRoute exact path="/persons/likes" component={LikesPersonsPage} />
              <PrivateRoute exact path="/persons/:id" component={PersonPage} />
              <PrivateRoute path="/persons" component={PersonsPage} />

              {/* public route */}
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </ContextProvider>
        </AuthProvider>

      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));