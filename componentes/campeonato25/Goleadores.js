import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'

const opcionesArray = [
    {
        no: 1,
        name: 'Masculino'
    },
    {
        no: 2,
        name: 'Femenino'
    }
]

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
                options={opcionesArray}
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
                                <td>Kelly Pindo</td>
                                <td>Confirmación F.C. (22F)</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Valentina Campoverde</td>
                                <td>Las Galatas 1, 10 (21F)</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nathaly Zumba</td>
                                <td>Las Galatas 1, 10 (21F)</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Andrea Tacuri</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Domenica Espinoza</td>
                                <td>Las Misioneras (A2F)</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lizbeth Cueva</td>
                                <td>Génesis (23F)</td>
                                <td>6</td>
                            </tr>
                            <tr className='ita'>
                                <td>4</td>
                                <td>Maria Nieto</td>
                                <td>Traicioneras como Judas (25F)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Adela Pintado</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Carolina Minchay</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>5</td>
                            </tr>
                            <tr className='ita'>
                                <td>4</td>
                                <td>Erika Malla</td>
                                <td>Newcastells (14F)</td>
                                <td>5</td>
                            </tr>
                            <tr className='ita'>
                                <td>5</td>
                                <td>Monica Taday</td>
                                <td>Traicioneras como Judas (25F)</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Vanessa Aucapiña</td>
                                <td>Las Misioneras (A2F)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Mayerli Astudillo</td>
                                <td>Génesis (23F)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Emily Pindo</td>
                                <td>Estrellitas de María (2AF)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Belen Aguilar</td>
                                <td>Las Águilas (11F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Leidy Agila</td>
                                <td>Mujeres de Nazareth (A4F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Vanessa Dominguez</td>
                                <td>Las Ángeles Negros (13F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Paula Bonilla</td>
                                <td>Las Águilas (11F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Yaritza Chuisaca</td>
                                <td>Las Galatas 1, 10 (21F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Samantha Narvaez</td>
                                <td>Las Misioneras (A2F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Antonia Nieto</td>
                                <td>Traicioneras como Judas (25F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Adriana Ordoñez</td>
                                <td>Traicioneras como Judas (25F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Kendra Noblecilla</td>
                                <td>Newcastells (14F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Priscila Quizhpi</td>
                                <td>Las Águilas (11F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Anahi Mendoza</td>
                                <td>Club GNU (24F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Carla Caguana</td>
                                <td>Santa Fe (12F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Mirella Guzman</td>
                                <td>Las Misioneras (A2F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Emily Twirma</td>
                                <td>Las Misioneras (A2F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Danna Bravo</td>
                                <td>Camino a la Tierra Prometida (A5F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Fernanda Romero</td>
                                <td>Camino a la Tierra Prometida (A5F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Suri Cruz</td>
                                <td>Herederas de Dios (A1F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Mickeyla Chimbo</td>
                                <td>Herederas de Dios (A1F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Maite Ordoñez</td>
                                <td>Newcastells (14F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Maite Diaz</td>
                                <td>Herederas de Dios (A1F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Mirella Guzman</td>
                                <td>Las Misioneras (A2F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Karen Saldaña</td>
                                <td>Génesis (23F)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Shirley Lalvay</td>
                                <td>Las Ángeles Negros (13M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Micaela Cangas</td>
                                <td>Confirmación F.C. (22F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Autogol</td>
                                <td></td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                                <td className='c-t t2'><strong>115</strong></td>
                            </tr>
                            <tr className='info-inag'>
                                <td colSpan={10}><i>En Cursiva, jugadoras de equipos ya eliminados.</i></td>
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
                                <td>17</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nicolas Quizhpi</td>
                                <td>Camino a la tierra prometida (A5M)</td>
                                <td>14</td>
                            </tr>
                            <tr className='ita'>
                                <td>3</td>
                                <td>Jhoao Guachichulca</td>
                                <td>Los Pastores (23F)</td>
                                <td>10</td>
                            </tr>
                            <tr className='ita'>
                                <td>3</td>
                                <td>Jose Zhinin</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Julio Uzhca</td>
                                <td>Confirmación FC (22M)</td>
                                <td>7</td>
                            </tr>
                            <tr className='ita'>
                                <td>5</td>
                                <td>Franklin Taday</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>6</td>
                            </tr>
                            <tr className='ita'>
                                <td>5</td>
                                <td>Carlos Japa</td>
                                <td>Los Pastores (23F)</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Antony Agila</td>
                                <td>GDL (24M)</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Jorge Gonzalez</td>
                                <td>GDL (24M)</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Matias Lalvay</td>
                                <td>Los Misioneros (A2M)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Luis Aucapiña</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>5</td>
                            </tr>
                            <tr className='ita'>
                                <td>6</td>
                                <td>Dylan Campoverde</td>
                                <td>Los Hermanos de Jesús (A1M)</td>
                                <td>5</td>
                            </tr>
                            <tr className='ita'>
                                <td>6</td>
                                <td>Martin Dutan</td>
                                <td>Los Águilas (11M)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Camilo Pineda</td>
                                <td>Juntos con Cristo FC (1AM)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Ariel Chucutalli</td>
                                <td>GDL (24M)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Anderson Flores</td>
                                <td>Los Misioneros (A2M)</td>
                                <td>4</td>
                            </tr>
                            <tr className='ita'>
                                <td>7</td>
                                <td>Daniel torres</td>
                                <td>Santos y Religiosos F.C. (21F)</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Steven Enriquez</td>
                                <td>GDL (24M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Randy Guzman</td>
                                <td>GDL (24M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Justin Arevalo</td>
                                <td>Camino a la tierra prometida (A5M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Anthony Gonzales</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Esteven Ortiz</td>
                                <td>Los Misioneros (A2M)</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Alonso Pazmiño</td>
                                <td>Los Misioneros (A2M)</td>
                                <td>3</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Justin Castillo</td>
                                <td>Santos y Religiosos F.C. (21F)</td>
                                <td>3</td>
                            </tr>
                            <tr className='ita'>
                                <td>8</td>
                                <td>Santiago Espinosa</td>
                                <td>Los Águilas (11M)</td>
                                <td>3</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Matias Orellana</td>
                                <td>Newcastells (14M)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Michael Chisaguano</td>
                                <td>Newcastells (14M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Cristopher Gonzales</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Cristopher Mejia</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Julian Quito</td>
                                <td>Equipo Glorioso (A4M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Adrian Pauta</td>
                                <td>Equipo Glorioso (A4M)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Jhandri Beltran</td>
                                <td>Los Hermanos de Jesús (A1M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Joaquin Barbecho</td>
                                <td>Equipo de Dios (A4M)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Matias Cedeño</td>
                                <td>Confirmación FC (22F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Erick Aguayza</td>
                                <td>Confirmación FC (22F)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Joaquin Uzhca</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Anthony Maxi</td>
                                <td>Los Hermanos de Jesús (A1M)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Pedro Enriquez</td>
                                <td>Santos y Religiosos F.C. (21F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Anthony Guachichulca</td>
                                <td>Los Pastores (23F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Justin Siavichay</td>
                                <td>Los Pastores (23F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Justin Castillo</td>
                                <td>Santos y Religiosos F.C. (21F)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Leonardo Peralta</td>
                                <td>Peruanitos de Dios (2MM)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>9</td>
                                <td>Jordy Rodas</td>
                                <td>Peruanitos de Dios (2MM)</td>
                                <td>2</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Diego Barros</td>
                                <td>Newcastells (14M)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Hector Naula</td>
                                <td>Newcastells (14M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Miguel Yunga</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Erik Carchipulla</td>
                                <td>Los Pastores (23F)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Anderson Zhizhpon</td>
                                <td>Juntos con Cristo FC (1AM)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Justin Sarango</td>
                                <td>Los Hermanos de Jesús (A1M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Mario Rocano</td>
                                <td>Equipo Glorioso (A4M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Matias Mendoza</td>
                                <td>Equipo Glorioso (A4M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Sebastian Uzhca</td>
                                <td>Equipo de Dios (A4M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Emerzon Guahza</td>
                                <td>Equipo de Dios (A4M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Bruno Quizhpe</td>
                                <td>Equipo de Dios (A4M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Jordan Peralta</td>
                                <td>GDL (24M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Bryam Piña</td>
                                <td>Los Ángeles Negros (13M)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Ariel Guanuquiza</td>
                                <td>Peruanitos de Dios (2MM)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Esteban Mendez</td>
                                <td>Peruanitos de Dios (2MM)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>David CArriel</td>
                                <td>Fuerza Divina (2AM)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>S. Quito</td>
                                <td>Los Águilas (11M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Jose Zhinin</td>
                                <td>Traicioneros como Judas (25M)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Pedro Guaman</td>
                                <td>GDL (24M)</td>
                                <td>1</td>
                            </tr>
                            <tr className='ita'>
                                <td>10</td>
                                <td>Luiggi Narvaez</td>
                                <td>Peruanitos de Dios (2MM)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Autogol</td>
                                <td></td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                                <td className='c-t t2'><strong>203</strong></td>
                            </tr>
                            <tr className='info-inag'>
                                <td colSpan={10}><i>En Cursiva, jugadores de equipos ya eliminados.</i></td>
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
                    text-align: center;
                    border: 1px solid black;
                }

                .ita{
                    font-style: italic;
                    font-weight: 300;
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

                .info-inag td{
                    padding: 0;
                    font-size: 13px;
                    text-align: left;
                    border: none;
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