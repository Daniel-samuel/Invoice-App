<template>
  <div>
    <div class="app flex">
      <Navigation />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div class="app-content flex flex-column">
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal" />
          </transition>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navigation from "./components/Navigation.vue";
import InvoiceModal from "./components/InvoiceModal.vue"
// import { computed } from '@vue/runtime-core';
export default {
  components:{
    Navigation,
    InvoiceModal,
  },
  computed: {
    ...mapState(["invoiceModal"]),
  },

  
};




</script>




<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  
  
}

.app{
  background-color:black;
  min-height: 100vh;
  @media(min-width: 900px) {
    flex-direction: row !important;
  }

  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }

  


}

//animated invoice
.invoice-enter-active,
.invoice-leave-active{
  transition: 0.8s ease all;
} 

.invoice-enter-from{
  transform: translateY(-700px);
}
.invoice-leave-active{
  transform: translateX(-700px);
}

button, 
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color:white;
}

.dark-purple {
  background-color: #323757;
}

.red {
  background-color: #5e1b1b;
}

.purple {
  background-color: #62646a;
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

.nav-link {
  text-decoration: none;
  color: initial;
}

// Status Button Styling

.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
}

.paid {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}

.pending {
  &::before {
    background-color: #ff8f00;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}

.draft {
  &::before {
    background-color: #dfe3fa;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
