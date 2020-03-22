export default class Book {
  constructor(title = '', description = '', authors = [], file = null) {
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.file = file;
  }
}
