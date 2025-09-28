export interface PenginapanItem {
  id: number;
  nama: string;
  deskripsi: string;
  fasilitas: string[];
  rangeHarga: string;
  images: string[];
  lokasi: string;
  mapsEmbed: string;
  kontak: string;
}

export const penginapanData: PenginapanItem[] = [
  {
    id: 1,
    nama: "Hotel Mustika Tuban",
    deskripsi: "Hotel Mustika Tuban berada di pusat kota dengan fasilitas penunjang bisnis lengkap untuk Anda dan kolega.",
    fasilitas: ["AC", "WiFi Gratis", "Ruang Rapat", "Restaurant", "Parkir", "Layanan Kamar"],
    rangeHarga: "Rp 300.000 - Rp 650.000",
    images: [
      "src/assets/images/penginapan/hotel-mustika-1.jpg",
      "src/assets/images/penginapan/hotel-mustika-2.jpg",
      "src/assets/images/penginapan/hotel-mustika-3.jpg"
    ],
    lokasi: "Jl. Teuku Umar 3 Tuban, Latsari, Tuban, Tuban Regency, Jawa Timur.",
    mapsEmbed: "https://maps-api-ssl.google.com/maps?hl=en&ll=-6.884687,112.045263&output=embed&q=Jl.+Teuku+Umar+No.3,+Latsari,+Kec.+Tuban,+Kabupaten+Tuban,+Jawa+Timur+62314,+Indonesia+(Hotel+Mustika+Tuban)&z=17",
    kontak: "0356-555111"
  },
  {
    id: 2,
    nama: "Resor Tuban Tropis",
    deskripsi: "Resor modern dekat Masjid Astana Makam Sunan Bonang dengan kolam renang outdoor besar dan pemandangan taman.",
    fasilitas: ["AC", "WiFi", "Kolam Renang", "Restaurant", "Spa", "Taman", "Parkir"],
    rangeHarga: "Rp 700.000 - Rp 1.400.000",
    images: [
      "src/assets/images/penginapan/resor-tuban-tropis-1.jpg",
      "src/assets/images/penginapan/resor-tuban-tropis-2.jpg",
      "src/assets/images/penginapan/resor-tuban-tropis-3.jpg"
    ],
    lokasi: "0.9 km dari Masjid Astana Makam Sunan Bonang, Tuban",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.200000002!2d112.0670!3d-6.8930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sResor%20Tuban%20Tropis!5e0!3m2!1sid!2sid!4v1700000000002",
    kontak: "0356-777222"
  },
  {
    id: 3,
    nama: "Hotel Irwan",
    deskripsi: "Hotel populer di Tuban dengan kenyamanan istimewa, lokasi strategis, dan layanan pelanggan yang ramah.",
    fasilitas: ["AC", "WiFi", "Sarapan", "Parkir", "Laundry", "Resepsionis 24 Jam"],
    rangeHarga: "Rp 250.000 - Rp 500.000",
    images: [
      "src/assets/images/penginapan/hotel-irwan-1.jpg",
      "src/assets/images/penginapan/hotel-irwan-2.jpg",
      "src/assets/images/penginapan/hotel-irwan-3.jpg"
    ],
    lokasi: "Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.300000003!2d112.0590!3d-6.8975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sHotel%20Irwan%20Tuban!5e0!3m2!1sid!2sid!4v1700000000003",
    kontak: "0356-888333"
  },
  {
    id: 4,
    nama: "favehotel Tuban",
    deskripsi: "Hotel modern dekat Masjid Agung Tuban dan Masjid Aschabul Kahfi, cocok untuk perjalanan bisnis maupun liburan.",
    fasilitas: ["AC", "WiFi", "Restaurant", "Ruang Rapat", "Parkir", "Layanan Kamar"],
    rangeHarga: "Rp 350.000 - Rp 700.000",
    images: [
      "src/assets/images/penginapan/favehotel-tuban-1.jpg",
      "src/assets/images/penginapan/favehotel-tuban-2.jpg",
      "src/assets/images/penginapan/favehotel-tuban-3.jpg"
    ],
    lokasi: "Dekat Masjid Agung Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.400000004!2d112.0610!3d-6.8922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sfavehotel%20Tuban!5e0!3m2!1sid!2sid!4v1700000000004",
    kontak: "0356-999444"
  },
  {
    id: 5,
    nama: "FrontOne Premier King Hotel",
    deskripsi: "Salah satu hotel terbesar di Tuban dengan beragam tipe kamar: Superior, Deluxe, dan Junior Suite.",
    fasilitas: ["AC", "WiFi", "Restaurant", "Kolam Renang", "Gym", "Ruang Rapat", "Parkir"],
    rangeHarga: "Rp 450.000 - Rp 1.200.000",
    images: [
      "src/assets/images/penginapan/frontone-king-1.jpg",
      "src/assets/images/penginapan/frontone-king-2.jpg",
      "src/assets/images/penginapan/frontone-king-3.jpg"
    ],
    lokasi: "Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.500000005!2d112.0700!3d-6.9020!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sFrontOne%20Premier%20King%20Hotel%20Tuban!5e0!3m2!1sid!2sid!4v1700000000005",
    kontak: "0356-222777"
  },
  {
    id: 6,
    nama: "Green Garden Hotel",
    deskripsi: "Hotel di pusat kota dengan harga bersahabat dan kualitas layanan yang baik.",
    fasilitas: ["AC", "WiFi", "Taman", "Restaurant", "Parkir"],
    rangeHarga: "Rp 200.000 - Rp 450.000",
    images: [
      "src/assets/images/penginapan/green-garden-1.jpg",
      "src/assets/images/penginapan/green-garden-2.jpg",
      "src/assets/images/penginapan/green-garden-3.jpg"
    ],
    lokasi: "Pusat Kota Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.600000006!2d112.0620!3d-6.8959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sGreen%20Garden%20Hotel%20Tuban!5e0!3m2!1sid!2sid!4v1700000000006",
    kontak: "0356-333666"
  }
];
