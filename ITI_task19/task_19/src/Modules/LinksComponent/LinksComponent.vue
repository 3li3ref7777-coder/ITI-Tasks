<template>
  <div class="card border-0 shadow-sm rounded-3">
    <div class="card-header bg-white border-0 pt-3 pb-2">
      <h6 class="text-uppercase text-muted small fw-bold mb-0">Navigation</h6>
    </div>
    <div class="list-group list-group-flush px-2 pb-2">
      <a href="#" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2">
        <i class="bi bi-house-door text-secondary"></i> Home
      </a>
      <a href="#" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2 active fw-semibold">
        <i class="bi bi-people-fill"></i> Students Directory
      </a>
      <a href="#" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2">
        <i class="bi bi-images text-secondary"></i> Gallery
      </a>
      <a href="#" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2">
        <i class="bi bi-envelope text-secondary"></i> Contact Us
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksComponent'
}
</script>