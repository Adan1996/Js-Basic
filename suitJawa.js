// var tanya = true;
// while (tanya) {
// 	// menangkap pilian player
// 	var p = prompt('Pilih : gajah, semut, orang');

// 	// menangkap pilihan computer
// 	// membangkitkan bilangan random
// 	var comp = Math.random();

// 	if (comp < 0.34) {
// 		comp = 'gajah';
// 	} else if (comp >= 0.34 && comp < 0.67) {
// 		comp = 'orang';
// 	} else {
// 		comp = 'semut';
// 	}

// 	var hasil = '';
// 	// menentukan rules
// 	if (p == comp) {
// 		hasil = 'Komputer memilih ' + comp + ' hasilnya SERI';
// 	} else if (p == 'gajah') {
// 		// if (comp == 'orang') {
// 		// 	hasil = 'MENANG';
// 		// } else {
// 		// 	hasil = 'KALAH';
// 		// }
// 		hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
// 	} else if (p == 'orang') {
// 		if (comp == 'semut') {
// 			hasil = 'MENANG';
// 		} else {
// 			hasil = 'KALAH';
// 		}
// 	} else if (p == 'semut') {
// 		if (comp == 'gajah') {
// 			hasil = 'MENANG';
// 		} else {
// 			hasil = 'KALAH';
// 		}
// 	} else {
// 		hasil = 'ANDA TIDAK MEMASUKKAN KATA YANG TIDAK ADA PADA OPSI';
// 	}

// 	alert('Anda memilih : ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : Anda ' + hasil);
// 	tanya = confirm('Ingin main lagi ???');
// }

// alert('Terimakasih sudah bermain :)');
