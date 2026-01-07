/* import BannerCampeon from '../BannerCampeon'
import ItemCalendario from '../calendario/ItemCalendario2025'
import FinalConfFem from './FinalConfFem'

import equipos from '../../../datos/campeonato25/equiposConfirmacion'
import FotosConfFem from './FotosConfFem' */

import equipos from '../../../datos/campeonato26/equiposConfirmacion'

let GRUPO_SEGUI = [
    '',
    `${equipos.find(e => e.no === 11).fem} (${equipos.find(e => e.no === 11).id}F)`,
    `${equipos.find(e => e.no === 12).fem} (${equipos.find(e => e.no === 12).id}F)`,
    `${equipos.find(e => e.no === 13).fem} (${equipos.find(e => e.no === 13).id}F)`,
    `${equipos.find(e => e.no === 14).fem} (${equipos.find(e => e.no === 14).id}F)`,
    `${equipos.find(e => e.no === 15).fem} (${equipos.find(e => e.no === 15).id}F)`,
]

let GRUPO_CONFIR = [
    '',
    `${equipos.find(e => e.no === 21).fem} (${equipos.find(e => e.no === 21).id}F)`,
    `${equipos.find(e => e.no === 22).fem} (${equipos.find(e => e.no === 22).id}F)`,
    `${equipos.find(e => e.no === 23).fem} (${equipos.find(e => e.no === 23).id}F)`,
    `${equipos.find(e => e.no === 24).fem} (${equipos.find(e => e.no === 24).id}F)`,
    `${equipos.find(e => e.no === 25).fem} (${equipos.find(e => e.no === 25).id}F)`,
]

