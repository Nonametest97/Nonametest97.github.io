const { createApp } = Vue
createApp({
    data() {
        return {
            config : configData
        }
    },
    mounted() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams.get('id'));
        console.log(`the component is now mounted.`)
    }
}).mount('#app')
