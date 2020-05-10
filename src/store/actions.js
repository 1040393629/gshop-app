//异步更新state

import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODLIST,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    RECEIVE_INFO_1,
    INCREMNT_FOOD_COUNT,
    DECREMNT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-type'
import {
    reqAddress,
    reqFoodList,
    reqShops,
    reqUserInfo,
    reqShopRatings,
    reqShopGoods,
    reqShopInfo,
    reqShopInfo_1,
    reqSearchShops
} from '../api'

export default {
    //异步获取地址
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //提交mutation
        if (result.code === 0) {
            const address = result.data;
            commit(RECEIVE_ADDRESS, { address })
        }
    },
    //异步获取商品分类列表
    async getFoodList({ commit }) {
        const result = await reqFoodList()
        //提交mutation
        if (result.code === 0) {
            const foodList = result.data;
            commit(RECEIVE_FOODLIST, { foodList })
        }
    },
    //异步获取商家列表
    async getShops({ commit, state }) {
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        //提交mutation
        if (result.code === 0) {
            const shops = result.data;
            commit(RECEIVE_SHOPS, { shops })
        }
    },

    //同步记录用户信息
    recordUserInfo({ commit }, userInfo) {
        commit(RECEIVE_USER_INFO, { userInfo })
    },

    //异步获取用户信息
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, { userInfo })
        }
    },
    async logout({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },

    // 异步获取商家信息
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },
    async getShopInfo_1({ commit }) {
        const result = await reqShopInfo_1()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO_1, { info })
        }
    },

    // 异步获取商家评价列表
    async getShopRatings({ commit },callback) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
            callback && callback()
        }
    },

    // 异步获取商家商品列表
    async getShopGoods({ commit },callback) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
            callback && callback()
        }
    },
    updateFoodCount({commit},{isAdd,food}) {
        if(isAdd === true) {
            commit(INCREMNT_FOOD_COUNT,{food})
        } else {
            commit(DECREMNT_FOOD_COUNT,{food})
        }
    },
    clearCart({commit}) {
        commit(CLEAR_CART)
    },
    //异步获取搜索商家
    async searchShops({commit,state},keyword) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShops(geohash,keyword)
        console.log(result.code);
        if(result.code === 0) {
            const searchShops  = result.data
            console.log(searchShops);
            commit(RECEIVE_SEARCH_SHOPS,{searchShops});
        } 
    }
}