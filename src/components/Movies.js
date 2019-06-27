import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '150%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Movies(props) {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const { query, setBanner } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://www.omdbapi.com/?apikey=f32041ec&s=${query.movie}`
        // 'http://www.omdbapi.com/?apikey=f32041ec&s=pokemon&type=movie'
      );
      const data = result.data.Search;
      console.log(data.filter((el, index) => data.indexOf(el)));

      setData(data.filter(el => data.indexOf(el)));
    };

    fetchData();
  }, [query.movie]);

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.map(movie => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  //   image="https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
                  image={movie.Poster}
                  title="Image title"
                  height="100%"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2">
                    {movie.Title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => {
                      console.log(movie);
                      setBanner({
                        img_src: movie.Poster,
                        title: '',
                        plot: ''
                      });
                    }}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
