<template>
    <v-card height="fit-content">
        <v-img
        height="300"
        :src="data.urlToImage"
        class="white--text  align-end"
        >
        <v-card-title class="customTitle" >{{data.title}}</v-card-title>
        </v-img>
        <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon
                :href="data.url"
                target="_blank"
                >
                <v-icon>mdi-earth</v-icon>
              </v-btn>
            </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style scoped>
.customTitle {
 background-color: rgba(0, 0, 0, 0.7);
}
</style>