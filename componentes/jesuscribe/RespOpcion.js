export default function PespOpcion({ dato, index, select, onSelect, ml }){
    
    return(
        <div className='opcion' onClick={() => onSelect(index)}>
            {
                !ml && <span>{index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'})</span>
            }
            <strong>{dato}</strong>

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
                }

                .opcion:hover{
                    background: black;
                    color: white;
                }

                span{
                    position: absolute;
                    left: 20px;
                }

                strong{
                    margin-left: ${!ml ? '30px' : '15px'};
                }
            `}</style>
        </div>
    )
}