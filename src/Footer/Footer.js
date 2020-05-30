import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';




const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		root: {
	      flexGrow: 1,
	       bottom: 0,
	    },
		title: {
			flexgrow: 1,
		},
		button: {
			marginLeft: "auto"
		},
		appbar: {
			marginTop: "40px",
			backgroundColor: "#0C062E",
			flexgrow: 1
		}
	}))



const openSocialLink = (type) => {
	const type1 = type;

	return function(event) {
	console.log(type1);
	let link = "";
	switch(type1) {
		case "fb": link = "https://www.facebook.com/tarun.garg.1044";
		break;
		case "insta": link = "https://www.instagram.com/__._.tarun/";
		break;
		case "ldin": link ="https://www.linkedin.com/in/tarun-garg-99b197186/";
		break;
		case "git": link = "https://github.com/gtarun14111";
		break;
		default: link = "";
		}

		window.open(link, "_blank");
}
}


const Footer = () => {
	const classes = useStyles();
	return (
	<div className={classes.root}>
      <AppBar position="static" className = {classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            By, Tarun Garg
          </Typography>
	          <IconButton 
	          onClick={openSocialLink("insta")} 
	          color="secondary" 
	          className= {classes.button}>
	          	<InstagramIcon />
	          </IconButton>
	          <IconButton onClick={openSocialLink("ldin")} color="primary">
	          	<LinkedInIcon />
	          </IconButton>
	          <IconButton onClick={openSocialLink("fb")} color="primary">
	          	<FacebookIcon />
	          </IconButton>
	          <IconButton onClick={openSocialLink("git")} color="secondary"
	         style = {{ color: "grey"}}>
	          	<GitHubIcon />
	          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
		);
}

export default Footer;