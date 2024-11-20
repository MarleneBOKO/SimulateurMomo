<template>
    <div class="p-5 bg-gray-100 rounded-lg shadow-md">


  <!-- Section des champs de formulaire -->
  <div>
    <!-- Champ Montant à épargner -->
    <div class="mb-6">
      <label for="amount" class="block font-semibold mb-2 text-gray-700">
        Montant à épargner
      </label>
      <input
        id="amount"
        type="number"
        min="0"
        max="2000000"
        class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none"
      />
      <input
        type="range"
        step="5"
        min="0"
        max="2000000"
        class="mt-3 w-full"
      />
    </div>

    <!-- Champ Nombre de mois -->
    <div class="mb-6">
      <label for="months_count" class="block font-semibold mb-2 text-gray-700">
        Nombre de mois
      </label>
      <input
        id="months_count"
        type="number"
        min="0"
        max="100"
        class="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:outline-none"
      />
      <input
        type="range"
        step="5"
        min="0"
        max="100"
        class="mt-3 w-full"
      />
    </div>
  </div>

  <!-- Section de résultat -->
  <div class="mt-8 text-center">
    <p class="text-lg font-medium text-gray-700">
      Votre intérêt HT, après 5 mois, est estimé à :
    </p>
    <div class="mt-4 bg-blue-500 text-white font-bold py-3 px-5 rounded-lg">
      0&nbsp;F CFA
    </div>
  </div>
</div>

  </template>
  