export default function Download({ size = 28 }){
    return(
        <svg
            width={size}
            height={size}
            fill='none'
            viewBox='-5 -4.5 34 34'
        >
            <path
                stroke='white'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3'
            />
        </svg>
    )
}