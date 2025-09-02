import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  }).catch(err => {
    console.warn('获取好价房源数据失败:', err.message)
  })
  
  // .catch要添加,否则控制台会显示报错信息
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  }).catch(err => {
    console.warn('获取高分房源数据失败:', err.message)
  })
  
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  }).catch(err => {
    console.warn('获取折扣房源数据失败:', err.message)
  })
  
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res))
  }).catch(err => {
    console.warn('获取热门推荐数据失败:', err.message)
  })
  
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  }).catch(err => {
    console.warn('获取向往数据失败:', err.message)
  })
  
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  }).catch(err => {
    console.warn('获取Plus数据失败:', err.message)
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeHotRecommendInfoAction, changeLongforInfoAction, changePlusInfoAction } = homeSlice.actions
export default homeSlice.reducer