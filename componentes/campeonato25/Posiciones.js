import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'
import Equipo from './Equipo'
import PosConfMas from './PosConfMas'

const Posiciones = () => {
    const [select, setSelect] = useState(3)

    return (
        <section>
            <TitleSection
                title='Posiciones Campeonato 2025'
                desc='Tablas de posiciones y clasificatorias.'
            />
            <OptionsSection
                options={['Año Biblico (M)', 'Año Biblico (F)', 'Confirmación (M)', 'Confirmación (F)']}
                select={select}
                onSelect={op => setSelect(op)}
            />
            {
                select == 1 ?
                    <>
                        <div className='ta-2'>
                            <p className='pf1'>Posiciones:</p>
                            <table>
                                <tr>
                                    <td colSpan={10}><strong>Grupo A - Masculino</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'><strong>#</strong></td>
                                    <td><strong>Equipo</strong></td>
                                    <td className='tp'><strong>PJ</strong></td>
                                    <td className='tp'><strong>G</strong></td>
                                    <td className='tp'><strong>E</strong></td>
                                    <td className='tp'><strong>P</strong></td>
                                    <td className='tp'><strong>GF</strong></td>
                                    <td className='tp'><strong>GC</strong></td>
                                    <td className='tp'><strong>GD</strong></td>
                                    <td className='tp'><strong>PTS</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>1</td>
                                    <td className='eq'>Los Ángeles Bíblicos (A3M)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>2</td>
                                    <td className='eq'>Los Misioneros (A2M)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>3</td>
                                    <td className='eq'>Equipo de Dios (A4M)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={10}><strong>Grupo B - Masculino</strong></td>
                                </tr>
                                <tr>
                                <td className='tp'><strong>#</strong></td>
                                    <td><strong>Equipo</strong></td>
                                    <td className='tp'><strong>PJ</strong></td>
                                    <td className='tp'><strong>G</strong></td>
                                    <td className='tp'><strong>E</strong></td>
                                    <td className='tp'><strong>P</strong></td>
                                    <td className='tp'><strong>GF</strong></td>
                                    <td className='tp'><strong>GC</strong></td>
                                    <td className='tp'><strong>GD</strong></td>
                                    <td className='tp'><strong>PTS</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>1</td>
                                    <td className='eq'>Equipo Glorioso (A4M)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>2</td>
                                    <td className='eq'>Hermanos de Jesús (A1M)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>3</td>
                                    <td className='eq'>Camino a la Tierra Prometida (A5M)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                            </table>
                        </div>
                        <div className='cont-partidos'>
                            <p className='pf1'>Resultados:</p>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 1</strong></td>
                                </tr>
                                <tr>
                                    <td>Los Ángeles Bíblicos (A3M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Los Misioneros (A2M)</td>
                                </tr>
                                <tr>
                                    <td>Equipo Glorioso (A4M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Hermanos de Jesús (A1M)</td>
                                </tr>
                                <tr>
                                    <td>Equipo de Dios (A4M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Camino a la Tierra Prometida (A5M)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 2</strong></td>
                                </tr>
                                <tr>
                                    <td>Los Ángeles Bíblicos (A3M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Equipo de Dios (A4M)</td>
                                </tr>
                                <tr>
                                    <td>Equipo Glorioso (A4M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Camino a la Tierra Prometida (A5M)</td>
                                </tr>
                                <tr>
                                    <td>Los Misioneros (A2M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Hermanos de Jesús (A1M)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 3</strong></td>
                                </tr>
                                <tr>
                                    <td>Los Misioneros (A2M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Equipo de Dios (A4M)</td>
                                </tr>
                                <tr>
                                    <td>Hermanos de Jesús (A1M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Camino a la Tierra Prometida (A5M)</td>
                                </tr>
                                <tr>
                                    <td>Los Ángeles Bíblicos (A3M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Equipo Glorioso (A4M)</td>
                                </tr>
                            </table>
                        </div>
                    </>
                : select == 2 ?
                    <>
                        <div className='ta-2'>
                            <p className='pf1'>Posiciones:</p>
                            <table>
                                <tr>
                                    <td colSpan={10}><strong>Grupo A - Femenino</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'><strong>#</strong></td>
                                    <td><strong>Equipo</strong></td>
                                    <td className='tp'><strong>PJ</strong></td>
                                    <td className='tp'><strong>G</strong></td>
                                    <td className='tp'><strong>E</strong></td>
                                    <td className='tp'><strong>P</strong></td>
                                    <td className='tp'><strong>GF</strong></td>
                                    <td className='tp'><strong>GC</strong></td>
                                    <td className='tp'><strong>GD</strong></td>
                                    <td className='tp'><strong>PTS</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>1</td>
                                    <td className='eq'>Camino a la Tierra Prometida (A5F)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>2</td>
                                    <td className='eq'>Las Misioneras (A2F)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>3</td>
                                    <td className='eq'>Mujeres de Nazareth (A4F)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                                <tr>
                                    <td className='tp'>4</td>
                                    <td className='eq'>Las Herederas de Dios (A1F)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                            </table>
                        </div>
                        <div className='cont-partidos'>
                            <p className='pf1'>Resultados:</p>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 1</strong></td>
                                </tr>
                                <tr>
                                    <td>Camino a la Tierra Prometida (A5F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Misioneras (A2F)</td>
                                </tr>
                                <tr>
                                    <td>Mujeres de Nazareth (A4F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Herederas de Dios (A1F)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 2</strong></td>
                                </tr>
                                <tr>
                                    <td>Camino a la Tierra Prometida (A5F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Mujeres de Nazareth (A4F)</td>
                                </tr>
                                <tr>
                                    <td>Las Misioneras (A2F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Herederas de Dios (A1F)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 3</strong></td>
                                </tr>
                                <tr>
                                    <td>Las Herederas de Dios (A1F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Camino a la Tierra Prometida (A5F)</td>
                                </tr>
                                <tr>
                                    <td>Las Misioneras (A2F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Mujeres de Nazareth (A4F)</td>
                                </tr>
                            </table>
                        </div>
                    </>
                : select == 4 ?
                    <>
                        <div className='ta-2'>
                            <p className='pf1'>Posiciones:</p>
                            <table>
                                <tr>
                                    <td colSpan={10}><strong>Grupo A - Femenino</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'><strong>#</strong></td>
                                    <td><strong>Equipo</strong></td>
                                    <td className='tp'><strong>PJ</strong></td>
                                    <td className='tp'><strong>G</strong></td>
                                    <td className='tp'><strong>E</strong></td>
                                    <td className='tp'><strong>P</strong></td>
                                    <td className='tp'><strong>GF</strong></td>
                                    <td className='tp'><strong>GC</strong></td>
                                    <td className='tp'><strong>GD</strong></td>
                                    <td className='tp'><strong>PTS</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>1</td>
                                    <td className='eq'>Confirmación FC (22F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>3</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>+2</td>
                                    <td className='tp'><strong>3</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>2</td>
                                    <td className='eq'>Las Gálatas 1, 10 (21F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>10</td>
                                    <td className='tp'>9</td>
                                    <td className='tp'>+1</td>
                                    <td className='tp'><strong>3</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>3</td>
                                    <td className='eq'>Traicioneras como Júdas (25F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>9</td>
                                    <td className='tp'>10</td>
                                    <td className='tp'>-1</td>
                                    <td className='tp'><strong>0</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>4</td>
                                    <td className='eq'>Club GNU (24F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>3</td>
                                    <td className='tp'>-2</td>
                                    <td className='tp'><strong>0</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>5</td>
                                    <td className='eq'>Génesis (23F)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={10}><strong>Grupo B - Femenino</strong></td>
                                </tr>
                                <tr>
                                <td className='tp'><strong>#</strong></td>
                                    <td><strong>Equipo</strong></td>
                                    <td className='tp'><strong>PJ</strong></td>
                                    <td className='tp'><strong>G</strong></td>
                                    <td className='tp'><strong>E</strong></td>
                                    <td className='tp'><strong>P</strong></td>
                                    <td className='tp'><strong>GF</strong></td>
                                    <td className='tp'><strong>GC</strong></td>
                                    <td className='tp'><strong>GD</strong></td>
                                    <td className='tp'><strong>PTS</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>1</td>
                                    <td className='eq'>Estrellitas de Maria (2AF)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>8</td>
                                    <td className='tp'>3</td>
                                    <td className='tp'>+5</td>
                                    <td className='tp'><strong>3</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>2</td>
                                    <td className='eq'>Newcastells (14F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>3</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>+2</td>
                                    <td className='tp'><strong>3</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>3</td>
                                    <td className='eq'>Santa Fe (12F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>3</td>
                                    <td className='tp'>-2</td>
                                    <td className='tp'><strong>0</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>4</td>
                                    <td className='eq'>Las Águilas (11F)</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>1</td>
                                    <td className='tp'>3</td>
                                    <td className='tp'>8</td>
                                    <td className='tp'>-5</td>
                                    <td className='tp'><strong>0</strong></td>
                                    
                                </tr>
                                <tr>
                                    <td className='tp'>5</td>
                                    <td className='eq'>Las Ángeles Negros (13F)</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                    <td className='tp'>0</td>
                                </tr>
                            </table>
                        </div>
                        <div className='cont-partidos'>
                            <p className='pf1'>Resultados:</p>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 1</strong></td>
                                </tr>
                                <tr>
                                    <td>Confirmación FC (22F)</td>
                                    <td>3</td>
                                    <td>vs.</td>
                                    <td>1</td>
                                    <td>Club GNU (24F)</td>
                                </tr>
                                <tr>
                                    <td>Las Gálatas 1, 10 (21F)</td>
                                    <td>10</td>
                                    <td>vs.</td>
                                    <td>9</td>
                                    <td>Traicioneras como Júdas (25F)</td>
                                </tr>
                                <tr>
                                    <td>Santa Fe (12F)</td>
                                    <td>1</td>
                                    <td>vs.</td>
                                    <td>3</td>
                                    <td>Newcastells (14F)</td>
                                </tr>
                                <tr>
                                    <td>Las Águilas (11F)</td>
                                    <td>3</td>
                                    <td>vs.</td>
                                    <td>8</td>
                                    <td>Estrellitas de Maria (2AF)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 2</strong></td>
                                </tr>
                                <tr>
                                    <td>Club GNU (24F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Gálatas 1, 10 (21F)</td>
                                </tr>
                                <tr>
                                    <td>Traicioneras como Júdas (25F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Génesis (23F)</td>
                                </tr>
                                <tr>
                                    <td>Newcastells (14F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Águilas (11F)</td>
                                </tr>
                                <tr>
                                    <td>Estrellitas de Maria (2AF)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Ángeles Negros (13F)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 3</strong></td>
                                </tr>
                                <tr>
                                    <td>Confirmación FC (22F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Génesis (23F)</td>
                                </tr>
                                <tr>
                                    <td>Santa Fe (12F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Ángeles Negros (13F)</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td colSpan={5}><strong>Fecha 4</strong></td>
                                </tr>
                                <tr>
                                    <td>Confirmación FC (22F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Santa Fe (12F)</td>
                                </tr>
                                <tr>
                                    <td>Club GNU (24F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Newcastells (14F)</td>
                                </tr>
                                <tr>
                                    <td>Las Gálatas 1, 10 (21F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Águilas (11F)</td>
                                </tr>
                                <tr>
                                    <td>Traicioneras como Júdas (25F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Estrellitas de Maria (2AF)</td>
                                </tr>
                                <tr>
                                    <td>Génesis (23F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Las Ángeles Negros (13F)</td>
                                </tr>
                            </table>
                        </div>
                    </>
                :
                    <>
                        <p className='pf1 msc'>Fixture:</p>
                        <PosConfMas />
                        {/* <div className='ta-2'>
                            <table className='t1'>
                                <tr>
                                    <td className='tmp'>A</td>
                                    <td>Confirmación FC (22M)</td>
                                    <td>7</td>
                                    <td>vs.</td>
                                    <td>5</td>
                                    <td>Los Pastores (23M)</td>
                                </tr>
                                <tr>
                                    <td className='tmp'>B</td>
                                    <td>Santos y Religiosos FC (21M)</td>
                                    <td>1</td>
                                    <td>vs.</td>
                                    <td>9</td>
                                    <td>GDL (24M)</td>
                                </tr>
                                <tr>
                                    <td className='tmp'>C</td>
                                    <td>Santa Fe (12M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Los Angeles Negros (13M)</td>
                                </tr>
                                <tr>
                                    <td className='tmp'>D</td>
                                    <td>Fuerza Divina (2AM)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Newcastells (14M)</td>
                                </tr>
                                <tr>
                                    <td className='tmp'>E</td>
                                    <td>Predicadores (24M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Traicioneros como Judas (25M)</td>
                                </tr>
                                <tr>
                                    <td className='tmp'>F</td>
                                    <td>Los Águilas (11M)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Juntos con Cristo (1AM)</td>
                                </tr>
                            </table>
                        </div>
                        <div className='ta-2 hor'>
                            <table className='t21'>
                                <tr>
                                    <td colSpan={4} className='tmp'><strong>Ganadores</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>(22M) Confirmación FC</td>
                                    <td className='tp'>[1 - 0]</td>
                                    <td className='tp'>(24M) GDL</td>
                                    <td className='tp'>[1 - 0]</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='tp'>GC</td>
                                    <td colSpan={2} className='tp'>GD</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='tp'>GE</td>
                                    <td colSpan={2} className='tp'>GF</td>
                                </tr>
                            </table>
                            <table className='t21'>
                                <tr>
                                    <td colSpan={4} className='tmp'><strong>Perdedores</strong></td>
                                </tr>
                                <tr>
                                    <td className='tp'>(23M) Los Pastores</td>
                                    <td className='tpp'>[0 - 1]</td>
                                    <td className='tp'>(21M) Santos y Religiosos FC</td>
                                    <td className='tpp'>[0 - 1]</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='tp'>PC</td>
                                    <td colSpan={2} className='tp'>PD</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='tp'>PE</td>
                                    <td colSpan={2} className='tp'>PF</td>
                                </tr>
                            </table>
                        </div> */}
                    </>

            }

            <style jsx>{`
                .pf1{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                }

                .msc{
                    margin-bottom: 25px;
                }

                .ta-2{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hor{
                    flex-direction: row;
                    justify-content: center;
                }

                .ta-2 table{
                    margin-top: 25px;
                }

                .t21{
                    margin: 0 20px;
                }

                .t21 .tp{
                    width: auto;
                }

                .t21 .tpp{
                    width: 50px;
                }

                .eq{
                    width: 270px;
                    text-align: left;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid black;
                }

                .tp{
                    width: 40px;
                }

                .cont-partidos{
                    margin-top: 30px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cont-partidos table{
                    margin-top: 20px;
                }

                @media screen and (max-width: 768px){
                    .msc{
                        margin-bottom: 15px;
                    }

                    td{
                        font-size: 13px;
                    }

                    .ta-2 table{
                        margin-top: 15px;
                    }

                    .hor{
                        flex-direction: column;
                    }

                    .cont-partidos{
                        margin-top: 20px;
                    }

                    .cont-partidos table{
                        margin-top: 15px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Posiciones