export default function PosConfFem(){

    return (
        <section>
            {/* <strong className='title'>2do Confirmación - Campeonas:</strong>
            <BannerCampeon
                img='/campeonato/campeonas2doConf.jpg'
                name='Gálatas 1, 10'
                group='2do de Confirmación 1'
                genre='F'
            /> */}
            <div className='tables'>
                {/* <strong className='title'>Confirmación (1 & 2) - Final Femenina:</strong>
                <ItemCalendario
                    final
                    now={0}
                    res={[6, 7]}
                    home={false}
                    dia='Domingo'
                    fecha='25 mayo'
                    hora='11h00'
                    genero='F'
                    equipos={[equipos[0].fem, equipos[1].fem]}
                    paralelos={[`${equipos[0].par} (F)`, `${equipos[1].par} (F)`]}
                    logos={[`${equipos[0].id}F`, `${equipos[1].id}F`]}
                    colores={{
                        eq1: equipos[0].cf,
                        eq2: equipos[1].cf
                    }}
                />
                <FotosConfFem />
                <strong className='title'>Confirmación (1 & 2) - Fase Final Femenina:</strong>
                <div className='final'>
                    <FinalConfFem />
                    <p className='info'>{`<< Mueve el cuadro a la izquierda para ver más`}</p>
                </div> */}
                <strong className='title'>Confirmación (1 & 2) - Posiciones:</strong>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={10} className='title-table'>
                                <strong>Grupo SEGUIMIENTO</strong>
                            </td>
                        </tr>
                        <tr className='label'>
                            <td className='tp'><strong>#</strong></td>
                            <td className='eq'><strong>Equipo</strong></td>
                            <td className='tp'><strong>PJ</strong></td>
                            <td className='tp'><strong>G</strong></td>
                            <td className='tp'><strong>E</strong></td>
                            <td className='tp'><strong>P</strong></td>
                            <td className='tp'><strong>GF</strong></td>
                            <td className='tp'><strong>GC</strong></td>
                            <td className='tp'><strong>GD</strong></td>
                            <td className='tp'><strong>PTS</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */><strong>1</strong></td>
                            <td className='eq'>{GRUPO_SEGUI[1]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */><strong>2</strong></td>
                            <td className='eq'>{GRUPO_SEGUI[2]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */><strong>3</strong></td>
                            <td className='eq'>{GRUPO_SEGUI[3]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp'>4</td>
                            <td className='eq'>{GRUPO_SEGUI[4]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp'>5</td>
                            <td className='eq'>{GRUPO_SEGUI[5]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        {/* <tr className='info-inag'>
                            <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                        </tr> */}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={10} className='title-table'>
                                <strong>Grupo CONFIRMACIÓN</strong>
                            </td>
                        </tr>
                        <tr className='label'>
                            <td className='tp'><strong>#</strong></td>
                            <td className='eq'><strong>Equipo</strong></td>
                            <td className='tp'><strong>PJ</strong></td>
                            <td className='tp'><strong>G</strong></td>
                            <td className='tp'><strong>E</strong></td>
                            <td className='tp'><strong>P</strong></td>
                            <td className='tp'><strong>GF</strong></td>
                            <td className='tp'><strong>GC</strong></td>
                            <td className='tp'><strong>GD</strong></td>
                            <td className='tp'><strong>PTS</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */><strong>1</strong></td>
                            <td className='eq'>{GRUPO_CONFIR[1]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */><strong>2</strong></td>
                            <td className='eq'>{GRUPO_CONFIR[2]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */><strong>3</strong></td>
                            <td className='eq'>{GRUPO_CONFIR[3]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp'>4</td>
                            <td className='eq'>{GRUPO_CONFIR[4]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td className='tp'>5</td>
                            <td className='eq'>{GRUPO_CONFIR[5]}</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'>0</td>
                            <td className='tp'><strong>0</strong></td>
                        </tr>
                        {/* <tr className='info-inag'>
                            <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                        </tr>
                        <tr className='info-inag'>
                            <td colSpan={10}>* Punto extra madrina (Se divide entre los 2 equipos del paralelo).</td>
                        </tr>
                        <tr className='info-inag'>
                            <td colSpan={10}>** 2 puntos extra por organización.</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className='tables partidos'>
                <strong className='title'>Resultados:</strong>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={5} className='title-fecha'>
                                <strong>Fecha 1</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{GRUPO_CONFIR[2]}</td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td>{GRUPO_CONFIR[4]}</td>
                        </tr>
                        <tr>
                            <td>{GRUPO_CONFIR[3]}</td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td>{GRUPO_CONFIR[5]}</td>
                        </tr>
                        <tr>
                            <td>{GRUPO_SEGUI[4]}</td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td>{GRUPO_SEGUI[5]}</td>
                        </tr>
                        <tr>
                            <td>{GRUPO_SEGUI[2]}</td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td>{GRUPO_SEGUI[3]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <style jsx>{`
                section{
                    display: flex;
                    flex-direction: column;
                }

                .title{
                    margin-top: 28px;
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 25px;
                }

                .final{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .info{
                    display: none;
                }

                .tables{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                table{
                    margin-bottom: 25px;
                }

                table:last-child{
                    margin-bottom: 0;
                }

                .title-table{
                    background: #CC397B;
                    color: white;
                    font-size: 14px;
                }

                .label td{
                    background: #00000033;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 14px;
                    font-weight: 200;
                    text-align: center;
                    border: 1px solid black;
                }

                .tp{
                    width: 40px;
                }

                .eq{
                    width: 270px;
                    text-align: left;
                }

                .title-fecha{
                    background: #00000044;
                    color: black;
                }

                .info-inag td{
                    padding: 0;
                    font-size: 13px;
                    text-align: left;
                    border: none;
                }

                @media screen and (max-width: 768px){
                    .title{
                        margin-top: 24px;
                        font-size: 16px;
                        margin-bottom: 12px;
                    }

                    .final{
                        margin-top: 8px;
                        width: calc(100% + 28px);
                        margin-left: 0;
                        align-items: flex-start;
                        margin-bottom: 10px;
                        overflow: scroll;
                    }

                    .info{
                        margin: 10px 0 0 14px;
                        color: red;
                        font-size: 14px;
                        display: block;
                        text-align: center;
                    }
                    
                    table{
                        width: 100%;
                        margin-bottom: 15px;
                    }

                    .title-table{
                        font-size: 13px;
                    }

                    td{
                        padding: 1px 3px 2px 3px;
                        font-size: 13px;
                    }

                    .tp{
                        width: auto;
                    }

                    .label td{
                        font-size: 12px;
                    }

                    .eq{
                        width: 270px;
                    }

                    .info-inag td{
                        font-size: 12px;
                    }
                }
            `}</style>
        </section> 
    )
}