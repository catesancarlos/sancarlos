import { Children } from "react";

export default function TitleSection({ title, desc, color, children }){
    return(
        <div className='title-section'>
            <div className='title'>
                <strong>{title}</strong>
                {children}
            </div>
            <i>{desc}</i>    

            <style jsx>{`
                .title-section{
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
                    margin-bottom: 6px;
                }

                i{
                    font-size: 17px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    .title-section{
                        margin-bottom: 20px;
                    }

                    strong{
                        font-size: 18px;
                        margin-bottom: 2px;
                    }

                    i{
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    )
}