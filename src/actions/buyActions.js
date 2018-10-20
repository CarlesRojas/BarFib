import {ACTIONS} from '../constants'

const recieveProduct =(product)=>{
    return {
        type: ACTIONS.ReceiveProduct,
        payload: product
    }
}
const requestProduct =()=>{
    return {
        type: ACTIONS.RequestProduct,
    }
}

export const fetchProduct = (id) => {
    return(dispatch)=>{
        dispatch(requestProduct())
        fetch(`http://barfib.serveo.net/products/${id}`).then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(json =>{
            dispatch(recieveProduct(json))
            }

        )

    }
}