<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <RouterLink class="navbar-brand" to="/books">Books Store</RouterLink>
      <div class="navbar-nav">
        <RouterLink class="nav-link" to="/books">Books</RouterLink>
        <RouterLink class="nav-link" to="/list">List ({{ wishlist.length }})</RouterLink>
      </div>
    </div>
  </nav>

  <main class="container page">
    <RouterView
      :wishlist="wishlist"
      @add-to-wishlist="addToWishlist"
      @remove-from-wishlist="removeFromWishlist"
    />
  </main>
</template>

<script setup>
import { ref } from 'vue'

const wishlist = ref([])

function addToWishlist(book) {
  if (!wishlist.value.some((item) => item.ISBN === book.ISBN)) {
    wishlist.value.push(book)
  }
}

function removeFromWishlist(isbn) {
  wishlist.value = wishlist.value.filter((book) => book.ISBN !== isbn)
}
</script>