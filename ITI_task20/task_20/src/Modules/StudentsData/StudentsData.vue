<template>
  <div class="card border-0 shadow-sm rounded-3">
    <div
      class="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center"
    >
      <div>
        <h5 class="mb-0 fw-bold text-dark">Students Directory</h5>

        <small class="text-muted">
          Manage enrolled students and their locations
        </small>
      </div>

      <AddStudent @newStudentData="addNewStudent" />
    </div>

    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th class="ps-4">ID</th>
              <th>Name</th>
              <th>City</th>
              <th class="text-end pe-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="student in studentsData" :key="student.id">
              <td class="ps-4 fw-bold text-secondary">
                #{{ student.id }}
              </td>

              <td>
                <div class="d-flex align-items-center gap-2">
                  <div
                    class="bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center rounded-circle"
                    style="width: 32px; height: 32px"
                  >
                    {{ student.name.charAt(0).toUpperCase() }}
                  </div>

                  <router-link
                    :to="`/student/${student.id}`"
                    class="fw-medium text-dark text-decoration-none"
                  >
                    {{ student.name }}
                  </router-link>
                </div>
              </td>

              <td>
                <span class="badge bg-light text-dark border px-2 py-1 fs-6 fw-normal">
                  {{ student.city }}
                </span>
              </td>

              <td class="text-end pe-4">
                <button
                  class="btn btn-sm btn-outline-warning me-2 fw-semibold"
                  @click="openEditModal(student)"
                >
                  <i class="bi bi-pencil-square"></i>
                  Edit
                </button>

                <button
                  class="btn btn-sm btn-outline-danger fw-semibold"
                  @click="deleteStudent(student.id)"
                >
                  <i class="bi bi-trash"></i>
                  Delete
                </button>
              </td>
            </tr>

            <tr v-if="studentsData.length === 0">
              <td colspan="4" class="text-center py-4 text-muted">
                No students registered yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="editStudentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-light border-0">
            <h5 class="modal-title fw-bold">Edit Student Details</h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body p-4">
            <form @submit.prevent="updateStudent">
              <div class="mb-3 text-start">
                <label class="form-label fw-semibold text-secondary">
                  Full Name
                </label>

                <input
                  v-model="selectedStudent.name"
                  type="text"
                  class="form-control"
                  required
                >
              </div>

              <div class="mb-3 text-start">
                <label class="form-label fw-semibold text-secondary">
                  City
                </label>

                <input
                  v-model="selectedStudent.city"
                  type="text"
                  class="form-control"
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
                  Save Changes
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
import AddStudent from './AddStudent.vue'

const API_URL = 'http://localhost:3000/student'

export default {
  name: 'StudentsData',

  components: {
    AddStudent
  },

  data() {
    return {
      studentsData: [],
      selectedStudent: {
        id: null,
        name: '',
        city: ''
      }
    }
  },

  async mounted() {
    await this.getStudents()
  },

  methods: {
    async getStudents() {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch students')
        }

        this.studentsData = await response.json()
      } catch (error) {
        console.error(error)
        alert('حدث خطأ أثناء جلب بيانات الطلاب')
      }
    },

    addNewStudent(newStudent) {
      this.studentsData.push(newStudent)
    },

    async deleteStudent(id) {
      if (!confirm('Are you sure you want to delete this student?')) return

      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        })

        if (!response.ok) {
          throw new Error('Failed to delete student')
        }

        this.studentsData = this.studentsData.filter(
          student => student.id !== id
        )
      } catch (error) {
        console.error(error)
        alert('حدث خطأ أثناء حذف الطالب')
      }
    },

    openEditModal(student) {
      this.selectedStudent = { ...student }

      const modalEl = document.getElementById('editStudentModal')
      const modalInstance =
        window.bootstrap?.Modal.getOrCreateInstance(modalEl)

      modalInstance?.show()
    },

    async updateStudent() {
      try {
        const response = await fetch(
          `${API_URL}/${this.selectedStudent.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.selectedStudent.name.trim(),
              city: this.selectedStudent.city.trim()
            })
          }
        )

        if (!response.ok) {
          throw new Error('Failed to update student')
        }

        const updatedStudent = await response.json()

        const index = this.studentsData.findIndex(
          student => student.id === updatedStudent.id
        )

        if (index !== -1) {
          this.studentsData[index] = updatedStudent
        }

        const modalEl = document.getElementById('editStudentModal')
        const modalInstance = window.bootstrap?.Modal.getInstance(modalEl)

        modalInstance?.hide()
      } catch (error) {
        console.error(error)
        alert('حدث خطأ أثناء تعديل الطالب')
      }
    }
  }
}
</script>