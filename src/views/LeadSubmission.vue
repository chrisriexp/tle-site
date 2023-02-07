<template>
    <NavBar :active="'lead'" />

    <!--Product Selction-->
    <div class="w-[90%] grid gap-12 mx-auto py-24 text-custom-blue justify-items-center">
        <h1 class="font-bold text-4xl">Product Selection</h1>

        <div class="grid lg:grid-cols-3 gap-6 w-fit justify-items-center">
            <div class="w-[325px] h-fit px-8 py-6 grid gap-4 justify-items-center rounded-lg shadow-newdrop">
                <img src="../assets/house.svg" alt="House" class="h-24">
                <h2 class="font-medium text-2xl">Homeowner Insurance</h2>
                <RouterLink to="/homeowner-lead" class="py-2 px-6 bg-custom-blue rounded-xl text-white">New Submission</RouterLink>
            </div>

            <div class="w-[325px] h-fit px-8 py-6 grid gap-4 justify-items-center rounded-lg shadow-newdrop">
                <img src="../assets/auto.svg" alt="Car" class="h-24">
                <h2 class="font-medium text-2xl">Auto Insurance</h2>
                <RouterLink to="/auto-lead" class="py-2 px-6 bg-custom-blue rounded-xl text-white">New Submission</RouterLink>
            </div>

            <div class="w-[325px] h-fit px-8 py-6 grid gap-4 justify-items-center rounded-lg shadow-newdrop">
                <img src="../assets/ring.svg" alt="Ring" class="h-24">
                <h2 class="font-medium text-2xl">Additional Products</h2>
                <RouterLink to="/other-lead" class="py-2 px-6 bg-custom-blue rounded-xl text-white">New Submission</RouterLink>
            </div>
        </div>
    </div>

    <Footer class="bottom-0 lg:absolute" />
</template>

<script>
import {RouterLink} from 'vue-router'
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

export default {
    name: "Lead Submission",
    components: {
        NavBar,
        Footer
    }
}
</script>