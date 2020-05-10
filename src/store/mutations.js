//更新state方法
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODLIST,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_INFO_1,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMNT_FOOD_COUNT,
    DECREMNT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
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
    },
    [RESET_USER_INFO](state,) {
        state.userInfo = {}
    },

    [RECEIVE_INFO](state, {info}) {
        state.info = info
      },
    [RECEIVE_INFO_1](state, {info}) {
        state.info_1 = info
      },
    
      [RECEIVE_RATINGS](state, {ratings}) {
        state.ratings = ratings
      },
    
      [RECEIVE_GOODS](state, {goods}) {
        state.goods = goods
      },
      [INCREMNT_FOOD_COUNT](state,{food}) {
          if(!food.count) {
            //   food.count = 1
            Vue.set(food,'count',1)
            //将food添加到cartfood中
            state.cartFood.push(food);
          } else {
              food.count++
          }
      },
      [DECREMNT_FOOD_COUNT](state,{food}) {
          if(food.count) {
              food.count --;
              if(food.count === 0) {
                   //将food移除出cartfood
                state.cartFood.splice(state.cartFood.indexOf(food),1)
              }
          }
      },
      [CLEAR_CART](state) {
          state.cartFood.forEach(food => {
              food.count = 0
          });
          state.cartFood = []
      },
      [RECEIVE_SEARCH_SHOPS](state,{searchShops}) {
          state.searchShops = searchShops
      }
}