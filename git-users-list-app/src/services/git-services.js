import http from "./httpService";
import config from "../config/common-config.json";
const endPoint = config.endPoint + "/getusers";

export function getUsersByCity(city, pageNumber) {
  return http.get(endPoint + `/${city}/page/${pageNumber}`);
}
