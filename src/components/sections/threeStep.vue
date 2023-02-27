<template>
    <div class="bg-custom-blue text-custom-blue py-10 px-6 md:px-16 lg:px-24">
      <h2 class="text-3xl md:text-6xl font-bold text-center text-white mb-10 md:mb-20">How It Works</h2>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex-1 text-center md:text-left mb-8 md:mb-0">
            <div class="rounded-full bg-white w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mr-auto md:mb-4 ">
                <span class="text-custom-blue text-2xl md:text-4xl font-bold">1</span>
          </div>
          <img src="../../assets/formicon.png" class="mx-auto">
          <h3 class="text-xl md:text-3xl text-white text-center font-bold mb-2 pt-6 pb-4">Get Appointed</h3>
          <p class="text-base md:text-lg text-white text-center leading-relaxed px-16">
            Apply online to join our lead referral program for property and casualty insurance markets in Florida. Gain access to all markets upon onboarding.
          </p>
        </div>
        <div class="flex-1 text-left md:text-left mb-8 md:mb-0">
          <div class="rounded-full bg-white w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mr-auto mb-4">
            <span class="text-custom-blue text-2xl md:text-4xl font-bold">2</span>
          </div>
          <img src="../../assets/leadsubmiticon.png" class="mx-auto">
          <h3 class="text-xl md:text-3xl text-white text-center font-bold mb-2 pt-6 pb-4">Submit Leads</h3>
          <p class="text-base md:text-lg text-white text-center leading-relaxed px-16">
            Use our Lead Submission portal to send us any deals your agents can't place. Our agents will bind the policy with our broad markets, so you don't lose out on the commission.
          </p>
        </div>
        <div class="flex-1 text-center md:text-left">
            <div class="rounded-full bg-white w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mr-auto mb-4">
                <span class="text-custom-blue text-2xl md:text-4xl font-bold">3</span>
          </div>
          <img src="../../assets/moneycharticon.png" class="mx-auto">
          <h3 class="text-xl md:text-3xl text-white text-center font-bold mb-2 pt-6 pb-4">Earn Lifelong Commissions</h3>
          <p class="text-base md:text-lg text-white text-center leading-relaxed px-16">
            Earn lifelong commissions on every policy you refer to us. We send out monthly commissions for all referred business, providing a valuable revenue stream for years to come.
          </p>
        </div>
      </div>
      <div class="text-center pt-24 pb-6">
        <RouterLink to="/get-appointed" class="w-fit bg-white text-custom-blue font-medium border-2 border-white py-4 px-6 rounded-3xl hover:text-white hover:bg-custom-blue">Get Started</RouterLink>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'threeStep',
  };
  </script>
  
 