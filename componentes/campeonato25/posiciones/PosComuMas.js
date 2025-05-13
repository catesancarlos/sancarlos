import ItemCalendario from '../calendario/ItemCalendario'
import Final2ComuMas from './Final2ComuMas'

export default function PosComuMas(){

    return (
        <section>
            <div className='tables'>
                <strong className='title'>Final 2do Comunión - Masculino:</strong>
                <ItemCalendario
                    final
                    now={0}
                    res={[0, 0]}
                    home={false}
                    dia='Domingo'
                    fecha='18 Mayo'
                    hora='14h50'
                    genero='M'
                    equipos={['Leones de Dios', 'Pueblo de Israel']}
                    paralelos={['2 Comun. 3 (M)', '2 Comun. 1 (M)']}
                    logos={['23M', '21M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <strong className='title'>Fase Final 2do Comunión - Masculino:</strong>
                <div className='final'>
                    <Final2ComuMas />
                    <p className='info'>{`<< Mueve el cuadro a la izquierda para ver más`}</p>
                </div>
                <strong className='title'>Posiciones 2do Comunión - Masculino:</strong>
                <table>
                    <tr>
                        <td colSpan={10} className='title-table'>
                            <strong>Grupo A - Masculino</strong>
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
                    <tr>
                        <td className='tp' style={{ background: '#1BB16C', color: 'white' }} ><strong>1</strong></td>
                        <td className='eq'>Los leones de Dios (23M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>1</td>
                        <td className='tp'>1</td>
                        <td className='tp'>0</td>
                        <td className='tp'>17</td>
                        <td className='tp'>10</td>
                        <td className='tp'>+7</td>
                        <td className='tp'><strong>4</strong></td>
                    </tr>
                    <tr>
                        <td className='tp' style={{ background: '#1BB16C', color: 'white' }} ><strong>2</strong></td>
                        <td className='eq'>Pueblo de Israel (21M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>1</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>14</td>
                        <td className='tp'>9</td>
                        <td className='tp'>+5</td>
                        <td className='tp'><strong>4</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td className='eq'>Los Historicos (22M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>2</td>
                        <td className='tp'>5</td>
                        <td className='tp'>17</td>
                        <td className='tp'>-12</td>
                        <td className='tp'><strong>0</strong></td>
                    </tr>
                    <tr className='info-inag'>
                        <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={10} className='title-table'>
                            <strong>Grupo B - Masculino</strong>
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
                    <tr>
                        <td className='tp' style={{ background: '#1BB16C', color: 'white' }}><strong>1</strong></td>
                        <td className='eq'>Instrumentos de Dios (26M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>12</td>
                        <td className='tp'>6</td>
                        <td className='tp'>+6</td>
                        <td className='tp'><strong>6</strong></td>
                    </tr>
                    <tr>
                        <td className='tp' style={{ background: '#1BB16C', color: 'white' }}><strong>2</strong></td>
                        <td className='eq'>Guerreros contra el mal (24M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>1</td>
                        <td className='tp'>0</td>
                        <td className='tp'>1</td>
                        <td className='tp'>8</td>
                        <td className='tp'>2</td>
                        <td className='tp'>+6</td>
                        <td className='tp'><strong>3</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td className='eq'>El Maná (25M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>2</td>
                        <td className='tp'>6</td>
                        <td className='tp'>18</td>
                        <td className='tp'>-12</td>
                        <td className='tp'><strong>0</strong></td>
                    </tr>
                    <tr className='info-inag'>
                        <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                    </tr>
                </table>
            </div>
            <div className='tables partidos'>
                <strong className='title'>Resultados:</strong>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 1</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Pueblo de Israel (21M)</td>
                        <td>7</td>
                        <td>vs.</td>
                        <td>2</td>
                        <td>Los Historicos (22M)</td>
                    </tr>
                    <tr>
                        <td>Guerreros contra el mal (24M)</td>
                        <td>8</td>
                        <td>vs.</td>
                        <td>0</td>
                        <td>El Maná (25M)</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 2</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Pueblo de Israel (21M)</td>
                        <td>7</td>
                        <td>vs.</td>
                        <td>7</td>
                        <td>Los leones de Dios (23M)</td>
                    </tr>
                    <tr>
                        <td>Guerreros contra el mal (24M)</td>
                        <td>0</td>
                        <td>vs.</td>
                        <td>2</td>
                        <td>Instrumentos de Dios (26M)</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 3</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Los Historicos (22M)</td>
                        <td>3</td>
                        <td>vs.</td>
                        <td>10</td>
                        <td>Los leones de Dios (23M)</td>
                    </tr>
                    <tr>
                        <td>El Maná (25M)</td>
                        <td>6</td>
                        <td>vs.</td>
                        <td>10</td>
                        <td>Instrumentos de Dios (26M)</td>
                    </tr>
                </table>
            </div>

            <style jsx>{`
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
                    background: #245590;
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