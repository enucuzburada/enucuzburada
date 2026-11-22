"use client";
dım: GitHub page.tsx dosyasını aç

2. Adım:
- Kalem simgesine dokun.
- İçindeki bütün yazıları sil.
- Sana verdiğim alışveriş sayfası kodunu yeniden yapıştır.
Önemli: Kodun ilk satırı mutlaka şu olmalı:
"use client";


Dosya ağacı veya uygulama gibi yazılar kodun içinde olmamalı.

Kaydetmeden önce bana “Temizledim” yaz. Birlikte kontrol edelim.

















temizledim ve ilk satırı yazdım












Harika! 👏 Şimdi devam edelim.

"use client"; satırının altına aşağıdaki kodun tamamını yapıştır. İlk satırı tekrar yazmana gerek yok.

import { useState } from "react";

const products = [
  { name: "Bluetooth Kulaklık", price: 299, category: "Elektronik", emoji: "🎧" },
  { name: "Akıllı Saat", price: 549, category: "Elektronik", emoji: "⌚" },
  { name: "Kadın Çantası", price: 399, category: "Moda", emoji: "👜" },
  { name: "Spor Ayakkabı", price: 699, category: "Ayakkabı", emoji: "👟" },
  { name: "Kahve Makinesi", price: 899, category: "Ev & Yaşam", emoji: "☕" },
  { name: "Güneş Gözlüğü", price: 249, category: "Moda", emoji: "🕶️" },
  { name: "Telefon Standı", price: 129, category: "Elektronik", emoji: "📱" },
  { name: "Masa Lambası", price: 349, category: "Ev & Yaşam", emoji: "💡" },
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
    <main style={{ fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh", color: "#222" }}>
      <header style={{ background: "#f27a1a", color: "white", padding: "22px 5%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>EnUcuzBurada</h1>
        <strong>🛒 Sepetim ({cart.length})</strong>
      </header>

      <section style={{ background: "white", padding: "25px 5%" }}>
        <h2>Aradığın ürün, en ucuz burada!</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ürün ara..."
          style={{ width: "100%", maxWidth: 600, padding: 14, border: "1px solid #ddd", borderRadius: 8, fontSize: 16 }}
        />
      </section>

      <nav style={{ padding: "18px 5%", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {categories.map((c) => (
          <button key={c} onClick={() => setCategory(c)} style={{ padding: "10px 16px", borderRadius: 20, border: "none", background: category === c ? "#f27a1a" : "white", color: category === c ? "white" : "#333" }}>
            {c}
          </button>
        ))}
      </nav>

      <section style={{ padding: "10px 5% 40px" }}>
        <h2>Öne Çıkan Ürünler</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
          {filtered.map((p) => (
            <article key={p.name} style={{ background: "white", borderRadius: 12, padding: 18 }}>
              <div style={{ fontSize: 55, textAlign: "center", padding: 15 }}>{p.emoji}</div>
              <small>{p.category}</small>
              <h3>{p.name}</h3>
              <strong style={{ color: "#f27a1a", fontSize: 21 }}>{p.price.toLocaleString("tr-TR")} TL</strong>
              <button onClick={() => setCart([...cart, p.name])} style={{ display: "block", width: "100%", marginTop: 15, padding: 12, border: "none", borderRadius: 8, background: "#f27a1a", color: "white" }}>
                Sepete Ekle
              </button>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p>Ürün bulunamadı.</p>}
      </section>

      <footer style={{ background: "#222", color: "white", padding: 25, textAlign: "center" }}>
        EnUcuzBurada © 2026
      </footer>
    </main>
  );
}
