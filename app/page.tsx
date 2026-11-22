Dosya ağacı
- uygulama
  -

Özelleştirilebilir çizgi yüksekliği
Varsayılan satır yüksekliği, erişilebilirliği artırmak için artırıldı. Görünüm ayarları menüsünden daha kompakt bir çizgi yüksekliğini etkinleştirmeyi seçebilirsiniz.

Satırlar değiştirildi: 16 ekleme ve 0 silme
Orijinal dosya satır numarası	Diferansiyel hat numarası	Diferansiyel çizgi değişikliği
@@ -0,0 +1,16 @@		
import type { Metadata } from "next";		
		
export const metadata: Metadata = {		
title: "EnUcuzBurada",		
description: "EnUcuzBurada alışveriş pazaryeri",		
};		
		
export default function RootLayout({		
children,		
















Şimdi anladım! 😊 Şu anda layout.tsx dosyasının geçmiş kayıtlarına bakıyorsun.

Bizim aradığımız page.tsx dosyası.

Şu bağlantıya dokun:

EnUcuzBurada – app klasörünü aç

Açılınca hangi dosyaları gördüğünü bana yaz. page.tsx yoksa birlikte oluşturacağız. 👍

















tamam page tsx açtım












Harika! 🎉 Şimdi alışveriş sayfamızı oluşturalım.
1. page.tsx dosyasının sağ üstündeki kalem simgesine dokun.
2. İçindeki eski kodların tamamını sil.
3. Sana vereceğim yeni kodu yapıştır.
Önce düzenleme ekranını açabildin mi? “Açtım” yaz, kodu göndereyim. 😊

















sildim












Süper! Şimdi aşağıdaki kodun tamamını kopyalayıp boş alana yapıştır. 😊

"use client";

import { useState } from "react";

const products = [
  { name: "Kablosuz Bluetooth Kulaklık", price: 299, category: "Elektronik", emoji: "🎧" },
  { name: "Akıllı Kol Saati", price: 549, category: "Elektronik", emoji: "⌚" },
  { name: "Kadın Omuz Çantası", price: 399, category: "Moda", emoji: "👜" },
  { name: "Spor Ayakkabı", price: 699, category: "Ayakkabı", emoji: "👟" },
  { name: "Kahve Makinesi", price: 899, category: "Ev & Yaşam", emoji: "☕" },
  { name: "Güneş Gözlüğü", price: 249, category: "Moda", emoji: "🕶️" },
  { name: "Telefon Standı", price: 129, category: "Elektronik", emoji: "📱" },
  { name: "Dekoratif Masa Lambası", price: 349, category: "Ev & Yaşam", emoji: "💡" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<string[]>([]);
  const [category, setCategory] = useState("Tümü");

  const categories = ["Tümü", "Elektronik", "Moda", "Ayakkabı", "Ev & Yaşam"];
  const filtered = products.filter((p) =>
    p.name.toLocaleLowerCase("tr").includes(search.toLocaleLowerCase("tr")) &&
    (category === "Tümü" || p.category === category)
  );

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5", minHeight: "100vh", color: "#222" }}>
      <header style={{ background: "#f27a1a", color: "white", padding: "22px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <h1 style={{ margin: 0 }}>EnUcuzBurada</h1>
        <strong>🛒 Sepetim ({cart.length})</strong>
      </header>

      <section style={{ background: "white", padding: "25px 5%" }}>
        <h2 style={{ marginTop: 0 }}>Aradığın ürün, en ucuz burada!</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ürün ara..."
          style={{ width: "100%", maxWidth: 600, padding: 14, border: "1px solid #ddd", borderRadius: 8, fontSize: 16 }}
        />
      </section>

      <nav style={{ padding: "18px 5%", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {categories.map((c) => (
          <button key={c} onClick={() => setCategory(c)} style={{ padding: "10px 16px", borderRadius: 20, border: "none", background: category === c ? "#f27a1a" : "white", color: category === c ? "white" : "#333", cursor: "pointer" }}>
            {c}
          </button>
        ))}
      </nav>

      <section style={{ padding: "10px 5% 40px" }}>
        <h2>Öne Çıkan Ürünler</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
          {filtered.map((p) => (
            <article key={p.name} style={{ background: "white", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #0000000d" }}>
              <div style={{ fontSize: 55, textAlign: "center", padding: 15 }}>{p.emoji}</div>
              <small style={{ color: "#888" }}>{p.category}</small>
              <h3 style={{ minHeight: 44 }}>{p.name}</h3>
              <strong style={{ color: "#f27a1a", fontSize: 21 }}>{p.price.toLocaleString("tr-TR")} TL</strong>
              <button onClick={() => setCart([...cart, p.name])} style={{ display: "block", width: "100%", marginTop: 15, padding: 12, border: "none", borderRadius: 8, background: "#f27a1a", color: "white", cursor: "pointer" }}>
                Sepete Ekle
              </button>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p>Aradığın ürün bulunamadı.</p>}
      </section>

      <footer style={{ background: "#222", color: "white", padding: 25, textAlign: "center" }}>
        EnUcuzBurada © 2026 · Alışverişin yeni adresi
      </footer>
    </main>
  );
}
