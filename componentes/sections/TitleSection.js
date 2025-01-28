export default function TitleSection({ title, desc, color }){
    return(
        <div>
            <strong>{title}</strong>
            <p>{desc}</p>    

            <style jsx>{`
                div{
                    margin-bottom: 30px;
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
                    div{
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