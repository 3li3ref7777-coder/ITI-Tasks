<template>
  <div class="card border-0 shadow-sm rounded-3">
    <div class="card-header bg-white fw-bold">
      Navigation
    </div>

    <div class="list-group list-group-flush">
      <router-link
        to="/"
        class="list-group-item list-group-item-action"
        active-class="active"
      >
        <i class="bi bi-house-door me-2"></i>
        Home
      </router-link>

      <router-link
        to="/student"
        class="list-group-item list-group-item-action"
        active-class="active"
      >
        <i class="bi bi-people me-2"></i>
        Students
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksComponent'
}
</script>