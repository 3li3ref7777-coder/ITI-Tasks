<template>
  <div class="card border-0 shadow-sm rounded-3">
    <div class="card-body p-5 text-center">
      <i class="bi bi-mortarboard-fill display-4 text-primary"></i>

      <h2 class="fw-bold mt-3">Welcome to Students Directory</h2>

      <p class="text-muted mb-4">
        Manage students, their names, and their cities.
      </p>

      <router-link to="/student" class="btn btn-primary px-4">
        <i class="bi bi-people-fill me-2"></i>
        View Students
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>