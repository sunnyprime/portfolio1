import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


export default function Buton() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link to="/skills">
        <BottomNavigationAction label="Favorites" value="favorites" icon={<SportsEsportsIcon />} />
        </Link>
        <Link to="/exp">
        <BottomNavigationAction label="Nearby" value="nearby" icon={<TransferWithinAStationIcon />} />
        </Link>
        <Link to="/contact">
        <BottomNavigationAction label="Folder" value="folder" icon={<AddIcCallIcon />} />
        </Link>
      </BottomNavigation>
      </div>
    )
}
