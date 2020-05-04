<template>
    <v-app id="inspire">
        
        <navigation></navigation>

        <v-content>
            <Nuxt />
        </v-content>

        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import Navigation from "@/components/Navigation"
export default {
  components: {
    Navigation
  },
}
</script>