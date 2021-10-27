import ky from "ky";

const baseUrl = "http://localhost:8080/toys";


const api = {
    index() {
        return ky.get(baseUrl).json();
    },

    indexbyId(id) {
        // return ky.put(`${baseUrl}/${id}`, { json: payload });
        return ky.put(`${baseUrl}/${id}`);
    },

    update(payload, id) {
   return ky.put(`${baseUrl}/${id}`, { json: payload });
    },

    create(payload) {
        return ky.post(baseUrl, { json: payload }).json();
    },

    delete(id) {
        return ky.delete(`${baseUrl}/${id}`);
    },
};

export default api
