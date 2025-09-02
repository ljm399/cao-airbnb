import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
  cursor: pointer;
  flex: 1;
  /* 方式一: */
  /* color: var(--primary-color); */

  /* 方式二 */
  color: ${props => props.theme.topAlpha ? '#000' : props.theme.color.primary};
  .logo {
    display: flex;
    align-items: center;
    margin-left: 24px;
    span{
      margin-left: 6px;
      font-weight: 800;

      /* 设了fontsize下面就对齐不了,需要设置line-height和height */
      line-height: 45px;
      height: 39px;
      font-size: 12px;
    }
  }
`