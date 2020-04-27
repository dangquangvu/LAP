import axios from "axios";
import handler from './handler'
// import authHeader from "../middleware/auth";
const API_URL = "http://localhost:3334/quiz/";
class Quiz {
    generationQuiz(id) {
        // let id = '5ea480c8f139be2438237cd6';
        return axios
            .post(
                API_URL + `generateQuiz/${id}`, { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
                console.log(response.data, `generateQuiz/${id}`)
                return response.data;
            })
            .catch((err) => {
                return err.data;
            });
    }
    randomQuiz(data) {
        console.log(data)
        let max = data.length - 1;
        let min = 0;
        let arrRandom = [];
        let arr2dRandom = [];
        for (let i = 0; i < data.length; i++) {
            let check;
            if (data.length < 5) {
                check = data.length;
            } else {
                check = 4;
            }
            while (arrRandom.length < check) {
                let random = handler.random(max, min);
                if (arrRandom.indexOf(random) == -1) {
                    arrRandom.push(random);
                }
            }
            arr2dRandom.push(arrRandom);
            arrRandom = [];
        }
        // console.log(arr2dRandom[0], "test");
        let result = [];
        data.map((item, i) => {
            let arrAns = arr2dRandom[i];
            let checker = arrAns.indexOf(i);
            if (checker == -1) {
                let max = 3,
                    min = 0;
                let random = handler.random(max, min);
                arrAns[random] = i;
            }
            item.arrAns = arrAns;
            let arrAnsResult = [];
            arrAns.map((element) => {
                arrAnsResult.push(data[element].explain);
            });
            let object = {
                item: item,
                arrAns: arrAnsResult,
            };
            result.push(object);
        });
        return result;
    }
}

export default new Quiz();