const IconEscudoCom = ({ ca, pos, color, borde }) => (
  <svg
    width={ca ? 50 : pos ? 40 : 100}
    height={ca ? 50 : pos ? 40 : 100}
    fill={color}
    viewBox='0 0 24 24'
  >
    <path
      stroke={borde}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1}
      d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
    />
  </svg>
)
export default IconEscudoCom