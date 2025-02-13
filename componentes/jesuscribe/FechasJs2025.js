export default function FechasJs25(){

    return (
        <div className='main'>
            <p className='pf1'>FECHAS DEL CONCURSO</p>
            <p className='pf2'>
                El concurso se llevara a cabo en los meses de marzo y abril. Las fechas exactas para cada 
                nivel se anunciaran en pocos dias.
            </p>
            
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

                @media screen and (max-width: 768px){
                    .info{
                        margin-top: 8px;
                        color: red;
                        display: block;
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </div> 
    )
}