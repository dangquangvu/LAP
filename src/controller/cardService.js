import axios from "axios";
// import authHeader from "../middleware/auth";

const API_URL = "http://localhost:3334/card/";

class cardService {
    createCardFolder(object) {
        return axios
            .post(
                API_URL + "createCardFolder", {
                    title: object.title,
                    description: object.description,
                    total: object.arrayCard.length,
                    author: object.author
                }, { headers: { "Content-Type": "application/json" } }
            )
            .then(response => {
                return response.data;
            })
            .catch(err => {
                return err.data;
            });
    }
}

export default new cardService();