export default function ContEquipos({ nivel, children }){

    return (
        <>
            <strong>{nivel}</strong>
            <div className='cont-logos'>
                {children}
            </div>
            
            <style jsx>{`
                strong{
                    background: #245590;
                    padding: 6px 10px 8px 10px;
                    color: white;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    letter-spacing: 1px;
                    display: block;
                    border-radius: 8px;
                }

                .cont-logos{
                    margin-top: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                }

                @media screen and (max-width: 768px){
                    .cont-logos{
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </> 
    )
}