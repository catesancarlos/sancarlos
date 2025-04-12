import { useRouter } from 'next/router'

import Dice from '../iconos/Dice'

export default function HeaderJs({ categoria, non, onRand }){
    const router = useRouter()

    return (
        <div className='header'>
            {
                !non &&
                <div className='main'>
                    <img src='/logo-jesuscribe.jpg' onClick={() => router.push('/jesuscribe')} />
                    <h2>{categoria}</h2>
                </div>
            }
            {
                onRand &&
                    <div className='sorteo' onClick={onRand}>
                        <Dice />
                        <p>Sortear Pregunta</p>
                    </div>
            }

            <style jsx>{`
                .header{
                    padding: 25px calc(5% + 5px) 18px calc(5% + 5px);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .main{
                    display: flex;
                    align-items: center;
                }

                img{
                    height: 46px;
                    border-radius: 10px;
                    box-shadow: -2px 2px 5px 0px #888;
                    cursor: pointer;
                }

                h2{
                    margin: 0 0 0 16px;
                    line-height: 46px;
                    color: #000;
                    font-size: 23px;
                    font-weight: 400;
                    letter-spacing: 4px;
                    text-shadow: -1px 2px #777;
                }

                .sorteo{
                    background: #000;
                    padding: 10px 20px 12px 21px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .sorteo p{
                    margin-left: 8px;
                    line-height: 20px;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                }

                @media screen and (max-width: 768px){
                    .header{
                        padding: 12px 12px 12px 12px;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </div>
    )
}