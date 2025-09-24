// To DO List Proyek

// Input
import PromptSync from "prompt-sync";
const prompt = PromptSync()

let mainlist: string[] = []

let space :string[] = [`\t`, `\t\t`]

function consollist(){
  console.log(`========== TO DO LIST ========== `);
  console.log(`(1). Menambah  : List`);
  console.log(`(2). Mengubah  : List`);
  console.log(`(3). Menghapus : List`);
  console.log(`(4). Lihat     : List`);
  console.log(`=================================`);
  console.log(`(!). Keluar    : Program`);
  console.log(`=================================`);
}

function viewlist(){
  console.log(`>>>>>>>>>> PLAYLIST ANDA <<<<<<<<<<`);
  console.log(`List: `);
  if (mainlist.length < 1) {
    console.log(`List tidak ada`);
  } else {
    for (let i = 0; i < mainlist.length; i++) {
      console.log(`${i+1}. ${mainlist[i]}`);
    }
    console.log(`>>>>>>>>>> PLAYLIST ANDA <<<<<<<<<<`);
  }
  
}

function addlist(){
  const task = prompt(`Masukan Catatan: `)
  mainlist.push(task)
  console.log(`Anda Menambahkan ("${task}") di list`);
}

function newlistadv() {
  const ubah = Number(prompt("Pilih(nomer) list yang ingin diubah: ")) - 1;
  const note = mainlist[ubah]
  if (mainlist[ubah]) {
    const baru = prompt(`Masukan Task Baru: `)
    mainlist[ubah] = baru
    console.log(`Nomer ${ubah} Diubah`);
    console.log(`Catatan: "${note}" -> -> -> "${baru}"`);
    
    
  } else {
    console.log(`List ke-("${ubah+1}") Belum Ada `);
    
  }
}

function rmlist() {
  const hapuslist = Number(prompt(`Pilih(nomer) list yang ingin dihapus: `)) -1;
    const note = mainlist[hapuslist]
  if (mainlist[hapuslist]) {
    mainlist.splice(hapuslist, 1)
    console.log(`Nomer ${hapuslist} Dihapus`)
    console.log(`Catatan: ${note}`)
  } else {
    console.log(`List ke-("${hapuslist+1}") Belum Ada `);
  }
}

function MainToDoList() {
  while (true) {
    consollist();
    const pilihlistnum = prompt("Masukan Pilihan: ").toLowerCase();
    if (pilihlistnum === "1" || pilihlistnum === "menambah") {
      addlist()
      console.log(space[0]);

    } else if (pilihlistnum === "2" || pilihlistnum === "mengubah") {
      viewlist()
      newlistadv()
      console.log(space[0]);

    } else if (pilihlistnum === "3" || pilihlistnum === "menghapus") {
      viewlist()
      rmlist()
      console.log(space[0]);

    } else if (pilihlistnum === "4" || pilihlistnum === "lihat") {
      viewlist()
      console.log(space[0]);

    } else if (pilihlistnum === "!" || pilihlistnum === "keluar") {
      break
    }
  }
}
MainToDoList()