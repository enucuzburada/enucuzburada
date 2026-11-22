# EnUcuzBurada

EnUcuzBurada için Next.js başlangıç projesi.

## Gereksinimler
- Node.js 20+
- Supabase hesabı (veritabanı bağlantısı eklenecek)

## Yerelde çalıştırma
```bash
npm install
npm run dev
```
Ardından http://localhost:3000 adresini açın.

## Yayınlama
Projeyi GitHub'a yükleyip Vercel'e bağlayabilirsiniz. Vercel ortam değişkenlerine `.env.example` içindeki Supabase değişkenleri, Supabase projesi kurulduktan sonra eklenmelidir.

## Mevcut kapsam
- Responsive vitrin ve örnek ürün/kategori görünümü
- Müşteri, satıcı ve yönetici için taslak sayfalar
- Supabase/PostgreSQL başlangıç şeması
- Varsayılan komisyon oranı: %5
- Satıcı mağaza kaydı varsayılan durumu: otomatik aktif

## Canlıya çıkmadan önce tamamlanması gerekenler
Bu paket üretim için hazır bir pazaryeri değildir. Gerçek hesap açma/giriş, rol bazlı erişim ve RLS politikaları, ürün/sipariş API'leri, ödeme sağlayıcısı ve webhook'ları, kargo, iade, satıcı ödemeleri, yönetici yetkilendirmesi, testler ve güvenlik kontrolleri eklenmelidir. Yönetici ve satıcı taslak sayfaları şu anda kimlik doğrulama ile korunmuyor; gerçek kullanıcı trafiğine açılmadan önce korunmalıdır.
