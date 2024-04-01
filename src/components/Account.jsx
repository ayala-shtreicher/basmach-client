import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/userContext'
import { orderContext } from '../context/orderContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
import OrderList from './OrderList';

export default function Account() {
const {userLogin}=useContext(userContext);
const {orders, getOrderByUserId}=useContext(orderContext)
const [user,setUser]=useState({});
const navigate=useNavigate();
    useEffect(() => {
        console.log(userLogin);
        // getOrderByUserId(userLogin.id);
    }, [])
    console.log(orders);
    return (
        <div>
            <h1>hello {userLogin.name}</h1>
            <button onClick={()=>{getOrderByUserId(userLogin.id)}}>my orders</button>
            {orders.map(order=>{return<>
            {/* <p>{order.dateStart}</p>
            <p>{order.dateEnd}</p>
            <p>{order.dateOrder}</p>
            <p>{order.resortId.name}</p> */}
            <OrderList id={order.id}/>

            </>
        })}
            <button onClick={()=>{setUser(userLogin)}}>my account</button>
            <p>{userLogin.name}</p>
            <p>{userLogin.email}</p>
        </div>
    )
}
