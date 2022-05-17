<template>
<div class="py-10">
    <div class="relative overflow-x-auto rounded-xl shadow-md ">
            <div class="flex items-center justify-between flex-row bg-green-200 p-2">
                <div class="basis-1/3 flex">
                <button
                        class="w-10 h-10 bg-green-700 rounded-full text-white hover:bg-white  hover:text-green-700 text-3xl pb-6 "
                        type="button" data-modal-toggle="input-income"> +
                </button>
                    <p class=" text-xl ml-2 mt-1 font-bold text-green-700">Pemasukan</p>
                </div>
                <!-- <label for="table-search" class= "basis-2/3 sr-only">Search</label>
                <div class="relative content-end">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Pemasukan...">
                </div> -->
            </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in incomes" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {{ item.kategori }}
                </th>
                <td class="px-4 py-4">
                    {{ item.tanggal }}
                </td>
                <td class="px-4 py-4">
                    {{ item.deskripsi }}
                </td>
                <td class="text-green-700 font-medium px-4 py-4">
                    + Rp. {{ item.nominal }}
                </td>
                <td class="px-4 py-4 text-right">
                    <button @click="deleteIncome(item.id)" class="text-white rounded-lg p-1 text-sm bg-red-500 inline-block border border-red-500 hover:bg-white hover:text-red-500">Hapus</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
      <!-- Main modal -->
    <div id="input-income" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="input-income">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Tambah <span class="text-green-700 font-bold">Pemasukan</span></h3>
                    <form class="space-y-6" @submit.prevent="addIncome">
                        <div>
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal</label>
                            <input v-model="tanggalIncome" type="date" name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="kategori" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kategori</label>
                            <input v-model="kategoriIncome" type="text" name="kategori" id="kategori" placeholder="Masukkan Kategori" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nominal</label>
                            <input v-model="nominalIncome" type="number" name="number" id="number" placeholder="Rp. -" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deskripsi</label>
                            <textarea v-model="deskripsiIncome" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deskripsi pemasukan/pengeluaran..."></textarea>
                        </div>
                        <button data-modal-toggle="input-income" type="submit" class="w-full text-white bg-yellow-400 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambahkan</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data: () => ({
        deskripsiIncome: '',
        kategoriIncome: '',
        nominalIncome: '',
        tanggalIncome: '',
    }),
    methods: {
    showAlert() {
      // Use sweetalert2
    // this.$swal({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    // });
    },
    deleteIncome(id) {
      this.$apollo.mutate({
        mutation: gql`
            mutation deleteIncome($id: Int!) {
            delete_incomes(where: {id:{_eq: $id}}) {
                returning {
                id
                }
            }
            }
        `,
        variables: {
           id
           },
        })
    },
    addIncome() {
        this.$apollo.mutate({
            mutation: gql`
            mutation addIncome($deskripsi: String!, $kategori: String!, $nominal: Int!, $tanggal: date) {
            insert_incomes(objects: {deskripsi: $deskripsi, kategori: $kategori, nominal: $nominal, tanggal: $tanggal}) {
                returning {
                deskripsi
                id
                kategori
                nominal
                tanggal
                }
            }
            }
            `,
            variables: {
            deskripsi: this.deskripsiIncome,
            kategori: this.kategoriIncome,
            nominal: this.nominalIncome,
            tanggal: this.tanggalIncome,
            }, 
        })
    },
    },
    apollo: {
        // Query with parameters
        incomes: {
        // gql query
        query: gql`
        query getIncomes {
        incomes {
            id
            deskripsi
            kategori
            nominal
            tanggal
        }
        }
        `,
        // Static parameters
        subscribeToMore: {
        document: gql`
          subscription getIncomes {
            incomes {
            id
            deskripsi
            kategori
            nominal
            tanggal
        }
        }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
        //   console.log(previousResult);
        //   console.log(subscriptionData);
          return {
            incomes: subscriptionData.data.incomes,
          };
        },
      },
        },

    },
}
</script>

<style>

</style>