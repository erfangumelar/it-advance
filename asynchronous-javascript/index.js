/**
 * Pengertian synchronous dan asynchronous
 *
 * Sinkron adalah proses pada program komputer yang melakukan sesuatu secara serial, tahap demi tahap secara berurut
 * Asinkron adalah proses pada program komputer yang melakukan sesuatu secara paralel, tidak menunggu proses lain
 *
 * Contoh Asinkron
 * 1. Koneksi ke database
 *    Dalam pengambilan data yang banyak akan terjadi kelambatan dalam proses ambil data
 * 2. Operasi File
 *    Jika menunggu proses baca/tulis file sampai tuntas, program akan terasa lambat
 * 3. Real Time Chat
 *    Chat yang menunggu pengiriman selesai chat baru kita bisa mengetik, bukan hal yang menyenangkan
 */

/**
 * Callback
 *
 * Pengertian
 * Fungsi yang dipanggil dalam waktu tertentu dan menjadi parameter fungsi lainnya.
 */

/**
 * Promise
 *
 * Di ES6, promise adalah alternatif callback
 * Proses asinkron promise memiliki 3 status
 * 1. Pending (sedang dikerjakan)
 * 2. Fulfilled (tuntas) {.then}
 * 3. Rejected (tidak jadi) {.catch}
 */

/** latihan promise 1 */
// let janji = new Promise((resolve, reject) => {
//   try {
//     resolve("fulfilled");
//   } catch (err) {
//     reject(err);
//   }
// });
// console.log(janji); //hasil promise berupa object

// janji
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/** Latihan 2 */
// function cbPromise(resolve, reject) {
//   try {
//     resolve("fulfilled");
//   } catch (err) {
//     reject(err);
//   }
// }

// let janji = new Promise(cbPromise);
// console.log(janji); //hasil promise berupa object

// janji
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/** Latihan 3 */
function janjiManis() {
  return new Promise((resolve, reject) => {
    try {
      resolve("jani Manis terpenuhi");
    } catch (err) {
      reject(err);
    }
  });
}

// console.log(janjiManis());

janjiManis()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
