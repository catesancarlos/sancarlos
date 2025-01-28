import { Children } from "react";

export default function TitleSection({ title, desc, color, children, top }){
    return(
        <div className='title-section'>
            <div className='title'>
                <strong>{title}</strong>
                {children}
            </div>
            <p>{desc}</p>    

            <style jsx>{`
                .title-section{
                    margin-top: ${top ? '10px' : 0};
                    margin-bottom: 30px;
                }

                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                strong{
                    color: ${color ? color : 'black'};
                    font-size: 22px;
                }

                p{
                    margin-top: 6px;
                    font-size: 17px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    .title-section{
                        margin-bottom: 20px;
                    }

                    strong{
                        font-size: 20px;
                    }
                }
            `}</style>
        </div>
    )
}