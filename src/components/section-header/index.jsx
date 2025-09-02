import React, { memo } from 'react'
import PropTypes from 'prop-types'  
import SectionHeaderWrapper from './style'

const SectionHeader = memo(function SectionHeader(props) {
  const { title, subtitle = "" } = props
  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
export default SectionHeader

