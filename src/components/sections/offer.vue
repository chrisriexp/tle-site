<template>
    <div class="w-full bg-custom-blue bg-opacity-5 py-24">
        <div class="w-[90%] mx-auto grid md:grid-cols-2 gap-12">
            <img src="../../assets/offer.png" alt="Offerings">
            
            <div class="grid gap-6 text-custom-blue h-fit">
                <h1 class="text-xl font-bold">The Lead Exchange - Your Partner for Successful Insurance Business</h1>

                <p class="w-[90%]">The Lead Exchange is a trusted partner for insurance agents in Florida, providing a comprehensive lead referral program that helps agents expand their
                     business and increase revenue. Our state-of-the-art technology and extensive network of insurance markets enable us to deliver seamless, rapid response solutions to meet the ever-evolving needs of the market.</p>
            
                <div class="grid gap-2">
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Expand your business with our lead referral program that provides access to every property and casualty insurance market in Florida.</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Place business that you cannot on your own, and earn commissions for as long as the business remains on our books.</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Enjoy less overhead cost and highly competitive rates, thanks to our streamlined approach and cutting-edge technology.</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Benefit from a higher close ratio and client retention, thanks to our commitment to providing the highest quality of customer service.</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Trust in our expertise and experience to help you stay ahead of market trends and succeed in the ever-changing insurance industry.</p>
                </div>

                <RouterLink to="/get-appointed" class="w-fit text-custom-blue font-medium border-2 border-custom-blue py-4 px-6 rounded-3xl hover:text-white hover:bg-custom-blue">Get Started</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router';

export default {
    name: "Offer",
    components: {
    CheckCircleIcon,
    RouterLink
}
}
</script>