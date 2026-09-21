<template>
  <div class="container my-4 min-vh-100 d-flex flex-column justify-content-between">
    <div>
      <!-- Header Component -->
      <HeaderComponent />

      <!-- Main Section -->
      <div class="row g-4">
        <aside class="col-lg-3 col-md-4">
          <LinksComponent />
        </aside>
        <main class="col-lg-9 col-md-8">
          <StudentsData />
        </main>
      </div>
    </div>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../Modules/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '../Modules/FooterComponent/FooterComponent.vue'
import LinksComponent from '../Modules/LinksComponent/LinksComponent.vue'
import StudentsData from '../Modules/StudentsData/StudentsData.vue'

export default {
  name: 'MainLayoutComponent',
  components: {
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    StudentsData
  }
}
</script>