export default function GolMasTarde(){
    return(
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
            {/* <tr>
                <td>1</td>
                <td>Cristian Guamán</td>
                <td>GDL (24M)</td>
                <td style={{ background: '#C8B273' }}>20</td>
            </tr> */}
            <tr>
                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                <td className='c-t t2'><strong>0</strong></td>
            </tr>
           {/*  <tr className='info-inag'>
                <td colSpan={10}><i>En Cursiva, jugadores de equipos ya eliminados.</i></td>
            </tr> */}

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
        </table>
    )
}