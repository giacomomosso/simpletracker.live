import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont:  'mdiSvg' // 'mdiSvg' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
}

export default new Vuetify(opts)