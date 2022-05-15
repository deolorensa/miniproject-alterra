<template>
<div class=" bg-gray-100 mb-9">
    <div class="">
        <h1 class="mx-auto ml-9 pt-6 mb-7 text-4xl font-black">Dashboard</h1>
    </div>
    <div class="flex flex-row justify-center mx-9 p-5 ">
        <div class="basis-1/3 mx-4 block m-3 p-6 bg-amber-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="mb-2 text-xl font-bold tracking-tight text-yellow-700 dark:text-white">Sisa Saldo</p>
            <p class="font-normal text-yellow-700 dark:text-gray-400">Rp. {{ totalPemasukan - totalPengeluaran }}  </p>
        </div>
        <div class="basis-1/3 mx-4 block m-3 p-6  bg-green-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">Total Pemasukan</h5>
            <p class="font-normal text-green-700 dark:text-gray-400">+ Rp. {{ totalPemasukan }} </p>
        </div>
        <div class="basis-1/3 mx-4 block m-3 p-6  bg-red-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">Total Pengeluaran</h5>
            <p class="font-normal text-red-700 dark:text-gray-400">- Rp. {{ totalPengeluaran }}</p>
        </div>
        <!-- <div class="basis-1/4 mx-4 block m-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Sudah transaksi apa Hari ini ?</h5>
            <p class="font-normal mb-2 text-xs text-gray-700 dark:text-gray-400">Catat Keuanganmu Sekarang !</p>
            <button type="button" data-modal-toggle="authentication-modal" class="w-full mt-1 focus:outline-none text-white bg-amber-400 hover:bg-amber-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg min-h-fit text-sm px-9 py-1 dark:focus:ring-yellow-900">+</button>
        </div> -->
    </div>
    <div class="flex flex-row p-5">
        <div class="basis-1/2 mx-6 pl-8">
            <TableIncome/>
        </div>
        <div class="basis-1/2 mx-6 pr-7">
            <TableExpenditure/>
        </div>
    </div>
    <div>
        <FooterMain/>
    </div>
</div>
</template>

<script>
//import ApexCharts from 'apexcharts'
import gql from 'graphql-tag'
import FooterMain from "@/components/FooterMain.vue"
import TableExpenditure from "@/components/TableExpenditure.vue"
import TableIncome from "@/components/TableIncome.vue"

export default {
    data: () => ({
        totalPemasukan: 0,
        totalPengeluaran: 0,
    }), 
    apollo: {
        // Query with parameters
        sumExpenditures: {
        // gql query
            query: gql`
            query sumExpenditures {
            expenditures_aggregate {
                aggregate {
                sum {
                    nominal
                }
                }
            }
        }
        `,
        result ({ data}) {
        this.totalPengeluaran = data.expenditures_aggregate.aggregate.sum.nominal
        },
        },
        sumIncomes: {
            query: gql`
            query sumIncomes {
            incomes_aggregate {
                aggregate {
                sum {
                    nominal
                }
                }
            }
        }
        `,
        result ({ data}) {
        this.totalPemasukan = data.incomes_aggregate.aggregate.sum.nominal
        },
        },
    },
    components:{
    FooterMain,
    TableExpenditure,
    TableIncome,
    },
}
</script>

<style>

</style>