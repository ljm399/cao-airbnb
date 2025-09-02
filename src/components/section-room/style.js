import styled from "styled-components";
export const SectionRoomWrapper = styled.div`

  /* 只展示列表两行的方法,是对数据劫持以只展示前8个数据,具体在.jsx文件中 */
  /* height: 530px; */
  /* overflow: hidden; */
     ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;
        li {
          width: 25%;
          padding: 0 8px;
          margin-bottom: 16px;
        }
      }
`