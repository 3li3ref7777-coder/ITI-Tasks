<template>
  <section>
    <h1 class="text-center mb-5">My Wishlist</h1>

    <div v-if="wishlist.length === 0" class="alert alert-warning text-center">
      Your wishlist is empty.
    </div>

    <div v-else class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>ISBN</th>
            <th>Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Pages</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in wishlist" :key="book.ISBN">
            <td>{{ book.ISBN }}</td>
            <td>{{ book.Name }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.category }}</td>
            <td>{{ book.numberofpage }}</td>
            <td>{{ formatPrice(book.price) }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="$emit('remove-from-wishlist', book.ISBN)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
defineProps({ wishlist: { type: Array, default: () => [] } })
defineEmits(['remove-from-wishlist'])

function formatPrice(price) {
  return new Intl.NumberFormat('en-SA', { style: 'currency', currency: 'SAR' }).format(price)
}
</script>