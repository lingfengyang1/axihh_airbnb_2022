import React, { memo } from 'react'
import { styleStrToObj } from './utils'

const IconRightArrow = memo((props) => {
  const {width, height} = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ariaHidden="true" role="presentation" focusable="false" style={styleStrToObj(`display: block; fill: none; height: ${height}px; width: ${width}px; stroke: currentcolor; stroke-width: 4; overflow: visible;`)} class="default_pointer_cs">
        <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" class="default_pointer_cs"></path>
    </svg>
  )
})

export default IconRightArrow