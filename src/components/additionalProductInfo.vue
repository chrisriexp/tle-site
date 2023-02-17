<template>
    <!-- <textInput @inputUpdate="inputChange" :inputValue="form.name" :id="'name'" :label="'Agent Name'" :placeholderText="'John Doe'" /> -->
    <form @submit.prevent="submit" class="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid gap-6 text-left">
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

        <div class="grid grid-cols-2 gap-6">
            <div class="grid col gap-2 h-fit">
                <label class="text-md text-custom-blue font-medium">Product Selection <span class="text-red-400">*</span></label>
                <select v-model="form.product" name="product" id="product" class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0">
                    <option value="flood">Flood Insurance</option>
                    <option value="commercial">Commercial Insurance</option>
                    <option value="umbrealla">Umbrella</option>
                    <option value="personalFloater">Personal Article Floater</option>
                    <option value="rv-atv">RV, ATV, Golf Cart</option>
                </select>
            </div>

            <div class="grid col gap-2">
                <label class="text-md text-custom-blue font-medium">Additional Comments</label>
                <textarea
                    @change="this.$emit('change', 'comment', form.comment)"
                    v-model="form.comment"
                    class="border-custom-gray border-opacity-20 ring-none focus:border-custom-gray focus:border-opacity-20 rounded-md focus:ring-0"
                    name="comment"
                    id=""
                    cols="30"
                    rows="5"
                >
                </textarea>
            </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <button @click="back" type="button" class="bg-custom-gray py-2 uppercase text-white text-sm font-medium rounded-md">back</button>
            <input type="submit" value="submit" class="bg-custom-blue py-2 uppercase text-white text-sm font-medium rounded-md hover:cursor-pointer">
        </div>
    </form>
</template>

<script>
import textInput from './textInput.vue';
import states from '../assets/states.json'
import { CloudArrowUpIcon } from '@heroicons/vue/24/outline'

export default {
    name: "Additional Info",
    props: {
        data: Object
    },
    data() {
        return {
            options: states,
            form: {
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                zip: '',
                product: '',
                comment: ''
                // upload1: '',
                // upload2: '',
                // upload3: '',
                // upload4: ''
            },
            errors: [
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
        async uploadFile(e){
            const file = e.target.files[0];
            if (!file) {
                return
            }

            const id =e.target.id

            this.form[id] = file
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
        submit(){
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
                if(this.form[key] == '' && key != 'comment' && key != 'address_2'){
                    valid = false
                    this.$alert({
                        title: 'Validation Error',
                        text: `${key.replace('_', ' ')} is a required field`,
                        type: 'warn'
                    })
                }
            })

            if(valid){
                this.$emit('submitLead', this.form)
            }
        }
    },
    components: {
        textInput,
        CloudArrowUpIcon
    }
}
</script>