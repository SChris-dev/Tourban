export interface WisataItem {
  id: number;
  nama: string;
  deskripsi: string;
  sejarah: string;
  images: string[];
  lokasi: string;
  mapsEmbed: string;
}

export const wisataData: WisataItem[] = [
  {
    id: 1,
    nama: "Pantai Boom Tuban",
    deskripsi: "Pantai indah di kawasan Tuban yang menjadi destinasi favorit wisatawan dengan pemandangan sunset yang menawan.",
    sejarah: "Pantai Boom Tuban terletak di kawasan pelabuhan Tuban dan merupakan salah satu pantai terpopuler di Jawa Timur. Nama 'Boom' berasal dari bahasa Belanda yang berarti dermaga atau pelabuhan.",
    images: [
      "/images/wisata/pantai-boom-1.jpg",
      "/images/wisata/pantai-boom-2.jpg",
      "/images/wisata/pantai-boom-3.jpg"
    ],
    lokasi: "Jl. Pantai Boom, Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d112.0639!3d-6.8987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPantai%20Boom%20Tuban!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
  },
  {
    id: 2,
    nama: "Makam Sunan Bonang",
    deskripsi: "Situs bersejarah makam salah satu Wali Songo, Sunan Bonang, yang menjadi tempat ziarah dan wisata religi.",
    sejarah: "Sunan Bonang adalah salah satu dari Wali Songo yang berperan penting dalam penyebaran Islam di Jawa. Beliau wafat pada tahun 1525 M dan dimakamkan di Tuban.",
    images: [
      "/images/wisata/makam-sunan-bonang-1.jpg",
      "/images/wisata/makam-sunan-bonang-2.jpg",
      "/images/wisata/makam-sunan-bonang-3.jpg"
    ],
    lokasi: "Desa Kutorejo, Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.234567890!2d112.0540!3d-6.8876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMakam%20Sunan%20Bonang!5e0!3m2!1sen!2sid!4v1634567890124!5m2!1sen!2sid"
  },
  {
    id: 3,
    nama: "Klenteng Kwan Sing Bio",
    deskripsi: "Klenteng bersejarah yang menjadi simbol keberagaman budaya dan toleransi beragama di Tuban.",
    sejarah: "Klenteng Kwan Sing Bio dibangun pada abad ke-15 dan menjadi bukti akulturasi budaya Tionghoa dengan budaya lokal Tuban. Klenteng ini merupakan tempat ibadah tertua di Tuban.",
    images: [
      "/images/wisata/klenteng-1.jpg",
      "/images/wisata/klenteng-2.jpg",
      "/images/wisata/klenteng-3.jpg"
    ],
    lokasi: "Jl. Sunan Bonang, Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.345678901!2d112.0650!3d-6.8965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKlenteng%20Kwan%20Sing%20Bio!5e0!3m2!1sen!2sid!4v1634567890125!5m2!1sen!2sid"
  },
  {
    id: 4,
    nama: "Museum Kambang Putih",
    deskripsi: "Museum yang menyimpan berbagai koleksi sejarah dan budaya Tuban, termasuk temuan arkeologi kuno.",
    sejarah: "Museum ini didirikan untuk melestarikan warisan budaya dan sejarah Tuban. Koleksinya meliputi artefak dari masa kerajaan Hindu-Buddha hingga era Islam.",
    images: [
      "/images/wisata/museum-1.jpg",
      "/images/wisata/museum-2.jpg",
      "/images/wisata/museum-3.jpg"
    ],
    lokasi: "Jl. Pahlawan, Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.456789012!2d112.0580!3d-6.8954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMuseum%20Kambang%20Putih!5e0!3m2!1sen!2sid!4v1634567890126!5m2!1sen!2sid"
  },
  {
    id: 5,
    nama: "Gua Akbar",
    deskripsi: "Gua alami yang eksotis dengan stalaktit dan stalagmit yang menawan, cocok untuk petualangan dan fotografi.",
    sejarah: "Gua Akbar merupakan gua alam yang terbentuk jutaan tahun yang lalu. Gua ini ditemukan oleh masyarakat setempat dan kemudian dikembangkan sebagai objek wisata.",
    images: [
      "/images/wisata/gua-akbar-3.jpg",
      "/images/wisata/gua-akbar-1.jpg",
      "/images/wisata/gua-akbar-2.jpg",
    ],
    lokasi: "Desa Sumberejo, Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.567890123!2d112.0720!3d-6.9120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGua%20Akbar!5e0!3m2!1sen!2sid!4v1634567890127!5m2!1sen!2sid"
  },
  {
    id: 6,
    nama: "Pantai Cemara",
    deskripsi: "Pantai yang tenang dengan deretan pohon cemara yang memberikan nuansa romantis dan cocok untuk bersantai.",
    sejarah: "Pantai Cemara dulunya merupakan kawasan hutan cemara yang kemudian dikembangkan menjadi destinasi wisata. Pohon-pohon cemara yang rindang memberikan kesan alami dan sejuk.",
    images: [
      "/images/wisata/pantai-cemara-2.jpg",
      "/images/wisata/pantai-cemara-1.jpg",
      "/images/wisata/pantai-cemara-3.jpg"
    ],
    lokasi: "Desa Cemara, Tuban, Jawa Timur",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.678901234!2d112.0890!3d-6.9210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPantai%20Cemara!5e0!3m2!1sen!2sid!4v1634567890128!5m2!1sen!2sid"
  }
];
