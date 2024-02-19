/*

    Informasi File
    --------------

    ini merupakan file export fuction untuk mengambil data bahasa aplikasi
*/

export default async function fetchLangData() {
    try {
      const response = await fetch('/lang/lang.json');
      if (response.ok) {
        return response.json();
      }
      throw new Error('Gagal mengambil data bahasa');
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  }