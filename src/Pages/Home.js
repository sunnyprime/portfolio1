import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import {profile} from "../Data/BasicData"
import Buton from '../Component/Buton';
// import {profile} from '../Data/BasicData'


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
    // const classes = useStyles();
    return (
        <div style={{width:'30vw',color:'white'}}>
           <center>
            <div className="image">
            {/* <img src={profile.img} alt="Home image" height="200px" width="200px" /> */}
            </div>
          
            <p>{profile.content}</p>
            <Buton />
            </center>
        </div>
    )
}
