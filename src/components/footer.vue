<template>
    <div class="w-full bg-custom-blue pt-16 text-white text-lg md:text-md text-center">
        <div class="w-[90%] mx-auto grid gap-4 md:grid-cols-3">
            <img src="../assets/logofooter.png" alt="The Lead Exchange Logo" class="mx-auto w-[50%] mb-10 md:hidden" />
            <img src="../assets/logofooter.png" alt="The Lead Exchange Logo" class="ml-[-50px] w-[50%] hidden md:block" />
            <div class="grid gap-12 md:grid-cols-2 md:gap-24 w-fit mx-auto">
                <div class="grid gap-4 justify-items-center">
                    <RouterLink to="/" class="w-fit border-b-2 border-transparent hover:border-white">Home</RouterLink>
                    <RouterLink to="/about" class="w-fit border-b-2 border-transparent hover:border-white">About</RouterLink>
                </div>
                <div class="grid gap-4 justify-items-center">
                    <RouterLink to="/lead-submission" class="w-fit border-b-2 border-transparent hover:border-white">Lead Submission</RouterLink>
                    <RouterLink to="/get-appointed" class="w-fit border-b-2 border-transparent hover:border-white">Get Appointed</RouterLink>
                </div>
            </div>
        </div>

        <div class="w-full text-center pb-4 mt-16 text-white text-sm">
            <p>© 2023 TheLeadExchange.com | The Lead Exchange</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer'
}
</script>