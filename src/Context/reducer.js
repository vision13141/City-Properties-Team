export const reducer = (state, action) => {

    if (action.type == "isOk") {
        return {
            ...state,
            product: action.payload,
            filterProduct: action.payload
        }
    }

    if (action.type == "isLoading") {
        return {
            ...state,
            isLoading: false
        }
    }

    // AddToCart part start
    if (action.type === "addToCart") {

        const match = state.cart.find((elm) => elm.id == action.payload)
        const Updateheart = state.heart.find((elm) => action.payload == elm)

        const product = state.filterProduct.filter((el) => el.id == action.payload)

        if (match || Updateheart) {
            return {
                ...state,
                cart: [...state.cart].flat(),
                cart: state.cart.filter(el => el.id !== action.payload),
                heart: state.heart.filter((el) => action.payload !== el)
            }
        }
        else {
            return {
                ...state,
                cart: [...state.cart, product].flat(),
                heart: [...state.heart, action.payload]
            }
        }

    }

    // AddToCart part end

    // removeCart Part Start
    if (action.type == "removeCart") {
        return {
            ...state,
            cart: state.cart.filter(el => el.id !== action.payload),
            heart: state.heart.filter((el) => action.payload !== el)
        }
    }
    // removeCart Part End

    // share part start 
    if (action.type == "share") {
        return {
            ...state,
            share: true,
        }
    }

    if (action.type == "shareClose") {
        return {
            ...state,
            share: false,
        }
    }
    // share part end 


    if (action.type == "category") {

        return {
            ...state,
            product: state.filterProduct.filter((el) => {
                if (action.payload.toLowerCase() === "Apartments".toLowerCase()) {
                    return el
                }
                if (el.category.toLowerCase() === action.payload.toLowerCase()) {
                    return el
                }
            })
        }
    }




    return state
}