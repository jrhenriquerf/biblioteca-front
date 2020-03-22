export default class AuthorService {
  constructor(axios) {
    this.axios = axios;
    this.path = '/authors';
  }

  save(book) {
    return this.axios.post(this.path, book);
  }

  list() {
    return this.axios.get(this.path);
  }

  drop(id) {
    return this.axios.delete(`${this.path}/${id}`);
  }

  get(id) {
    return this.axios.get(`${this.path}/${id}`);
  }
}
