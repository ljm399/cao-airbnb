import styled from 'styled-components'
export const ScrollViewWrapper = styled.div`
  position: relative;
  .anticon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .anticon-left-circle {
    left: -25px;
  }
  .anticon-right-circle {
    right: -25px;
  }
  
  .scroll {
    overflow: hidden;

    .scroll-content {
        position: relative;
        display: flex;
        transition: transform 0.3s ease-in-out;
        margin: 0 -8px;

        .item {
          flex-shrink: 0;
          margin-right: 16px;
          padding: 8px 16px;
          border-radius: 3px;
          border: 1px solid #DCE0E0;
          color: #484848;
          cursor: pointer;
          ${props => props.theme.mixin.boxShadow}
          &.active {
            background-color: ${props => props.theme.color.secondary};
          }
        }
      }
  }
`