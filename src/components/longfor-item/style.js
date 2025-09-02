import styled from 'styled-components'

export const LongforItemWrapper = styled.div`
      width: 20%;
      padding: 8px;
      flex-shrink: 0;
    >.item-info {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      >.cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      >.bg-cover {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 60%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      }
      >.info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        color: #fff;
        text-align: center;
        >.city {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .price {
          font-size: 14px;
        }
      }
    }
`