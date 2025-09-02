import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right:0;
  height: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  z-index: 99;
  background-color: #fff;

  .filter {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 20px;
    .item {
      margin: 0 4px;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid #dce0e0;
      cursor: pointer;
      &.active {
        background-color: ${props => props.theme.color.secondary};
        color: #fff;
      }
    }
  }
`