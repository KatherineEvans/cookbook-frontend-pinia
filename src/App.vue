<template>
    <div>
        <Header></Header>
        <Content/>
        <Footer></Footer>
    </div>
</template>
<script>
import Content from './Content.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Content, Header, Footer },
    data: function () {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>  
<style scoped></style>
