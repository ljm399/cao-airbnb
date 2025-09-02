import styled from "styled-components";
const SectionHeaderWrapper = styled.div`
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .subtitle {
    font-size: 16px;
    color: ${props => props.theme.textColor.primaryColor};
  }
`

export default SectionHeaderWrapper