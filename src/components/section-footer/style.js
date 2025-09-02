import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .text {
      cursor: pointer;
      font-size: 18px;
      color: ${props => props.color};
      margin-right: 4px;
      text-decoration: underline;
    }
  }
`