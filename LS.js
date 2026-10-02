function inputdata(event) {
    event.preventDefault();

    let data1 = document.getElementById("note").value;
    let data2 = document.getElementById("label").value;

    let siswa = JSON.parse(localStorage.getItem("siswa")) || [];

    siswa.push({note: data1, label: data2});

    localStorage.setItem("siswa", JSON.stringify(siswa));

    tampilkan();
}


// tampilkan data
function tampilkan() {
    let data = JSON.parse(localStorage.getItem("siswa")) || [];
    let ul = document.getElementById("data-tampil");

    ul.innerHTML = "";

     data.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.note} - ${item.label} `;
        let button = document.createElement("button");
        button.textContent = "Hapus";
        button.onclick = function () {

            // Konfirmasi sebelum menghapus
            let yakin = confirm(
                "Apakah kamu yakin ingin menghapus data ini?"
            );

            if (yakin) {
                data.splice(index, 1);
                localStorage.setItem(
                    "siswa",
                    JSON.stringify(data)
                );
                tampilkan();
        
            }
        };
        li.appendChild(button);
        ul.appendChild(li);
    });
}


// hapus satu data
function hapusSatu(index) {
    let data = JSON.parse(localStorage.getItem("siswa")) || [];
    data.splice(index, 1);
    let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
    siswa = siswa.filter(item => item !== data[index]);
    localStorage.setItem("siswa", JSON.stringify(siswa));
    tampilkan();

}



// hapus semua data
function deletedata() {
    localStorage.removeItem("siswa");
    tampilkan();
    let yakin = confirm(
                "Apakah kamu yakin ingin menghapus data ini?"
            );

            if (yakin) {
                data.splice(index, 1);
                localStorage.setItem(
                    "siswa",
                    JSON.stringify(data)
                );
                tampilkan();
                alert("Data berhasil dihapus!");
            }
        };
 

tampilkan();
