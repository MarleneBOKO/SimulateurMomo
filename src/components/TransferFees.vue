<template>
  <div class="flex flex-col gap-3">
    <label for="amount" class="block mb-2 font-bold">Montant à transférer</label>
    
    <div class="flex items-center justify-center mb-4">
      <input
        id="amount"
        type="number"
        v-model.number="transferAmount"
        min="0"
        max="2000000"
        class="text-center mb-3  m-[20px] border-b w-[30%] border-t-solid border-[#004f70] h-[60px] text-[#004f70]"
        />
    </div>

    <div class="mb-4">
      <input
        type="range"
        v-model.number="transferAmount"
        step="5"
        min="0"
        max="2000000"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="abonne"
          value="abonne"
          v-model="transferType"
          class="w-4"
        />
        <label for="abonne" class="cursor-pointer">Vers un abonné MoMo</label>
      </div>

      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="non_abonne"
          value="non_abonne"
          v-model="transferType"
          class="w-4"
        />
        <label for="non_abonne" class="cursor-pointer">Vers un non-abonné MoMo</label>
      </div>

      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="regional"
          value="regional"
          v-model="transferType"
          class="w-4"
        />
        <label for="regional" class="cursor-pointer">Transfert régional</label>
      </div>

      <div v-if="transferType === 'regional'" class="mt-3">
        <label for="country" class="block mb-2 font-bold">Sélectionnez le pays</label>
        <select
          id="country"
          v-model="selectedCountry"
          class="w-full p-2 border rounded-md"
        >
          <option disabled value="">Choisissez un pays</option>
          <option value="Benin">Bénin</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Togo">Togo</option>
        </select>
      </div>
    </div>

    <div class="mt-4 font-bold text-center">
      <p>Les frais appliqués sont de :</p>
      <div class="p-[30px] mt-2 text-white bg-[#004f7122] rounded-md alert">
        <span>{{ calculatedFees }} FCFA</span>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
import { ref, computed } from 'vue';

const transferType = ref('abonne'); 
const transferAmount = ref(0); 
const selectedCountry = ref(''); 

const nonAbonneFees = [
  { min: 1, max: 5000, fee: 500 },
  { min: 5001, max: 10000, fee: 800 },
  { min: 10001, max: 20000, fee: 1500 },
  { min: 20001, max: 60000, fee: 2000 },
  { min: 60001, max: 100000, fee: 2500 },
  { min: 100001, max: 200000, fee: 4000 },
  { min: 200001, max: 300000, fee: 4500 },
  { min: 300001, max: 300000, fee: 5000 },

];

const regionalFees = {
  Benin: { baseFee: 500, percentage: 2 },
  Nigeria: { baseFee: 1000, percentage: 3 },
  Togo: { baseFee: 700, percentage: 2.5 },
};

const calculatedFees = computed(() => {
  if (transferAmount.value <= 0) return 0;

  if (transferType.value === 'abonne') {
    return 100; 
  }

  if (transferType.value === 'non_abonne') {
    const tier = nonAbonneFees.find(
      (t) => transferAmount.value >= t.min && transferAmount.value <= t.max
    );
    return tier ? tier.fee : 'Hors limite'; 
  }

  if (transferType.value === 'regional') {
    const countryFees = regionalFees[selectedCountry.value];
    if (!countryFees) return 'Pays non sélectionné';
    const percentageFee = (transferAmount.value * countryFees.percentage) / 100;
    return countryFees.baseFee + percentageFee;
  }

  return 'Type de transfert non valide';
});
</script>
