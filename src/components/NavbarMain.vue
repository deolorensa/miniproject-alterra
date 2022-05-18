<template>
    <nav class="flex items-center justify-between flex-wrap mx-16 p-2">
    <a href="#beranda" class="flex items-center warna flex-shrink-0 text-white mr-6">
        <img class="fill-current ml-4 h-10 w-10 mr-2" src="../assets/logo.png" alt="">
        <span class="font-black text-lg  warna tracking-tight font-medium text-amber-500">Uangsaku</span>
    </a>
    <div>
        <div class="text-lg mr-5 lg:flex-grow">
        <!-- <a href="#beranda" class="block mt-4 lg:inline-block lg:mt-0 font-medium text-amber-500 hover:underline hover:underline-offset-2 mr-4">
            Beranda
        </a> -->
        <a href="#catatTransaksi" class="block mt-4 lg:inline-block lg:mt-0 font-medium text-amber-500 hover:underline hover:underline-offset-2 mr-4">
            Transaksi
        </a>
        <a href="#catatan" class="block mt-4 lg:inline-block lg:mt-0 font-medium text-amber-500 hover:underline hover:underline-offset-2 mr-4">
            Catatan
        </a>
        <a href="#film" class="block mt-4 lg:inline-block lg:mt-0 font-medium text-amber-500 hover:underline hover:underline-offset-2 mr-4">
            Film
        </a>
        <!-- <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-amber-500 hover:bg-white mt-4 lg:mt-0">Download</a> -->
        <!-- <button
            id="navAction"
            class="mx-auto hover:underline bg-yellow-100 text-amber-400 rounded-full lg:mt-0 py-1 px-6 pl-1 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
          <img class="w-5 h-5 mr-3 ml-1 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </button> -->
        </div>
    </div>
    </nav>
</template>

<script>
export default {
name: 'NavbarMain'
}
</script>

<style scope>
nav{
    background-color: #fcf9f4;
}
.warna{
    background-color: #fcf9f4;

}
</style>