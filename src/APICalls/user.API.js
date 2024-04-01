import axios from "axios";

const baseUrlUser = 'http://localhost:8200/accessiableHeaven/api/v1/';

const registerUser = async(data) => {
    return await axios.post(`${baseUrlUser}users/register`, data)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        });
}

const registerOwner = async(data) => {
    return await  axios.post(`${baseUrlUser}owners/register`, data)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        });
}

const loginUser = async (data) => {
    
    console.log(`${baseUrlUser}users/login`);
    return await axios.post(`${baseUrlUser}users/login`, data)
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        });

}
const loginOwner = async (data) => {
  return await  axios.post(`${baseUrlUser}owners/login`, data)
        .then((response) => {
            console.log(response);
            return response.data
        })
        .catch((error) => {
            if (error.response) {
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        });
}



export { registerUser, loginUser, loginOwner, registerOwner }