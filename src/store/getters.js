//获取state 
export default {
    totalCount(state) {
        return state.cartFood.reduce((preTotal,food) =>  preTotal + food.count,0)
    },
    totalPrice(state) {
        return state.cartFood.reduce((preTotal,food) =>  preTotal + food.count*food.price,0)
    },
    positiveSize (state) {
        return state.ratings.reduce((preTotal,rating) => preTotal + (rating.rateType === 0 ? 1 : 0),0)
    },
}