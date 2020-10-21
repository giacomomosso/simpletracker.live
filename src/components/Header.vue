<template>
   <v-container>
      <v-app-bar app >
           <v-app-bar-nav-icon></v-app-bar-nav-icon>
           <v-toolbar-title>SimpleTracker.live</v-toolbar-title>
           <v-spacer></v-spacer>        
           <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
      </v-app-bar>
    </v-container>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style scoped>

</style>