export default function BannerCampeon({ img, name, group, genre }){
    return(
        <>
            <img src={img} />
            <p className='n-camp'>{name}</p>
            <p className='p-camp'>{group}</p>

            <style jsx>{`
                img{
                    width: 500px;
                    height: 300px;
                    border-radius: 15px;
                    box-shadow: 2px 2px 4px 0px #777;
                }

                .n-camp{
                    margin-top: 10px;
                    color: ${genre == 'M' ? '#245590' : '#CC397B'};
                    font-size: 20px;
                    font-weight: bold;
                }

                .p-camp{
                    font-size: 17px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    img{
                        width: 100%;
                        height: 260px;
                        border-radius: 12px;
                    }

                    .n-camp{
                        margin-top: 10px;
                        font-size: 17px;
                    }

                    .p-camp{
                        font-size: 15px;
                    }
                }
            `}</style>
        </>
    )
}