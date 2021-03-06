import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './styles/main.scss'

const store = createStore({
    state() {
        return {
            integrations: [
                {
                    id: 1,
                    name: "Apple",
                    description: "Интеграция с сервисом Apple",
                    image: "apple",
                    enabled: true,
                },
                {
                    id: 2,
                    name: "Amazon",
                    description: "Интеграция с сервисом Amazon",
                    image: "amazon",
                    enabled: true,
                },
                {
                    id: 3,
                    name: "Microsoft",
                    description: "Интеграция с сервисом Microsoft",
                    image: "microsoft",
                    enabled: true,
                },
                {
                    id: 4,
                    name: "VMware",
                    description: "Интеграция с сервисом VMware",
                    image: "vmware",
                    enabled: false,
                },
                {
                    id: 5,
                    name: "Google",
                    description: "Интеграция с сервисом Google",
                    image: "google",
                    enabled: false,
                },
            ]
        }
    },
    mutations: {
        changeEnable(state, index) {
            var indexOfService = state.integrations.findIndex(x => x.id === index);
            state.integrations[indexOfService].enabled = !state.integrations[indexOfService].enabled;
        }
    }
})

createApp(App).use(store).mount('#app');