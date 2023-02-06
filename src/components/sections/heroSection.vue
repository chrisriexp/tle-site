<template>
    <div class="w-[90%] mx-auto py-24 grid md:grid-cols-2 gap-12">
        <div class="md:hidden">
            <img src="../../assets/heroImage.png" alt="Shaking Hands">
        </div>
        
        <div class="grid col h-fit my-auto text-custom-blue">
            <div class="grid gap-2">
                <h1 class="text-4xl md:text-5xl font-bold">Leveraging Market Access <br>with Innovative Solutions</h1>
                <p class="">Partner with us to offer your clients the best rates. By bridging access to every A-rated homeowner's insurance company in Florida, we assist our partner agents to capture and retain more business.</p>
            </div>

            <RouterLink to="/get-appointed" class="mt-12 text-white py-4 px-6 bg-custom-blue rounded-2xl w-fit">Get Appointed</RouterLink>
        </div>

        <div class="hidden md:block flow-root">
            <img src="../../assets/heroImage.png" alt="Shaking Hands" class="float-right">
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeroSection'
}
</script>