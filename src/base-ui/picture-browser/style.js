import styled from "styled-components";
export const PictureBrowserWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;

  >.top {
    position: relative;
    height: 80px;

    >.close-btn {
      position: absolute;
      right: 25px;
      top: 15px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh !important;

      img {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 300ms ease;
      }

      .pic-leave {
        transform: translateX(0);
        opacity: 1;
      }

      .pic-exit {
        opacity: 0;
      }

      .pic-leave-active {
        opacity: 1;
        transition: all 300ms ease;
      }

    }
  }

  .preview {
    display: flex;

    // 因为宽度都一样,所有和并列元素居中,且位置一样
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: end;
      width: 100%;
      max-width: 105vh;


      .desc {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .count {
          span {
            color: #fff;
            font-size: 16px;

            &:first-child {
              font-weight: 700;
            }

            &:last-child {
              font-size: 14px;
              color: #ccc;
              margin-left: 10px;
            }
          }
        }

        .toggle {
          display: flex;
          align-items: center;
          cursor: pointer;

          span {
            color: #fff;
            font-size: 14px;
            margin-right: 5px;
          }

        }
      }

      .pic-list {
        overflow: hidden;
        margin-top: 3px;
        display: flex;
        height: ${props => props.showList ? '70px' : '0'}; // 图片列表的高度，用于控制图片列表的过渡动画
        transition: height 200ms ease; // 图片列表的过渡动画

        .item {
          margin-right: 3px;
          flex-shrink: 0;
          cursor: pointer;

          img {
            // 给图片设个高,让其宽度自适应
            height: 67px;
            opacity: 0.5;
            transition: opacity 200ms ease;
            user-select: none;
          }

          &:hover img {
            opacity: 1;
          }

          &.active img {
            opacity: 1;
          }
        }
      }
    }
  }
`