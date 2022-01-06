import { Link, NavLink } from "react-router-dom";
import Categories from "../data/Categories";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../img/nike.png';
import { ShoppingCart } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"7rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar:{
    backgroundColor:"whitesmoske",
    boxShadow:"none",
},
grow:{
  flexGrow:1,},

  title: {
    flexGrow: 1,
  },
  Button:{
    marginLeft: theme.spacing(4),
},

Image:{
  marginRight:"2px",
  heigth:"5rem",
  width:"150px"
  
},
logo:{
width:"2px",

}

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
<img src={logo} className={classes.Image}/> 
     </IconButton>
     </Link>
          <div className={classes.button}> 
<Button variant="outlined">
<IconButton color="inherit"></IconButton>
<strong>Entrar</strong></Button></div>
      <div className="flex flex-row-reverse ">
        <div>
          <ul >
            <div>
              {Categories.map ((category) => {
                return (
                  <div key= {category.id}>

                    <NavLink to = {category.address}
                    activeclassname="active"
                    >
                      {category.name}
                    </NavLink>
                    <IconButton color="inherit">
<ShoppingCart fontSize="large" color="white"/>
</IconButton>
                 </div>
                )
              })}


            </div>
  
          </ul>
        </div>
      </div>
      </Toolbar>
      </AppBar>
      
    </div>
  );
}



