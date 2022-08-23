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

import ContextProvider from "./contexts/context";


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
        <SiteHeader />
        <ContextProvider>
          {" "}
          <Switch>

            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />


            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/movies/nowPlaying" component={NowPlayingMoviesPage} />
            <Route exact path="/movies/popular" component={PopularMoviesPage} />
            <Route exact path="/movies/topRated" component={TopRatedMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/playlist" component={PlaylistMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />

            <Route exact path="/persons/likes" component={LikesPersonsPage} />
            <Route exact path="/persons/:id" component={PersonPage} />
            <Route path="/persons" component={PersonsPage} />

            {/* public route */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </ContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));