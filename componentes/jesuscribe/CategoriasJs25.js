export default function CategoriasJs25(){

    return (
        <div className='main'>
            <p className='pf1'>NIVELES</p>
            <p className='pf2'>
                El concurso está dividido en 6 niveles. Entre los niveles no hay diferencia en metodología 
                o participación, pero si en las preguntas que deberá estudiar cada alumno representante.
            </p>
            <p className='pf2'>
                Preguntas para cada nivel:
            </p>
            <p className='pf2 info'>
                {`Desplace la tabla y verá más información >>`}
            </p>
            <div className='bank' >
                <div></div>
                <div className='cat'>General</div>
                <div className='cat'>Vida de Jesús</div>
                <div className='cat'>Nuestra Iglesia</div>
                <div className='cat'>Liturgia</div>
                <div className='cat'>Sacrament...</div>
                <div className='cat'>Multiple</div>
                <div className='niv'>Iniciación</div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='non'>No estudiar esta categoría</div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='niv'>1 Comunión</div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='non'>No estudiar esta categoría</div>
                <div className='nor'>Preguntas multiplo de 3 <span>Ej: 3, 6, 9...</span></div>
                <div className='niv'>2 Comunión</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='non'>No estudiar esta categoría</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='niv'>Año Biblico</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='niv'>1 Confirm...</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='niv'>2 Confirm...</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
                <div className='nor'>Todo el cuestionario</div>
            </div>
            
            
            <style jsx>{`
                .main{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 10px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 20px;
                }

                .info{
                    display: none;
                }

                .bank{
                    margin-left: calc(50% - 420px);
                    font-size: 14px;
                    font-weight: 400;
                    display: grid;
                    grid-template-columns: 120px 120px 120px 120px 120px 120px 120px;
                }

                .bank div{
                    margin: 6px;
                    padding: 8px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 6px;
                    
                }

                .bank span{
                    font-size: 14px;
                    font-weight: 200;
                }

                .nor{
                    min-height: 70px;
                    border: 1px solid #00000066;
                }

                .cat{
                    background: #EE1C21;
                    color: white;
                    font-size: 15px;
                    font-weight: 500;
                    border: 1px solid transparent;
                }

                .niv{
                    background: #000000;
                    color: white;
                    font-size: 15px;
                    font-weight: 500;
                    border: 1px solid transparent;
                }

                .non{
                    border: 1px solid transparent;
                }

                @media screen and (max-width: 768px){
                    .info{
                        margin-top: 8px;
                        color: red;
                        display: block;
                        margin-bottom: 10px;
                    }

                    .bank{
                        margin-left: 0;
                        font-size: 13px;
                        grid-template-columns: 105px 105px 105px 105px 105px 105px 105px;
                        overflow-x: scroll;
                    }

                    .bank div{
                        margin: 4px;
                        padding: 8px 4px;
                    }

                    .bank span{
                        font-size: 13px;
                    }

                    .nor{
                        min-height: 66px;
                    }

                    .cat{
                        font-size: 13px;
                    }

                    .niv{
                        font-size: 13px;
                    }
                }
            `}</style>
        </div> 
    )
}