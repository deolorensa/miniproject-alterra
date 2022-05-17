<template>
<div>
    <div class=" px-9">
            <div class=" text-center p-6 py-5">
            <h1 class="text-3xl text-amber-600 font-bold leading-tight capitalize">Catatan</h1>
            <h1 class="text-xl text-amber-600 mt-2">Catat Utang, Piutang atau yang lain agar tidak lupa</h1>
            <h1 class="text-2xl text-amber-600 font-bold leading-tight mb-2 capitalize">________________________________</h1>
            <button data-modal-toggle="input-note" class="text-white bg-yellow-400 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tambahkan</button>
            </div>
        <div class="">
            <div class="grid grid-cols-4 gap-4">
                <div v-for="note in notes" :key="note.id" class="w-full h-64 flex flex-col justify-between items-start bg-amber-50 rounded-lg border border-black mb-6 py-5 px-4">
                    <div>
                        <h4 class="text-gray-800 font-bold mb-3"> {{ note.judul }} </h4>
                        <p class="text-gray-800 text-sm"> {{ note.deskripsi }} </p>
                    </div>
                    <div class="w-full flex justify-between items-start">
                        <button @click="deleteNote(note.id)" class="text-white rounded-full  px-3 py-1.5 text-sm bg-red-500 inline-block border border-red-500 hover:bg-white hover:text-red-500">X</button>
                        <div class=" border border-gray-800 bg-yellow-100 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center">
                        <p class="ml-2"> {{ note.tanggal }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          <!-- Main modal -->
    <div id="input-note" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="input-note">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Tambah <span class="text-amber-700 font-bold">Catatan</span></h3>
                    <form class="space-y-6" @submit.prevent="addNotes">
                        <div>
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tanggal</label>
                            <input v-model="tanggalNote" type="date" name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="kategori" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Judul</label>
                            <input v-model="judulNote" type="text" name="kategori" id="kategori" placeholder="Masukkan Kategori" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deskripsi</label>
                            <textarea v-model="deskripsiNote" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deskripsi pemasukan/pengeluaran..."></textarea>
                        </div>
                        <button @click="inputNoteAlert" data-modal-toggle="input-note" type="submit" class="w-full text-white bg-yellow-400 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambahkan</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    data: () => ({
        deskripsiNote:'',
        tanggalNote:'',
        judulNote:''
    }),
    methods: {
    inputNoteAlert() {
    //   Use sweetalert2
    this.$swal({
        position: 'center',
        icon: 'success',
        title: 'Berhasil Menambahkan Catatan',
        showConfirmButton: false,
        timer: 1500
    });
    },
    addNotes() {
        this.$apollo.mutate({
            mutation: gql`
            mutation addNotes($deskripsi: String!, $judul: String!, $tanggal: date!) {
            insert_notes(objects: {deskripsi: $deskripsi, judul: $judul, tanggal: $tanggal}) {
                returning {
                id
                judul
                deskripsi
                tanggal
                }
            }
            }
            `,
            variables: {
            deskripsi: this.deskripsiNote,
            judul: this.judulNote,
            tanggal: this.tanggalNote,
            }, 
        })
    },
    deleteNote(id) {
      this.$apollo.mutate({
        mutation: gql`
        mutation deleteNote($id: Int!) {
        delete_notes(where: {id: {_eq: $id}}) {
            returning {
            id
            judul
            tanggal
            deskripsi
            }
        }
        }
        `,
        variables: {
           id
           },
        })
    },
    },
        apollo: {
        // Query with parameters
        notes: {
        // gql query
        query: gql`
        query getNotes {
        notes {
            id
            deskripsi
            judul
            tanggal
        }
        }
        `,
        // Static parameters
        subscribeToMore: {
        document: gql`
          subscription getNotes {
        notes {
            id
            deskripsi
            judul
            tanggal
        }
        }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
        //   console.log(previousResult);
        //   console.log(subscriptionData);
          return {
            notes: subscriptionData.data.notes,
          };
        },
      },
    },
    },
}
</script>

<style>

</style>