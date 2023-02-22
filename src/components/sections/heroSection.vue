<template>
    <div class="w-[90%] mx-auto pt-10 pb-24 grid md:grid-cols-2 gap-12">
        <div class="md:hidden">
            <img src="../../assets/heroImage.png" alt="Shaking Hands">
        </div>
        
        <div class="grid col h-fit my-auto text-custom-blue">
            <div class="grid gap-2">
                <h1 class="text-4xl md:text-5xl font-bold ">Expand Your Business with Florida's Comprehensive Insurance Lead Referral Program.</h1>
                <p class=""> Submit business you cannot place and earn lifelong commissions. We provide access to every property and casualty insurance market in Florida. 
                    Our cutting-edge technology and streamlined approach will help you expand your business quickly and efficiently.</p>
            </div>

            <RouterLink to="/get-appointed" class="mt-12 text-white py-4 px-6 bg-custom-blue rounded-2xl w-fit">Get Started</RouterLink>
        </div>

        <div class="hidden md:flow-root">
            <img src="../../assets/heroImage.png" alt="Shaking Hands" class="float-right">
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeroSection'
}
</script>