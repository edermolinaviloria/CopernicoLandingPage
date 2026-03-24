import Banner from '../assets/img/contactImg.jpg'
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';



export const ContactBanner = () => {

     const responsive = useMediaQuery('(max-width: 767px)')

     return (
          <div style={{ backgroundImage: `url(${Banner})`, width: '100%', height: 800, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

               <h1 style={{ color: '#FFFFF0', textAlign: responsive ? 'center' : '', fontSize: responsive ? '24px' : '', width: responsive ? '300px' : '800px' }}>Conéctate Con Nosotros: Tu Canal Directo para peticiones, quejas y reclamos</h1>
               <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@crcopernico.com' target='_blank'>
                    <img src={require('../assets/img/emailIcon.png')} width='300px' height='300px' />
               </Link>


          </div>
     )


}