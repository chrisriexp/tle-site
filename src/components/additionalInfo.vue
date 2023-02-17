<template>
    <!-- <textInput @inputUpdate="inputChange" :inputValue="form.name" :id="'name'" :label="'Agent Name'" :placeholderText="'John Doe'" /> -->
    <form @submit.prevent="submit" class="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid gap-6 text-left">
        <!-- <div class="w-full grid grid-cols-2 gap-6">
            <div class="grid gap-6 h-fit">
                <div class="grid gap-2 h-fit">
                    <label class="text-md text-custom-blue font-medium">File Upload</label>
                    <input @change="uploadFile($event)" ref="upload1" type="file" accept=".png, .jpg, .jpeg, .pdf" name="upload1" id="upload1" class="hidden">
                    <div v-on:click="$refs.upload1.click()" :class="!form.upload1 ? 'border-custom-blue border-opacity-40 bg-custom-blue bg-opacity-40' : 'border-green-400 bg-green-400'" class="flex items-center gap-6 w-full border-2 py-2 rounded-md hover:cursor-pointer">
                        <div class="flex my-auto mx-auto h-fit gap-2">
                            <CloudArrowUpIcon class="text-white h-8" />
                            <p class="text-md text-white font-medium my-auto">Upload</p>
                        </div>
                    </div>
                </div>

                <div class="grid gap-2 h-fit">
                    <label class="text-md text-custom-blue font-medium">File Upload</label>
                    <input @change="uploadFile($event)" ref="upload3" type="file" accept=".png, .jpg, .jpeg, .pdf" name="upload3" id="upload3" class="hidden">
                    <div v-on:click="$refs.upload3.click()" :class="!form.upload3 ? 'border-custom-blue border-opacity-40 bg-custom-blue bg-opacity-40' : 'border-green-400 bg-green-400'" class="flex items-center gap-6 w-full border-2 py-2 rounded-md hover:cursor-pointer">
                        <div class="flex my-auto mx-auto h-fit gap-2">
                            <CloudArrowUpIcon class="text-white h-8" />
                            <p class="text-md text-white font-medium my-auto">Upload</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 h-fit">
                <div class="grid gap-2 h-fit">
                    <label class="text-md text-custom-blue font-medium">File Upload</label>
                    <input @change="uploadFile($event)" ref="upload2" type="file" accept=".png, .jpg, .jpeg, .pdf" name="upload2" id="upload2" class="hidden">
                    <div v-on:click="$refs.upload2.click()" :class="!form.upload2 ? 'border-custom-blue border-opacity-40 bg-custom-blue bg-opacity-40' : 'border-green-400 bg-green-400'" class="flex items-center gap-6 w-full border-2 py-2 rounded-md hover:cursor-pointer">
                        <div class="flex my-auto mx-auto h-fit gap-2">
                            <CloudArrowUpIcon class="text-white h-8" />
                            <p class="text-md text-white font-medium my-auto">Upload</p>
                        </div>
                    </div>
                </div>

                <div class="grid gap-2 h-fit">
                    <label class="text-md text-custom-blue font-medium">File Upload</label>
                    <input @change="uploadFile($event)" ref="upload4" type="file" accept=".png, .jpg, .jpeg, .pdf" name="upload4" id="upload4" class="hidden">
                    <div v-on:click="$refs.upload4.click()" :class="!form.upload4 ? 'border-custom-blue border-opacity-40 bg-custom-blue bg-opacity-40' : 'border-green-400 bg-green-400'" class="flex items-center gap-6 w-full border-2 py-2 rounded-md hover:cursor-pointer">
                        <div class="flex my-auto mx-auto h-fit gap-2">
                            <CloudArrowUpIcon class="text-white h-8" />
                            <p class="text-md text-white font-medium my-auto">Upload</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div> -->

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

        <div class="grid lg:grid-cols-2 gap-6">
            <button @click="back" type="button" class="bg-custom-gray py-2 uppercase text-white text-sm font-medium rounded-md">back</button>
            <input type="submit" value="submit" class="bg-custom-blue py-2 uppercase text-white text-sm font-medium rounded-md hover:cursor-pointer">
        </div>
    </form>
</template>

<script>
import { CloudArrowUpIcon } from '@heroicons/vue/24/outline'

export default {
    name: "Additional Info",
    props: {
        data: Object
    },
    data() {
        return {
            form: {
                comment: ''
                // upload1: '',
                // upload2: '',
                // upload3: '',
                // upload4: ''
            }
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
        submit(){
            let valid = true

            if(valid){
                this.$emit('submitLead', this.form)
            }
        }
    },
    components: {
        CloudArrowUpIcon
    }
}
</script>