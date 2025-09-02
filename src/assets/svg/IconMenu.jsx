import React, { memo } from 'react'
import { cssToObj } from './utils/cssToObj'

export default memo(function IconMenu() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={cssToObj("display: block; height: 16px; width: 16px; fill: currentcolor;")}>
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M2 16h28M2 24h28M2 8h28"></path>
        </g>
      </svg>
    </div>
  )
})
