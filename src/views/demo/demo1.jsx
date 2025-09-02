import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'
const Demo = memo(function Demo(props) {
  const arr = ['abc', 'cba', 'nba', 'mba', "acc", 'abc', 'cba', 'nba', 'mba', "acc"]
  const [index, setSetectedIndex] = useState(0)

  function toggleClickHandler(isNext = true) {
    // 直接%10: 条件是只有加没有减
    let newIndex = isNext ? index + 1: index -1;
    if(newIndex < 0) newIndex = arr.length -1
    if(newIndex > arr.length -1) newIndex = 0
    console.log(newIndex)
    setSetectedIndex(newIndex)
  }
  return (
    <DemoWrapper>
        <div className="btn">
          <button className="pre" onClick={e => toggleClickHandler(false)}>上一个</button>
          <button className="next" onClick={e => toggleClickHandler(true)}>下一个</button>
        </div>

        <div className="indicators">
          
          <Indicator selectIndex ={index}>
            {
              arr.map((item, index) => {
                return <button key={index}>{item}</button>
              })
            }
          </Indicator>
        </div>
    </DemoWrapper>
  )
})


export default Demo
