import React, { memo } from 'react'
import { styleStrToObj } from './utils'

const IconTriangleArrowBottom = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" class="default_pointer_cs" style={styleStrToObj("display: block; fill: none; height: 12px; width: 12px; stroke: var(--linaria-theme_palette-text-primary); stroke: currentcolor; stroke-width: 5.33333; overflow: visible;")}>
        <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12" class="default_pointer_cs"></path>
    </svg>
  )
})

export default IconTriangleArrowBottom