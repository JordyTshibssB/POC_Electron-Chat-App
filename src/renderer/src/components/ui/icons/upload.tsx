import { ComponentProps } from 'react'

interface IUploadIconProps extends ComponentProps<'svg'> {}

function UploadIcon(props: IUploadIconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_312_41143)'>
        <path
          d='M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17'
          stroke='#202129'
          strokeWidth='1.75'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7 9L12 4L17 9'
          stroke='#202129'
          strokeWidth='1.75'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 4V16'
          stroke='#202129'
          strokeWidth='1.75'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_312_41143'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UploadIcon
