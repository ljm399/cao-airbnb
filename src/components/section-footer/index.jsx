import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionFooterWrapper } from './style'
import { RightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo(function SectionFooter(props) {
  const { name } = props
  let showText = "显示全部"
  if(name) {
    showText = `查看${name}区/中国城市房源`
  }
  
  const navigate = useNavigate()
  function navClick() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper color={name ? "#008489" : "#000"}>
      <div className="info">
        <span className="text" onClick={navClick}>{showText}</span>
        <RightOutlined />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
