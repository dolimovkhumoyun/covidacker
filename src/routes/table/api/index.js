// third party
import axios from "axios";
import { base_url } from "../../../constants/baseUrl";

export const getRoadTrack = setData => {
  let user_id = localStorage.getItem("user_id");
  let url = `${base_url}register?user_id=${user_id}`;

  axios.get(url).then(res => {
    console.log(res);
    if (res.data.status === 200) {
      setData(res.data.data);
    } else {
      console.error(res.data.message);
    }
  });
};
