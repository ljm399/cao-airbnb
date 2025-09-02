import React, { memo } from 'react'
import { SectionWrapper } from './style.js'
import { Box } from '@mui/material';

// 自定义 TabPanel 组件
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const SearchSections = memo(function SearchSections(props) {
  const { value, searchData } = props; // 获取父组件传入的value和完整的搜索数据

  return (
    <SectionWrapper>
      {
        searchData.map((item, index) =>
            <CustomTabPanel key={index} value={value} index={value}>
                <span className="name">{item.name}</span>
                <span className="value">{item.value}</span>
            </CustomTabPanel>
        )
      }
        
      
    </SectionWrapper>
  )
})


export default SearchSections
