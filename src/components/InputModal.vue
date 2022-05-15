<template>
  <!-- Main modal -->
    <div id="input-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Transaksi Baru</h3>
                    <form class="space-y-6" action="#">
                        <div class="mt-4">
                            <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Masukkan ke </span>
                            <div class="mt-2">
                                <label class="inline-flex items-center w-full focus:outline-none text-red-700 bg-red-200 hover:bg-red-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                <input type="radio" class="form-radio text-red-500 bg-red-200 focus:ring-red-500" name="accountType" value="personal">
                                <span class="ml-2">Pengeluaran</span>
                                </label>
                                </div>
                                <div class="mt-2">
                                <label class="inline-flex w-full items-center focus:outline-none text-green-700 bg-green-200 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <input type="radio" class="form-radio text-green-500 bg-green-200 focus:ring-green-500" name="accountType" value="busines">
                                <span class="ml-2">Pemasukkan</span>
                                </label>
                            </div>
                            </div>
                        <div>
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal</label>
                            <input type="date" name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kategori</span>
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-full  border-2 border-gray-200 text-gray-600 bg-white hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Pilih Kategori<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                    <!-- Dropdown menu -->
                                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                        </ul>
                                    </div>
                        </div>
                        <div>
                            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nominal</label>
                            <input type="number" name="number" id="number" placeholder="Rp. -" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deskripsi</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deskripsi pemasukan/pengeluaran..."></textarea>
                        </div>
                        <button type="submit" class="w-full text-white bg-yellow-400 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambahkan</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
name:'InputModal'
}
</script>

<style>

</style>