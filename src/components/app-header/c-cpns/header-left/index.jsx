import React, { memo } from 'react'
import { HeaderLeftWrapper } from './styel'
import IconLogo from '@/assets/svg/iconLogo'
import { useNavigate } from 'react-router-dom'
export default memo(function HeaderLeft() {

  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={handleLogoClick}>
        <IconLogo>
        </IconLogo>
        <span>爱披迎</span>
      </div>
    </HeaderLeftWrapper>
  )
})
