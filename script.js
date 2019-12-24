// CARA DASAR MENULIS JAVASCRIPT

// var x = 10;
// console.log("Hello Wolrd");
// console.log("isi dari variabel x adalah = " + x);

// POPUP BOX
// alert
// alert("hello world!");

// prompt
// prompt("masukkan nama : ");

// var nama = prompt("masukkan nama : ");
// alert("Hallo World, Nama saya " + nama);

// confirm
// var tes = confirm("kamu yakin ??");
// alert(tes);

// var tes = confirm("kamu yakin ??");
// if (tes === true) {
// 	alert("user menekan tombol " + tes);
// } else {
// 	alert("user menekan tombol " + tes);
// }

// alert("Selamat Datang..");
// var lagi = true;

// while( lagi == true) {
// 	var nama = prompt("masukkan nama");
// 	alert("halo " + nama);

// 	lagi = confirm("coba lagi?");
// }

// alert("Terimakasih");

// CONTROL FLOW (ALUR KENDALI)
/* Ada 2 Alur Kendali yakni :
	1. Pengkondisian
		- if
		- if else
		- if else if else
		- switch
	2. Pengulangan
		- for
		- while
		- do while
*/

// WHILE
// var nilaiAwal = 1;
// while ( nilaiAwal <= 10 ) {
// 	console.log("Hello World " + nilaiAwal + "x");
// 	nilaiAwal++;
// }


// PENGKONDISIAN DENGAN IF ELSE IF

// var angka = prompt('Masukkan angka! ');
// if (angka % 2 === 0) {
// 	alert(angka + " adalah bilangan GANJIL")
// } else if (angka % 2 === 1){
// 	alert(angka + " adalah bilangan GENAP");
// } else {
// 	alert(angka + " bukan angka!!");
// }

// SWITCH

// var angka = parseInt(prompt("Masukan Angka")); // jika menggunakan prompt, maka prompt akan mendefinisikan string. Jika kamu menginputkan data integer, maka tipe data harus menggunakan fungsi parseInt

// switch( angka ) {
// 	case 1 :
// 		alert("Anda memasukan angka 1");
// 		break; // berfungsi untuk mencegat kondisi yang ada dibawahnya
// 	case 2 :
// 		alert("Anda memasukan angka 2");
// 		break;
// 	case 3 :
// 		alert("Anda memasukan angka 3");
// 		break;
// 	default :
// 		alert("Angka yang anda masukan salah");
// 		break;
// }

// PENGULANGAN DAN PENGKONDISIAN BERSARANG (NESTED IF DAN NESTED FOR)

// var s = '';
// for(var i = 0; i < 5; i++) {
// 	for (var j = 0; j < 10; j++) {
// 		s += "*";
// 	}
// 	s += "\n";
// }
// console.log(s);

// var s = '';
// for(var i = 0; i < 5; i++) {
// 	for ( var j = 0; j <= i; j++) {
// 		s += "*";
// 	}
// 	s += "\n";
// }
// console.log(s);

// var s = '';
// for(var i = 5; i > 0; i--) {
// 	for(var j = 0; j < i; j++) {
// 		s += "*";
// 	}
// 	s += "\n";
// }
// console.log(s);

/* FUNCTION

Ada 2 Kategori function :
 - Built-in function (contoh : alert, confirm, prompt, etc)
 - User-defined function :
 	1. function declaration (terdiri dari keyword function, nama function, parameter, function body, nilai kembalian/return value)
 	2. function expresion*/

// function volumeKubus(a, b) { //parameter
// 	var volumeA;
// 	var volumeB;
// 	var hasil;

// 	volumeA = a * a * a;
// 	volumeB = b * b * b;

// 	hasil = volumeA + volumeB;
// 	return hasil;
// }

// console.log(volumeKubus(8, 3)); //argument
// menampilkan argument menggunakan prompt

// function tambah(a, b) {
// 	return a + b;
// }

// karena prompt mengeksekusi inputan string, maka harus dirubah dulu menjadi integer dengan parseInt
// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
// var hasil = tambah(a, b);
// console.log(hasil);

