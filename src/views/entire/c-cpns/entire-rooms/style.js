import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  margin-top: 157px;
  
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`