export interface KulinerItem {
  id: number;
  nama: string;
  deskripsi: string;
  bahanUtama: string;
  images: string[];
  tempatBeli: string[];
}

export const kulinerData: KulinerItem[] = [
  {
    id: 1,
    nama: "Soto Tuban",
    deskripsi: "Soto khas Tuban dengan kuah bening yang segar, daging ayam empuk, dan bumbu rempah yang kaya.",
    bahanUtama: "Ayam kampung, kunyit, jahe, serai, daun salam, bawang merah, bawang putih, ketumbar",
    images: [
      "src/assets/images/kuliner/soto-tuban-1.jpg",
      "src/assets/images/kuliner/soto-tuban-2.jpg",
      "src/assets/images/kuliner/soto-tuban-3.jpg"
    ],
    tempatBeli: [
      "Warung Soto Bu Tini - Jl. Pahlawan No. 15",
      "Soto Ayam Pak Karto - Jl. Sunan Bonang No. 22",
      "Warung Makan Sederhana - Jl. Diponegoro No. 8"
    ]
  },
  {
    id: 2,
    nama: "Lontong Balap Tuban",
    deskripsi: "Lontong dengan kuah santan gurih, dilengkapi tahu, tempe, tauge, dan kerupuk yang renyah.",
    bahanUtama: "Lontong, santan kelapa, tahu, tempe, tauge, kerupuk, bumbu kacang",
    images: [
      "src/assets/images/kuliner/lontong-balap-3.jpg",
      "src/assets/images/kuliner/lontong-balap-1.jpg",
      "src/assets/images/kuliner/lontong-balap-2.jpg",
    ],
    tempatBeli: [
      "Lontong Balap Bu Sari - Jl. Veteran No. 12",
      "Warung Lontong Pak Budi - Jl. Pemuda No. 25",
      "Lontong Balap Mbok Yem - Pasar Tuban"
    ]
  },
  {
    id: 3,
    nama: "Kerupuk Rambak",
    deskripsi: "Kerupuk khas Tuban yang terbuat dari kulit sapi dengan tekstur renyah dan rasa gurih yang khas.",
    bahanUtama: "Kulit sapi, garam, bumbu rempah tradisional",
    images: [
      "src/assets/images/kuliner/kerupuk-rambak-1.jpg",
      "src/assets/images/kuliner/kerupuk-rambak-2.jpg",
      "src/assets/images/kuliner/kerupuk-rambak-3.jpg"
    ],
    tempatBeli: [
      "Industri Kerupuk Pak Hasan - Desa Kradenan",
      "Toko Oleh-oleh Tuban Jaya - Jl. Ahmad Yani No. 30",
      "Kerupuk Bu Lastri - Jl. Kartini No. 18"
    ]
  },
  {
    id: 4,
    nama: "Rujak Cingur Tuban",
    deskripsi: "Rujak khas Jawa Timur dengan tambahan cingur (moncong sapi) dan bumbu petis yang gurih pedas.",
    bahanUtama: "Cingur, timun, tauge, tahu, tempe, kerupuk, bumbu petis, cabai",
    images: [
      "src/assets/images/kuliner/rujak-cingur-1.jpg",
      "src/assets/images/kuliner/rujak-cingur-2.jpg",
      "src/assets/images/kuliner/rujak-cingur-3.jpg"
    ],
    tempatBeli: [
      "Rujak Cingur Bu Tukinem - Jl. Basuki Rahmat No. 45",
      "Warung Rujak Pak Tanto - Alun-alun Tuban",
      "Rujak Cingur Mbak Rina - Jl. Gajah Mada No. 12"
    ]
  },
  {
    id: 5,
    nama: "Nasi Krawu",
    deskripsi: "Nasi dengan lauk daging sapi yang dimasak dengan bumbu rempah khas, disajikan dengan sambal dan kerupuk.",
    bahanUtama: "Nasi, daging sapi, santan, bumbu rempah, cabai, bawang merah",
    images: [
      "src/assets/images/kuliner/nasi-krawu-1.jpg",
      "src/assets/images/kuliner/nasi-krawu-2.jpg",
      "src/assets/images/kuliner/nasi-krawu-3.jpg"
    ],
    tempatBeli: [
      "Nasi Krawu Bu Marni - Jl. Panglima Sudirman No. 20",
      "Warung Krawu Pak Joko - Jl. Letjen S. Parman No. 35",
      "Nasi Krawu Sedap - Jl. KH. Wahab Hasbullah No. 10"
    ]
  },
  {
    id: 6,
    nama: "Sate Kambing Tuban",
    deskripsi: "Sate kambing dengan bumbu kacang yang khas dan daging kambing yang empuk serta tidak amis.",
    bahanUtama: "Daging kambing, bumbu kacang, kecap manis, cabai, bawang merah",
    images: [
      "src/assets/images/kuliner/sate-kambing-2.jpg",
      "src/assets/images/kuliner/sate-kambing-1.jpg",
      "src/assets/images/kuliner/sate-kambing-3.jpg"
    ],
    tempatBeli: [
      "Sate Kambing Pak Harto - Jl. Sunan Kalijaga No. 28",
      "Warung Sate Bu Yanti - Jl. R.A. Kartini No. 15",
      "Sate Kambing Muda - Jl. Dewi Sartika No. 40"
    ]
  }
];
