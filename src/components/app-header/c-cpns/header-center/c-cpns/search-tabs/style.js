import styled from "styled-components";

export const TabWrapper = styled.div`
  .MuiButtonBase-root {
    font-size: large;
    font-weight: 700;
    background-color: rgba(255,255,255,0.5);
    color: ${props => props.theme.topAlpha ? '#000' : '#222'};
    border-radius: 50%;
  }

  .css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected {
    font-weight: 700;
    color: red;
    background-color: rgba(0,0,0,0.8);
    border-radius: 50%;
  }

  .css-1qltlow-MuiTabs-indicator {
    height: 0;
  }
`