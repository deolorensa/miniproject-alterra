<template>
<div>
  <div id="beranda" class="py-28 bg-gradient-to-b from-amber-100">
    <div class="container m-auto px-6">

    <div class="flex justify-between items-center">
        <div class="w-6/12 p-0 p-7">
            <h1 class="text-3xl text-amber-600 font-bold leading-tight mb-2 capitalize">Ayo catat keuanganmu sekarang juga!</h1>
            <p class="text-xl text-gray-800">Dengan mencatat, kamu akan mengetahui pemasukan serta pengeluaran aktivitas keuangan kamu selama ini. Hal itu tentu akan membuat pengeluaran kamu menjadi lebih terkontrol, sehingga bisa mengelola keuangan menjadi lebih baik lagi.</p>

            <div class="py-5">
                <a href="#catatTransaksi" class="text-white rounded-xl py-2 px-3 text-lg font-medium bg-amber-500 inline-block border border-amber-500 hover:bg-white hover:text-amber-500 mr-3">Catat Keuangan ?</a>
                <!-- <router-link to="/about" class="text-amber-500 rounded-xl py-2 px-5 text-lg font-semibold bg-white inline-block border hover:bg-amber-500 hover:text-white border-amber-500">Requist demo</router-link> -->
            </div>

          </div>
          <div class="lg:w-5/12 order-2">
            <img src="../assets/Credit card-rafiki 1.png"
            style="transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);" alt="" class="rounded">
          </div>
      </div>
    </div>
  </div>
  <div class="py-28 warna">
    <div class="text-center">
      <h1 class="text-3xl text-amber-600 font-bold leading-tight mb-2 capitalize">Seberapa penting mencatat keuanganmu ?</h1>
      <h1 class="text-2xl text-amber-600 font-bold leading-tight mb-2 capitalize">________________</h1>
      <p class=" p-16 text-xl text-gray-700 m-16">Pencatatan keuangan tentunya akan membantu Anda untuk mencatat anggaran yang diperlukan sehingga dapat meningkatkan efisiensi modal yang digunakan. Dengan mengetahui kondisi finansial perusahaan, tentunya Anda akan lebih mudah menentukan keputusan bisnis di masa mendatang.</p>
    </div>
  </div>
  <div id="catatTransaksi" class="py-28 bg-gradient-to-l from-amber-100">
    <div class="text-center">
      <h1 class="text-3xl text-amber-600 font-bold leading-tight mb-2 capitalize">Catat Keuanganmu disini !</h1>
      <h1 class="text-2xl text-amber-600 font-bold leading-tight mb-2 capitalize">________________</h1>
    </div>
      <div>
      <DashboardView/>
      </div>
  </div>
  <div id="catatan" class="py-20 warna">
    <NoteMain/>
  </div>
    <div id="film" class="py-28 bg-gradient-to-b from-yellow-50">
    <div class="text-center">
      <h1 class="text-3xl text-amber-600 font-bold leading-tight mb-2 capitalize">Suka film ? Yuk tonton Film Tentang Uang !</h1>
      <h1 class="text-2xl text-amber-600 font-bold leading-tight mb-2 capitalize">________________</h1>
    </div>
    <div class="flex justify-center pt-10 ">
      <FilmApi/>
    </div>
  </div>
  <footer>
    <FooterMain/>
  </footer>
</div>
</template>

<script>
import FooterMain from '@/components/FooterMain.vue';
import FilmApi from '@/components/FilmApi.vue';
import DashboardView from './DashboardView.vue';
import NoteMain from '@/components/NoteMain.vue';
// @ is an alias to /src

export default {
    name: "HomeView",
    components: { FooterMain, FilmApi, DashboardView, NoteMain },
}
</script>

<style scoped>
.warna{
  background-color: #fffcf4;
}
</style>