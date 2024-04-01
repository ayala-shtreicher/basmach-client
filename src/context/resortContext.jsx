import { createContext, useReducer, useState } from "react";
import resortsReduces from './reduces/resort.reduces'
import { getResortByIdAPI,getResortByCategoryAPI, getResortByOwnerIdAPI, addResortAPI, deleteResortAPI, getAllResortsAPI, getResortByCityAPI, getResortByDisabledAPI, getResortByPricedAPI } from "../APICalls/resort.API";

const resortContext = createContext({});

const ResortProvider = ({ children }) => {
    const [resorts, dispach] = useReducer(resortsReduces, []);

    const getAllCitiesResorts = async () => {
        let cities = [];
        try {
            const temp = await getAllResortsAPI();
            temp.map(resort => {
                cities.push(resort.city)
            })
            return cities;
        } catch (error) {
            console.log(error.message);
        }
    };
    const getAllResorts = async () => {
        try {
            const temp = await getAllResortsAPI();
            dispach({ type: "GET_RESORTS", payload: temp })
        } catch (error) {
            console.log(error.message);
        }
    };
    const getResortByCity = async (city) => {
        try {
            const temp = await getResortByCityAPI(city)
            dispach({ type: "GET_RESORTS", payload: temp })

        } catch (error) {
            console.log(error.message);
        }
    };
    const getResortById = async (id) => {
        try {

            const temp = await getResortByIdAPI(id)
            dispach({ type: "GET_RESORTS", payload: temp })

        } catch (error) {
            console.log(error.message);
        }
    };
    const getResortByOwnerId = async (id) => {
        try {

            const temp = await getResortByOwnerIdAPI(id)
            dispach({ type: "GET_RESORTS", payload: temp })

        } catch (error) {
            console.log(error.message);
        }
    };
    const getResortByCategory = async (cat) => {
        try {

            const temp = await getResortByCategoryAPI(cat)
            dispach({ type: "GET_RESORTS", payload: temp })

        } catch (error) {
            console.log(error.message);
        }
    };
    const getResortByDisabled = async (disability) => {
        try {
            const temp = await getResortByDisabledAPI(disability);
            dispach({ type: "GET_RESORTS", payload: temp })

        } catch (error) {
            console.log(error.message);
        }
    };
    const getResortByPrice = async ( maxPrice) => {
        try {
            const temp = await getResortByPricedAPI( maxPrice);
            dispach({ type: "GET_RESORTS", payload: temp })

        } catch (error) {
            console.log(error.message);
        }
    };
    const addResort = (resort) => {
        try {
            addResortAPI(resort)
            dispach({ type: "ADD_RESORT", payload: resort })

        } catch (error) {
            alert("error", err.message)
        }
    }
    const editResorts = (updateResort, id) => {
        try {
            dispach({ type: "EDIT_RESORT", payload: { updateResort, id } })

        } catch (error) {
            alert("error", err.message)
        }
    }

    const deleteResort = (id) => {
        try {
            deleteResortAPI(id);
            dispach({ type: "DELETE_PRODUCT", payload: id })

        } catch (error) {
            alert("error", err.message)
        }
    }
    const shared = { getAllCitiesResorts,getResortByOwnerId,getResortByCategory, getResortById, resorts, getAllResorts, getResortByCity, getResortByDisabled, getResortByPrice, addResort, editResorts, deleteResort }
    return (
        <resortContext.Provider value={shared}>
            {children}
        </resortContext.Provider>
    )
}
export default ResortProvider
export { resortContext }