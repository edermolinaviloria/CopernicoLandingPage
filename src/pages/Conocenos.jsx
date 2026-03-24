import { ConocenosBanner } from "../components/ConocenosBanner"
import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, Avatar, Chip, Box, Button, ButtonGroup, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';



export const Conocenos = () => {

     const responsive = useMediaQuery('(max-width: 767px)');
     const ultraWide = useMediaQuery('(min-width: 1600px)')

     return (
          <>
               <ConocenosBanner />
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '80px 0px 50px 0px' }}>

                    <div style={{ display: 'flex',flexDirection:responsive ? 'column' : '', marginBottom: 100 }}>
                         <img src={require('../assets/img/objetivo_7.png')} width='350px' height='350px' />
                         <img src={require('../assets/img/objetivo_12.png')} width='350px' height='350px' />
                         <img src={require('../assets/img/objetivo_13.png')} width='350px' height='350px' />
                    </div>

                    <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>

                         <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                              <h1 style={{}}>Visión</h1>
                              <p style={{ textAlign: 'justify' }}>Ser un líder pionero en el Centro de Investigación Copernico, impulsando la vanguardia de la tecnología, la robótica y la innovación. Buscamos transformar el panorama global mediante el desarrollo y la implementación de soluciones avanzadas que promuevan un futuro sostenible y eficiente en el uso de la energía, convirtiéndonos en un referente reconocido por nuestro compromiso con la excelencia, la creatividad y el impacto positivo en la sociedad.</p>
                         </div>

                         <div style={{ width: responsive ? '100%' : '' }}>
                              <img src={require('../assets/img/visionImg.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                         </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', margin: responsive ? '30px 0px 50px 0px' : '100px 0px 100px 0px' }}>

                         <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                              <h1>Misión</h1>
                              <p style={{ textAlign: 'justify' }}>En el Centro de Investigación Copernico, nos dedicamos apasionadamente a la investigación y desarrollo de tecnologías de vanguardia, robótica e innovación. Nuestra misión es impulsar el progreso hacia un mundo más sostenible mediante el fomento de diversas formas de energía, incluyendo las renovables. Trabajamos incansablemente para crear soluciones innovadoras que aborden los desafíos globales, contribuyendo así a la mejora de la calidad de vida y al bienestar de las generaciones presentes y futuras. Nos esforzamos por ser un catalizador de cambio positivo, colaborando con socios estratégicos y compartiendo nuestro conocimiento para inspirar a la comunidad global hacia un futuro más brillante y sostenible.</p>
                         </div>

                         <div style={{ width: responsive ? '100%' : '' }}>
                              <img src={require('../assets/img/forest.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                         </div>
                    </div>


                    <div style={{ display: 'flex', flexDirection: "column", paddingRight: ultraWide ? '180px' : '0px', marginBottom:100,alignItems: responsive ? 'center' : '' }}>

                         <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '', marginBottom: 30 }}>
                              <h1>Conoce al equipo</h1>

                         </div>
                         <div style={{ display: 'flex',flexDirection:responsive ? 'column' : ''}}>

                              <Card
                                   sx={{
                                        width: 320,
                                        maxWidth: '100%',
                                        marginRight:responsive ? '' : '80px',
                                        boxShadow: 'lg',
                                        borderStyle: 'solid',
                                        marginBottom: responsive ? '30px' : '',
                                        borderWidth: 1,
                                        borderColor: '#1c192d',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                   }}
                              >
                                   <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                                        <Avatar src={require('../assets/img/ederMolina.jpg')} sx={{ width: 120, height: 120, marginBottom: 1 }} />

                                        <Typography level="title-lg">Eder Molina Viloria</Typography>
                                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>Investigador Senior</Typography>
                                        
                                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>Doctorado en Ingeniería Universidad Nacional de Colombia</Typography>

                                   </CardContent>

                              </Card>

                              <Card
                                   sx={{
                                        width: 320,
                                        maxWidth: '100%',
                                        boxShadow: 'lg',
                                        borderStyle: 'solid',
                                        marginRight:responsive ? '' : '80px',
                                        borderWidth: 1,
                                        borderColor: '#1c192d',
                                        marginBottom: responsive ? '30px' : '',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                   }}
                              >
                                   <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                                        <Avatar src={require('../assets/img/javierSerrano.jpeg')} sx={{ width: 120, height: 120, marginBottom: 1 }} />

                                        <Typography level="title-lg">Luis Javier Serrano Tamayo</Typography>
                                        
                                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>Doctorado University Of Manchester
                                             Management of Projects</Typography>

                                   </CardContent>

                              </Card>

                              {/* <Card
                                   sx={{
                                        width: 320,
                                        maxWidth: '100%',
                                        boxShadow: 'lg',
                                        borderStyle: 'solid',
                                        borderWidth: 1,
                                        borderColor: '#1c192d',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                   }}
                              >
                                   <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                                        <Avatar src={require('../assets/img/mateoAntequera.jpeg')} sx={{ width: 120, height: 120, marginBottom: 1 }} />

                                        <Typography level="title-lg">Mateo De Jesús Antequera Palacio</Typography>
                                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>Técnico en Sistemas,Psicologo</Typography>
                                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>Desarrollador Fullstack Web e inteligencia Artificial</Typography>

                                   </CardContent>

                              </Card> */}

                         </div>

                    </div>
               </div>
          </>
     )


}