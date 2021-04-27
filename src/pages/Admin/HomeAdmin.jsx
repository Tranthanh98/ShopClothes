import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import MenuList from './MenuList';
import { adminRoute } from '../../routes';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as httpClient from '../../general/HttpClient';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "#cccccc"
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    ...theme.mixins.toolbar,
    backgroundColor:"#223442"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color:"black"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor:"#425469"
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
    backgroundColor:"#425469"

  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  rootCustomHeader: {
    backgroundColor: "red"
  },
  searchForm:{
    backgroundColor:"white"
  }
}));

export default function HomeAdmin(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(!props.isMobile);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const currMenu = useSelector(state => state.adminMenu);
  const _onLoginGoogle = async ()=>{
    let response = await httpClient.sendPost("/User/GoogleAuthentication")
    console.log("response:", response);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>
            {currMenu.name}
          </Typography>
          <Box>
            {/* <FormControl variant="outlined"> */}
              <OutlinedInput
                // value={values.password}
                // onChange={handleChange('password')}
                className={classes.searchForm}
                placeholder="Tìm kiếm"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            {/* </FormControl> */}
          </Box>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon style={{color:"black"}} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          root: classes.rootCustomHeader
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Box color="white" fontSize="25px">PORTAL</Box>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{color:"white"}}/>
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuList />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            {
              adminRoute.map((route, index) => {
                return <Route
                  key={index}
                  exact
                  path={route.path}
                  render={(prop) => <route.component {...prop} />}
                />
              })
            }
          </Switch>
        </Container>
      </main>
    </div>
  );
}