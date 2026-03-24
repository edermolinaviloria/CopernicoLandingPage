import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Stars from '../assets/img/stars.png'
import { Link, useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';


export const SideBar = () => {

     const [value, setValue] = useState(0);
     const [openDrawer, setOpenDrawer] = useState(false);
     const responsive = useMediaQuery('(max-width: 767px)')
     const navigation = useNavigate();

     const handleDrawerOpen = () => {
          setOpenDrawer(true);
     }

     const handleDrawerClose = () => {
          setOpenDrawer(false);
     }

     const handleChange = (event, newValue) => {

          setValue(newValue);
          localStorage.setItem('selectedTab', newValue);

     };

     const handleDrawerInicio = () => {
          setOpenDrawer(false);
          navigation('/');
          setValue(0)

     }


     const handleDrawerProyectos = () => {
          setOpenDrawer(false);
          navigation('/proyectos');
          setValue(1)

     }


     const handleDrawerConocenos = () => {
          setOpenDrawer(false);
          navigation('/conocenos');
          setValue(2)

     }


     const handleDrawerContactos = () => {
          setOpenDrawer(false);
          navigation('/contactos');
          setValue(3)

     }


     useEffect(() => {
          // Recuperar el valor desde localStorage
          const storedTabValue = localStorage.getItem('selectedTab');
          // Establecer el valor del tab seleccionado
          if (storedTabValue !== null) {
               setValue(parseInt(storedTabValue, 10));
          }
     }, []);

     return (


          <Box sx={{ width: '100%', backgroundColor:'#1c192d', height: 200, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>



               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <img src={require('../assets/img/logoCopernico.png')} style={{ width: 150, height: 150,marginBottom:0 }} />
                   <h3 style={{color:'white',marginTop:0}}>Copérnico</h3>
               </div>
               <Tabs value={value} onChange={handleChange} centered indicatorColor='secondary' textColor='secondary' sx={{display:responsive ? 'none' : ''}}>

                    <Tab label="Inicio" sx={{ color: '#FFFFF0' }} to='/' component={Link} />
                    <Tab label="Proyectos" sx={{ color: '#FFFFF0' }} to='proyectos' component={Link} />
                    <Tab label="Conocenos" sx={{ color: '#FFFFF0' }} to='conocenos' component={Link} />
                    <Tab label="Contactos" sx={{ color: '#FFFFF0' }} to='contactos' component={Link} />

               </Tabs>
               <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"

               >
                    <MenuIcon sx={{ color: 'white', width: 50, height: 50, marginRight: 3 }} />
               </IconButton>

               <Drawer
                    anchor='right'
                    open={openDrawer}

                    PaperProps={{
                         style: {
                              backgroundColor: '#1c192d',
                              width: responsive ? '70vw' : '15vw',
                              display:'flex',
                              flexDirection:'column',
                              alignItems:'center',


                         },
                    }}

               >
                    <IconButton
                              color="inherit"
                              aria-label="open drawer"
                              onClick={handleDrawerClose}
                              edge="end"

                         >
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:15,marginBottom:10 }}>

                                   <img src={require('../assets/img/logoCopernico.png')} style={{ width: 100, height: 100,objectFit:'contain' }} />
                                   
                              </div>
                         </IconButton>
                       
                    <List>
                         

                         <ListItem button sx={{'&:hover':{borderColor:'white',borderWidth:1,opacity:0.8,borderStyle:'solid'}}} onClick={handleDrawerInicio}>
                              <HomeIcon style={{color:'white'}}/>
                              <ListItemText primary="Inicio" style={{color:'white',marginLeft:8}}/>
                         </ListItem>
                         <ListItem button  sx={{'&:hover':{borderColor:'white',borderWidth:1,opacity:0.8,borderStyle:'solid'}}} onClick={handleDrawerProyectos}>
                              <SettingsIcon style={{color:'white'}}/>
                              <ListItemText primary="Proyectos" style={{color:'white',marginLeft:8}}/>
                         </ListItem>
                         <ListItem button  sx={{'&:hover':{borderColor:'white',borderWidth:1,opacity:0.8,borderStyle:'solid'}}} onClick={handleDrawerConocenos}>
                              <GroupsIcon style={{color:'white'}}/>
                              <ListItemText primary="Conocenos" style={{color:'white',marginLeft:8}}/>
                         </ListItem>
                         <ListItem button  sx={{'&:hover':{borderColor:'white',borderWidth:1,opacity:0.8,borderStyle:'solid'}}} onClick={handleDrawerContactos}>
                              <EmailIcon style={{color:'white'}}/>
                              <ListItemText primary="Contactos" style={{color:'white',marginLeft:8}}/>
                         </ListItem>
                         
                    </List>
               </Drawer>

          </Box>



     )


}