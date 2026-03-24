import React from 'react'
import Banner from '../assets/img/solarPanel.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProyectosBanner = () => {

     const responsive = useMediaQuery('(max-width: 767px)')

     return (
          <div style={{ backgroundImage: `url(${Banner})`, width: '100%', height:responsive ? '500px' : '800px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',display:'flex',justifyContent:'center' }}>
               <div style={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center',marginTop:120}}>
                    <h1 style={{color:'#FFFFF0',textAlign:responsive ? 'center' : '', fontSize: responsive ? '16px' : '',width: responsive ? '300px' : '1200px'}}>"Para conocer la naturaleza no es suficiente con mirarla; es necesario observarla, estudiarla y someterla a experimento."</h1>
                    <h1 style={{color:'#FFFFF0',fontSize: responsive ? '16px' : ''}}>-Nicolas Copernico</h1>

               </div>

          </div>
     )
}
