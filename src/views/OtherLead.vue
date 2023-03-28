<template>
    <NavBar :active="'lead'" />

    <loading :class="loading ? '' : 'hidden'" class="ml-[48%] mt-[15%] z-10 absolute" />

    <div v-if="!submitted" class="w-full grid justify-items-center gap-8 mt-24 md:mt-6 mb-24">
        <h1 class="text-3xl text-center">Additional Products Lead</h1>

        <div class="w-[90%] md:w-[70%] lg:w-[50%] mb-12 grid grid-cols-2 text-center font-medium text-[10px] md:text-[12px] border-[1px] border-custom-gray border-opacity-20 rounded-md">
            <div v-for="(item, index) in steps" :key="index" :class="step === index ? 'bg-custom-blue text-white' : ''" class="py-2 rounded-md">
                <p class="">{{ item }}</p>
            </div>
        </div>

        <basicInfo v-if="step == 0" @next="next" :data="form" />
        <additionalInfo v-if="step == 1" @back="back" @submitLead="submitOtherLead" :data="form" :loading="loading" />
    </div>

    <div v-else class="grid gap-2 justify-items-center text-center w-fit mx-auto mt-24">
        <p class="flex md:gap-2 text-lg md:text-2xl font-medium"><CheckBadgeIcon class="h-8 md:h-16 text-custom-green" /><span class="my-auto">Additional Product Lead submitted!</span></p>
        <p class="text-sm md:text-lg w-[75%]">Thank you for submitting your home lead, one of our team members will be reaching out shortly.</p>
    </div>

    <Footer :class="submitted ? 'absolute' : ''" class="bottom-0" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import loading from '../components/loading.vue'

import basicInfo from '../components/basicInfo.vue'
import additionalInfo from '../components/additionalProductInfo.vue'

import emailjs from '@emailjs/browser';
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'

export default {
    name: "Additional Products Lead",
    data() {
        return {
            loading: false,
            submitted: false,
            api: {
                serviceID: 'service_59zevqs',
                publicKey: 'h29zXRTKkaswfKPkp',
                otherLead: 'template_gkgdkiv'
            },
            steps: [
                'Basic Information',
                'Product Information'
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
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                zip: '',
                product: '',
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
        async submitOtherLead(data){
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

            emailjs.init(this.api.publicKey)
                emailjs.send(this.api.serviceID, this.api.otherLead, this.form)
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
        }
    },
    components: {
        NavBar,
        Footer,
        basicInfo,
        additionalInfo,
        loading,
        emailjs,
        CheckBadgeIcon
    }
}
</script>