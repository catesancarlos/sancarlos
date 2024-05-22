const BotonNormal = ({ name, vf, activo, onSeleccion }) => (
    <>
        <p onClick={onSeleccion}>{name.split('&')[0]}</p>

        <style jsx>{`
            p{
                margin-top: 12px;
                background: ${activo ? 'brown' : 'white'};
                width: ${vf ? '49%' : 'auto'};
                padding: ${vf ? '20px 6px' : '6px 10px'};
                color: ${activo ? 'white' : 'black'};
                font-size: 16.5px;
                font-weight: ${activo ? 'bold' : '400'};
                /* text-align: center; */
                border-radius: 8px;
                cursor: pointer;
            }

            @media screen and (max-width: 768px){
                p{
                    margin-top: 10px;
                    padding: ${vf ? '18px 5px' : '7px 7px'};
                    font-size: 14px;
                    border: 1px solid brown;
                }
            }
        `}</style>
    </> 
)

export default BotonNormal