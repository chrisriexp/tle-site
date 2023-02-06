<template>
    <div class="w-full bg-custom-blue bg-opacity-5 py-24">
        <div class="w-[90%] mx-auto grid md:grid-cols-2 gap-12">
            <img src="../../assets/offer.png" alt="Offerings">
            
            <div class="grid gap-6 text-custom-blue h-fit">
                <h1 class="text-xl font-bold">We offer the best services</h1>

                <p class="w-[90%]">An innovative leader, Insurance Express is on the cutting edge, utilizing state of the art technology, allowing us to stay ahead of market trends while delivering seamless rapid response solutions in an ever-evolving market place. Insurance Express is committed to providing our clients the highest quality of customer service to ensure that the purchase and servicing of all policies is executed smoothly.</p>
            
                <div class="grid gap-2">
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Less overhead cost</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Competitive rates</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Higher close ratio</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Higher commissions</p>
                    <p class="flex font-medium gap-4"><CheckCircleIcon class="h-6" />Higher client retention</p>
                </div>

                <RouterLink to="/get-appointed" class="w-fit text-custom-blue font-medium border-2 border-custom-blue py-4 px-6 rounded-3xl hover:text-white hover:bg-custom-blue">Get Appointed</RouterLink>
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