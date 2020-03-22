import Home from './components/home/Home.vue';
import ListBooks from './components/books/list/ListBooks.vue';
import NewBook from './components/books/create/NewBook.vue';
import NewAuthor from './components/authors/create/NewAuthor.vue';
import Authors from './components/authors/list/ListAuthors.vue';
import Pendings from './components/pendings/list/ListPendings.vue';

export default [
  {
    path: '',
    component: Home,
    titulo: 'Início',
    showOnMenu: true,
    name: 'home',
  },
  {
    path: '/books',
    component: ListBooks,
    titulo: 'Livros',
    showOnMenu: true,
    name: 'listBook',
  },
  {
    path: '/newBook',
    component: NewBook,
    showOnMenu: false,
    name: 'newBook',
  },
  {
    path: '/newAuthor',
    component: NewAuthor,
    showOnMenu: false,
    name: 'newAuthor',
  },
  {
    path: '/authors',
    component: Authors,
    titulo: 'Autores',
    showOnMenu: true,
    name: 'listAuthor',
  },
  {
    path: '/pendings',
    component: Pendings,
    titulo: 'Pendências',
    showOnMenu: true,
    name: 'listPendings',
  },
];
