import styled from 'styled-components';

export const HeaderCenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .search-bar {
    position: absolute;
    top: -20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 345px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 0 16px;
    cursor: pointer;

    .text {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        width: 48px;
        height: 48px;
      }
      span {
        display: inline-block;
        border-right: 2px solid #ddd;

        /* 可以调整后面的划线长度 */
        padding: 5px 18px;


        font-size: 14px;
        color: #222;
        &.last {
          border-right: none;
        }
        &.firstItem {
          
          padding-left: 0px;
        }
      }
    }

    .icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primary};
      color: #fff;
      font-size: 18px;
    }
  }

  .search-detail {
    position: relative;
    
    .infos {
      position: absolute;
      top:70px;
      left: 50%;
      transform: translateX(-50%); /* 使其居中 */
      background-color: ${props => props.theme.topAlpha ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)'};
      border-radius: 24px;
      border: 1px solid ${props => props.theme.topAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)'};
    }
  }

  .search-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .search-exit-active {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
    transition: all 300ms ease;
  }

  .search-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .search-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 200ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 300ms ease;
    transform: scale(1.0) translateY(0);
  }

  .bar-exit {
    opacity: 0;
  }
`