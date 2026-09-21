<template>
  <div>
    <button
      type="button"
      class="btn btn-primary d-flex align-items-center gap-2 shadow-sm fw-semibold"
      data-bs-toggle="modal"
      data-bs-target="#addStudentModal"
    >
      <i class="bi bi-plus-lg"></i>
      Add Student
    </button>

    <div class="modal fade" id="addStudentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-0">
            <h5 class="modal-title fw-bold">Add New Student</h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body p-4">
            <form @submit.prevent="addStudent">
              <div class="mb-3 text-start">
                <label for="studentName" class="form-label fw-semibold text-secondary">
                  Full Name
                </label>

                <input
                  id="studentName"
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="e.g. Ahmed Hassan"
                  required
                >
              </div>

              <div class="mb-3 text-start">
                <label for="studentCity" class="form-label fw-semibold text-secondary">
                  City
                </label>

                <input
                  id="studentCity"
                  v-model="city"
                  type="text"
                  class="form-control"
                  placeholder="e.g. Cairo"
                  required
                >
              </div>

              <div class="d-flex justify-content-end gap-2 pt-3">
                <button
                  type="button"
                  class="btn btn-light border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button type="submit" class="btn btn-primary px-4">
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:3000/student'

export default {
  name: 'AddStudent',

  data() {
    return {
      name: '',
      city: ''
    }
  },

  methods: {
    async addStudent() {
      if (!this.name.trim() || !this.city.trim()) return

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name.trim(),
            city: this.city.trim()
          })
        })

        if (!response.ok) {
          throw new Error('Failed to add student')
        }

        const newStudent = await response.json()

        this.$emit('newStudentData', newStudent)

        this.name = ''
        this.city = ''

        const modalEl = document.getElementById('addStudentModal')
        const modalInstance = window.bootstrap?.Modal.getInstance(modalEl)

        modalInstance?.hide()
      } catch (error) {
        console.error(error)
        alert('حدث خطأ أثناء إضافة الطالب')
      }
    }
  }
}
</script>