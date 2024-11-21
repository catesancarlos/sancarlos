import AppLayout from "../../componentes/layout";

export default function Catequistas(){

    return(
        <AppLayout titulo='San Carlos - Confirmación' name='Catequistas'>
            <section>
                <div>
                    <img src='/catexample.png' />
                    <p>INICIACIÓN</p>
                </div>
                <div>
                    <img src='/catexample.png' />
                    <p>1RO COMUNIÓN</p>
                </div>
                <div>
                    <img src='/catexample.png' />
                    <p>2DO COMUNIÓN</p>
                </div>
                <div>
                    <img src='/catexample.png' />
                    <p>AÑO BIBLICO</p>
                </div>
                <div>
                    <img src='/catexample.png' />
                    <p>1RO CONFIRMACIÓN</p>
                </div>
                <div>
                    <img src='/catexample.png' />
                    <p>2DO CONFIRMACIÓN</p>
                </div>
            </section>

            <style jsx>{`
                section{
                    padding: 0 50px;
                    display: flex;
                    justify-content: center;
                    flex: 1;
                    flex-wrap: wrap
                }

                div{
                    position: relative;
                    width: 400px;
                    height: 215px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 30px 55px 30px 55px;
                }

                img{
                    position: absolute;
                    top: -30px;
                    left: 5%;
                    width: 90%;
                    clip-path: inset(0px 0px 90px 0px);
                    -webkit-filter: drop-shadow(0px 0px 10px #777);
                    filter: drop-shadow(0px 0px 10px #777);
                }

                p{
                    position: absolute;
                    background: #00000077;
                    backdrop-filter: blur(10px);
                    top: 155px;
                    width: 100%;
                    padding: 10px 0;
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    /* border: 2px solid black; */
                    border-radius: 15px;
                    box-shadow: 0px 3px 8px 2px #777;
                }
            `}</style>
        </AppLayout>
    )
}