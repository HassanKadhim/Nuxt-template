<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- Container of flex -->
    <div class="container flex h-16 items-center justify-between">
      <!-- Logo and page title -->
      <div class="flex items-center gap-3">
        <button
          @click="isOpen = true"
          aria-label="Open menu"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background lg:hidden"
        >
          <span class="sr-only">Button used to open menu</span>
          <Icon name="heroicons:bars-2" />
        </button>
        <!-- Logo -->
        <NuxtImg src="/logo.png" alt="logo" class="h-7 w-7 object-contain" />
        <!-- Page title -->
        <NuxtLink class="text-xl font-bold" to="/">Nuxt</NuxtLink>
      </div>

      <!-- Right side of header -->
      <div class="flex items-center gap-5">
        <button
          @click="toggleTheme"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
        >
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mode = useColorMode();
const toggleTheme = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};

// Items that will be displayed in menu
const profileMenuOptions = [
  { title: "Profile" },
  { title: "Billing" },
  { title: "Settings" },
  { title: "Team members" },
  { title: "Sales" },
  { divider: true },
  { title: "Logout" },
];

// Used to open/close menu
const isOpen = ref(false);
</script>
