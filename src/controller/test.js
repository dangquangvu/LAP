import axios from "axios";
// import handler from "./handler";
// import authHeader from "../middleware/auth";
const user = JSON.parse(localStorage.getItem("user"));
const API_URL = "http://localhost:3334/quiz/";
class Test {
    generationTest(body, id) {
        // let id = '5ea480c8f139be2438237cd6';
        let param ={ authorId: body.authorId,
            author: body.author,
            guestTestId: user.user._id,
            guestTest: user.user.fullname,
            title: body.title,
            about_time: 0,}
        return axios
            .post(
                API_URL + `test/${id}`, param, { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(param)
                return err.data;
            });
    }
}

export default new Test();