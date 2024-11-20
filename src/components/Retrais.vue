<script setup>
import { ref, computed } from 'vue';

const amount = ref(0);

const feeTable = [
  { min: 1, max: 5000, fixedFee: 100 }, 
  { min: 5001, max: 10000, fixedFee: 200, percentage: 1 }, 
  { min: 10001, max: 20000, fixedFee: 300 }, 
  { min: 20001, max: 50000, fixedFee: 500, percentage: 3 }, 
  { min: 50001, max: 100000, fixedFee: 700 }, 
  { min: 100001, max: 200000, fixedFee: 1000, percentage: 7 }, 
  { min: 200001, max: 500000, fixedFee: 2000 }, 
  { min: 500001, max: 1000000, fixedFee: 5000, percentage: 10 }, 
  { min: 1000001, max: 2000000, fixedFee: 10000 }, 
];

const calculatedFees = computed(() => {
  if (amount.value === 0) return 0;

  const tier = feeTable.find(
    (tier) => amount.value >= tier.min && amount.value <= tier.max
  );

  if (tier) {
    const percentageFee = tier.percentage
      ? (amount.value * tier.percentage) / 100
      : 0;
    return Math.round(tier.fixedFee + percentageFee);
  }

  return 'Hors limite'; 
});
</script>



<template>
    <div class="p-5 ">
     
      <div>
        <div class="mb-3 text-center form-group ">
          <label for="amount" class="block mb-2 font-bold">Montant à retirer</label>
          <input
            id="amount"
            type="number"
            v-model.number="amount"
            min="0"
            max="2000000"
            class="text-center mb-3  m-[20px] border-b w-[30%] border-t-solid border-[#004f70] h-[60px] text-[#004f70]"
          />
          <input
            type="range"
            v-model.number="amount"
            step="5"
            min="0"
            max="2000000"
            class="w-full"
          />
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
  
 