// note : 1. jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan. 2. jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undifined.

// argument berbeda dengan arguments.
// arguments adalah array yang berisi nilai yang dikirimkan saat fungsi dipanggil

//contoh
//  function tambah() {
//  	return arguments;
//  }

// var coba = tambah(5, 10, 20, "hi", false);
// console.log(coba);

// function tambah() {
// 	var hasil = 0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		hasil += arguments[i];
// 	}
// 	return hasil;
// }

// var coba = tambah(1,2,3,4);
// console.log(coba);

// REFACTORING
// function volumeKubus(a, b) {
// 	return a * a * a + b * b * b;
// }

// console.log(volumeKubus(8, 3));

// VARIABLE SCOPE
// Ada 2 jenis scope dalam bahasa pemrograman, yaitu :
// 	1. Block Scope (antara kurung kurawal buka dan tutup)
//  2. Function Scope

// global scope / window scope
// var a = 1;

// function tes() {
// 	var b = 2;
// 	console.log(a);
// }

// tes();
// console.log(b);

// REKURSIF
// adalah sebuah fungsi yang memnggil dirinya sendiri

// function tampilAngka(n) {
// 	console.log(n);
// 	return tampilAngka(n-1);
// }

// tampilAngka(10);

// Base Case adalah kondisi akhir dari rekursif yang menghasilkan sebuah nilai, contoh :
// function cetakAngka(n) {
// 	if(n === 0) {
// 		return;
// 	}
// 	console.log(n);
// 	cetakAngka(n-1);
// }

// cetakAngka(10);

// function faktorial(n) {
// 	if (n === 0) return 1;
// 	return n * faktorial(n-1);
// }

// console.log(faktorial(5));

// NOTE : semua looping bisa dibuat rekursif, tapi tidak sebaliknya

/* Implementasi Rekursif
	1. Menggantikan Looping
	2. Fibbonaci 
	3. Pencarian dan penelusuran pada struktur data list dan tree
	4. Bahasa pemrograman yang tidak memiliki pengulangan (Heskell, Erlang, Prolog */

// FUNCTION DECLARATION vs FUNCTION EXPRESION

// Function Declaration
	// - function identifier (ParameterList opt) { FunctionBody }

// Function Expresion
	// - function identifier opt (ParameterList opt) { FuncionBody }
	// - var variabel = function (ParameterList opt) { FunctionBody }

// LATIHAN

// var nama = 'Syahdan';
// var pekerjaan = 'Programer';
// var umur = 23;

// function tampilkan() {
// 	alert('Hallo nama saya ' + nama + ' umur saya ' + umur + ' saya seorang ' + pekerjaan);
// 	return;
// }

// tampilkan();

// ARRAY = variabel yang lebih sakti

// manipulasi Array
// var arr = ["a", 1, true];
// console.log(arr);

// Menambah isi Array
// var arr = [];
// arr[0] = "Syahdan";
// arr[1] = "Masyhuri";
// arr[2] = "Enden";
//  console.log(arr);

// 2. Menghapus isi Array
// var arr = ["Syahdan", "Masyhuri", "Enden"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// var arr = ["Syahdan", "Masyhuri", "Enden", "Dina"];

// for(var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// }

