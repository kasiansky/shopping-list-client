import axios from "axios";

export const performRequest = async ({ method, path, body, headers }) => {
  try {
    const request = {
      method: method ?? "GET",
      url: `${process.env.REACT_APP_API_URL}/${path}`,
      data: body,
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(request);

    const { data: response } = await axios(request);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error.response;
  }
};
