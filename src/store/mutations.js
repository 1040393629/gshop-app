//更新state方法

import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODLIST,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO
} from './mutation-type'

export default {
    [RECEIVE_ADDRESS](state,{address}) {
        state.address = address
    },
    [RECEIVE_FOODLIST](state,{foodList}) {
        state.foodList = foodList
    },
    [RECEIVE_SHOPS](state,{shops}) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state,{userInfo}) {
        state.userInfo = userInfo
    }
}