import axios from "axios";
// import handler from "./handler";
// import authHeader from "../middleware/auth";
const API_URL = "http://localhost:3334/quiz/";
class Test {
    generationTest(body, id) {
        // let id = '5ea480c8f139be2438237cd6';
        return axios
            .post(
                API_URL + `test/${id}`, {
                    authorId: body.authorId,
                    author: body.author,
                    guestTestId: body.guestTestId,
                    guestTest: body.guestTest,
                    title: body.title,
                    about_time: body.about_time,
                }, { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.data;
            });
    }
}

export default new Test();