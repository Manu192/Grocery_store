import { commonapi } from "./commonAPI"
import {serverURL} from "../Services/ServerURL"

// add product data
export const addproducts = async(reqbody)=>{
    return await commonapi('POST',`${serverURL}/products`,reqbody)
}

//get product data
export const getproducts =async()=>{
    return await commonapi('GET',`${serverURL}/products`,)
 }

 //delete product data
 export const deleteproducts = async(id)=>{
    return await commonapi(`DELETE`,`${serverURL}/products/${id}`)
 }

 export const updateproducts = async (id, reqbody) => {
  return await axios.put(`${BASE_URL}/products/${id}`, reqbody);
};
