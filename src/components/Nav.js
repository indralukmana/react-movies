import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Movies from './Movies';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1
  }
}));

export default function Nav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <Container className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="auto"
        centered>
        <Tab label="IN THEATERS" wrapped />
        <Tab label="COMING SOON" wrapped />
        <Tab label="CHARTS" wrapped />
        <Tab label="TV SERIES" wrapped />
        <Tab label="TRAILERS" wrapped />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabContainer dir={theme.direction}>
          <Movies
            query={{ movie: 'disney' }}
            setBanner={props.setBanner}
          />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Movies query={{ movie: 'marvel' }} />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Movies query={{ movie: 'batman' }} />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Movies query={{ movie: 'spiderman' }} />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Movies query={{ movie: 'doraemon' }} />
        </TabContainer>
      </SwipeableViews>
    </Container>
  );
}
