export default function PosReconMas(){

    return (
        <section>
            <div className='tables'>
                <strong className='title'>Posiciones 1ro Comunión - Masculino:</strong>
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
                        <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */>1</td>
                        <td className='eq'>Los Misioneros (A2M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>15</td>
                        <td className='tp'>4</td>
                        <td className='tp'>+11</td>
                        <td className='tp'><strong>6</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>2</td>
                        <td className='eq'>Equipo de Dios (A4M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>1</td>
                        <td className='tp'>0</td>
                        <td className='tp'>1</td>
                        <td className='tp'>7</td>
                        <td className='tp'>9</td>
                        <td className='tp'>-2</td>
                        <td className='tp'><strong>3</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td className='eq'>Los Ángeles Bíblicos (A3M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>10</td>
                        <td className='tp'>-10</td>
                        <td className='tp'><strong>0</strong></td>
                    </tr>
                    {/* <tr className='info-inag'>
                        <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                    </tr> */}
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
                        <td className='tp' /* style={{ background: '#1BB16C', color: 'white' }} */>1</td>
                        <td className='eq'>Camino a la Tierra Prometida (A5M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>0</td>
                        <td className='tp'>15</td>
                        <td className='tp'>7</td>
                        <td className='tp'>+8</td>
                        <td className='tp'><strong>6</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>2</td>
                        <td className='eq'>Hermanos de Jesús (A1M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>1</td>
                        <td className='tp'>1</td>
                        <td className='tp'>10</td>
                        <td className='tp'>13</td>
                        <td className='tp'>-3</td>
                        <td className='tp'><strong>1</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td className='eq'>Equipo Glorioso (A4M)</td>
                        <td className='tp'>2</td>
                        <td className='tp'>0</td>
                        <td className='tp'>1</td>
                        <td className='tp'>1</td>
                        <td className='tp'>8</td>
                        <td className='tp'>12</td>
                        <td className='tp'>-4</td>
                        <td className='tp'><strong>1</strong></td>
                    </tr>
                    {/* <tr className='info-inag'>
                        <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                    </tr> */}
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
                        <td>Los Ángeles Bíblicos (A3M)</td>
                        <td>0</td>
                        <td>vs.</td>
                        <td>8</td>
                        <td>Los Misioneros (A2M)</td>
                    </tr>
                    <tr>
                        <td>Equipo Glorioso (A4M)</td>
                        <td>6</td>
                        <td>vs.</td>
                        <td>6</td>
                        <td>Hermanos de Jesús (A1M)</td>
                    </tr>
                    <tr>
                        <td>Equipo de Dios (A4M)</td>
                        <td>5</td>
                        <td>vs.</td>
                        <td>9</td>
                        <td>Camino a la Tierra Prometida (A5M)</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 2</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Los Ángeles Bíblicos (A3M)</td>
                        <td>0</td>
                        <td>vs.</td>
                        <td>2</td>
                        <td>Equipo de Dios (A4M)</td>
                    </tr>
                    <tr>
                        <td>Equipo Glorioso (A4M)</td>
                        <td>2</td>
                        <td>vs.</td>
                        <td>6</td>
                        <td>Camino a la Tierra Prometida (A5M)</td>
                    </tr>
                    <tr>
                        <td>Los Misioneros (A2M)</td>
                        <td>7</td>
                        <td>vs.</td>
                        <td>4</td>
                        <td>Hermanos de Jesús (A1M)</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={5} className='title-fecha'>
                            <strong>Fecha 3</strong>
                        </td>
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