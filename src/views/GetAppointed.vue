<template>
    <NavBar :active="'appointed'" />

    <div v-if="!submitted" class="w-full grid gap-12 justify-items-center py-24 text-custom-blue px-4">
        <h2 class="text-3xl font-bold text-center">Request Appointment</h2>

        <form @submit.prevent="submit" class="w-[80%] lg:w-[50%] grid gap-6 mb-6">
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <textInput @inputUpdate="inputChange" :inputValue="form.name" :id="'name'" :label="'Agent Name'" :placeholderText="'John Doe'" />
                <textInput @inputUpdate="inputChange" :inputValue="form.agency_name" :id="'agency_name'" :label="'Agency Name'" :placeholderText="'ABC Insurance'" />
            </div>

            <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <textInput @inputUpdate="inputChange" :inputValue="form.email" :id="'email'" :label="'Email'" :placeholderText="'john@doe.com'" :email=true />
                <textInput @inputUpdate="inputChange" :inputValue="form.phone" :id="'phone'" :label="'Phone'" :placeholderText="'(555) 555-5555'" :mask=true :maskText="'(###) ###-####'" />
            </div>

            <textarea v-model="form.comment" name="comment" id="comment" cols="30" rows="3" class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0"></textarea>
        
            <input type="submit" class=" w-full py-2 px-6 font-bold text-xl text-white bg-custom-blue rounded-lg mx-auto hover:cursor-pointer">
        </form>
    </div>

    <div v-if="submitted" class="w-fit mx-auto grid gap-12 justify-items-center py-24 text-custom-blue text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center">Get Appointed</h2>

        <div class="grid gap-2 justify-items-center text-center w-fit">
            <p class="flex md:gap-2 text-lg md:text-2xl font-medium"><CheckBadgeIcon class="h-8 md:h-16 text-custom-green" /><span class="my-auto">Appointment request submitted!</span></p>
            <p class="text-sm md:text-lg w-[75%]">Thank you for submitting your appointment request, one of our team members will be reaching out shortly.</p>
        </div>
    </div>

    <Footer :class="submitted ? 'absolute' : ''" class="bottom-0 lg:absolute" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import textInput from '../components/textInput.vue'
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
import mailService from '../utils/mailService.js'

export default {
    name: 'Get Appointed',
    data() {
        return {
            submitted: false,
            processing: false,
            form: {
                name: '',
                agency_name: '',
                email: '',
                phone: '',
                comment: ''
            },
            errors: [
                {
                    name: 'name',
                    errors: []
                },
                {
                    name: 'agency_name',
                    errors: []
                },
                {
                    name: 'email',
                    errors: []
                },
                {
                    name: 'phone',
                    errors: []
                }
            ]
        }
    },
    methods: {
        inputChange(id, value, errors){
            this.form[id] = value
            
            if(errors){
                this.errors.forEach(error => {
                    if(error.name == id){
                        error.errors = errors
                    }
                })                    
            } else {
                this.errors.forEach(error => {
                    if(error.name == id){
                        error.errors = []
                    }
                })
            }
        },
        submit(){
            if(this.validateForm()){
                this.processing = true

                const emailData = {
                    firstName: this.form.name.split(' ')[0] || '',
                    lastName: this.form.name.split(' ').slice(1).join(' ') || '',
                    email: this.form.email,
                    phone: this.form.phone,
                    agency: this.form.agency_name,
                    comment: this.form.comment
                }

                setTimeout(async () => {
                    try {
                        const result = await mailService.sendAppointmentEmail(emailData);
                        
                        if (result.success) {
                            this.submitted = true;
                            this.processing = false;
                            
                            // Clear form data
                            const formKeys = Object.keys(this.form)
                            formKeys.forEach(key => {
                                this.form[key] = ''
                            })
                        } else {
                            console.error("Failed to send email:", result.error);
                            alert("Failed to submit appointment request. Please try again.");
                            this.processing = false;
                        }
                    } catch (error) {
                        console.error("Error submitting appointment request:", error);
                        alert("An error occurred while submitting the appointment request. Please try again later.");
                        this.processing = false;
                    }
                }, 1000)
            }
        },
        validateForm() {
            let valid = true

            this.errors.forEach(item => {
                if(item.errors.length > 0){
                    valid = false
                    item.errors.forEach(error => {
                        this.$alert({
                            title: 'Validation Error',
                            text: error,
                            type: 'warn'
                        })
                    })
                }
            })

            const keys = Object.keys(this.form)

            keys.forEach(key => {
                if(this.form[key] == '' && key != 'comment' && key != 'agency_name'){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `${key} is a required field.`,
                        type: 'warn'
                    })
                } else if(this.form[key] == '' && key == 'agency_name'){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `agency name is a required field.`,
                        type: 'warn'
                    })
                } else if(key == 'phone' && this.form[key].length != 14){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `please enter a 10 digit phone number.`,
                        type: 'warn'
                    })
                }
            })

            return valid
        }
    },
    components: {
        NavBar,
        Footer,
        textInput,
        CheckBadgeIcon
    }
}
</script>