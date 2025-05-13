import ItemCalendario from '../calendario/ItemCalendario'

export default function PosBiblicoFem(){

    return (
        <section>
            <div className='tables'>
                <strong className='title'>Final Año Bíblico - Femenino:</strong>
                <ItemCalendario
                    final
                    now={0}
                    res={[0, 0]}
                    home={false}
                    dia='Sábado'
                    fecha='17 Mayo'
                    hora='16h30'
                    genero='F'
                    equipos={['Los Misioneras', 'Mujeres de Nazareth']}
                    paralelos={['Año Bíblico 2 (F)', 'Año Bíblico 4 (F)']}
                    logos={['A2F', 'A4F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['red', 'red', 'white']
                    }}
                />
                <strong className='title'>Posiciones Año Bíblico - Femenino:</strong>
                <table>
                    <tr>
                        <td colSpan={10} className='title-table'>
                            <strong>Grupo A - Femenino</strong>
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
                        <td className='eq'>Las Misioneras (A2F)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>15</td>
                        <td className='tp'>3</td>
                        <td className='tp'>+12</td>
                        <td className='tp'><strong>6</strong></td>
                    </tr>
                    <tr>
                        <td className='tp' style={{ background: '#1BB16C', color: 'white' }}><strong>2</strong></td>
                        <td className='eq'>Mujeres de Nazareth (A4F)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>1</td>
                        <td className='tp'>1</td>
                        <td className='tp'>0</td>
                        <td className='tp'>4</td>
                        <td className='tp'>2</td>
                        <td className='tp'>+2</td>
                        <td className='tp'><strong>4</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td className='eq'>Herederas de Dios (A1F)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>1</td>
                        <td className='tp'>1</td>
                        <td className='tp'>3</td>
                        <td className='tp'>11</td>
                        <td className='tp'>-8</td>
                        <td className='tp'><strong>1</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>4</td>
                        <td className='eq'>Camino a la Tierra Prometida (A5F)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>2</td>
                        <td className='tp'>2</td>
                        <td className='tp'>8</td>
                        <td className='tp'>-6</td>
                        <td className='tp'><strong>0</strong></td>
                    </tr>
                    <tr className='info-inag'>
                        <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Equipo clasificado a la final.</td>
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
                        <td>Camino a la Tierra Prometida (A5F)</td>
                        <td>2</td>
                        <td>vs.</td>
                        <td>6</td>
                        <td>Las Misioneras (A2F)</td>
                    </tr>
                    <tr>
                        <td>Mujeres de Nazareth (A4F)</td>
                        <td>2</td>
                        <td>vs.</td>
                        <td>2</td>
                        <td>Herederas de Dios (A1F)</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 2</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Camino a la Tierra Prometida (A5F)</td>
                        <td>0</td>
                        <td>vs.</td>
                        <td>2</td>
                        <td>Mujeres de Nazareth (A4F)</td>
                    </tr>
                    <tr>
                        <td>Las Misioneras (A2F)</td>
                        <td>9</td>
                        <td>vs.</td>
                        <td>1</td>
                        <td>Herederas de Dios (A1F)</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 3</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Herederas de Dios (A1F)</td>
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

            <style jsx>{`
                .title{
                    margin-top: 28px;
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 25px;
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
                }
            `}</style>
        </section> 
    )
}