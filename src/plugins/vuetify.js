import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont:'mdiSvg',
        theme: {
            primary:'#9652ff',
            sucess:'#3cd1c2',
            info:'#ffaa2c',
            error:'#f83e70'
        }
    }
});
