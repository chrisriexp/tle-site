<template>
    <NavBar :active="'about'" />

    <!--Hero Section-->
    <div class="w-[90%] mx-auto py-24 grid md:grid-cols-2 gap-12">
        <div class="md:hidden">
            <img src="../assets/about.png" alt="Shaking Hands">
        </div>
        
        <div class="grid col h-fit text-custom-blue">
            <div class="grid gap-2">
                <h1 class="text-4xl md:text-5xl font-bold">The Lead Exchange</h1>
                <p class="text-xl md:text-2xl font-medium">We are a Florida based agency that specializes in local agent partnerships</p>
                <p class="mt-4">At The Lead Exchange, we are a Florida-based agency that specializes in helping insurance agents expand their business with access to every property and casualty insurance market in the state. Our comprehensive lead referral program provides a valuable solution for agents who may not be able to place business with the carriers they have access to.<br><br>

                    Through our program, agents can submit leads and earn commissions year after year, just like they would through an MGA. If an agent is unable to place business with their carriers, they can refer the submission to us and allow us to bind the policy with our broader market access. This ensures that the business and commissions stay with the agent, rather than going to their competitors.<br><br>
                    
                    For agents who are unable to write a policy for one of their customer's many insurance policies, this can be a valuable solution. By referring the business to us, they not only avoid losing the commission on the policy they cannot write, but they also prevent the potential loss of other pieces of business they already have. Our agreement prohibits us from seeking out additional lines of business beyond the specific line of business the agent refers to us.<br><br>
                    
                    As a local agency powered by Insurance Express- a regional leader in insurance services and solutions, we leverage cutting-edge technology and streamlined processes to provide seamless, rapid response solutions to our clients. Our focus on customer service ensures that the purchase and servicing of policies is executed smoothly, leading to higher close ratios and client retention.<br><br>
                    
                    Over the years, we have built partnerships with every Florida homeowners insurance carrier, allowing us to guarantee the lowest rates with the correct insurance coverage for your needs. Our commitment to excellence and expertise in the insurance industry has made us a trusted partner for insurance agents throughout the state.<br><br>
                    
                    By partnering with The Lead Exchange, you can tap into new revenue streams and stay ahead of market trends in the ever-changing insurance industry. Whether you're a new agent looking to establish yourself in the industry or an experienced agent looking to expand your business, The Lead Exchange is here to help you succeed..</p>
            </div>
        </div>

        <div class="hidden md:flow-root">
            <img src="../assets/about.png" alt="About Image" class="float-right">
        </div>
    </div>

    <div class="w-full grid justify-items-center text-center text-custom-blue bg-custom-blue bg-opacity-5 py-24 px-4">
        <img src="../assets/dots.png" alt="Dots" class="z-0 right-2 absolute mt-[-80px]">
        <h2 class="text-4xl font-bold xl:w-[45%]">Are you ready to transform your book of business and partner with us?</h2>

        <RouterLink to="/get-appointed" class="mt-12 text-lg text-white py-2 px-6 rounded-xl bg-custom-blue">Get Started</RouterLink>        

        <img src="../assets/dots.png" alt="Dots" class="z-0 left-2 absolute mt-[280px] md:mt-[200px] lg:mt-[200px]">
    </div>

    <Footer />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

export default {
    name: 'About',
    components: {
        NavBar,
        Footer
    }
}
</script>