import styled from 'styled-components';

export const HeaderRightWrapper = styled.div`
  flex: 1;
    display: flex;
    justify-content: flex-end;
  .menu, .global {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor.primaryColor};
    background-color: #fff;
    border-radius: 20px;


    /* transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    } */
    /* 封装 */
    ${props => props.theme.mixin.boxShadow}
  }
  .menu {
    margin-right: 30px;
    position: relative;
    .panle {
      position: absolute;
      box-sizing: border-box;
      z-index: 99;
      top: 60px;
      right: 10px;
      width: 240px;
      padding: 0px 18px;
      background-color: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      ${props => props.theme.mixin.boxShadow}
 
      .help, .search, .login {
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #222;
        border-bottom: 1px solid #ddd;
      }
      .login {
        border-bottom: none;
      }
      
    }
  }
  .global {
    margin-right: 12px;
  }
`