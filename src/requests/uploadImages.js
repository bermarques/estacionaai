import axios from "axios";

const uploadImage = async (e) => {
  const data = new FormData();

  data.append("image", e.target.files[0]);

  const baseURL = "https://api.imgur.com/3/image";

  const parameters = {
    headers: {
      Authorization: "Client-ID a3cb8d31257ece4",
    },
  };

  let res = await axios.post(baseURL, data, parameters);
  return res.data.data.link;
};

export default uploadImage;
