import HeaderSection from './HeaderSection'

export default function Container({ title, subtitle, img, children }){
    
    return(
        <div>
            <HeaderSection
                title={title}
                subtitle={subtitle}
                img={img}
            />
            <section>
                { children }
            </section>
            

            <style jsx>{`
                div{
                    margin: 20px 4% 0 4%;
                    width: 92%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                section{
                    margin-top: 35px;
                    width: 100%;
                    display: flex;
                    gap: 60px;
                }

                @media screen and (max-width: 768px){
                    div{
                        margin: 0 15px 0 15px;
                        width: calc(100% - 30px);
                    }

                    section{
                        margin-top: 25px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 25px;
                    }
                }
            `}</style>
        </div>
    )
}