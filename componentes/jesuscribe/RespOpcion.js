export default function PespOpcion({ dato, index, select, mitad, onSelect, ml }){
    
    return(
        <div className='opcion' onClick={() => onSelect(index)}>
            {
                !ml && <span>{index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'})</span>
            }
            <p>{dato}</p>

            <style jsx>{`
                .opcion{
                    position: relative;
                    margin-top: 25px;
                    background: ${select ? 'black' : 'white'};
                    width: 48%;
                    min-height: 60px;
                    padding: 7px 12px 8px 12px;
                    display: flex;
                    color: ${select ? 'white' : 'black'};
                    font-size: 20px;
                    justify-content: ${!ml ? 'center' : 'left'};
                    align-items: center;
                    text-align: ${!ml ? 'center' : 'left'};
                    border-radius: 30px;
                    transition: 0.5s ease;
                    cursor: pointer;
                    opacity: ${(mitad.length == 0) ?  1 : (index == mitad[0] || index == mitad[1]) ? 1 : 0};
                }

                .opcion:hover{
                    background: black;
                    color: white;
                }

                span{
                    position: absolute;
                    left: 20px;
                }

                p{
                    font-weight: bold;
                    margin-left: ${!ml ? '30px' : '15px'};
                }

                @media screen and (max-width: 768px){
                    .opcion{
                        margin-top: 15px;
                        width: 100%;
                        min-height: 32px;
                        padding: 8px 8px;
                        font-size: 17px;
                        border-radius: 20px;
                    }

                    span{
                        left: 12px;
                    }

                    p{
                        font-weight: 200;
                        margin-left: ${!ml ? '25px' : '15px'};
                    }
                }
            `}</style>
        </div>
    )
}