import React, { memo } from 'react'
import { styleStrToObj } from './utils'

const IconLeftArrow = memo((props) => {
  const {width, height} = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ariaHidden="true" role="presentation" focusable="false" style={styleStrToObj(`display: block; fill: none; height: ${height}px; width: ${width}px; stroke: currentcolor; stroke-width: 4; overflow: visible;`)} class="default_pointer_cs">
        <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" class="default_pointer_cs"></path>
    </svg>
  )
})

export default IconLeftArrow