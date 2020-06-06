import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import DehazeIcon from '@material-ui/icons/DehazeOutlined';
import {Link} from 'react-router-dom'


const ITEM_HEIGHT = 48;

export default function LeftNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="leftnav">
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            
            onClick={handleClick}
          >
            <DehazeIcon className="iconbutton" />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          > 
          <Link className="NL" to="/">
            <MenuItem onClick={handleClose}>
              HOME
            </MenuItem>
          </Link>
          <Link className="NL" to="/skills">
            <MenuItem onClick={handleClose}>
              SKILLS
            </MenuItem>
          </Link>
          <Link className="NL" to="/exp">
            <MenuItem onClick={handleClose}>
              EXPERIENCE
            </MenuItem>
          </Link>
          <Link className="NL" to="/contact">
            <MenuItem onClick={handleClose}>
              CONTACT
            </MenuItem>
          </Link>
          </Menu>
        </div>
      );
}
