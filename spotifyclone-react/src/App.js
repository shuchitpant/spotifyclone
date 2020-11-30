import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react'
import { GetTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer'


const spotify = new SpotifyWebApi();

function App() {

  const [{ token, user }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    
    //code
    const hash = GetTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token

      })
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('6XNJPTG7sbzoITztzOy5Fe').then(response => 
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })

        )

    }    

  }, []);


  return (
    <div className="app">
      
      {
        //I have here used a ternery operator
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

      {/* BEM NAMING */}
      

    </div>
  );
}

export default App;
