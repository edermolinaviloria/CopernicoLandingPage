import { SideBar } from "../components/SideBar"
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { CopernicoBanner } from "../components/CopernicoBanner";
import useMediaQuery from '@mui/material/useMediaQuery';




export const Home = () => {

     const responsive = useMediaQuery('(max-width: 767px)');


     return (
          <>
               <CopernicoBanner />
               <div style={{ display: 'flex',flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px'}}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize:responsive ? '12px' : '' }}>
                         <h1 style={{}}>Principal</h1>
                         <p style={{ textAlign: 'justify' }}>El centro de Investigación, desarrollo tecnológico e innovación en energías Copérnico es un centro líder en Colombia, se dedica al desarrollo sostenible en sistemas energéticos multidisciplinarios, brindando soluciones de vanguardia confiables y óptimas en todo los campos referentes a la transición energética e industria 4.0, aplicaciones en tierra, costa afuera y marítimas, sistemas de generación y almacenamiento de energía eléctrica, sistemas de energía basados en IoT, inteligencia artificial, robótica y automatización. CROE Copérnico ha establecido una estrecha cooperación internacional con empresas industriales, universidades e investigadores, con esto se desea mejorar la competitividad, reducir costos, desarrollar talento y contribuir al crecimiento sostenible de las empresas, al mismo tiempo que puede tener un impacto positivo en la sociedad y el medio ambiente.</p>
                    </div>

                    <div style={{width:responsive ? '100%' : ''}}>
                         <img src={require('../assets/img/agro.jpg')} width={`${responsive ? '100%' : '504px'}`} height='281px'/>
                    </div>


               </div>
               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 50px 0px' : '100px 0px 200px 0px'}}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize:responsive ? '12px' : ''}}>
                    <h2>Áreas de Investigación</h2>
                    <p>Nuestro centro se especializa en varias áreas de investigación:</p>
                    <ul>
                         <li>Tecnologías Emergentes</li>
                         <li>Microrredes con aplicaciones en tierra, costa afuera y marítimas</li>
                         <li>Sistemas de generación y almacenamiento de energia eléctrica</li>
                         <li>Sistemas de energía basados en IoT</li>
                         <li>Inteligencia Artificial</li>
                         <li>Robótica Avanzada</li>
                         <li>Automatización</li>
                    </ul>
                    </div>

                    <div style={{width:responsive ? '100%' : ''}}>
                         <img src={require('../assets/img/dronImg.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px'/>
                    </div>


               </div>
               
          </>
     )



}