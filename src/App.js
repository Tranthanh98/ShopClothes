import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, Button, Grid, Typography } from '@material-ui/core';
import ProductContainer from './containers/ProductContainer';
import AppBarTop from './components/AppBar/AppBarTop';
import routes from './routes';
import {sleep} from './general/helper';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Alertity from './general/ConmmonComponent/Alertify';

const makeStyle = makeStyles({
  root: {
    padding: "20px",
    // fontFamily: "'Quicksand', sans-serif !important"
  },
  blockForm :{
    marginTop:"10px",
    marginBottom:10,
    height:100,
    backgroundColor:"#f3f3f3",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  inputForm:{
      border: "1px solid #e7e7e7",
      boxShadow: "none",
      height: "45px",
      fontWeight: 500,
      padding: "0 20px",
      background: "#fbfbfb",
      color: "#050505",
      width: "30%"
  }
})
function App() {
  const classes = makeStyle();
  return (
    <Router>
      <AppBarTop />
      <div className={classes.root}>
        <Switch>
          {
            routes.map((route, index) => {
              return <Route key={index} exact path={route.path} render={(prop) => <route.component {...prop} />} />
            })
          }
        </Switch>
        <div className={classes.blockForm}>
            <input placeholder="Đăng ký để nhận thông tin" className={classes.inputForm}/>
            <Button>Đăng ký</Button>
        </div>
        <Footer/>
        <Alertity/>
      </div>
    </Router>
  );
}

export default App;
