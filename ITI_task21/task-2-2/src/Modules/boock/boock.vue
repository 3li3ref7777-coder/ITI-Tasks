<template>
  <section>
    <h1 class="text-center mb-5">All Books</h1>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading books from server...</p>
    </div>

    <div v-else class="row">
      <div v-for="(book, index) in books" :key="book.ISBN" class="col-lg-4 col-md-6 mb-4">
        <article class="card book-card h-100">
          <img :src="book.image" :alt="book.Name" class="card-img-top book-image" />
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title">{{ book.Name }}</h5>
              <p class="card-text text-truncate">{{ book.description }}</p>
              <p><strong>Category:</strong> {{ book.category }}</p>
              <p><strong>Author:</strong> {{ book.author }}</p>
              <span :class="book.numberofpage < 50 ? 'text-danger fw-bold' : 'text-success fw-bold'">
                <strong>Pages:</strong> {{ book.numberofpage }}
              </span>
              <br /><br />
              <p><strong>Price:</strong> {{ formatPrice(book.price) }}</p>
            </div>
            
            <div class="d-flex flex-column gap-2 mt-3">
              <!-- زر التوجيه إلى صفحة التفاصيل -->
              <RouterLink :to="`/books/${book.id || index}`" class="btn btn-outline-info w-100">
                View Details
              </RouterLink>

              <button
                class="btn w-100"
                :class="isBookInWishlist(book.ISBN) ? 'btn-secondary' : 'btn-primary'"
                :disabled="isBookInWishlist(book.ISBN)"
                @click="$emit('add-to-wishlist', book)"
              >
                {{ isBookInWishlist(book.ISBN) ? 'Added' : 'Add to List' }}
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  wishlist: { type: Array, default: () => [] },
})

defineEmits(['add-to-wishlist'])

const books = ref([])
const loading = ref(true)

async function fetchBooks() {
  try {
    const response = await fetch('http://localhost:3000/books')
    const data = await response.json()
    books.value = data
  } catch (error) {
    console.error('Error fetching books:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBooks()
})

function isBookInWishlist(isbn) {
  return props.wishlist.some((book) => book.ISBN === isbn)
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-SA', { style: 'currency', currency: 'SAR' }).format(price)
}
</script>