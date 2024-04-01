import axios from "axios";

const baseURLOrders = "http://localhost:8200/accessiableHeaven/api/v1/orders";

const getAllOrdersAPI = async () => {
    const res = await axios.get(`${baseURLOrders}/getAll`,{
        headers: {
            'authorization': `bearer ${localStorage.getItem("tokenUser")}`
        }
    });
    const temp = res.data.orders;
    return temp;
}
const addOrderAPI = async(order) => {
   return  await axios.post(`${baseURLOrders}/addOrder`, order ,{
        headers: {
            'authorization': `bearer ${localStorage.getItem("tokenUser")}`
        }
    }).
        then((res) => {
            alert("add succesfully", res)
            return res.data;
        }).catch((err)=>{console.log(err.message,"err in ada api");})
}
const editOrderAPI = (order, id) => {
    
    axios.put(`${baseURLOrders}/updateOrder/${id}`, order,{
        headers: {
            'authorization': `bearer ${localStorage.getItem("tokenUser")}`
        }
    }).
    then((res) => {
        alert("update succesfully")
    })
}
const deleteOrderAPI = (id) => {
    axios.delete(`${baseURLOrders}/deleteOrder/${id}`,{
        headers: {
            'authorization': `bearer ${localStorage.getItem("tokenUser")}`
        }
    }).
        then((res) => {
            alert("delete succesfully")
        })
}
const getOrderByIdAPI = async (id) => {
    const res = await axios.get(`${baseURLOrders}/getOrder/${id}`,{
        headers: {
            'authorization': `bearer ${localStorage.getItem("tokenUser")}`
        }
    });

    const temp = res.data.order;
    return temp;
}
const getOrderByUserIdAPI = async (userId) => {
    console.log(userId);
    console.log(`${baseURLOrders}/getOrderByUserId/${userId}`);
    const res = await axios.get(`${baseURLOrders}/getOrderByUserId/${userId}`,{
        headers: {
            'authorization': `bearer ${localStorage.getItem("tokenUser")}`
        }
    });
    const temp = res.data.orders;
    console.log(temp);
    return temp;
}
export {getAllOrdersAPI,getOrderByIdAPI,getOrderByUserIdAPI,addOrderAPI,editOrderAPI,deleteOrderAPI}
