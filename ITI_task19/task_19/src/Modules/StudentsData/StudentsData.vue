<template>
  <div class="card border-0 shadow-sm rounded-3">
    <!-- Header with Add Button -->
    <div class="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
      <div>
        <h5 class="mb-0 fw-bold text-dark">Students Directory</h5>
        <small class="text-muted">Manage enrolled students and their locations</small>
      </div>
      <AddStudent @newStudentData="addNewStudent" />
    </div>

    <!-- Table Section -->
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th scope="col" class="ps-4">ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col" class="text-end pe-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in studentsData" :key="student.id">
              <td class="ps-4 fw-bold text-secondary">#{{ student.id }}</td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="avatar-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center rounded-circle" style="width: 32px; height: 32px;">
                    {{ student.name.charAt(0).toUpperCase() }}
                  </div>
                  <span class="fw-medium text-dark">{{ student.name }}</span>
                </div>
              </td>
              <td>
                <span class="badge bg-light text-dark border px-2 py-1 fs-6 fw-normal">
                  {{ student.city }}
                </span>
              </td>
              <td class="text-end pe-4">
                <button class="btn btn-sm btn-outline-warning me-2 fw-semibold" @click="openEditModal(student)">
                  <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-outline-danger fw-semibold" @click="deleteStudent(student.id)">
                  <i class="bi bi-trash"></i> Delete
                </button>
              </td>
            </tr>
            <tr v-if="studentsData.length === 0">
              <td colspan="4" class="text-center py-4 text-muted">No students registered yet.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit Student Modal -->
    <div class="modal fade" id="editStudentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-0">
            <h5 class="modal-title fw-bold">Edit Student Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="updateStudent">
              <div class="mb-3 text-start">
                <label class="form-label fw-semibold text-secondary">Full Name</label>
                <input type="text" class="form-control" v-model="selectedStudent.name" required />
              </div>
              <div class="mb-3 text-start">
                <label class="form-label fw-semibold text-secondary">City</label>
                <input type="text" class="form-control" v-model="selectedStudent.city" required />
              </div>
              <div class="d-flex justify-content-end gap-2 pt-3">
                <button type="button" class="btn btn-light border" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary px-4">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import students from '../../student'
import AddStudent from './AddStudent.vue'

export default {
  name: 'StudentsData',
  components: { AddStudent },
  data: () => ({
    studentsData: students,
    selectedStudent: { id: null, name: '', city: '' }
  }),
  methods: {
    addNewStudent(newStudent) {
      const lastId = this.studentsData.length > 0 
        ? Math.max(...this.studentsData.map(s => s.id)) 
        : 0
      newStudent.id = lastId + 1
      this.studentsData.push(newStudent)
    },
    deleteStudent(id) {
      if (confirm('Are you sure you want to delete this student?')) {
        this.studentsData = this.studentsData.filter(s => s.id !== id)
      }
    },
    openEditModal(student) {
      this.selectedStudent = { ...student }
      const modalEl = document.getElementById('editStudentModal')
      if (window.bootstrap) {
        const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl)
        modalInstance.show()
      }
    },
    updateStudent() {
      const index = this.studentsData.findIndex(s => s.id === this.selectedStudent.id)
      if (index !== -1) {
        this.studentsData[index] = { ...this.selectedStudent }
      }
      const modalEl = document.getElementById('editStudentModal')
      if (window.bootstrap) {
        const modalInstance = window.bootstrap.Modal.getInstance(modalEl)
        if (modalInstance) modalInstance.hide()
      }
    }
  }
}
</script>