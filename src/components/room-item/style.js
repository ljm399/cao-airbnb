import styled from "styled-components"; 
export const RoomItemWrapper = styled.div`
    // 排列技巧: 父元素记得margin: 0 -8px;
    box-sizing: border-box;
    width: ${props => props.$itemWidth};
    padding: 0 8px;
    margin-bottom: 16px;
    flex-shrink: 0;
    .cover {
        padding-top: 60%;
        position: relative;
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          // 使图片不被压缩
          object-fit: cover;
        }
      }
    .swiper {
      position: relative;
      cursor: pointer;
      &:hover {
        .control {
          display: flex;
        }
      }
      >.control {
        display: none;
        justify-content: space-between;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9;
         >.btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.2) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
          }
         
         }
        
       
      }
      .cover {
        padding-top: 60%;
        position: relative;
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          // 使图片不被压缩
          object-fit: cover;
        }
    }
      .indicator {
        position: absolute;
        z-index: 9;
        width: 100px;  
        

        // 居中公式之一
        left: 0;
        right: 0;
        bottom: 10px;
        margin: 0 auto;

        .item-dot {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            transition: all 0.2s ease;

            &.secondary {
              width: 8px;
              height: 8px;
            }

            &.third {
              width: 4px;
              height: 4px;
            }

            &.active {
              width: 12px;
              height: 12px;
            }
          }
        }
        
      }
    }
    
    .desc {
      .message {
        color: ${props => props.theme.textColor.primaryColor};
        font-size: 12px;
        margin: 5px 0;
      }
      .title {
        height: 40px;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;

        // 设置2行
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.3;
        max-height: calc(1.3em * 2);
      }
      .price {
        font-size: 14px;
      }
      
    }
    .MuiRating-decimal {
        margin-right: -2px;
    }
`