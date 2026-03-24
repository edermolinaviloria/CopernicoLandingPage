import Banner from '../assets/img/video-banner.gif';
import useMediaQuery from '@mui/material/useMediaQuery';



export const CopernicoBanner = () => {

     const responsive = useMediaQuery('(max-width: 767px)')

     return (
          <div style={{backgroundImage:`url(${Banner})`,width:'100%',height:responsive ? '500px' : '800px', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
               <h1 style={{color:'#FFFFF0'}}>Copérnico</h1>
               <h2 style={{color:'#FFFFF0', textAlign:responsive ? 'center' : '', fontSize: responsive ? '12px' : '',width: responsive ? '300px' : ''}}>CENTRO DE INVESTIGACIÓN, DESARROLLO TECNOLÓGICO E INNOVACIÓN EN ENERGÍAS</h2>
          </div>
     )


}