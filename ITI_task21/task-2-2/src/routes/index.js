import { createRouter, createWebHistory } from 'vue-router'
import Book from '../Modules/boock/boock.vue'
import BookDetails from '../Modules/boock/bookDetails.vue'
import List from '../Modules/list/list.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/books' },
    { path: '/books', name: 'books', component: Book },
    { path: '/books/:id', name: 'book-details', component: BookDetails },
    { path: '/list', name: 'list', component: List },
  ],
  linkActiveClass: 'active',
})