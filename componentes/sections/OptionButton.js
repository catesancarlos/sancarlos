export default function OptionButton({ data, select, options, nogen, onSelect }){

    return(
        <div
            className={select == data.no && 'active'}
            onClick={() => onSelect(data.no)}
        >
            <p>{data.name}</p>
            {
                data.genero && 
                    <span style={{ background: data.genero == 'M' ? '#245590' : '#CC397B'}}>
                        {data.genero}
                    </span>
            }
    
            <style jsx>{`
                div{
                    position: relative;
                    margin: 0 12px;
                    background: white;
                    height: 28px;
                    padding: ${data.genero ? '0 43px 0 15px' : '0 15px'};
                    color: black;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                    box-shadow: -1px 2px 3px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                }

                p{          
                    min-width: 60px;        
                    text-align: center;
                }

                span{
                    position: absolute;
                    right: 0;
                    background: #245590;
                    width: 28px;
                    line-height: 28px;
                    color: white;
                    text-align: center;
                    border-radius: 0 6px 6px 0;
                }

                .active{
                    background: black;
                    color: white;
                }

                .active:nth-child(1){
                    background:${(options ==2 && !nogen) ? '#245590' : 'black'};
                    color: white;
                }

                .active:nth-child(2){
                    background: ${(options ==2 && !nogen)  ? '#CC397B' : 'black'};
                    color: white;
                }

                @media screen and (max-width: 768px){
                    p{
                        margin: 0;
                        padding: 5px 11px 5px 11px;
                        font-size: 14px;
                    }

                    p:nth-child(1){
                        margin-right: 7px;
                        border-radius: 10px 0 0 10px;
                    }

                    p:nth-child(2){
                        margin-right: 7px;
                        border-radius: ${options==2 ? '0 10px 10px 0' : '0'};
                    }

                    p:nth-child(3){
                        margin-right: 7px;
                        border-radius: ${(options==3 || options.length==6) ? '0 10px 10px 0' : '0'};
                    }

                    p:nth-child(4){
                        margin: ${options==6 ? '6px 7px 0 0' : '0 7px 0 0'};
                        border-radius: ${options==6 ? '10px 0 0 10px' : '0 10px 10px 0'};
                    }

                    p:nth-child(5){
                        margin: 6px 7px 0 0;
                        border-radius: 0;
                    }

                    p:nth-child(6){
                        margin: 6px 0 0 0;
                        border-radius: 0 10px 10px 0;
                    }
                }
            `}</style>
        </div>
    )
}