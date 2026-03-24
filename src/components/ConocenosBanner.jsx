import Banner from '../assets/img/meetUs.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';
import Theme from '../theme/Theme'

export const ConocenosBanner = () => {

     const responsive = useMediaQuery('(max-width: 767px)')

     return (
          <div style={{backgroundImage:`url(${Banner})`,width:'100%',height:responsive ? '500px' : '800px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center' }}>
               <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h1 style={{color:'white',textAlign:responsive ? 'center' : '', fontSize: responsive ? '16px' : '',width: responsive ? '300px' : '1200px',marginBottom:0}}>"La innovación surge cuando las mentes brillantes trabajan juntas. El verdadero progreso se logra a través del poder del trabajo en equipo."</h1>
                    <h1 style={{color:'white',fontSize: responsive ? '16px' : ''}}>-Steve Jobs</h1>

               </div>
          </div>
     )


}