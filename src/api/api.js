import AxiosClient from '../../static/js/http'

export default {

  login(account) {
    return AxiosClient.post("/user/login", account);
  },

  register(account) {
    return AxiosClient.post("/user/register", account);
  }
}
