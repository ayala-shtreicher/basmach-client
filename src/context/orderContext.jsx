import axios from "axios";
import { createContext, useReducer, useState } from "react";
import orderReduces from "./reduces/order.reduces";
import { getAllOrdersAPI, getOrderByIdAPI, getOrderByUserIdAPI, addOrderAPI, editOrderAPI, deleteOrderAPI } from "../APICalls/order.API";

const orderContext = createContext({});

const OrderProvider = ({ children }) => {
    const [orders, dispach] = useReducer(orderReduces, []);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const selectOrder = (order) => {
        setSelectedOrder(order);
    }


    const getAllorders = async () => {
        try {
            const temp = await getAllOrdersAPI();
            dispach({ type: "GET_ORDERS", payload: temp })
        } catch (error) {
            console.log(error.message);
        }
    };
    const getOrderById = async (id) => {
        try {
            const temp = await getOrderByIdAPI(id);
            dispach({ type: "GET_ORDERS", payload: temp })
        } catch (error) {
            console.log(error.message);
        }

    };
    const getOrderByUserId = async (id) => {
        try {
            const temp = await getOrderByUserIdAPI(id);
            dispach({ type: "GET_ORDERS", payload: temp })
        } catch (error) {
            console.log(error.message);
        }
    };


    const addOrder = async (order) => {
        try {
            const tmp = await addOrderAPI(order)
            dispach({ type: "ADD_ORDER", payload: tmp })
            return tmp;

        } catch (error) {
            console.log("error in add", error.message);
            alert("error", error.message)
        }
    }
    const editOrder = (updateOrder, id) => {
        try {
            dispach({ type: "EDIT_ORDER", payload: { updateOrder, id } })

        } catch (error) {
            alert("error", error.message)
        }
    }

    const deleteOrder = (id) => {
        try {
            deleteOrderAPI(id);
            dispach({ type: "DELETE_ORDER", payload: id })

        } catch (err) {
            alert("error", err.message)
        }
    }
    const shared = { orders, selectedOrder, getAllorders, getOrderById, getOrderByUserId, addOrder, deleteOrder, editOrder }
    return (
        <orderContext.Provider value={shared}>
            {children}
        </orderContext.Provider>
    )
}
export default OrderProvider
export { orderContext }