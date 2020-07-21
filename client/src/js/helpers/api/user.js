import axios from "axios";
const bcrypt = require('bcryptjs')

// helper imports
import {awaitToJS} from "../utilities";

const encrypt = async rawValue => {
    let err, salt, encryptedValue;
    
    [err, salt] = await awaitToJS(bcrypt.genSalt(10));
    if(err){
        console.error(`Error generating salt: ${err}`);
        return null;
    }
    
    [err, encryptedValue] = await awaitToJS(bcrypt.hash(rawValue, salt));
    if(err){
        console.error(`Error encrypting password: ${err}`);
        return null;
    }
    
    return encryptedValue;
}

export const signUp = async rawData => {
    const data = {...rawData};

    let err, encryptedPassword, response;
    // delete confirm password
    delete data.confirmPassword;

    // encrypt user password
    [err, encryptedPassword] = await awaitToJS(encrypt(data.password));

    if(err || !encryptedPassword){
        console.error(`Error encrypting password`);
        return 'Error encrypting password';
    }

    data.password = encryptedPassword;

    return axios.post("http://localhost:3000/user/registration", data)
    .then(response=>response)
    .catch(err=>{
        return {
            statusText: err.request.statusText,
            statusCode: err.request.status
        }
    })
}