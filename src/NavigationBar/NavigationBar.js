import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TheDrawer from './Drawer/Drawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		root: {
	      flexGrow: 1,
	       position: "sticky",
	       top: 0,
	       zIndex: 100,
	       '&:hover': {
			   boxShadow: "0px 6px 25px -14px rgba(0,0,0,0.75)"
			},
	    },
		menuButton: {
			marginRight: theme.spacing(2),
		},

		title: {
			flexgrow: 1,
		},
		button: {
			marginLeft: "auto",
		}
	}))
const consoler = () => {
	console.log("it is working");
}

const NavigationBar = () => {
	const classes = useStyles();
	return (
	<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <TheDrawer />
          <Typography variant="h6" className={classes.title}>
            TheFakeBlog
          </Typography>
          
          <Button onClick={consoler} className = {classes.button} color="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home
          </Link></Button>
          <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
		);
}

export default NavigationBar;