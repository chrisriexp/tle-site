<template>
    <NavBar :active="'lead'" />

    <div v-if="!submitted" class="w-full grid justify-items-center gap-8 mt-24 md:mt-6 mb-24">
        <h1 class="text-3xl text-center">Auto Lead</h1>

        <div class="w-[90%] md:w-[70%] lg:w-[50%] mb-12 grid grid-cols-3 text-center font-medium text-[10px] md:text-[12px] border-[1px] border-custom-gray border-opacity-20 rounded-md">
            <div v-for="(item, index) in steps" :key="index" :class="step === index ? 'bg-custom-blue text-white' : ''" class="py-2 rounded-md">
                <p class="">{{ item }}</p>
            </div>
        </div>

        <basicInfo v-if="step == 0" @next="next" :data="form" />
        <driverInfo v-if="step == 1" @back="back" @next="next" :data="form" />
        <vehicleInfo v-if="step == 2" @back="back" @submitLead="submitAutoLead" :data="form" />
    </div>

    <div v-else class="grid gap-2 justify-items-center text-center w-fit mx-auto mt-24">
        <p class="flex md:gap-2 text-lg md:text-2xl font-medium"><CheckBadgeIcon class="h-8 md:h-16 text-custom-green" /><span class="my-auto">Auto lead submitted!</span></p>
        <p class="text-sm md:text-lg w-[75%]">Thank you for submitting your home lead, one of our team members will be reaching out shortly.</p>
    </div>

    <Footer :class="submitted ? 'absolute' : ''" class="bottom-0" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import basicInfo from '../components/basicInfo.vue'
import driverInfo from '../components/autoLead/driverInfo.vue'
import vehicleInfo from '../components/autoLead/vehicleInfo.vue'

import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
import mailService from '../utils/mailService.js'

export default {
    name: "Home Lead",
    data() {
        return {
            submitted: false,
            steps: [
                'Basic Information',
                'Driver Information',
                'Vehicle Information'
            ],
            step: 0,
            form: {
                agent_name: '',
                agency_name: '',
                email: '',
                phone: '',
                client_name: '',
                client_email: '',
                client_phone: '',
                dob: '',
                occupation: '',
                education: '',
                dl_number: '',
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                zip: '',
                carrier: '',
                premium: '',
                exp_date: '',
                vin: '',
                year: '',
                make: '',
                model: '',
                comment: '',
                upload1: '',
                upload2: ''
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
                this.form[key] = data[key]
            })

            this.step += 1
        },
        change(id, value){
            this.form[id] = value
        },
        async submitAutoLead(data){
            const keys = Object.keys(data)

            keys.forEach(key => {
                this.form[key] = data[key]
            })

            const uploads = ['upload1', 'upload2']

            uploads.forEach(upload => {
                const reader = new FileReader();

                if(this.form[upload] != ''){
                    reader.onload = () => {
                        this.form[upload] = reader.result.split(',')[1]
                        this.form[upload] = this.form[upload].toString()
                    };

                    reader.readAsDataURL(this.form[upload]);
                }                
            })

            setTimeout(async () => {
                try {
                    const result = await mailService.sendLeadEmail(this.form, 'Auto');
                    
                    if (result.success) {
                        this.submitted = true;
                    } else {
                        console.error("Failed to send email:", result.error);
                        alert("Failed to submit lead. Please try again.");
                    }
                } catch (error) {
                    console.error("Error submitting lead:", error);
                    alert("An error occurred while submitting the lead. Please try again later.");
                }
            }, 1000)
        }
    },
    components: {
        NavBar,
        Footer,
        basicInfo,
        driverInfo,
        vehicleInfo,
        CheckBadgeIcon
    }
}
</script>