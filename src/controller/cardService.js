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
                    author: object.author,
                    author_id: object.author_id,
                    author_email: object.author_email,
                    author_img: object.img,
                    arrayCard: object.arrayCard,
                }, { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.data;
            });
    }
    getAllCardFolder(id) {
        return axios
            .post(
                API_URL + "getAllCardFolder", {
                    author_id: id,
                }, { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.data;
            });
    }
    getAllCardPool(id) {
        return axios
            .post(
                API_URL + `getAllCardFolder/${id}`
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.data;
            });
    }
    getInforCardFolder(id) {
        return axios.post(
            API_URL + `getInforCardFolder/${id}`
        ).then(res => {
            return res.data;
        }).
        catch(err => {
            return err.data;
        })
    }
}

export default new cardService();