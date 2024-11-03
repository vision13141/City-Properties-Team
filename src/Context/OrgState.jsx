import React, { useReducer, useEffect } from "react";
import OrgContext from "./OrgContext";
import { reducer } from "./reducer";
import axios from "axios";
import product1 from '../assets/Image/product1.png'
import product2 from '../assets/Image/product2.png'
import product3 from '../assets/Image/product3.png'
import product4 from '../assets/Image/product4.png'
import product5 from '../assets/Image/product5.png'
import product6 from '../assets/Image/product6.png'
import api from '../../api.json'

// For localStore Get Part Start
const getLocalStore = () => {
  const localStorageData = localStorage.getItem("City-Properties")
  if (localStorageData) {
    return JSON.parse(localStorageData)
  }
  else {
    return []
  }
}

// For localStore Get Part End
// For localStore Get Part Start
const getHeartLocal = () => {
  const localStorageData = localStorage.getItem("heartData")
  if (localStorageData) {
    return JSON.parse(localStorageData)
  }
  else {
    return []
  }
}
// For localStore Get Part End


const initialState = {
  isLoading: true,
  product: [],
  filterProduct: [],
  cart: getLocalStore(),
  heart: getHeartLocal(),
  share: false,
};

const OrgState = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchProducts() {

    try {
      dispatch({
        type: "isOk",
        payload: api
      })
    }
    catch (error) {
      dispatch({
        type: "isError",
        payload: api
      })
    }
    finally {
      dispatch({
        type: "isLoading",
        payload: api
      })
    }
  }



  useEffect(() => {
    fetchProducts()
  }, [])


  // AddToCart Part Start
  const AddToCart = (id) => {
    dispatch({
      type: "addToCart",
      payload: id
    })
  }

  // AddToCart Part End

  // removeCart Part Start
  const remove = (id) => {
    dispatch({
      type: "removeCart",
      payload: id
    })
  }
  // removeCart Part End


  // For localStore Set Part Start
  useEffect(() => {
    localStorage.setItem("City-Properties", JSON.stringify(state.cart))
  }, [state.cart])
  // For localStore Set Part End

  // For localStore Set Heart Part Start

  useEffect(() => {
    localStorage.setItem("heartData", JSON.stringify(state.heart))
  }, [state.heart])

  // For localStore Set Heart Part End


  // share part start 
  const shareClick = () => {
    dispatch({
      type: "share",
    })
  }

  const shareClose = () => {
    dispatch({
      type: "shareClose",
    })
  }
  // share part end 

  // category part start 
  const handelCategory = (item) => {
    dispatch({
      type: "category",
      payload: item
    })
  }
  // category part end 

  return (
    <OrgContext.Provider value={{ ...state, AddToCart, remove, shareClick, shareClose, handelCategory }}>{children}</OrgContext.Provider>
  );
};

export default OrgState;
