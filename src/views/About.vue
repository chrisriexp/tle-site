<template>
    <NavBar :active="'about'" />

    <Footer />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

export default {
    name: 'About',
    components: {
        NavBar,
        Footer
    }
}
</script>