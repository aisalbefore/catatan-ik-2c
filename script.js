// script.js

// JavaScript untuk menyimpan dan memuat status checkbox
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // 1. MEMUAT STATUS TUGAS DARI LOCALSTORAGE SAAT HALAMAN DIBUKA
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const taskId = row.dataset.taskId;

        // Ambil status dari localStorage
        const isCompleted = localStorage.getItem(taskId) === 'true';
        if (isCompleted) {
            // Jika statusnya true, centang checkbox dan tambahkan class 'completed'
            checkbox.checked = true;
            row.classList.add('completed');
        }
    });

    // 2. MENYIMPAN STATUS TUGAS KE LOCALSTORAGE SAAT DICENTANG/DIHAPUS
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const row = checkbox.closest('tr');
            const taskId = row.dataset.taskId;

            if (checkbox.checked) {
                // Jika dicentang, simpan status 'true' dan tambahkan class
                localStorage.setItem(taskId, 'true');
                row.classList.add('completed');
            } else {
                // Jika tidak, simpan status 'false' dan hapus class
                localStorage.setItem(taskId, 'false');
                row.classList.remove('completed');
            }
        });
    });
});
