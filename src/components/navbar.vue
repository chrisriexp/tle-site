<template>
    <!--Mobile Nav Bar-->
    <div class="md:hidden">
        <div class="navbar h-[75px] w-full top-0 fixed bg-white z-10">
            <div class="h-full mx-6 w-full">
                <div class="grid grid-cols-2 h-full w-full">
                    <div class="grid col my-auto">
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu" class="text-white text-2xl text-center uppercase font-semibold">
                                <div class="grid justify-items-center gap-6 text-center">
                                    <RouterLink to="/" :class="active == 'home' ? 'border-white' : 'border-transparent'" class="border-b-2 py-2 hover:border-white">Home</RouterLink>
                                    <RouterLink to="/about" :class="active == 'about' ? 'border-white' : 'border-transparent'"  class="border-b-2 py-2 hover:border-white">About</RouterLink>
                                    <RouterLink to="/lead-submission" :class="active == 'lead' ? 'border-white' : 'border-transparent'"  class="border-b-2 py-2 hover:border-white">Lead Submission</RouterLink>
                                    <RouterLink to="/get-appointed" class=" border-2 rounded-xl py-2 px-4 text-custom-blue bg-white">Get Appointed</RouterLink>
                                </div>
                            </ul>
                            </div>
                    </div>

                    <div class="grid col my-auto">
                        <div class="flow-root">
                            <img src="../assets/logo.png" alt="The Lead Exchange Logo" class="ml-[-50px]" />
                            <!-- <p class="my-auto text-custom-blue font-bold text-md ml-[-20px]">The Lead Exchange</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End Mobile Nav Bar-->

    <!--NavBar-->
    <div class="hidden md:block">
        <div class="navbar flex h-[100px] w-full">
            <div class="flex w-[90%] h-full mx-auto">
                <div class="grid grid-cols-6 flow-root w-full h-fit my-auto">
                    <div class="grid col-span-2 float-left w-fit">
                        <RouterLink to="/" class="my-auto h-fit"><img src="../assets/logo.png" alt="The Lead Exchange Logo" class="h-[25px]" /></RouterLink>
                    </div>
        
                    <div class="grid col-span-4 h-fit my-auto">
                        <div class="flow-root">
                            <div class="flex float-right text-md font-medium gap-8 text-custom-blue items-center">
                                <RouterLink to="/" :class="active == 'home' ? 'border-custom-blue' : 'border-transparent'" class="border-b-2 hover:border-custom-blue">Home</RouterLink>
                                <RouterLink to="/about" :class="active == 'about' ? 'border-custom-blue' : 'border-transparent'" class="border-b-2 hover:border-custom-blue">About</RouterLink>
                                <RouterLink to="/lead-submission" :class="active == 'lead' ? 'border-custom-blue' : 'border-transparent'" class="border-b-2 hover:border-custom-blue">Lead Submission</RouterLink>
                                <RouterLink to="/get-appointed" :class="active == 'appointed' ? 'bg-custom-blue text-white' : ''" class="py-2 px-6 border-2 rounded-xl border-custom-blue hover:bg-custom-blue hover:text-white">Get Started</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End NavBar-->
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name: "NavBar",
    props: {
        active: String
    },
    components: { RouterLink }
}
</script>