// third party
import axios from "axios";
import { base_url } from "../../../constants/baseUrl";

export const getUser = (passport, history) => {
  let url = `${base_url}`;
  let data = {
    passport: passport
  };
  axios.post(url, data).then(res => {
    console.log(res);
    if (res.data.status === 200) {
      localStorage.setItem("user_id", res.data.data[0].id);
      history.push("/dashboard");
    } else {
      console.error(res.data.message);
    }
  });
};
