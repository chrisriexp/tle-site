<template>
    <div class="w-fit grid gap-8 justify-items-center mx-auto py-24 px-4 text-custom-blue">
        <h2 class="text-center font-bold text-4xl">Created by Insurance Agents<br class="hidden md:block"> for Insurance Agents</h2>
        <p class="text-center text-lg">By bridging access to every A-rated homeowner's insurance company in Florida, we <br class="hidden md:block"> assist our partner agents to capture and retain more business.</p>
    
        <div class="w-fit grid lg:grid-cols-2 gap-12 mt-4">
            <div class="grid gap-4 col w-[330px] md:w-[387px] rounded-lg px-10 py-8 shadow-newdrop">
                <div class="h-fit grid gap-4">
                    <div class="py-2 px-4 rounded-lg bg-custom-blue bg-opacity-80 w-fit">
                        <UserIcon class="h-6 text-white" />
                    </div>

                    <p class="text-xl font-bold">Personal Lines Agents</p>

                    <p>We have teamed up with QuoteRush® to innovate the way Personal Lines agents submit new business to us. Input your clients data into QuoteRush in under 5 minutes and receive 35+ bindable rates for each A-rated Florida carrier.</p>

                    <!-- <button @click="$emit('learnMore')" class="w-fit h-fit py-2 px-6 rounded-xl border-2 border-custom-blue hover:text-white hover:bg-custom-blue">Learn More</button> -->
                </div>
            </div>

            <div class="grid gap-4 col w-[330px] md:w-[387px] rounded-lg px-10 py-8 shadow-newdrop">
                <div class="py-2 px-4 rounded-lg bg-custom-blue bg-opacity-80 w-fit">
                    <BuildingOffice2Icon class="h-6 text-white" />
                </div>

                <p class="text-xl font-bold">Commercial Lines Agents</p>

                <p>We act as a personal lines department for commercial agents all over the state of Florida. Build a personal lines book through The Lead Exchange. Simply refer the client and let us do all the heavy lifting.</p>

                <!-- <button @click="$emit('learnMore')" class="w-fit py-2 px-6 rounded-xl border-2 border-custom-blue hover:text-white hover:bg-custom-blue">Learn More</button> -->
            </div>
        </div>
    </div>
</template>

<script>
import { UserIcon, BuildingOffice2Icon } from '@heroicons/vue/24/solid'

export default {
    name: 'Created By',
    components: {
        UserIcon,
        BuildingOffice2Icon
    }
}
</script>