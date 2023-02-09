<template>
    <!-- <textInput @inputUpdate="inputChange" :inputValue="form.name" :id="'name'" :label="'Agent Name'" :placeholderText="'John Doe'" /> -->
    <form @submit.prevent="next" class="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid gap-6 text-left">
        <div class="grid lg:grid-cols-2 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.agent_name" :id="'agent_name'" :label="'Agent Name'" :placeholderText="'John Doe'" />
            <textInput @inputUpdate="inputChange" :inputValue="form.agency_name" :id="'agency_name'" :label="'Agency Name'" :placeholderText="'ABC Insurance'" />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.email" :id="'email'" :label="'Email'" :placeholderText="'john@doe.com'" :email=true />
            <textInput @inputUpdate="inputChange" :inputValue="form.phone" :id="'phone'" :label="'Phone'" :placeholderText="'(555) 555-5555'" :mask=true :maskText="'(###) ###-####'" />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.client_name" :id="'client_name'" :label="'Client Name'" :placeholderText="'John Doe'" />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.client_email" :id="'client_email'" :label="'Client Email'" :placeholderText="'john@doe.com'" :email=true />
            <textInput @inputUpdate="inputChange" :inputValue="form.client_phone" :id="'client_phone'" :label="'Client Phone'" :placeholderText="'(555) 555-5555'" :mask=true :maskText="'(###) ###-####'" />
        </div>

        <input type="submit" value="next" class="bg-custom-blue py-2 uppercase text-white text-sm font-medium rounded-md">
    </form>
</template>

<script>
import textInput from '../textInput.vue';

export default {
    name: "Basic Info",
    data() {
        return {
            form: {
                agent_name: '',
                agency_name: '',
                email: '',
                phone: '',
                client_name: '',
                client_email: '',
                client_phone: '',
            },
            errors: [
                {
                    name: 'agent_name',
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
                },
                {
                    name: 'client_name',
                    errors: []
                },
                {
                    name: 'client_email',
                    errors: []
                },
                {
                    name: 'client_phone',
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
        next(){
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
                if(this.form[key] == ''){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `${key.replace('_', ' ')} is a required field`,
                        type: 'warn'
                    })
                } else if(key == 'phone' && this.form[key].length < 14 || key == 'client_phone' && this.form[key].length < 14 ){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `please enter a 10 digit phone number.`,
                        type: 'warn'
                    })
                }
            })

            if(valid){
                this.$emit('next', this.form)
            }
        }
    },
    components: {
        textInput
    }
}
</script>