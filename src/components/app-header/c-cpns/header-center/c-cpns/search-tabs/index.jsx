import React, { memo } from 'react'
import { TabWrapper } from './style.js'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SearchTabs = memo(function SearchTabs(props) {
  const { value, setValueHandle, titles } = props; // 获取父组件传入的value值和setValueHandle函数，以及tabs标题数组

  const handleChange = (event, newValue) => {
    if(setValueHandle) { // 确保父组件传入了函数，否则会报错
      setValueHandle(newValue); // 调用父组件传来的函数，将新值传递给父组件
    } else {
      console.log('父组件没有传入函数');
    }    // 调用父组件传来的函数，将新值传递给父组件
  };
  return (
    <TabWrapper>
        <Tabs value={value} onChange={handleChange}>
          {titles.map((title, index) => (
            <Tab key={index} label={title} />
          ))}
          </Tabs>
    </TabWrapper>
  )
})


export default SearchTabs
