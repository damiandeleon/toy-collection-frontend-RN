import axios from "axios";

const baseUrl = "http://localhost:8080/toys";


const api = {
    getToys: async function () {
        const response = await axios.get(baseUrl);
        return(response.data);
    },

    indexbyId: function (id) {

        return axios.get(`${baseUrl}/${id}`);
    },

    create: function (payload) {
        return axios.post(baseUrl, payload);
    },

    deleteToy: function (id) {
        return axios.delete("http://localhost:8080/toys/" + id);
    },
};

export default api;
