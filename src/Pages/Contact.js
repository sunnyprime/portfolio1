import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
  }));
export default function Contact() {
    const classes = useStyles();
    return (
        <div className="containers">
            <h1>CONTACT</h1>
            <hr />
            <br />
            <div className={classes.root}>
            <Grid  item lg={12} md={12} xs={24} style={{padding:'20px 20px'}}>
            <img src="https://img.icons8.com/color/96/000000/whatsapp.png" alt="watshapp"/>
            <img src="https://img.icons8.com/fluent/96/000000/facebook-new.png" alt="facebook"/>
            <img src="https://img.icons8.com/fluent/96/000000/gmail.png" alt="gmail"/>
            <img src="https://img.icons8.com/fluent/96/000000/twitter.png" alt="twitter"/>
            </Grid>
            <Grid item lg={6} md={12} xs={24} style={{padding:'20px 20px'}}>
            <h3>Thank you For Visiting</h3>
            </Grid>
            
        </div>
        </div>
    )
}
