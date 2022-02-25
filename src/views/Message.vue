<template>
    <div class="back">
        <Navbar :black="gray" />
        <second-navbar />
        <location-navbar :name="'Базовая рубашка'" />
        <div class="container mx-auto px-4 xl:px-12 md:px-4">
            <div class="title">Мои сообшение</div>
            <div class="my__message">
                <tabs>
                    <tab title="По товару">
                        <Tab1 />
                    </tab>
                    <tab title="По поставщикам">
                        <Tab2 />
                    </tab>
                    <tab title="Поддержка">
                        <Tab3 />
                    </tab>
                </tabs>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'
import LocationNavbar from '../components/layout/LocationNavbar.vue'
import { Tabs, Tab } from 'vue-slim-tabs'
import Tab1 from '../components/tabs/Tab1.vue'
import Tab2 from '../components/tabs/Tab2.vue'
import Tab3 from '../components/tabs/Tab3.vue'

export default {
  name: 'TinyTabs',
  data: () => ({

  }),
  components: {
    Tabs, 
    Tab1,
    Tab2,
    Tab3,
    Navbar,
    Footer,
    SecondNavbar,
    LocationNavbar,
    Tab
  }
}
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
<style scoped>
    .title{
        color: #131E3D;
        font-size: 42px;
        margin-bottom: 1rem;
    }

    @media (max-width: 600px){
        .title{
            font-size: 22px;
            margin-bottom: 10px;
        }
    }

</style>
