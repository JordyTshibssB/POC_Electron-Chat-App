import { ComponentProps } from 'react'

interface ICrossIconProps extends ComponentProps<'svg'> {}

function CrossIcon(props: ICrossIconProps) {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='[&>path]:stroke-black'
      {...props}
    >
      <path
        d='M11 1L1 11M1 1L11 11'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default CrossIcon
