import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo(function EntireFilter(props) {
  const [selectedItem, setSelectedItem] = useState([])

  // 这里是前端把过滤的数组保存到数组,然后放回给后端,后端来过滤,然后把数据返回
  function itemClickHandle(item) {
    const newItems = [...selectedItem]

    // 点击了已选中的，则删除
    if(newItems.includes(item)) {
      // i是 newItems这个数组的每一个元素
      const findIndex = newItems.findIndex(i => i === item)
      newItems.splice(findIndex, 1)
    } else {
      newItems.push(item)
    }
    setSelectedItem(newItems)
  }

  return (
    <EntireFilterWrapper>
      <ul className="filter">
        {
          filterData.map((item, index) => {
            return (
              <li className={`item ${selectedItem.includes(item) ? 'active' : ''}`}
                  key={index}
                  onClick={e => itemClickHandle(item)}
               >{item}</li>
            )
          })
        }
      </ul>
    </EntireFilterWrapper>
  )
})

export default EntireFilter
