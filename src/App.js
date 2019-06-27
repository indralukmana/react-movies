import React, { useState } from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import ButtonAppBar from './components/AppBar';
import Nav from './components/Nav';
import MoreButton from './components/MoreButton';
import SocialMedia from './components/SocialMedia';

function App() {
  const [banner, setBanner] = useState({
    img_src:
      'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg',
    title: 'Pokémon Detective Pikachu',
    plot:
      'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.'
  });

  return (
    <div className="App">
      <CssBaseline />
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <ButtonAppBar />
        </Grid>
        <Grid container justify="center" item xs={12} md={8}>
          <img
            src={banner.img_src}
            alt="banner"
            style={{ height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Nav setBanner={setBanner} />
        </Grid>
        <Grid justify="center" container item xs={12} md={8}>
          <MoreButton />
        </Grid>
        <Grid container justify="center" item xs={12} md={8}>
          <SocialMedia />
        </Grid>
        <Grid container justify="center" item xs={12} md={8}>
          menu
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
