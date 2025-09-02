import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  >.content-i {
    display: flex;
    position: relative;
    transition: transform 200ms ease-in;

    >* {
      flex-shrink: 0;
    }
  }
`