import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: "250px",
  },
  fullList: {
    width: 'auto',
  },
});

export default function TheDrawer({ email }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, open: open });
  };

  const list = () => (
  
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      <ListItem>
            <ListItemIcon><ArrowBackIcon /></ListItemIcon>
            <ListItemText primary="Back" />
      </ListItem>
      <Divider />
      </List>
      <List>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        {['thefakeblog'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>
      </List>
      <Divider />
      <List>
        {['Most Popular', 'See Trending', 'New'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
       <Divider />

      </List>
      {
      email === "gtarun14111@gmail.com" ? (
        <List>
          <Link  to="/blogAdder"  style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Add Blog"} />
          </ListItem>
             </Link>
      </List>
          ) : <div></div>
  } 
    </div>
    
  );

  const left = "open";

  return (
    <div>
          <IconButton  onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon  />
          </IconButton>
          <Drawer open={state[left]} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
    </div>
  );
}
