<template>
<div>
    <div class="relative overflow-x-auto drop-shadow-2xl rounded-xl mx-9 mt-5">
    <table  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-black bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="text-sm px-6 py-3">
                    Aktivitas Terakhir
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3 text-xs flex justify-end text-amber-400">
                    <a href="">Lihat Selengkapnya</a>
                </th>
            </tr>
        </thead>
        <thead class="text-xs underline text-gray-500 bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Kategori
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanggal
                </th>
                <th scope="col" class="px-6 py-3">
                    Deskripsi
                </th>
                <th scope="col" class="px-6 py-3">
                    Nominal
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in incomes" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {{ item.kategori.kategori }}
                </th>
                <td class="px-6 py-4">
                    {{ item.tanggal }}
                </td>
                <td class="px-6 py-4">
                    {{ item.deskripsi }}
                </td>
                <td class="px-6 py-4">
                    Rp. {{ item.nominal }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'AboutView',
  apollo: {
    // Query with parameters
    incomes: {
      // gql query
      query: gql`
        query incomes {
        incomes {
            id
            deskripsi
            nominal
            tanggal
            kategori {
            kategori
            }
        }
        }

      `,
      // Static parameters
    },
  },
}
</script>

<style>

</style>