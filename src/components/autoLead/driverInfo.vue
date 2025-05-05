<template>
    <!-- <textInput @inputUpdate="inputChange" :inputValue="form.name" :id="'name'" :label="'Agent Name'" :placeholderText="'John Doe'" /> -->
    <form @submit.prevent="next" class="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid gap-6 text-left">
        <div class="grid lg:grid-cols-2 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.dob" :id="'dob'" :label="'Date of Birth'" :date=true />
            <textInput @inputUpdate="inputChange" :inputValue="form.dl_number" :id="'dl_number'" :label="'DL Number'" :required=false />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <div class="grid gap-2 h-fit">
                <label class="text-md text-custom-blue font-medium">Education</label>
                <select v-model="form.education" name="education" id="education" class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0">
                    <option value="high-school">High School</option>
                    <option value="some-college">Some College</option>
                    <option value="associates">Associates</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PDH</option>
                    <option value="trade">Trade/Vocational School</option>
                </select>
            </div>

            <textInput @inputUpdate="inputChange" :inputValue="form.occupation" :id="'occupation'" :label="'Occupation'" :required=false />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.address_1" :id="'address_1'" :label="'Address 1'" :placeholderText="'000 Home Street'" />
            <textInput @inputUpdate="inputChange" :inputValue="form.address_2" :id="'address_2'" :label="'Address 2'" :placeholderText="'Unit 0'" :required=false />
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
            <textInput @inputUpdate="inputChange" :inputValue="form.city" :id="'city'" :label="'City'" :placeholderText="'City'" />
            <div class="grid gap-2 h-fit">
                <label class="text-md text-custom-blue font-medium">State <span class="text-red-400">*</span></label>
                <select v-model="form.state" name="states" id="states" class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0">
                    <option v-for="(state, index) in options" :key="index" :value="state.name" >{{ state.name }}</option>
                </select>
            </div>
            <textInput @inputUpdate="inputChange" :inputValue="form.zip" :id="'zip'" :label="'Zip'" :placeholderText="'Zip'" :mask=true :maskText="'#####'" />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <button @click="back" type="button" class="bg-custom-gray py-2 uppercase text-white text-sm font-medium rounded-md">back</button>
            <input type="submit" value="next" class="bg-custom-blue py-2 uppercase text-white text-sm font-medium rounded-md hover:cursor-pointer">
        </div>
    </form>
</template>

<script>
import textInput from '../textInput.vue';
import states from '../../assets/states.json'

export default {
    name: "Basic Info",
    props: {
        data: Object
    },
    data() {
        return {
            options: states,
            form: {
                dob: '',
                occupation: '',
                education: '',
                dl_number: '',
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                zip: ''
            },
            errors: [
                {
                    name: 'dob',
                    errors: []
                },
                {
                    name: 'address_1',
                    errors: []
                },
                {
                    name: 'city',
                    errors: []
                },
                {
                    name: 'state',
                    errors: []
                },
                {
                    name: 'zip',
                    errors: []
                }
            ]
        }
    },
    async created(){
        const keys = Object.keys(this.form)
        keys.forEach(key => {
            this.form[key] = this.data[key]
        })
    },
    methods: {
        back() {
            this.$emit('back')
        },
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

            const dontCheck = ['address_2', 'occupation', 'education', 'dl_number']

            const keys = Object.keys(this.form)

            keys.forEach(key => {
                if(this.form[key] == '' && !dontCheck.includes(key)){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `${key.replace('_', ' ')} is a required field`,
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
        textInput,
        states
    }
}
</script>