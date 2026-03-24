import cyber from '../assets/img/cyberpunk.gif'
import useMediaQuery from '@mui/material/useMediaQuery';


export const Footer = () => {

     const responsive = useMediaQuery('(max-width: 767px)')

     return (
          <div style={{backgroundColor:'#1c192d',width:'100%', height:'100%',backgroundImage:`url(${cyber})`, backgroundRepeat:'no-repeat',backgroundSize: responsive ? '100% 100%' : '20% 100%', display:'flex',flexDirection:'column',justifyContent:'center'}}>
               
               <div style={{marginLeft:responsive ? '32px': '435px',marginTop:50,display:'flex',justifyContent:'space-between'}}>
                    <div style={{marginLeft:responsive ? '' : 15}}>

               <h3 style={{color:'white',marginBottom:0}}>Contacto</h3>
                        <p style={{color:'white'}}>
                            Eder Molina Viloria <br />
                            Barranquilla - Colombia <br />
                            Email: info@crcopernico.com <br /><br />
                        </p>
                    </div>
                        <div style={{display:responsive ? 'none' : 'flex',justifyContent:'center',alignItems:'center',marginRight:50}}>
                    <img src={require('../assets/img/logoCopernico2.png')} style={{width:150,height:150,objectFit:'contain'}}/>
               </div>
               </div>

               {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
               
                    <h3 style={{color:'white',textAlign:responsive ? 'center' : '',fontSize: responsive ? '12' : ''}}>Desarrollado por: Mateo Antequera</h3>

               </div> */}
               
          
          </div>
     )


}