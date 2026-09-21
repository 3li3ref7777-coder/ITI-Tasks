<template>
  <section class="container py-4">
    <!-- حالة التحميل -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading book details...</p>
    </div>

    <!-- عرض تفاصيل الكتاب -->
    <div v-else-if="book" class="card shadow-sm p-4">
      <div class="row g-4 align-items-center">
        <div class="col-md-4 text-center">
          <img :src="book.image" :alt="book.Name" class="img-fluid rounded book-image" />
        </div>
        <div class="col-md-8">
          <h2>{{ book.Name }}</h2>
          <p class="text-muted fs-5"><strong>Author:</strong> {{ book.author }}</p>
          <hr />
          <p class="card-text fs-6">{{ book.description }}</p>
          <p><strong>Category:</strong> <span class="badge bg-info text-dark">{{ book.category }}</span></p>
          <p>
            <strong>Pages:</strong> 
            <span :class="book.numberofpage < 50 ? 'text-danger fw-bold' : 'text-success fw-bold'">
              {{ book.numberofpage }}
            </span>
          </p>
          <p class="fs-4 text-primary"><strong>Price:</strong> {{ formatPrice(book.price) }}</p>

          <div class="d-flex gap-3 mt-4">
            <button
              class="btn"
              :class="isBookInWishlist(book.ISBN) ? 'btn-secondary' : 'btn-primary'"
              :disabled="isBookInWishlist(book.ISBN)"
              @click="$emit('add-to-wishlist', book)"
            >
              {{ isBookInWishlist(book.ISBN) ? 'Added to List' : 'Add to Wishlist' }}
            </button>
            <RouterLink to="/books" class="btn btn-outline-secondary">Back to Books</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-danger text-center">
      Book not found!
      <br />
      <RouterLink to="/books" class="btn btn-primary mt-3">Back to Books</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  wishlist: { type: Array, default: () => [] },
})

defineEmits(['add-to-wishlist'])

const route = useRoute()
const book = ref(null)
const loading = ref(true)

async function fetchBookDetails() {
  try {
    const bookId = route.params.id
    const response = await fetch(`http://localhost:3000/books/${bookId}`)
    const data = await response.json()
    book.value = data
  } catch (error) {
    console.error('Error fetching book details:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBookDetails()
})

function isBookInWishlist(isbn) {
  return props.wishlist.some((item) => item.ISBN === isbn)
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-SA', { style: 'currency', currency: 'SAR' }).format(price)
}
</script>