// Variabel untuk menyimpan data pengguna
let userData = {
    namaLengkap: " Alif diaz",
    panggilan: "alif",
    umur: 15,
    hobi: ["Coding", "Membaca", "Travelling"],
    lokasi: "Jakarta, Indonesia"
};

// Fungsi untuk menampilkan pesan sapaan
function tampilkanPesan() {
    const messageDiv = document.getElementById('message');
    const waktu = new Date().getHours();
    let sapaan = "";
    
    // Menentukan sapaan berdasarkan waktu
    if (waktu < 12) {
        sapaan = "Selamat pagi";
    } else if (waktu < 18) {
        sapaan = "Selamat siang";
    } else {
        sapaan = "Selamat malam";
    }
    
    // Menampilkan pesan dengan animasi
    messageDiv.innerHTML = `${sapaan}! Senang berkenalan dengan Anda. Saya ${userData.namaLengkap}.`;
    messageDiv.classList.add('show');
    
    // Menambahkan efek suara (opsional, bisa dihapus jika tidak diperlukan)
    console.log("Pesan ditampilkan: " + messageDiv.innerHTML);
    
    // Mengubah warna pesan secara acak (opsional)
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    messageDiv.style.background = randomColor;
}

// Fungsi untuk mengubah warna latar belakang
function ubahWarna() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
        'linear-gradient(135deg, #4ecdc4 0%, #556270 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ffd3a5 0%, #fd6585 100%)',
        'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
        'linear-gradient(135deg, #be93c5 0%, #7bc6cc 100%)'
    ];
    
    // Memilih warna acak dari array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Mengubah background body
    document.body.style.background = randomColor;
    
    // Menampilkan pesan konfirmasi
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "✨ Warna latar belakang telah diubah! ✨";
    messageDiv.classList.add('show');
    
    // Menyembunyikan pesan setelah 2 detik
    setTimeout(() => {
        messageDiv.innerHTML = "";
        messageDiv.classList.remove('show');
    }, 2000);
}

// Fungsi untuk memperbarui informasi pengguna
function updateUserInfo(namaBaru, panggilanBaru, hobiBaru, lokasiBaru) {
    userData.namaLengkap = namaBaru || userData.namaLengkap;
    userData.panggilan = panggilanBaru || userData.panggilan;
    userData.hobi = hobiBaru || userData.hobi;
    userData.lokasi = lokasiBaru || userData.lokasi;
    
    // Memperbarui tampilan
    document.getElementById('nama-lengkap').textContent = userData.namaLengkap;
    document.getElementById('nama-detail').textContent = userData.namaLengkap;
    document.getElementById('panggilan').textContent = userData.panggilan;
    document.getElementById('hobi').textContent = userData.hobi.join(', ');
    document.getElementById('lokasi').textContent = userData.lokasi;
    
    // Menampilkan pesan sukses
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "✅ Informasi berhasil diperbarui!";
    messageDiv.classList.add('show');
    
    setTimeout(() => {
        messageDiv.innerHTML = "";
        messageDiv.classList.remove('show');
    }, 2000);
}

// Fungsi untuk menampilkan biodata lengkap
function tampilkanBiodata() {
    const messageDiv = document.getElementById('message');
    const biodata = `
        📋 Biodata Lengkap:<br>
        Nama: ${userData.namaLengkap}<br>
        Panggilan: ${userData.panggilan}<br>
        Umur: ${userData.umur} tahun<br>
        Hobi: ${userData.hobi.join(', ')}<br>
        Lokasi: ${userData.lokasi}
    `;
    
    messageDiv.innerHTML = biodata;
    messageDiv.classList.add('show');
}

// Event listener saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman telah dimuat!');
    console.log('Selamat datang di website perkenalan ' + userData.namaLengkap);
    
    // Menambahkan event listener untuk klik pada foto profil
    const profileImg = document.getElementById('profile-img');
    profileImg.addEventListener('click', function() {
        tampilkanBiodata();
    });
    
    // Menambahkan efek hover pada card
    const profileCard = document.querySelector('.profile-card');
    profileCard.addEventListener('mouseenter', function() {
        console.log('Mouse masuk ke area profil');
    });
    
    profileCard.addEventListener('mouseleave', function() {
        console.log('Mouse keluar dari area profil');
    });
    
    // Inisialisasi tooltip
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.setAttribute('title', 'Klik untuk berinteraksi');
    });
});

// Fungsi untuk menambahkan efek typing pada teks
function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Contoh penggunaan fungsi typeWriter (opsional)
// Dapat dipanggil untuk efek mengetik pada bio
// typeWriter('Halo! Saya adalah seorang pengembang web yang passion di bidang teknologi dan desain kreatif.', 'bio', 30);

// Fungsi untuk menghitung umur (jika ada tanggal lahir)
function hitungUmur(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);
    let umur = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        umur--;
    }
    
    return umur;
}

// Menambahkan shortcut keyboard
document.addEventListener('keydown', function(event) {
    // Jika tombol 'S' ditekan, tampilkan sapaan
    if (event.key === 's' || event.key === 'S') {
        tampilkanPesan();
    }
    
    // Jika tombol 'W' ditekan, ubah warna
    if (event.key === 'w' || event.key === 'W') {
        ubahWarna();
    }
    
    // Jika tombol 'B' ditekan, tampilkan biodata
    if (event.key === 'b' || event.key === 'B') {
        tampilkanBiodata();
    }
});