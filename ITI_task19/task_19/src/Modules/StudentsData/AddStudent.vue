<template>
  <div>
    <!-- Trigger Button -->
    <button 
      type="button" 
      class="btn btn-primary d-flex align-items-center gap-2 shadow-sm fw-semibold" 
      data-bs-toggle="modal" 
      data-bs-target="#addStudentModal"
    >
      <i class="bi bi-plus-lg"></i> Add Student
    </button>

    <!-- Modal -->
    <div class="modal fade" id="addStudentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-0">
            <h5 class="modal-title fw-bold">Add New Student</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="addStudent">
              <div class="mb-3 text-start">
                <label for="studentName" class="form-label fw-semibold text-secondary">Full Name</label>
                <input type="text" class="form-control" id="studentName" v-model="name" placeholder="e.g. Ahmed Hassan" required />
              </div>
              <div class="mb-3 text-start">
                <label for="studentCity" class="form-label fw-semibold text-secondary">City</label>
                <input type="text" class="form-control" id="studentCity" v-model="city" placeholder="e.g. Cairo" required />
              </div>
              <div class="d-flex justify-content-end gap-2 pt-3">
                <button type="button" class="btn btn-light border" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary px-4">Save Student</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddStudent',
  data: () => ({
    name: '',
    city: ''
  }),
  methods: {
    addStudent() {
      if (!this.name.trim() || !this.city.trim()) return

      this.$emit('newStudentData', {
        name: this.name,
        city: this.city
      })

      const modalEl = document.getElementById('addStudentModal')
      if (window.bootstrap) {
        const modalInstance = window.bootstrap.Modal.getInstance(modalEl)
        if (modalInstance) {
          modalInstance.hide()
        }
      }

      this.name = ''
      this.city = ''
    }
  }
}
</script>