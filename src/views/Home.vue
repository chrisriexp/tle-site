<template>
  <NavBar :active="'home'" />
  <HeroSection />
  <Offer />
  <CreatedBy @learnMore="learnMore" />
  <Partners />
  <Footer />
</template>

<script>
import NavBar from '../components/navbar.vue'
import HeroSection from '../components/sections/heroSection.vue'
import Offer from '../components/sections/offer.vue'
import CreatedBy from '../components/sections/createdBy.vue'
import Partners from '../components/sections/partners.vue'
import Footer from '../components/footer.vue'

export default {
  name: "Home",
  data(){
    return {
      
    }
  },
  methods: {
    learnMore(){
      console.log('learn more')
    }
  },
  components: {
    NavBar,
    HeroSection,
    Offer,
    CreatedBy,
    Partners,
    Footer
  }
}
</script>