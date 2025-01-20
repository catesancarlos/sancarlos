import { useState } from 'react'
import Equipo from './Equipo'

const Posiciones = () => {
    const [nivel, setNivel] = useState(1)

    return (
        <section>
            <p className='pf1'>Posiciones Campeonato 2025</p>
            <p className='pf2'>
                Tablas de posiciones y clasificatorias.
            </p>
            <div className='cont-op'>
                <p className={`op-nivel ${nivel == 3 && 'active'}`} onClick={() => setNivel(3)}>Año Biblico (M)</p>
                <p className={`op-nivel ${nivel == 4 && 'active'}`} onClick={() => setNivel(4)}>Año Biblico (F)</p>
                <p className={`op-nivel ${nivel == 1 && 'active'}`} onClick={() => setNivel(1)}>Confirmación (M)</p>
                <p className={`op-nivel ${nivel == 2 && 'active'}`} onClick={() => setNivel(2)}>Confirmación (F)</p>
            </div>
            {
                nivel == 3 ?
                    <>
                        <div className='ta-2'>
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
                : nivel == 4 ?
                    <>
                        <div className='ta-2'>
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
                : nivel == 2 ?
                    <>
                        <div className='ta-2'>
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
                                    <td className='eq'>Santa Fe (12F)</td>
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
                                    <td className='eq'>Newcastells (14F)</td>
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
                                    <td className='eq'>Las Águilas (11F)</td>
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
                                    <td className='eq'>Estrellitas de Maria (2AF)</td>
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
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
                                    <td>Newcastells (14F)</td>
                                </tr>
                                <tr>
                                    <td>Las Águilas (11F)</td>
                                    <td>0</td>
                                    <td>vs.</td>
                                    <td>0</td>
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
                        <div className='ta-2'>
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
                        </div>
                    </>

            }

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
                    padding: 9px 18px 10px 18px;
                    color: black;
                    font-size: 16px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .active{
                    background: #245590;
                    color: white;
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
                    margin-top: 35px;
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
                    margin-top: 40px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cont-partidos table{
                    margin-top: 20px;
                }

                @media screen and (max-width: 768px){
                    .cont-op{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .op-nivel{
                        margin: 4px 4px 0 4px;
                        background: white;
                        padding: 9px 10px 10px 10px;
                        color: black;
                        font-size: 15px;
                        border-radius: 10px;
                        cursor: pointer;
                    }

                    .active{
                        background: #245590;
                        color: white;
                    }

                    td{
                        font-size: 13px;
                    }

                    .ta-2 table{
                        margin-top: 25px;
                    }

                    .hor{
                        flex-direction: column;
                    }

                    .cont-partidos{
                        margin-top: 25px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Posiciones