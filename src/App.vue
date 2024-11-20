<template>
  <div class="flex justify-center gap-8 p-9 font-MTNBrighterSans">
    <div class="flex flex-col w-[38%]">
      <h1 class="text-[#004f71] text-[40px] font-bold">Simulateur de frais</h1>
      <div>
        <p class="h-[120px] text-[#202020]">Explorez notre simulateur de calcul des frais de retrait pour estimer facilement les coûts associés à vos transactions financières. Planifiez intelligemment vos retraits et minimisez les frais pour optimiser votre gestion budgétaire.</p>
      </div>
      <img src="/public/Images/MTN_Mass_575526397-scaled-1.jpg" alt="" class="rounded-[20px]">
    </div>
    <div class="flex-col flex-1 p-5 border rounded-lg">
      <div class="mb-4 form-group">
      <div class="flex flex-wrap justify-center gap-4 mt-4 text-center">
        <div class="flex form-check">
          <input
            type="radio"
            id="withdrawal_fees"
            value="withdrawal_fees"
            v-model="selectedType"
            class="w-4 form-check-input peer"
          />
          <label
            for="withdrawal_fees"
            class="block px-4 py-2 rounded-md cursor-pointer "
          >
            Retraits d'argent
          </label>
        </div>
        <div class="flex form-check">
          <input
            type="radio"
            id="transfer_fees"
            value="transfer_fees"
            v-model="selectedType"
            class="w-4 form-check-input peer text-[#004f7122]"
          />
          <label
            for="transfer_fees"
            class="block px-4 py-2 rounded-md cursor-pointer form-check-label peer-checked:text-[#004f71] "
          >
            Transferts d'argent
          </label>
        </div>
       
      </div>
    </div>
    <div class="flex flex-col">
    <router-view />
  </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedType = ref("withdrawal_fees");

watch(selectedType, (newType) => {
  if (newType === "withdrawal_fees") {
    router.push("/");
  } else if (newType === "transfer_fees") {
    router.push("/transfer-fees");
  } else if (newType === "momo_saayaa_fees") {
    router.push("/momo-saayaa");
  }
});
</script>
