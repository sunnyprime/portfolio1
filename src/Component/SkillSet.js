import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';


export default function SkillSet({name,img,star}) {
    
    return (
        
        <div className="skillset">
            <img src={img} alt="mongo" width="25px" height="25px" />
            
            <Typography variant="button" display="block" gutterBottoms>
        {name}
      </Typography>
        <Rating name="read-only" value={star} readOnly />
        </div>
    )
}
