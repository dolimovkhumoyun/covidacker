// third party
import axios from "axios";
import { base_url } from "../../../constants/baseUrl";

export const getRoadTrack = (offset, limit = 10, setData, setTotal) => {
  let user_id = localStorage.getItem("user_id");
  let url = `${base_url}register?user_id=${user_id}&offset=${offset}&limit=${limit}`;

  axios.get(url).then(res => {
    if (res.data.status === 200) {
      setTotal(res.data.total);
      setData(data => [...data, ...res.data.data]);
    } else {
      console.error(res.data.message);
    }
  });
};
