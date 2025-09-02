import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  position: relative;
  

  .content {
    position: relative;
    z-index: 99;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
      border-bottom: 1px solid ${props => props.theme.topAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0.1)'};
      background-color: ${props => props.theme.topAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
    }
    

    /* background-color: #222; */
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    }
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 98; /* 比 content 低一层，但高于其他元素 */
    cursor: pointer; /* 显示手型光标提示可点击 */
  }
`

export const SearchAreaWrapper = styled.div`
    height: ${props => props.isSearch ? '100px' : '0px'};
    background-color: ${props => props.theme.topAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
`