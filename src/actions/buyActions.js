import {ACTIONS} from '../constants'

const recieveProduct =(product)=>{
    return {
        type: ACTIONS.ReceiveProduct,
        payload: product
    }
}

export const fetchProduct = (id) => {
    return(dispatch)=>{
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