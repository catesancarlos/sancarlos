import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'

const Goleadores = () => {
    const [select, setSelect] = useState(2)

    return (
        <section>
            <TitleSection
                title='Goleadores Campeonato 2025'
                desc='Tablas de goleadores del Campeonato 2025.'
                color='#245590'
            />
            <OptionsSection
                options={['Masculino', 'Femenino']}
                select={select}
                onSelect={op => setSelect(op)}
            />
            <div className='tablas'>
                {
                    select == 2 ?
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
                                <td>Andrea Tacuri</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Kelly Pindo</td>
                                <td>Confirmación F.C. (22F)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Adela Pintado</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Emily Pindo</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Belen Aguilar</td>
                                <td>Las Águilas (11F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Erika Malla</td>
                                <td>Newcastells (14F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Anahi Mendoza</td>
                                <td>Club GNU (24F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Carolina Minchay</td>
                                <td>Las Águilas (11F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Oula Bonilla</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Kendra Noblecilla</td>
                                <td>Newcastells (14F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Carla Caguana</td>
                                <td>Santa Fe (12F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                                <td className='c-t t2'><strong>38</strong></td>
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
                                <td>Cristian Guamán</td>
                                <td>GDL (24M)</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Julio Uzhca</td>
                                <td>Confirmación FC (22M)</td>
                                <td>5</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Jorge Gonzalez</td>
                                <td>Predicadores (25M)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Jose Zhinin</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Luis Aucapiña</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Carlos Japa</td>
                                <td>Los Pastores (23F)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Steven Enriquez</td>
                                <td>GDL (24M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Gabriel Chucutay</td>
                                <td>Predicadores (24M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Matias Orellana</td>
                                <td>Newcastells (14M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Michael Chisaguano</td>
                                <td>Newcastells (14M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Anthony Gonzales</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Cristopher Gonzales</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Cristopher Mejia</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Diego Barros</td>
                                <td>Newcastells (14M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Hector Naula</td>
                                <td>Newcastells (14M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Miguel Yunga</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Erick Aguayza</td>
                                <td>Confirmación FC (22F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Jhoao Guachichulca</td>
                                <td>Los Pastores (23F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Erik Carchipulla</td>
                                <td>Los Pastores (23F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Justin Castillo</td>
                                <td>Santos y Religiosos F.C. (21F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Antony Agila</td>
                                <td>GDL (24M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Randy Guzman</td>
                                <td>GDL (24M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Franklin Taday</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Autogol</td>
                                <td></td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                                <td className='c-t t2'><strong>53</strong></td>
                            </tr>
                        </table>
                }
            </div>

            <style jsx>{`
                .tablas{
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                }

                .tablas table{
                    margin-top: 0;
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
                    .tablas{
                        flex-wrap: wrap;
                        justify-content: space-around;
                        align-items: flex-start;
                    }
                    
                    td{
                        font-size: 13px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Goleadores