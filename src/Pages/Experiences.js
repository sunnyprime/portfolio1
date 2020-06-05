import React from 'react'
import Expcard from '../Component/Expcard'
import {exp} from "../Data/BasicData"
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


export default function Experiences() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <div className="containers">
        <h2>Experiences</h2>
        <hr />
        <br />
        <div className={classes.root}>

        {
            exp.map((item,index)=>{
                return(
                    <Grid item lg={4} md={4} xs={24} style={{padding:'20px 0px'}}>
                <Expcard key={index} name={item.name} img={item.img} star={item.star} description={item.decription} />
                </Grid>)
            })
        }
   

    </div>
    </div>
    </React.Fragment>
    )
}
