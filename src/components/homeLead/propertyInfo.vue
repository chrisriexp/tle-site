<template>
    <!-- <textInput @inputUpdate="inputChange" :inputValue="form.name" :id="'name'" :label="'Agent Name'" :placeholderText="'John Doe'" /> -->
    <form @submit.prevent="next" class="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid gap-6 text-left">
        <div class="grid lg:grid-cols-2 gap-6">
            <div class="grid gap-2 h-fit">
                <label class="text-md text-custom-blue font-medium">Occupancy <span class="text-red-400">*</span></label>
                <select v-model="form.occupancy" name="occupancy" id="occupancy" class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0">
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary (Vacation Home)</option>
                    <option value="tenant">Tenant (Rent)</option>
                </select>
            </div>

            <div class="grid gap-2 h-fit">
                <label class="text-md text-custom-blue font-medium">New Purchase <span class="text-red-400">*</span></label>
                <div class="w-full grid grid-cols-2 inner-border-[1px] border-custom-gray border-opacity-20 text-center uppercase rounded-md">
                    <p @click="newPurchase($event)" :class="form.new_purchase ? 'bg-custom-blue text-white' : ''" id="newYes" class="p-2 rounded-bl-md rounded-tl-md border-custom-blue border-r-2 hover:cursor-pointer">yes</p>
                    <p @click="newPurchase($event)" :class="!form.new_purchase ? 'bg-custom-blue text-white' : ''" id="newNo" class="p-2 rounded-br-md rounded-tr-md hover:cursor-pointer">no</p>
                </div>
            </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <div class="grid gap-2 h-fit">
                <label class="text-md text-custom-blue font-medium">Insured <span class="text-red-400">*</span></label>
                <div class="w-full grid grid-cols-2 inner-border-[1px] border-custom-gray border-opacity-20 text-center uppercase rounded-md">
                    <p @click="insured($event)" :class="form.insured ? 'bg-custom-blue text-white' : ''" id="insYes" class="p-2 rounded-bl-md rounded-tl-md border-custom-blue border-r-2 hover:cursor-pointer">yes</p>
                    <p @click="insured($event)" :class="!form.insured ? 'bg-custom-blue text-white' : ''" id="insNo" class="p-2 rounded-br-md rounded-tr-md hover:cursor-pointer">no</p>
                </div>
            </div>

            <textInput v-if="form.insured" @inputUpdate="inputChange" :inputValue="form.carrier" :id="'carrier'" :label="'Carrier Name'" :placeholderText="''" />
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
            <textInput v-if="form.insured" @inputUpdate="inputChange" :inputValue="form.premium" :id="'premium'" :label="'Premium'" :placeholderText="''" />
            <textInput v-if="form.insured" @inputUpdate="inputChange" :inputValue="form.exp_date" :id="'exp_date'" :label="'Policy Exp Date'" :date=true />
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
                zip: ''
            },
            errors: [
                {
                    name: 'carrier',
                    errors: []
                },
                {
                    name: 'premium',
                    errors: []
                },
                {
                    name: 'exp_date',
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
        newPurchase(e) {
            if(e.target.id == 'newYes'){
                this.form.new_purchase = true
            } else {
                this.form.new_purchase = false
            }
        },
        insured(e) {
            if(e.target.id == 'insYes'){
                this.form.insured = true
            } else {
                this.form.insured = false
            }
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

            if(this.form.insured){
                const dontCheck = ['address_2', 'insured', 'new_purchase']

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
            } else {
                const dontCheck = ['address_2', 'carrier', 'premium', 'exp_date', 'insured', 'new_purchase']
                
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
            }

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