import axios from "axios";

const baseURL = "https://apiallin.igenius.uz/api/site/";
// const baseURL = "https://d.allin.uz/ru/news?page=1&per_page="

export const $http = axios.create({
  baseURL,
});

export default $http;
