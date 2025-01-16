import { useRouter } from 'next/router'

const CampSection = () => {
    const router = useRouter()

    return (
        <section>
            <div className='h1'>
                <p className='h1-t'>Campeonato</p>
                <p className='h2-t'>Catequesis 2025</p>
            </div>
            <div className='hg'>
                <p className='hg-t' onClick={() => router.push('/campeonato')}>Año Bíblico</p>
            </div>
            <div className='hg'>
                {/* <p className='h1-t'>1ro & 2do de</p> */}
                <p className='hg-t' onClick={() => router.push('/campeonato')}>Confirmación</p>
            </div>
            <div className='hg'>
                <p className='hg-t' onClick={() => router.push('/campeonato')}>Catequistas</p>
            </div>
            <div className='hg'>
                <p className='hg-t' onClick={() => router.push('/campeonato')}>Los Ángeles</p>
            </div>

            <style jsx>{`
                section{
                    margin: 35px 4% 50px 4%;
                    width: 92%;
                    display: flex;
                }

                .h1{
                    background: #245590;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    height: 74px;
                    width: 40%;
                    padding: 10px 20px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-radius: 20px 3px 3px 20px;
                }

                .h1-t{
                    letter-spacing: 1px;
                }

                .h2-t{
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 2px;
                }

                .hg{
                    margin-left: 15px;
                    background: black;
                    height: 74px;
                    width: 15%;
                    padding: 10px 20px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    cursor: pointer;
                }

                .hg-t{
                    font-size: 16px;
                    font-weight: bold;
                    letter-spacing: 2px;
                }

                .hg:nth-child(2){
                    background: #00000077;
                    color: white;
                }

                .hg:nth-child(3){
                    background: #99999999;
                    color: black;
                }

                .hg:nth-child(4){
                    background: #00000077;
                    color: white;
                }

                .hg:last-child{
                    background: #99999999;
                    color: black;
                    border-radius: 3px 10px 10px 3px;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 0 15px 60px 15px;
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .h1{
                        height: 70px;
                        width: calc(100% - 30px);
                        padding: 10px 20px;
                        border-radius: 20px 20px 3px 3px;
                    }

                    .hg{
                        margin-left: 0px;
                        margin-top: 8px;
                        height: 60px;
                        width: calc(50% - 19px);
                        padding: 10px 20px;
                    }

                    .hg:nth-child(2){
                        margin-right: 4px;
                    }

                    .hg:nth-child(3){
                        margin-left: 4px;
                    }

                    .hg:nth-child(4){
                        margin-right: 4px;
                        border-radius: 3px 3px 3px 10px;
                    }

                    .hg:last-child{
                        margin-left: 4px;
                        border-radius: 3px 3px 10px 3px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default CampSection