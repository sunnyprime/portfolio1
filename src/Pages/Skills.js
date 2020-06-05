import React from 'react'
import SkillSet from '../Component/SkillSet'
import {skills} from "../Data/BasicData"
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


export default function Skills() {
    const classes = useStyles();
    return (
        <div className="containers">
            <h2>SKILLS</h2>
            <hr />
            <br ></br>
            <div className={classes.root}>
            {
                skills.map((item,index)=>{
                    return(
                        <Grid item lg={6} md={12} xs={24} style={{padding:'20px 0px'}}>
                    <SkillSet key={index} name={item.name} img={item.img} star={item.star} ></SkillSet>
                    </Grid>
                    )
                })
            }
            </div>
           
        </div>
    )
}
