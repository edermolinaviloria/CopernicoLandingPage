import { ProyectosBanner } from "../components/ProyectosBanner"
import useMediaQuery from '@mui/material/useMediaQuery';





export const Proyectos = () => {

     const responsive = useMediaQuery('(max-width: 767px)');

     return (
          <>
               <ProyectosBanner />
               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Robotica</h1>
                         <p style={{ textAlign: 'justify' }}>La robótica es una disciplina fascinante que combina la ingeniería, la informática y la inteligencia artificial para diseñar, construir y programar robots capaces de realizar tareas diversas. Estos ingenios mecánicos han evolucionado desde simples autómatas hasta sofisticadas máquinas que desempeñan roles cruciales en la industria, la medicina, la exploración espacial y más allá. En el corazón de la robótica reside la capacidad de crear máquinas autónomas que pueden adaptarse y aprender del entorno que las rodea. Los avances en algoritmos de aprendizaje automático y sensores de última generación han permitido que los robots adquieran habilidades perceptivas y cognitivas, acercándolos cada vez más a replicar el pensamiento humano.</p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/robotTeam.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>

               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Energias Renovables</h1>
                         <p style={{ textAlign: 'justify' }}>La búsqueda de fuentes energéticas sostenibles ha llevado a un creciente interés en las energías renovables, un campo que redefine la forma en que obtenemos y utilizamos la energía. Las energías renovables se basan en fuentes naturales como la luz solar, el viento, la energía hidroeléctrica y la biomasa, ofreciendo una alternativa más limpia y sostenible a los combustibles fósiles.</p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/teamEnergy.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>

               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 50px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Tecnologias Emergentes</h1>
                         <p style={{ textAlign: 'justify' }}>Las tecnologías emergentes están redefiniendo el panorama de la innovación, introduciendo avances sorprendentes que transforman la manera en que vivimos, trabajamos y nos relacionamos. Estas innovaciones abarcan diversos campos, desde la inteligencia artificial hasta la nanotecnología, y están marcando el inicio de una nueva era tecnológica.

                              La inteligencia artificial (IA), por ejemplo, ha experimentado un crecimiento exponencial, permitiendo a las máquinas realizar tareas que antes requerían la intervención humana. Algoritmos de aprendizaje profundo y redes neuronales impulsan avances en el reconocimiento de patrones, el procesamiento del lenguaje natural y la toma de decisiones autónomas, llevando la IA a aplicaciones tan diversas como la atención médica, la conducción autónoma y la optimización de procesos empresariales.

                         </p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/futureTech.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>

               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Microrredes Eléctricas</h1>
                         <p style={{ textAlign: 'justify' }}>Una microrred eléctrica se define como un sistema de generación, distribución y almacenamiento de energía que opera de manera autónoma o conectada a la red principal, capaz de funcionar de forma independiente en caso de desconexión. Este enfoque descentralizado aporta numerosos beneficios, desde una mayor eficiencia hasta una mayor resiliencia y sostenibilidad.

                              Uno de los pilares fundamentales de las microredes eléctricas es la diversificación de las fuentes de energía. Integrando fuentes renovables como la solar, eólica o hidroeléctrica, las microredes pueden reducir la dependencia de los combustibles fósiles y disminuir las emisiones de gases de efecto invernadero. Esta diversificación no solo contribuye a la lucha contra el cambio climático, sino que también asegura un suministro más estable y confiable.</p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/microRed.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>

               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Inteligencia Artificial y automatización</h1>
                         <p style={{ textAlign: 'justify' }}>Una microrred eléctrica se define como un sistema de generación, distribución y almacenamiento de energía que opera de manera autónoma o conectada a la red principal, capaz de funcionar de forma independiente en caso de desconexión. Este enfoque descentralizado aporta numerosos beneficios, desde una mayor eficiencia hasta una mayor resiliencia y sostenibilidad.

                              Uno de los pilares fundamentales de las microredes eléctricas es la diversificación de las fuentes de energía. Integrando fuentes renovables como la solar, eólica o hidroeléctrica, las microredes pueden reducir la dependencia de los combustibles fósiles y disminuir las emisiones de gases de efecto invernadero. Esta diversificación no solo contribuye a la lucha contra el cambio climático, sino que también asegura un suministro más estable y confiable.</p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/inteligenciaArtificial.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>

               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Microrredes con aplicaciones costa afuera y marítimas</h1>
                         <p style={{ textAlign: 'justify' }}>Las microrredes representan una innovadora solución en el ámbito energético, y su aplicación en entornos costa afuera y marítimos se erige como un área de especial interés y potencial. Estas microrredes se perfilan como una respuesta eficiente y sostenible para abastecer de energía a instalaciones aisladas en alta mar, plataformas petrolíferas, islas remotas y otras locaciones marítimas.

En entornos costa afuera, la integración de microrredes permite optimizar la generación, distribución y almacenamiento de energía. La diversidad de fuentes energéticas, como la solar, eólica, y la generación a partir de combustibles limpios, se combina para formar sistemas energéticos más resilientes y autónomos. Esto no solo reduce la dependencia de combustibles fósiles, sino que también disminuye la huella ambiental de las operaciones costa afuera.</p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/costaAfuera.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>

               <div style={{ display: 'flex', flexDirection: responsive ? 'column' : 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: responsive ? '50px 0px 0px 0px' : '100px 0px 200px 0px' }}>
                    <div style={{ width: responsive ? '350px' : '500px', fontSize: responsive ? '12px' : '' }}>
                         <h1 style={{}}>Sistemas de Energía Basados en IoT:</h1>
                         <p style={{ textAlign: 'justify' }}>En la era de la conectividad, los Sistemas de Energía basados en el Internet de las Cosas (IoT) han emergido como catalizadores clave en la transformación del sector energético. Estos sistemas aprovechan la interconexión de dispositivos y la recopilación de datos en tiempo real para optimizar la generación, distribución y consumo de energía, abriendo la puerta a un paradigma más eficiente y sostenible.

La esencia de los sistemas de energía basados en IoT reside en la capacidad de recopilar datos en tiempo real de una amplia variedad de fuentes, desde medidores inteligentes hasta sensores en infraestructuras energéticas. Esta información alimenta algoritmos avanzados que permiten la toma de decisiones automatizada y la gestión proactiva de los recursos energéticos. La monitorización constante y la retroalimentación en tiempo real posibilitan una adaptación dinámica a patrones de demanda cambiantes y condiciones operativas variables.</p>
                    </div>

                    <div style={{ width: responsive ? '100%' : '' }}>
                         <img src={require('../assets/img/inteligenciaCosas.jpeg')} width={`${responsive ? '100%' : '504px'}`} height='281px' />
                    </div>


               </div>



          </>
     )

}