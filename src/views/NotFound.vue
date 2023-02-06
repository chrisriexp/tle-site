<template>
    <div class="w-full h-screen bg-[#F9F6F0]">
        <div class="grid gap-12 w-fit h-fit mx-auto pt-24 justify-items-center">
            <h1 class="text-5xl md:text-[150px] font-bold text-custom-blue text-center">Error 404</h1>

            <div class="grid gap-2 justify-items-center">
                <h2 class="text-2xl md:text-4xl font-bold text-custom-blue text-center">Oops, page not found.</h2>
                <p class="px-6 text-custom-blue text-lg font-medium text-center">The page you were looking for was moved or does not exist</p>
                
                <router-link to="/" class="p-4 mt-6 rounded-lg bg-custom-blue text-white uppercase font-bold flex gap-4"><ArrowUturnLeftIcon class="h-6 my-atuo" /> <span class="my-auto">Back to Home</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/solid'

export default{
    name: "NotFound",
    components: {
        ArrowUturnLeftIcon
    }
}
</script>