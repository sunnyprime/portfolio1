import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,

    },
    gridList: {
      width: 500,
      height: 450,
      
    },
    typography: {
      padding: theme.spacing(2),
    },
  }));
export default function Contact() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <div className="containers">
            <h1>CONTACT</h1>
            <hr />
            <br />
            <div className={classes.root}>
            <Grid  item lg={12} md={12} xs={24} style={{padding:'20px 20px'}}>
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>+918109612733</Typography>
      </Popover>
            <img src="https://img.icons8.com/color/96/000000/whatsapp.png" alt="watshapp" onClick={handleClick} />
            <a href="https://www.facebook.com/">
            <img src="https://img.icons8.com/fluent/96/000000/facebook-new.png" alt="facebook"/></a>
            <img src="https://img.icons8.com/fluent/96/000000/gmail.png" alt="gmail"/>
            <a href="https://twitter.com/explore">
            <img src="https://img.icons8.com/fluent/96/000000/twitter.png" alt="twitter"/>
            </a>
            </Grid>
            <Grid item lg={6} md={12} xs={24} style={{padding:'20px 20px'}}>
              <p>Address: Electronic City, Bangalore</p>
            <h3>Thank you For Visiting</h3>
            </Grid>
            
        </div>
        </div>
    )
}
