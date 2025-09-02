import styled from "styled-components";
export const DetailPicWrapper = styled.div`
  .pictures {
    display: flex;
    flex-shrink: 0;
    position: relative;
  
    .left {
      width: 50%;
      height: 600px;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.2);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        .cover {
          opacity: 1;
        }
        img {
          transform: scale(1.1);
          transition: all 200ms ease;
        }
      }
    }
    .right {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      height: 600px;

      >.item {
        box-sizing: border-box;
        border: 1px solid #000;
        width: 50%;
        height: 50%;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        img {
          width:100%;
          height: 100%;
          object-fit: cover;
        }

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0,0,0,.2);
          opacity: 0;
          transition: opacity 200ms ease;
        }

        &:hover {
          .cover {
            opacity: 1;
          }
          img {
              // 悬浮放大
            transform: scale(1.1);
            transition: all 200ms ease;
          }
        }
      }
    }

    .show-btn {
      position: absolute;
      right: 20px;
      bottom: 20px;
      padding: 10px 20px;
      background-color: #fff;
      border-radius: 10px;
      font-size: 14px;
      color: #222;
      cursor: pointer;
    }
  }

`