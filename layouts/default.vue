<template>
  <div>
    <!-- Header -->
    <AppHeader />
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
      <!-- Main Section -->
      <main class="py-5 lg:col-span-6">
        <slot />
      </main>
    </div>
  </div>
</template>
