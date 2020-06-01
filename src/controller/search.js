import axios from "axios";
// import handler from "./handler";
// import authHeader from "../middleware/auth";
const user = JSON.parse(localStorage.getItem("user"));
const API_URL = "http://localhost:3334/card/";
class Search {
    search(body) {
       
        return axios
            .post(
                API_URL + `searchFlashcard`, body, { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.data;
            });
    }
}

export default new Search();