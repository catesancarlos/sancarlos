export default function OptionsSection({ options, select, onSelect, bot, pos, scr }){

    return(
        <div>
            {
                options?.map((option, index) => 
                    <p
                        key={index}
                        className={select == index+1 && 'active'}
                        onClick={() => onSelect(index+1)}
                    >
                        {option}
                    </p>
                )
            }

            <style jsx>{`
                div{
                    display: flex;
                    justify-content: center;
                    margin-bottom: ${bot ? '40px' : pos ? '0' : '28px'};
                }

                p{
                    margin: 0 12px;
                    background: white;
                    padding: 9px 18px 10px 18px;
                    color: black;
                    font-size: 16px;
                    border-radius: 10px;
                    box-shadow: -1px 2px 3px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                }

                .active{
                    background: black;
                    color: white;
                }

                .active:nth-child(1){
                    background:${(options.length ==2 && !scr) ? '#245590' : 'black'};
                    color: white;
                }

                .active:nth-child(2){
                    background: ${(options.length ==2 && !scr) ? '#CC397B' : 'black'};
                    color: white;
                }

                @media screen and (max-width: 768px){
                    div{
                        flex-wrap: wrap;
                        margin-bottom: ${bot ? '35px' : pos ? '0' : '24px'};
                    }

                    p{
                        margin: 0;
                        padding: 5px 11px 5px 11px;
                        font-size: 14px;
                    }

                    /* p:nth-child(1){
                        margin: ${options.length==4 ? '0 4px 5px 10px' : '0 4px 5px 4px'};
                        border-radius: 10px 0 0 10px;
                    }

                    p:nth-child(2){
                        margin: ${options.length==4 ? '0 10px 5px 4px' : '0 4px 5px 4px'};
                        border-radius: ${(options.length==3 || options.length==6) ? '0' : '0 10px 10px 0'};
                    }

                    p:nth-child(3){
                        margin: ${options.length==3 ? '0 4px 5px 4px' : options.length==6 ? '0 0 5px 4px' : '3px 4px 0 4px'};
                        border-radius: ${options.length==3 ? '0 10px 10px 0' : options.length==6 ? '0 10px 10px 0' : '10px 0 0 10px'};
                    }

                    p:nth-child(4){
                        margin: 3px 4px 0 4px;
                        border-radius: 0 10px 10px 0;
                        border-radius: ${options.length==6 ? '10px 0 0 10px' : '0 10px 10px 0'};
                    }

                    p:nth-child(5){
                        margin: 3px 4px 0 4px;
                        border-radius: 0;
                    }

                    p:nth-child(6){
                        margin: 3px 4px 0 4px;
                        border-radius: 0 10px 10px 0;
                    } */

                    p:nth-child(1){
                        margin-right: 7px;
                        border-radius: 10px 0 0 10px;
                    }

                    p:nth-child(2){
                        margin-right: 7px;
                        border-radius: ${options.length==2 ? '0 10px 10px 0' : '0'};
                    }

                    p:nth-child(3){
                        margin-right: 7px;
                        border-radius: ${(options.length==3 || options.length==6) ? '0 10px 10px 0' : '0'};
                    }

                    p:nth-child(4){
                        margin: ${options.length==6 ? '6px 7px 0 0' : '0 7px 0 0'};
                        border-radius: ${options.length==6 ? '10px 0 0 10px' : '0 10px 10px 0'};
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