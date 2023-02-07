<template>
    <NavBar :active="'about'" />

    <!--Hero Section-->
    <div class="w-[90%] mx-auto py-24 grid md:grid-cols-2 gap-12">
        <div class="md:hidden">
            <img src="../assets/about.png" alt="Shaking Hands">
        </div>
        
        <div class="grid col h-fit text-custom-blue">
            <div class="grid gap-2">
                <h1 class="text-4xl md:text-5xl font-bold">The Lead Exchange</h1>
                <p class="text-xl md:text-2xl font-medium">We are a Florida based agency that specializes in local agent partnerships</p>
                <p class="mt-4">The Lead Exchange is powered by Insurance Express. Founded in 1994 out of Boston, Massachusetts, Insurance Express is recognized as a regional leader in providing insurance services and solutions to meet the needs of all clientele. An innovative leader, Insurance Express is on the cutting edge, utilizing state of the art technology, allowing us to stay ahead of market trends while delivering seamless rapid response solutions in an ever-evolving market place. Insurance Express is committed to providing our clients the highest quality of customer service to ensure that the purchase and servicing of all policies is executed smoothly. Over the years Insurance Express has built partnerships with every Florida homeowners insurance carrier, allowing us to always guarantee the lowest rate with the correct insurance coverage for your needs.</p>
            </div>
        </div>

        <div class="hidden md:flow-root">
            <img src="../assets/about.png" alt="About Image" class="float-right">
        </div>
    </div>

    <div class="w-full grid justify-items-center text-center text-custom-blue bg-custom-blue bg-opacity-5 py-24 px-4">
        <img src="../assets/dots.png" alt="Dots" class="z-0 right-2 absolute mt-[-80px]">
        <h2 class="text-4xl font-bold xl:w-[45%]">Are you ready to transform your book of business and partner with us</h2>

        <RouterLink to="/get-appointed" class="mt-12 text-lg text-white py-2 px-6 rounded-xl bg-custom-blue">Get Appointed</RouterLink>        

        <img src="../assets/dots.png" alt="Dots" class="z-0 left-2 absolute mt-[280px] md:mt-[200px] lg:mt-[200px]">
    </div>

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