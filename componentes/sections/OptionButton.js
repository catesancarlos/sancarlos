export default function OptionButton({ data, select, options, nogen, onSelect }){

    return(
        <div
            className={select == data.no && 'active'}
            onClick={() => onSelect(data.no)}
        >
            <p>{data.name}</p>
            { data.genero && <span>{data.genero}</span> }
    
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
                    overflow: hidden;
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
                    background: ${data.genero == 'M' ? '#245590' : '#CC397B'};
                    width: 28px;
                    line-height: 28px;
                    color: white;
                    text-align: center;
                }

                .active{
                    background: black;
                    color: white;
                    border: ${data.genero == 'M' ? '2px solid #245590' : data.genero == 'F' ? '2px solid #CC397B' : 'none'};
                    box-shadow: -1px 4px 3px 0px #888;
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
                    div{
                        margin: 0;
                        height: 26px;
                        padding: ${data.genero ? '0 38px 0 10px' : '0 12px'};
                        font-size: 14px;
                    }

                    p{          
                        min-width: auto;        
                    }

                    span{
                        width: 26px;
                        line-height: 26px;
                    }

                    div:nth-child(1){
                        margin-right: 7px;
                        border-radius: 10px 0 0 10px;
                    }

                    div:nth-child(2){
                        margin-right: 7px;
                        border-radius: ${options==2 ? '0 10px 10px 0' : '0'};
                    }

                    div:nth-child(3){
                        margin-right: 7px;
                        border-radius: ${(options==3 || options==6) ? '0 10px 10px 0' : '0'};
                    }

                    div:nth-child(4){
                        margin: ${options==6 ? '6px 7px 0 0' : '0 7px 0 0'};
                        border-radius: ${options==6 ? '10px 0 0 10px' : '0 10px 10px 0'};
                    }

                    div:nth-child(5){
                        margin: 6px 7px 0 0;
                        border-radius: 0;
                    }

                    div:nth-child(6){
                        margin: 6px 0 0 0;
                        border-radius: 0 10px 10px 0;
                    }
                }
            `}</style>
        </div>
    )
}