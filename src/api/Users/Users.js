import axios from "axios";

const userUrl =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/";

export const getUsersFromPage = (page, pageSize) => {
  return axios
    .get(`${userUrl + page + "/" + pageSize}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getUserData = (userId) => {
  return axios
    .get(`${userUrl + userId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};