<template>
  <div class="card border-0 shadow-sm rounded-3">
    <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
      <h5 class="mb-0 fw-bold">Student Details</h5>

      <router-link to="/student" class="btn btn-outline-secondary btn-sm">
        <i class="bi bi-arrow-left me-1"></i>
        Back
      </router-link>
    </div>

    <div v-if="loading" class="card-body text-center py-5">
      Loading student data...
    </div>

    <div v-else-if="student" class="card-body p-4">
      <div class="d-flex align-items-center gap-3 mb-4">
        <div
          class="bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center rounded-circle fs-4"
          style="width: 60px; height: 60px"
        >
          {{ student.name.charAt(0).toUpperCase() }}
        </div>

        <div>
          <h4 class="mb-1">{{ student.name }}</h4>
          <span class="text-muted">Student ID: #{{ student.id }}</span>
        </div>
      </div>

      <hr>

      <p class="mb-3">
        <strong>Name:</strong>
        {{ student.name }}
      </p>

      <p class="mb-0">
        <strong>City:</strong>
        {{ student.city }}
      </p>
    </div>

    <div v-else class="card-body text-center py-5 text-danger">
      Student not found.
    </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:3000/student'

export default {
  name: 'StudentDetails',

  data() {
    return {
      student: null,
      loading: true
    }
  },

  async mounted() {
    try {
      const id = this.$route.params.id

      const response = await fetch(`${API_URL}/${id}`)

      if (!response.ok) {
        throw new Error('Student not found')
      }

      this.student = await response.json()
    } catch (error) {
      console.error(error)
      this.student = null
    } finally {
      this.loading = false
    }
  }
}
</script>