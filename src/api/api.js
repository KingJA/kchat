import AxiosClient from '../../static/js/http'

export default {
  connect(data) {
    return AxiosClient.post("/connect", data);
  },
  create(data) {
    return AxiosClient.post("/create", data);
  },

  login(data) {
    return AxiosClient.post("/user/login", data);
  },

  register(data) {
    return AxiosClient.post("/user/register", data);
  }
}
