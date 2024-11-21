import AppLayout from '../componentes/layout'

export default function Blog(){

    return(
        <AppLayout titulo='San Carlos - Blog' name='Blog'>
            <section>
                <p className='title'>Temas por agregar</p>
                <p className='subtitle'>Visitanos más adelante</p>
            </section>

            <style jsx>{`
                section{
                    margin: 80px calc(50% - 150px) 0px calc(50% - 150px);
                    background: white;
                    width: 300px;
                    padding: 30px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 5px solid white;
                    border-radius: 15px;
                }

                .title{
                    font-size: 18px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                }
            `}</style>
        </AppLayout>
    )
}