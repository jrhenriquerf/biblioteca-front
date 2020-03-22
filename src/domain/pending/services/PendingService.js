export default class {
  constructor(axios) {
    this.axios = axios;
    this.path = '/pendings';
  }

  list() {
    return this.axios.get(this.path);
  }
}
