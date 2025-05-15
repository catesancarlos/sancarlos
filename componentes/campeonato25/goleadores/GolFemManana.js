export default function GolFemManana(){
    return(
        <table>
            <tr>
                <td colSpan={4} className='c-t-f'><strong>Femenino (mañana)</strong></td>
            </tr>
            <tr>
                <td><strong>#</strong></td>
                <td><strong>Nombre</strong></td>
                <td><strong>Equipo</strong></td>
                <td><strong>Goles</strong></td>
            </tr>
            <tr className='ita'>
                <td>1</td>
                <td>Renata Cordero</td>
                <td>El Maná (25F)</td>
                <td style={{ background: '#C8B273' }}>6</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Sofia Gomez</td>
                <td>Elegidas por Jesús (26F)</td>
                <td>5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Guadalupe Guanoquiza</td>
                <td>Siervas de Dios (16F)</td>
                <td style={{ background: '#C8B273' }}>5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Sarah Pérez</td>
                <td>Campeonas del Fútbol (12F)</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Maria Duma</td>
                <td>Pueblo de Israel (21F)</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Joselinne Sinchi</td>
                <td>Pueblo de Israel (21F)</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Micaela Mendez</td>
                <td>Pueblo de Israel (21F)</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Belinda Heras</td>
                <td>Campeonas del Fútbol (12F)</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Dulce María Mejia</td>
                <td>Campeonas del Fútbol (12F)</td>
                <td>3</td>
            </tr>
            <tr className='ita'>
                <td>4</td>
                <td>Yamilet Arpi</td>
                <td>Niñas guerreras de Dios (I1F)</td>
                <td style={{ background: '#C8B273' }}>3</td>
            </tr>
            <tr className='ita'>
                <td>4</td>
                <td>Guadalupe Malla</td>
                <td>Elegidas de Dios (I2F)</td>
                <td>3</td>
            </tr>
            <tr className='ita'>
                <td>4</td>
                <td>Bianca Barbecho</td>
                <td>Leonas de Dios  (23F)</td>
                <td>3</td>
            </tr>
            <tr className='ita'>
                <td>5</td>
                <td>Mariana Naranjo</td>
                <td>Las Milagrosas (14F)</td>
                <td>2</td>
            </tr>
            <tr className='ita'>
                <td>5</td>
                <td>Rafaela Valencia</td>
                <td>Hijas de María (24F)</td>
                <td>2</td>
            </tr>
            <tr className='ita'>
                <td>5</td>
                <td>Dayana Aguilar</td>
                <td>Hijas de María (24F)</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Rafaela Rodriguez</td>
                <td>Elegidas por Jesús (26F)</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Camila Martos</td>
                <td>Siervas de Dios (16F)</td>
                <td>2</td>
            </tr>
            <tr className='ita'>
                <td>6</td>
                <td>Emily Lucero</td>
                <td>Ángeles (15F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Daniela Japa</td>
                <td>Pueblo de Israel (21F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Amy Taday</td>
                <td>Elegidas por Jesús (26F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Karen Uzhca</td>
                <td>Elegidas por Jesús (26F)</td>
                <td>1</td>
            </tr>
            <tr className='ita'>
                <td>6</td>
                <td>Natali Villa</td>
                <td>Niñas guerreras de Dios (I1F)</td>
                <td>1</td>
            </tr>
            <tr className='ita'>
                <td>6</td>
                <td>Ruth Hurtado</td>
                <td>Niñas guerreras de Dios (I1F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Mayte Pinduisaca</td>
                <td>Campeonas del Fútbol (12F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Paulina Minchala</td>
                <td>Campeonas del Fútbol (12F)</td>
                <td>1</td>
            </tr>
            <tr className='ita'>
                <td>6</td>
                <td>Emili Nacipucha</td>
                <td>Niñas guerreras de Dios (I1F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Jessica Llivichuzhca</td>
                <td>Elegidas por Jesús (26F)</td>
                <td>1</td>
            </tr>
            <tr>
                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                <td className='c-t t2'><strong>64</strong></td>
            </tr>
            <tr className='info-inag'>
                <td colSpan={10}><i>En Cursiva, jugadoras de equipos ya eliminados.</i></td>
            </tr>

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