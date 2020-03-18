import Home from './components/home/Home.vue';
import ListBooks from './components/books/list/ListBooks.vue';
import Authors from './components/authors/list/ListAuthors.vue';
import Pendings from './components/pendings/list/ListPendings.vue';

export default [
  {
    path: '', component: Home, titulo: 'Início', showOnMenu: true,
  },
  {
    path: '/books', component: ListBooks, titulo: 'Livros', showOnMenu: true,
  },
  {
    path: '/authors', component: Authors, titulo: 'Autores', showOnMenu: true,
  },
  {
    path: '/pendings', component: Pendings, titulo: 'Pendências', showOnMenu: true,
  },
];
