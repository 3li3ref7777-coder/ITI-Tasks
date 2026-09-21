import { createRouter, createWebHistory } from 'vue-router'

import MainLayoutComponent from '../MainLayout/mainLayoutComponent.vue'
import HomeView from '../MainLayout/HomeView.vue'
import StudentsData from '../Modules/StudentsData/StudentsData.vue'
import StudentDetails from '../Modules/StudentsData/StudentDetails.vue'

const routes = [
  {
    path: '/',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'student',
        name: 'students',
        component: StudentsData
      },
      {
        path: 'student/:id',
        name: 'student-details',
        component: StudentDetails
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router