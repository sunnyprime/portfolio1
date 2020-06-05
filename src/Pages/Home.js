import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {profile} from "../Data/BasicData"
import Buton from '../Component/Buton';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));
  

export default function Home() {
    const classes = useStyles();
    return (
        <div style={{width:'30vw',color:'white'}}>
           <center>
             
            <Avatar alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/32408813?s=460&u=6a7fc6dcd66e003b25bbfc9f2ed9cb366b13eec3&v=4" className={classes.large} />
          
            <p>{profile.content}</p>
            <Buton />
            </center>
        </div>
    )
}
