import { useState } from 'react'

const Goleadores = () => {
    const [fem, setFem] = useState(false)

    return (
        <section>
            <p className='pf1'>Tabla de Goleadores</p>
            <p className='pf2'>
                Tablas de goleadores del Campeonato 2025
            </p>
            <div className='cont-op'>
                <p className={`op-nivel ${!fem && 'active'}`} onClick={() => setFem(false)}>Masculino</p>
                <p className={`op-nivel ${fem && 'active'}`} onClick={() => setFem(true)}>Femenino</p>
            </div>
            <div className='tablas'>
                {
                    fem ?
                        <table>
                            <tr>
                                <td colSpan={4} className='c-t-f'><strong>Femenino</strong></td>
                            </tr>
                            <tr>
                                <td><strong>#</strong></td>
                                <td><strong>Nombre</strong></td>
                                <td><strong>Equipo</strong></td>
                                <td><strong>Goles</strong></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Valentina Campoverde</td>
                                <td>Las Galatas 1, 10 (21F)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nathaly Zumba</td>
                                <td>Las Galatas 1, 10 (21F)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Maria Nieto</td>
                                <td>Traicioneras como Judas (25F)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Monica Taday</td>
                                <td>Traicioneras como Judas (25F)</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Kelly Pindo</td>
                                <td>Confirmación F.C. (22F)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Anahi Mendoza</td>
                                <td>Club GNU (24F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                                <td className='c-t t2'><strong>23</strong></td>
                            </tr>
                        </table>
                    :
                        <table>
                            <tr>
                                <td colSpan={4} className='c-t-m'><strong>Masculino</strong></td>
                            </tr>
                            <tr>
                                <td><strong>#</strong></td>
                                <td><strong>Nombre</strong></td>
                                <td><strong>Equipo</strong></td>
                                <td><strong>Goles</strong></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Julio Uzhca</td>
                                <td>Confirmación FC (22F)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cristian Guamán</td>
                                <td>GDL (24M)</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Carlos Japa</td>
                                <td>Los Pastores (23F)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Steven Enriquez</td>
                                <td>GDL (24M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Erick Aguayza</td>
                                <td>Confirmación FC (22F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Jhoao Guachichulca</td>
                                <td>Los Pastores (23F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Erik Carchipulla</td>
                                <td>Los Pastores (23F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Justin Castillo</td>
                                <td>Santos y Religiosos F.C. (21F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Antony Agila</td>
                                <td>GDL (24M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Randy Guzman</td>
                                <td>GDL (24M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                                <td className='c-t t2'><strong>21</strong></td>
                            </tr>
                        </table>
                }
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 5px;
                    font-size: 17px;
                    font-weight: 200;
                }

                .cont-op{
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;   
                }

                .op-nivel{
                    margin: 0 15px;
                    background: white;
                    padding: 4px 18px 6px 18px;
                    color: black;
                    font-size: 16px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .active:nth-child(1){
                    background: #245590;
                    color: white;
                }

                .active:nth-child(2){
                    background: #CC397B;
                    color: white;
                }

                .tablas{
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                }

                .tablas table{
                    margin-top: 25px;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid black;
                }

                tr td:nth-child(2){
                    text-align: left;
                }

                tr td:nth-child(3){
                    text-align: left;
                }

                tr td:last-child{
                    text-align: center;
                }

                .c-t{
                    background: black;
                    color: white;
                    border: 1px solid black;
                    
                }

                .t1{
                    border-radius: 0 0 0 10px;
                }

                .t2{
                    text-align: center;
                    border-radius: 0 0 10px 0;
                }
                
                .c-t-m{
                    background: #245590;
                    color: white;
                    border: 1px solid #245590;
                    border-radius: 10px 10px 0 0;
                }

                .c-t-f{
                    background: #CC397B;
                    color: white;
                    border: 1px solid #CC397B;
                    border-radius: 10px 10px 0 0;
                }

                .eq{
                    width: 270px;
                    text-align: left;
                }

                @media screen and (max-width: 768px){
                    .cont-op{
                        flex-wrap: wrap;
                    }

                    .op-nivel{
                        margin: 4px 4px 0 4px;
                        background: white;
                        padding: 4px 10px 6px 10px;
                        color: black;
                        font-size: 15px;
                        border-radius: 10px;
                        cursor: pointer;
                    }

                    td{
                        font-size: 13px;
                    }

                    .tablas{
                        flex-wrap: wrap;
                        justify-content: space-around;
                        align-items: flex-start;
                    }

                    .tablas table{
                        margin-top: 25px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Goleadores