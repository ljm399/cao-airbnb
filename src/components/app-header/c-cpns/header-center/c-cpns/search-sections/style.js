import styled from "styled-components";

export const SectionWrapper = styled.div`
  /* 最外层容器使用 flex 布局，水平排列各个 CustomTabPanel */
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: flex-start;

  /* CustomTabPanel 内部样式 */
  [role="tabpanel"] {
    /* Material-UI Box 组件的样式覆盖 */
    .MuiBox-root {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px 20px ;
      min-width: 120px;
      

      /* 内容布局样式 */
      .name {
        font-size: 24px;
        font-weight: 600;
        color: #222;
        margin-bottom: 4px;
        white-space: nowrap;
      }

      .value {
        font-size: 20px;
        color: ${props => props.theme.topAlpha ? '#222' : '#717171'};
        line-height: 1.4;
        white-space: nowrap;
      }
    }
  }
`