// array Method
/* 1. length = Untuk menjumlahkan elemen yang ada pada array.
	var arr = ["Syahdan", "Masyhuri", "Enden", "Dina"];

	for(var i = 0; i < arr.length; i++) {
	console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
	}
   2. join = untuk menggabungkan seluruh isi array dan merubahnya menjadi sebuah string
   var arr = ["Syahdan", "Masyhuri", "Enden", "Dina"];
   console.log(arr.join());
   3. push = untuk menambah elemen baru diakhir arraynya.
   var arr = ["Syahdan", "Masyhuri", "Enden"];
   arr.push("Dina");
   console.log(arr.join(" - "));
   4. pop = untuk menghapus sebuah elemen array.
   var arr = ["Syahdan", "Masyhuri", "Enden"];
   arr.pop();
   arr.pop();
   console.log(arr.join(' - '));
   5. unshift = menambahkan element baru di awal arraynya
   var arr = ["Syahdan", "Masyhuri", "Enden"];
   arr.unshift('Dina');
   6. shift = menghapus element pertaman pada arraynya.
   arr.shift();
   console.log(arr.join(' - '));

   7. slice = mengambil beberapa array untuk menjadikan array yang baru
      var arr = ["Syahdan", "Masyhuri", "Enden"];
   // splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
   arr.splice(1, 2, "Dina", "Nisa");
   console.log(arr.join(' - '));

   8. slice
   // slice(awal, akhir);
   var arr = ["Syahdan", "Masyhuri", "Enden", "Nisa", "Dina"];
   var arr2 = arr.slice(1,4);
   console.log(arr2.join(' - '));

   9. forEach
   var angka = [1,2,3,4,5,6,7,8];
   angka.forEach(function(e) {
   	console.log(e);
   })

	10. map = mengembalikan elemen yang ada didalam array
   var angka = [1, 2, 5, 6, 7, 9];
   var angka2 = angka.map(function(e) {
      return e * 2;
   });

   console.log(angka2.join(' - '));

   11. sort
   var angka = [1, 2, 5, 6, 7, 9, 10, 20];
   angka.sort(function(a,b) {
      return a-b;
   });
   console.log(angka.join(' - '));

   12. filter = mengembalikan banyak nilai
   var angka = [1, 2, 5, 6, 7, 9];
   var angka2 = angka.filter(function(x) {
      return x > 5;
   });

   console.log(angka2);

   13. find = mengembalikan hanya 1 nilai
   var angka = [1, 2, 5, 6, 7, 9];
   var angka2 = angka.find(function(e) {
      return e > 5;
   });
   console.log(angka2); 
   */

   // OBJECT = adalah array yang lebih sakti

   // 1. Membuat object
      // - Object Literal
      var mhs = {
         nama : "Syahdan",
         nrp : "043040023",
         email : "syahdanmasyhuri@gmail.com",
         jurusan : "Teknik Komputer"
      }

      var mhs2 = {
         nama : "Syukur",
         nrp : "040032323",
         email : "syukursugriwo@gmail.com",
         jurusan : "Teknik Mesin"
      }
      // - Function Declaration
      function buatObjectMahasiswa(nama, nrp, email, jurusan) {
         var mhs = {};
            mhs.nama = nama;
            mhs.nrp = nrp;
            mhs.email = email;
            mhs.jurusan = jurusan;
            return mhs;
      }

      var mhs3 = buatObjectMahasiswa("Dina", "0230230230", "dinda@gmail.com", "Akutansi");
      // - Constructor Function (keyword new)
      function Mahasiswa(nama, nrp, email, jurusan) {
         this.nama = nama;
         this.nrp = nrp;
         this.email = email;
         this.jurusan = jurusan;
      }

      var mhs4 = new Mahasiswa("Nisa", "0303230304", "nisa@gmail.com", "Musik");
   // 2. Memanggil / Mengeksekusi Object
      // cara 1 - function declaration 
      // function halo() {
      //    console.log(this);
      //    console.log("halo");
      // }
      // halo();
      // this mengembalikan object global

      // // cara 2 = object literal
      // var obj = {a : 10, nama : "Syahdan"};
      // obj.halo = function() {
      //    console.log(this);
      //    console.log("halo");
      // }
      // obj.halo();
      // this mengembalikan object yang bersangkutan

      // // cara 3 - constructor
      // function Halo() {
      //    console.log(this);
      //    console.log("halo");
      // }
      // new Halo();
      // this mengembalikan object yang baru dibuat

   // 3. Keyword this = sebuah keyword special yang didefinisikan disetiap function
      // contoh
      // console.log(this);

   // 4. Prototype (pada object)
      // - Object.create()
      
   // 5. Pewarisan / Inheritance






























































































































































































