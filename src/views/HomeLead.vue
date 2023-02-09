<template>
    <NavBar :active="'lead'" />

    <div class="w-full grid justify-items-center gap-8 mt-6 mb-24">
        <h1 class="text-3xl text-center">Home Lead</h1>

        <div class="w-[90%] md:w-[70%] lg:w-[50%] mb-12 grid grid-cols-3 text-center font-medium text-[10px] md:text-[12px] border-[1px] border-custom-gray border-opacity-20 rounded-md">
            <div v-for="(item, index) in steps" :key="index" :class="step === index ? 'bg-custom-blue text-white' : ''" class="py-2 rounded-md">
                <p class="">{{ item }}</p>
            </div>
        </div>

        <basicInfo v-if="step == 0" @next="next" />
        <propertyInfo v-if="step == 1" @back="back" @next="next" />
    </div>

    <Footer class="bottom-0" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import basicInfo from '../components/homeLead/basicInfo.vue'
import propertyInfo from '../components/homeLead/propertyInfo.vue'

export default {
    name: "Home Lead",
    data() {
        return {
            steps: [
                'Basic Information',
                'Property Information',
                'Additional Information'
            ],
            step: 1,
            form: {
                agent_name: '',
                agency_name: '',
                email: '',
                phone: '',
                client_name: '',
                client_email: '',
                client_phone: '',
                occupancy: '',
                insured: false,
                carrier: '',
                premium: '',
                exp_date: '',
                new_purchase: false, 
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                zip: '',
                additional_info: '',
                uploads: []

            }
        }
    },
    methods: {
        back() {
            this.step -= 1
        },
        next(data) {
            const keys = Object.keys(data)

            keys.forEach(key => {
                if(key != 'uploads'){
                    this.form[key] = data[key]
                }
            })

            this.step += 1

            console.log(this.form)
        }
    },
    components: {
        NavBar,
        Footer,
        basicInfo,
        propertyInfo
    }
}
</script>