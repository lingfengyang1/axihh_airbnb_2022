import React, { memo } from 'react'
import { styleStrToObj } from './utils'

const IconTriangleArrowTop = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={styleStrToObj("display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;")}>
      <path fill="none" d="M4 20 15.3 8.7a1 1 0 0 1 1.4 0L28 20"></path>
    </svg>
  )
})

export default IconTriangleArrowTop