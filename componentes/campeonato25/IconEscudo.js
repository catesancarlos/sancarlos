const IconEscudo = ({ ca, pos, color, borde }) => (
  <svg
    width={ca ? 50 : pos ? 40 : 100}
    height={ca ? 50 : pos ? 40 : 100}
    fill={color}
    viewBox="0 0 24 24"
  >
    <path
      stroke={borde}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1}
      d='M20 6h-1c-2.732 0-5.113-1.065-7-3-1.887 1.935-4.268 3-7 3H4v3.166C4 14.86 7.4 19.644 12 21c4.6-1.356 8-6.14 8-11.834V6Z'
    />
  </svg>
)
export default IconEscudo