// third party
import axios from "axios";
import { base_url } from "../../../constants/baseUrl";

export const sendPostId = (post_id, setIsScanned, setAlert, history) => {
  let url = `${base_url}register`;
  let user_id = localStorage.getItem("user_id");
  let data = {
    post_id: post_id,
    user_id: user_id
  };
  axios.post(url, data).then(res => {
    if (res.data.status === 200) {
      history.push("/table");
    } else {
      setAlert(true);
      setIsScanned(false);
      console.error(res.data.message);
    }
  });
};
