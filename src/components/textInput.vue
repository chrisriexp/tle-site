<template>
    <div class="grid gap-2 h-fit">
        <label class="text-md text-custom-blue font-medium">{{ label }} <span v-if="required" class="text-red-400">*</span></label>
        <input
            v-if="date"
            v-model="v$.inputData.$model"
            @change="change($event)"
            type='date'
            :disabled="isdisabled"
            :id="id"
            class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0"
        >
        <input
            v-else-if="password"
            v-model="v$.inputData.$model"
            @change="change($event)"
            type='password'
            :id="id"
            :placeholder="placeholderText"
            class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0"
        >
        <input
            v-else-if="mask"
            v-model="v$.inputData.$model"
            @change="change($event)"
            type='text'
            v-mask="[maskText]"
            :disabled="isdisabled"
            :id="id"
            :placeholder="placeholderText"
            class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0"
        >
        <input
            v-else
            v-model="v$.inputData.$model"
            @change="change($event)"
            type='text'
            :disabled="isdisabled"
            :id="id"
            :placeholder="placeholderText"
            class="w-full p-2 rounded-md border-none bg-input-bg focus:ring-0"
        >
        <div class="input-errors" v-for="(error, index) of v$.inputData.$errors" :key="index">
            <div class="error-msg text-sm text-red-400">{{ error.$message }}</div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers} from '@vuelidate/validators'
import {mask} from 'vue-the-mask'

export default {
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    created() {
        if(this.required){
            let validRules = {}

            if(this.required){
                validRules = {
                    required: helpers.withMessage(`${this.label} is required`, required)
                }

                if(this.email){
                    validRules = {
                        required: helpers.withMessage(`${this.label} is required`, required),
                        email: helpers.withMessage(`Please enter a valid email.`, email)
                    }
                }
            }

            this.valid = validRules
        }

        this.inputData = this.inputValue
    },
    data() {
        return {
            inputData: '',
            valid: {}
        }
    },
    props: {
        id: String,
        label: String,
        placeholderText: String,
        inputValue: {
            type: String,
            default: ''
        },
        maskText: {
            type: String,
            default: ''
        },
        isdisabled: {
            type: Boolean,
            default: false
        },
        date: {
            type: Boolean,
            default: false
        },
        password: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Boolean,
            default: false
        },
        mask: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: true
        },
        email: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        inputValue(newValue, oldValue) {
            this.inputData = newValue
        }
    },
    methods: {
        change(e){
            let errors = []

            this.v$.inputData.$errors.forEach(error => {
                errors.push(error.$message)
            })

            this.$emit('inputUpdate', e.target.id, this.inputData, errors)
        }
    },
    directives: {mask},
    validations () {
        return {
            inputData: this.valid,
        }
    },
}
</script>