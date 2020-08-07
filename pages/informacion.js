import {useState, useEffect} from 'react'
import {IoLogoWhatsapp} from 'react-icons/io'
import AppLayout from '../componentes/layout'
import Footer from '../componentes/layout/footer2'

const Informacion = () => {
    const [padrino, setPadrino] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <AppLayout pagina='info' titulo='Información'>         
                <div className='informacion-cont'>
                    <h2 className='titulo'>Información General</h2>
                    <div className='info'>
                        <div className='elemento'>
                            <strong style={{color: 'brown'}}>Fecha: </strong>La fechas para los Sacramentos aún no están establecidas, una vez haya sido
                            coordinado esto con nuestro Párroco y recibamos el visto bueno por parte de la Arquidiócesis se
                            las dará a conocer.
                        </div>
                        <div className='elemento'>
                            <p>
                                <strong style={{color: 'brown'}}>Aporte: </strong>Debido a la situación que atraviesa el país y el mundo, la Arquidiócesis, 
                                la Parroquia y la Coordinación hemos visto la necesidad de solicitar el valor de $ 15, destinados 
                                para los gastos del Sacramento.
                            </p>
                            <p style={{paddingTop: '10px'}}>
                                (Este valor incluye, Certificado de Sacramento, Rosario, Cirio, estipendio de Párroco, 
                                Diacono, confesores, sacristán, pago de músicos, decoración de iglesia y más gastos). 
                            </p>
                        </div>
                        <div className='elemento'>
                            <strong style={{color: 'brown'}}>Forma de pago: </strong>
                            <p style={{paddingTop: '5px'}}>
                                <strong>Deposito: </strong>Se podra hacer un deposito a la 
                                cuenta de la Catequesis, en la Cooperativa JEP N. 406103175808 a nombre de Sandra 
                                Arízaga, una vez realizado el depósito, hacer llegar una foto del documento al 
                                catequista indicando el nombre y nivel del alumno.
                            </p> 
                            <p style={{paddingTop: '10px'}}>
                                <strong>Pago en coordinación: </strong>Para los pagos la 
                                coordinación atenderá los días miércoles y jueves desde las 16h00 a 18h00 a partir 
                                del 22 de julio. 
                            </p>
                        </div>
                        <div className='elemento'>
                            <strong style={{color: 'brown'}}>Vestimenta: </strong>Por la razón antes expuesta también se ha visto la necesidad de 
                            la austeridad en el Sacramento por lo que la vestimenta será:
                            <div className='elemento-div'>
                                <p className='hm'>
                                    Varones: Pantalón de vestir azul marino o negro y camisa blanca.
                                </p>
                                <p className='mj'>
                                    Mujeres: Falda azul marina o negra y blusa blanca (la falda a la rodilla no alta y la blusa 
                                    no con tirillas).
                                </p>
                            </div> 
                            Ropa digna, recatada como para el sacramento especial.
                        </div>
                        <div className='elemento'>
                            <p style={{marginBottom: '20px'}}>
                                <strong style={{color: 'brown'}}>Padrino: </strong>Es necesario que se indique a cada catequista a la brevedad 
                                posible el nombre completo y correcto del Padrino o Madrina tomando en cuenta las 
                                consideraciones indicadas, a continuación. 
                            </p>
                            <p 
                                className='padrino-boton'
                                onClick={() => setPadrino(!padrino)}
                            >
                                Información Padrino (Abrir)
                            </p>
                            {
                                padrino &&
                                <div className='padrino-info'>
                                    <div className='elemento-padrino'>
                                        <p className='titulo-padrino'>CAPÍTULO IV   DE LOS PADRINOS</p>
                                        <p className='item-padrino'>
                                            873. Téngase un solo padrino o una sola madrina, o uno y una.
                                        </p>
                                        <p>
                                            874. Para que alguien sea admitido como padrino, es necesario que:
                                        </p>
                                        <p className='subitem-padrino'>
                                            1. Haya sido elegido por quien va a bautizarse o por sus padres o por quienes 
                                            ocupan su lugar o, faltando éstos, por el párroco o ministro; y que tenga 
                                            capacidad para esta misión e intención de desempeñarla.<br/>
                                            2. Haya cumplido dieciséis años, a no ser que el Obispo diocesano establezca 
                                            otra edad, o que, por justa causa, el párroco o el ministro consideren admisible 
                                            una excepción.<br/>
                                            3. Sea católico, esté confirmado, haya recibido ya el santísimo sacramento de la 
                                            Eucaristía y lleve, al mismo tiempo, una vida congruente con la fe y con la 
                                            misión que va a asumir.<br/>
                                            4. No esté afectado por una pena canónica, legítimamente impuesta o declarada.<br/>
                                            5. No sea el padre o la madre de quien se ha de confirmar.
                                        </p>
                                        <p className='item-padrino'>
                                            892. En la medida de lo posible, tenga el confirmando un padrino, a quien 
                                            corresponde procurar que se comporte como verdadero testigo de Cristo y cumpla 
                                            fielmente las obligaciones inherentes al sacramento.
                                        </p>
                                        <p className='item-padrino'>
                                            893. Para que alguien pueda ser padrino, es necesario que cumpla las condiciones 
                                            expresadas en el c. 874.<br/>
                                            Es conveniente que se escoja como padrino a quien asumió esa misión en el bautismo.
                                        </p>
                                        <p className='fuente'>
                                            FUENTE: Código de Derecho Canónico
                                        </p>
                                    </div>
                                    <div className='elemento'>
                                        <p className='titulo-padrino'>CAPÍTULO III: DE LOS QUE VAN A SER CONFIRMADOS </p>
                                        <p className='item-padrino'>
                                            1. Sólo es capaz de recibir la confirmación todo bautizado aún no confirmado.
                                        </p>
                                        <p className='item-padrino'>
                                            2. Fuera del peligro de muerte, para que alguien reciba lícitamente la confirmación
                                            se requiere que, si goza de uso de razón esté convenientemente instruido, bien 
                                            dispuesto y pueda renovar las promesas del bautismo.
                                        </p>
                                        <p className='item-padrino'>
                                            890. Los fieles están obligados a recibir este sacramento en el tiempo oportuno; los 
                                            padres y los pastores de almas, sobre todo los párrocos, procuren que los fieles sean 
                                            bien preparados para recibirlo y que lo reciban en el tiempo oportuno.
                                        </p>
                                        <p className='item-padrino'>
                                            891. El sacramento de la confirmación se ha de administrar a los fieles en torno a la
                                            edad de la discreción, a no ser que la Conferencia Episcopal determine otra edad, o 
                                            exista peligro de muerte o, a juicio del ministro, una causa grave aconseje otra cosa.
                                        </p>
                                        <p className='fuente'>
                                            FUENTE: Código de Derecho Canónico
                                        </p>
                                    </div> 
                                </div>
                            }
                        </div>
                        <div className='elemento'>
                            En los casos especiales por favor ponerse en contacto con su catequista o con coordinación, 
                            <div className='telefonos'>
                                <div className='num'>
                                    <a className='wapp' href='https://api.whatsapp.com/send?phone=593992648663' target='_blank' >
                                        <IoLogoWhatsapp style={{fontSize: '50px', color: '#00e676'}} />
                                    </a> 
                                    <p>Sandra Arizaga</p>
                                    <p>0992648663</p>
                                </div>
                                <div className='num'>
                                    <a className='wapp' href='https://api.whatsapp.com/send?phone=593990652271' target='_blank' >
                                        <IoLogoWhatsapp style={{fontSize: '50px', color: '#00e676'}} />
                                    </a> 
                                    <p>Yolanda Maila</p>
                                    <p>0990652271</p>
                                </div>
                            </div>
                        </div>
                        <div className='elemento fin'>
                            <strong>
                                Cualquier comentario, sugerencia o recomendación estaremos gustosos en atenderlos.
                            </strong>
                        </div>
                    </div>
                </div>

                <Footer />
            </AppLayout>

            <style jsx>{`
                .informacion-cont{
                    width: 80%;
                    margin: 0 auto;
                    margin-bottom: 70px;
                }

                .titulo{
                    margin: 0;
                    background: white;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    font-size: 28px;
                    border-radius: 20px 20px 0 0; 
                }

                .info{
                    font-size: 20px;
                    text-align: justify;
                    padding: 15px 40px;
                    border: 1px solid white;
                    border-radius: 0 0 20px 20px;
                }

                .elemento{
                    padding: 25px 0 25px 0;
                    border-bottom: 1px solid white;
                    line-height: 1.4em;
                }

                .elemento-padrino{
                    padding: 30px 0;
                    border-bottom: 1px solid #ccdae8;
                    line-height: 1.4em;
                }

                .padrino-boton{
                    background: white;
                    padding: 8px;
                    text-align: center;
                    font-weight: bold;
                    border-bottom: 1px solid #ccdae8;
                    border-radius: 10px 10px 0 0;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }

                .padrino-info{
                    background: white;
                    padding: 0 40px;
                    border-radius: 0 0 10px 10px;
                }

                .titulo-padrino{
                    color: brown;
                    font-weight: bold;
                    padding-top: 10px;
                    padding-bottom: 10px;
                }

                .item-padrino{
                    padding: 0 0 15px 0px;
                }

                .subitem-padrino{
                    padding: 0 0 15px 20px;
                }

                .fuente{
                    text-align: right;
                }

                .fin{
                    border: none;
                    text-align: center;
                }

                .elemento p{
                    margin: 0;
                }

                .elemento-div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 20px 0;
                }

                .elemento-div p{
                    background: rgba(255, 255, 255, 0.5);
                    margin: 0 10px;
                    padding: 15px;
                    border-radius: 5px;
                }

                .telefonos{
                    display: flex;
                    justify-content: center;
                    padding: 20px 0;
                }

                .num{
                    width: 30%;
                    text-align: center;
                }

                @media screen and (max-width: 480px){
                    .informacion-cont{
                        width: 100%;
                        margin-bottom: 50px;
                    }

                    .titulo{
                        height: 50px;
                        line-height: 50px;
                        font-size: 22px;
                    }

                    .info{
                        font-size: 16px;
                        padding: 0 20px;
                        border: none;
                        border-radius: 0 0 20px 20px;
                        border-bottom: 1px solid white;
                    }

                    .elemento-div{
                        display: block;
                    }

                    .elemento-div p{
                        margin: 10px 0;
                    }

                    .padrino-info{
                        padding: 0 15px;
                    }

                    .elemento-padrino{
                        padding: 15px 0 25px 0;
                    }

                    .telefonos{
                        padding: 20px 0;
                    }
    
                    .num{
                        width: 50%;
                    }
                }
            `}</style>
        </> 
    )
}

export default Informacion;