<template>
    <div class="w-full bg-custom-blue pt-16 text-white text-lg md:text-md text-center">
        <div class="w-[90%] mx-auto grid gap-4 md:grid-cols-2">
            <img src="../assets/logofooter.png" alt="The Lead Exchange Logo" class="mx-auto w-[60%] mb-10 md:hidden" />
            <img src="../assets/logofooter.png" alt="The Lead Exchange Logo" class="ml-[-50px] w-[35%] hidden md:block" />
            
            <div class="grid gap-12 md:grid-cols-1 md:gap-24 w-fit mx-auto">
                <div class="gap-4 justify-items-center sm:flex sm:gap-0 sm:justify-center">
                  <div class="flex flex-col sm:flex-row">
                    <RouterLink to="/" class="w-fit border-b-2 border-transparent hover:border-white p-4">Home</RouterLink>
                    <RouterLink to="/about" class="w-fit border-b-2 border-transparent hover:border-white p-4">About</RouterLink>
                    <RouterLink to="/lead-submission" class="w-fit border-b-2 border-transparent hover:border-white p-4">Lead Submission</RouterLink>
                    <RouterLink to="/get-appointed" class="w-fit border-b-2 border-transparent hover:border-white p-4">Get Appointed</RouterLink>
                  </div>
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