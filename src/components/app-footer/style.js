import styled from "styled-components";

const AppFooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;
  
  .footer-content {
    width: 1032px;
    margin: 0 auto;
    
    .top {
      display: flex;
      padding: 48px 24px 48px;
      
      .item {
        flex: 1;
        
        .name {
          margin-bottom: 16px;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
        }
        
        .list {
          .iten {
            margin-top: 3px;
            color: #767676;
            cursor: pointer;
            padding: 3px 0;
            
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    
    .bottom {
      border-top: 1px solid #EBEBEB;
      padding: 24px;
      
      .info {
        display: flex;
        align-items: center;
        
        .copyright {
          color: #767676;
          font-size: 14px;
          margin-right: 8px;
        }
        
        .split {
          margin: 0 8px;
          color: #767676;
        }
        
        .service {
          color: #767676;
          font-size: 14px;
          cursor: pointer;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`

export default AppFooterWrapper