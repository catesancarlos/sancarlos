import AppLayout from '../../componentes/layout'
import MenuParalelos from '../../componentes/evaluacion/menuParalelos'

export default function Confirmacion(){
    return(
        <AppLayout pagina='' titulo='2 Confirmación - Cate San Carlos'>
            <div className='container'>
                <section className='bienvenida'>
                    <p className='titulo'>BIENVENIDO</p>
                    <p className='linea'>Esta es la plataforma online, para los niveles de Segundo de Confirmación.</p>
                    <p className='linea'>Elije una de las opciones de la parte derecha para iniciar sesión.</p>
                    <p className='nota'>* Si tienes algun problema para Iniciar Sesión e Ingresar, comunicate con tu catequista.</p>
                </section>
                <section className='sesion'>
                    <div className='menu-sesion'>
                        <p>Primera vez</p>
                        <p>Normal</p>
                    </div>

                </section>
            </div>

            <style jsx>{`
                .container{
                    margin: 50px 75px;
                    display: flex;
                    justify-content: space-between;
                }

                .bienvenida{
                    width: 47.5%;
                    font-size: 20px;
                    
                }

                .titulo{
                    font-size: 1.5em;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 50px;
                }

                .linea{
                    margin-bottom: 20px;
                }

                .nota{
                    padding-left: 25px;
                    margin-top: 100px;
                    font-size: 15px;
                    text-align: right;
                }

                .sesion{
                    background: white;
                    width: 47.5%;
                    font-size: 20px;
                    border-radius: 25px;
                }

                .menu-sesion{
                    display: flex;
                    justify-content: center;
                }

                .menu-sesion p{
                    background: brown;
                    width: 150px;
                    margin: 15px 5px;
                    padding: 4px 10px;
                    color: white;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </AppLayout>
        
    )
}