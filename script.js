// Peta untuk font ASCII
const asciiFontMap = {
    'A': '▄▀█ █░░',
    'B': '█▀█ █▄▄',
    'C': '█░█ ▀▀█',
    'D': '█▄█ █▀▄',
    'E': '█░█ ▀▀█',
    'F': '█░█ ▀▀▄',
    'G': '█▀█ ▄█░',
    'H': '█░█ █░█',
    'I': '▀█▀ ░█░',
    'J': '░█░ █▄█',
    'K': '█▀█ █▄▀',
    'L': '█░░ █▄▄',
    'M': '█▄█ █░█',
    'N': '█▀█ █░█',
    'O': '█▄█ █▄█',
    'P': '█▀█ █▀▀',
    'Q': '█▄█ ▀█▄',
    'R': '█▀█ █▀▄',
    'S': '█▀▄ ▄▀█',
    'T': '▀█▀ ░█░',
    'U': '█░█ █▄█',
    'V': '█░█ ▀▄▀',
    'W': '█░█ █▄█',
    'X': '▀▄▀ █▀█',
    'Y': '█▀█ ░█░',
    'Z': '▀█▄ █▄▀',
    ' ': '     ' // spasi
};

function generateAsciiFont(text) {
    const lines = ['', '']; // Simpan dua baris untuk font
    for (let char of text.toUpperCase()) {
        const asciiChar = asciiFontMap[char] || char; // Jika tidak ditemukan, gunakan karakter asli
        const parts = asciiChar.split(' '); // Pisahkan per baris
        lines[0] += (parts[0] || ' ') + ' '; // Tambahkan baris pertama
        lines[1] += (parts[1] || ' ') + ' '; // Tambahkan baris kedua
    }
    return lines.join('\n'); // Gabungkan baris dengan newline
}

// Ambil elemen DOM
const textInput = document.getElementById('textInput');
const previewOutput = document.getElementById('previewOutput');
const generateFont = document.getElementById('generateFont');
const downloadFont = document.getElementById('downloadFont');

// Event untuk menghasilkan font
generateFont.addEventListener('click', () => {
    const inputText = textInput.value;
    const asciiText = generateAsciiFont(inputText);
    previewOutput.textContent = asciiText; // Tampilkan hasil
});

// Event untuk mengunduh hasil sebagai file teks
downloadFont.addEventListener('click', () => {
    const inputText = textInput.value;
    const asciiText = generateAsciiFont(inputText);

    // Buat blob file
    const blob = new Blob([asciiText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Buat elemen <a> untuk download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${inputText || 'aancuy_font'}.txt`; // Nama file
    a.click();

    // Hapus URL blob setelah selesai
    URL.revokeObjectURL(url);
});