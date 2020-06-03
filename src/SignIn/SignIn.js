import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="signin" color="inherit" href="https://material-ui.com/">
        thefakeblog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ getEmail,
  getPassword, 
  checkUser,
  actionUpdates }) {
  const { isProcessing, message, isSignedIn } = actionUpdates;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
  setOpen(true);
};

  const handleClose = () => {
  setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={function(event) {
              getEmail(event);
            }
          }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={getPassword}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {function(){
              checkUser();
              handleClickOpen();
            }}
          >
            Sign In
          </Button>
            
                  <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableBackdropClick = "false"
                disableEscapeKeyDown = {false}
                >
                <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
                
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                  { isProcessing ? <CircularProgress /> :
                    <div>
                    {message}
                    </div>
                  }
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    
                    {
                      isSignedIn ? 
                  <Link to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}>
                    Click me to continue
                     </Link>
                      :
                      <div>
                      Okay
                      </div>
                   }
                  </Button>
                </DialogActions>
              
              </Dialog>
                
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}




          // <FormControlLabel
          //   control={<Checkbox value="remember" color="primary" />}
          //   label="Remember me"
          // />
          // <Grid item xs>
          //     <Link href="#" variant="body2">
          //       Forgot password?
          //     </Link>
          //   </Grid>
          // import Grid from '@material-ui/core/Grid';
          // import Checkbox from '@material-ui/core/Checkbox';
          // import FormControlLabel from '@material-ui/core/FormControlLabel';

