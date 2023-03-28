<template>
    <NavBar :active="'lead'" />

    <loading :class="loading ? '' : 'hidden'" class="ml-[48%] mt-[15%] z-10 absolute" />

    <div v-if="!submitted" class="w-full grid justify-items-center gap-8 mt-6 mb-24 z-0">
        <h1 class="text-3xl text-center">Home Lead</h1>

        <div class="w-[90%] md:w-[70%] lg:w-[50%] mb-12 grid grid-cols-3 text-center font-medium text-[10px] md:text-[12px] border-[1px] border-custom-gray border-opacity-20 rounded-md">
            <div v-for="(item, index) in steps" :key="index" :class="step === index ? 'bg-custom-blue text-white' : ''" class="py-2 rounded-md">
                <p class="">{{ item }}</p>
            </div>
        </div>

        <basicInfo v-if="step == 0" @next="next" :data="form" />
        <propertyInfo v-if="step == 1" @back="back" @next="next" :data="form" />
        <additionalInfo v-if="step == 2" @back="back" @submitLead="submitHomeLead" :data="form" :loading="loading" />
    </div>

    <div v-else class="grid gap-2 justify-items-center text-center w-fit mx-auto mt-24">
        <p class="flex md:gap-2 text-lg md:text-2xl font-medium"><CheckBadgeIcon class="h-8 md:h-16 text-custom-green" /><span class="my-auto">Home lead submitted!</span></p>
        <p class="text-sm md:text-lg w-[75%]">Thank you for submitting your home lead, one of our team members will be reaching out shortly.</p>
    </div>

    <Footer :class="submitted ? 'absolute' : ''" class="bottom-0" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import loading from '../components/loading.vue'

import basicInfo from '../components/basicInfo.vue'
import propertyInfo from '../components/homeLead/propertyInfo.vue'
import additionalInfo from '../components/additionalInfo.vue'

import emailjs from '@emailjs/browser';
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'

export default {
    name: "Home Lead",
    data() {
        return {
            loading: false,
            submitted: false,
            api: {
                serviceID: 'service_59zevqs',
                publicKey: 'h29zXRTKkaswfKPkp',
                homeLead: 'template_etc6ig1'
            },
            steps: [
                'Basic Information',
                'Property Information',
                'Additional Information'
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
        async submitHomeLead(data){
            this.loading = true
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

            setTimeout(() => {
                emailjs.init(this.api.publicKey)
                emailjs.send(this.api.serviceID, this.api.homeLead, this.form)
                .then(response => {
                    if(response.status == 200){
                        this.loading = false
                        this.submitted = true
                    }
                })
                .catch(error => {
                    this.loading = false
                    if(error.status == 426){
                        this.$alert({
                            title: 'Upload Error',
                            text: 'Please upload files under 2MB',
                            type: 'warn'
                        })
                    }
                })
            }, 1000)
        }
    },
    components: {
        NavBar,
        Footer,
        basicInfo,
        propertyInfo,
        additionalInfo,
        loading,
        emailjs,
        CheckBadgeIcon
    }
}
</script>