import OptionButton from "./OptionButton";

export default function OptionsSection({ options, select, onSelect, bot, pos, fec, nogen }){

    return(
        <div className='cont'>
            {
                options?.map((option, index) =>
                    <OptionButton
                        key={index}
                        data={option}
                        select={select}
                        options={options.length}
                        onSelect={onSelect}
                        nogen={nogen}
                        fec={fec}
                    />
                )
            }

            <style jsx>{`
                .cont{
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: ${bot ? '40px' : pos ? '-4px' : '28px'};
                }

                @media screen and (max-width: 768px){
                    .cont{
                        flex-wrap: wrap;
                        margin-bottom: ${bot ? '35px' : pos ? '-8px' : '24px'};
                    }
                }
            `}</style>
        </div>
    )
}