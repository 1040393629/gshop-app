//异步更新state

import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODLIST,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO
} from './mutation-type'
import {reqAddress,reqFoodList,reqShops} from '../api'

export default {
    //异步获取地址
    async getAddress ({commit,state}){
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //提交mutation
        if(result.code === 0){
            const address = result.data;
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取商品分类列表
    async getFoodList ({commit}){
        const result = await reqFoodList()
        //提交mutation
        if(result.code === 0){
            const foodList = result.data;
            commit(RECEIVE_FOODLIST,{foodList})
        }
    },
    //异步获取商家列表
    async getShops ({commit,state}){
        const {longitude,latitude} = state
        const result = await reqShops(longitude,latitude)
        //提交mutation
        if(result.code === 0){
            const shops = result.data;
            commit(RECEIVE_SHOPS,{shops})
        }
    },

    //同步记录用户信息
    recordUserInfo({commit},userInfo) {
        commit(RECEIVE_USER_INFO,{userInfo})
    }
}