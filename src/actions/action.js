import axios from "axios";
import history from "../history";

const API_URL = "http://localhost:3000";
const API_LOGIN = "http://34.101.191.163:38080/api/v1/auth/login"
const API_REGISTER = "http://34.101.191.163:38080/api/v1/auth/register"
const POST_PRODUCT = "http://34.101.191.163:38080/api/v1/products"
const LOAD_PRODUCT = "http://34.101.191.163:38080/api/v1/products"

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000,
});

// start load event data
const loadEventSuccess = (events) => ({
    type: "LOAD_EVENT_SUCCESS",
    events,
});

const loadEventFailure = () => ({
    type: "LOAD_EVENT_FAILURE",
});

export const loadEvent = () => {
    return (dispatch) => {
        return request
            .get("/")
            .then(function (response) {
                dispatch(loadEventSuccess(response.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadEventFailure());
            });
    };
};

// start post event data
const postEventSuccess = (event) => ({
    type: "POST_EVENT_SUCCESS",
    event,
});

const postEventFailure = (id) => ({
    type: "POST_EVENT_FAILURE",
    id,
});

const postEventRedux = (id, title, brand, price, size, description, image) => ({
    type: "POST_EVENT",
    id, title, brand, price, size, description, image
});

export const postEvent = (id, title, brand, price, size, description, image) => {
    // let id = Date.now();
    return (dispatch) => {
        dispatch(postEventRedux(id, title, brand, price, size, description, image));
        return request
            .post("/", { id, title, brand, price, size, description, image })
            .then(function (response) {
                dispatch(postEventSuccess(response.data));
                history.push("/");
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postEventFailure(id));
            });
    };
};

export const login = (email, password) => {
    return axios.post(API_LOGIN, {email, password})
        .then(function (response) {
            // dispatch(postLoginSuccess(response.data));
            console.log(response.data, "login")
            localStorage.setItem("tokenlogin", response.data.token);
            history.push("/")
            // history.push("/");
        })
        .catch(function (error) {
            console.error(error);
            // dispatch(postLoginFailure(id));
            alert("data tidak ditemukan")
        });
    // };
};
export const Registration = (name, email, password, role) => {
    localStorage.setItem("role", role)
    return axios.post(API_REGISTER, { name, email, password, role })
        .then(function (response) {
            // dispatch(postLoginSuccess(response.data));
            console.log(response.data.role, "register")
            // localStorage.setItem("token", response.data.role);
            alert("data telah terkirim")
            history.push("/login")
            // history.push("/");
        })
        .catch(function (error) {
            console.error(error);
            // dispatch(postLoginFailure(id));
            alert("data gagal dikirim")
        });
    // };
};

export const postProduct = (title, brand, price, size, description, file, stock) => {
    const token = localStorage.getItem("tokenlogin")
    // const formData = new FormData();
    // formData.append("file", file);
    return axios.post(POST_PRODUCT,{title, brand, price, size, description, file, stock},
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        } )
        .then(function (response) {
            axios.post('http://34.101.191.163:38080/uploads/', file)
            // dispatch(postLoginSuccess(response.data));
            console.log(response.data, "post")
            alert('data berhasil disimpan')
            // history.push("/");
        })
        .catch(function (error) {
            console.error(error);
            // dispatch(postLoginFailure(id));
            alert("data tidak terkirim")
        });
    // };
};

export const loadProduct = () => {
    return axios.get(LOAD_PRODUCT)
        .then(function (response) {
            // dispatch(postLoginSuccess(response.data));
            console.log(response.data, "post")
            // history.push("/");
        })
        .catch(function (error) {
            console.error(error);
            // dispatch(postLoginFailure(id));
            alert("data tidak terkirim")
        });
    // };
};



// start delete event data

const deleteEventRedux = (id) => ({
    type: "DELETE_EVENT",
    id,
});

const deleteEventSuccess = (events) => ({
    type: "DELETE_EVENT_SUCCESS",
    events,
});

const deleteEventFailure = () => ({
    type: "DELETE_EVENT_FAILURE",
});

export const deleteEvent = (id) => {
    return (dispatch) => {
        dispatch(deleteEventRedux(id));
        return request
            .delete(`/${id}`)
            .then(function (response) {
                dispatch(deleteEventSuccess(response.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(deleteEventFailure());
            });
    };
};