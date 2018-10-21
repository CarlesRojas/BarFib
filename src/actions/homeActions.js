import {ACTIONS} from '../constants'

const recieveProducts =(products)=>{
    return {
        type: ACTIONS.ReceiveProducts,
        payload: products
    }
}
const requestProducts =()=>{
    return {
        type: ACTIONS.RequestProducts,
    }
}

export const fetchProducts = () => {
    return(dispatch)=>{
        dispatch(requestProducts())
        fetch('http://barfib.serveo.net/products/').then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(json => {
            dispatch(recieveProducts(json))
        })
    }
}