use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Kablosuz Bluetooth Kulaklık", price: 499, category: "Elektronik", icon: "🎧" },
  { id: 2, name: "Akıllı Saat", price: 899, category: "Elektronik", icon: "⌚" },
  { id: 3, name: "Spor Ayakkabı", price: 749, category: "Giyim", icon: "👟" },
  { id: 4, name: "Kadın Çanta", price: 599, category: "Moda", icon: "👜" },
  { id: 5, name: "Kahve Makinesi", price: 1299, category: "Ev & Yaşam", icon: "☕" },
  { id: 6, name: "Güneş Gözlüğü", price: 349, category: "Moda", icon: "🕶️" },
];

export default function Home() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tümü");

  const categories = ["Tümü", "Elektronik", "Giyim", "Moda", "Ev & Yaşam"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLocaleLowerCase("tr")
      .includes(search.toLocaleLowerCase("tr"));

    const matchesCategory =
      category === "Tümü" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f5f6fa", minHeight: "100vh", color: "#222" }}>
      <header style={{ background: "#172554", color: "white", padding: "22px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 15 }}>
          <h1 style={{ margin: 0, fontSize: 27 }}>
            EnUcuz<span style={{ color: "#facc15" }}>Burada</span>
          </h1>
          <div style={{ fontWeight: "bold" }}>🛒 Sepetim ({cart})</div>
        </div>
      </header>

      <section style={{ background: "#1e40af", color: "white", padding: "55px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 34, margin: "0 0 12px" }}>
          Aradığın En Ucuz Ürün Burada!
        </h2>
        <p style={{ fontSize: 17 }}>
          Binlerce ürün, avantajlı fiyatlar ve güvenilir alışveriş.
        </p>
        <div style={{ maxWidth: 550, margin: "25px auto 0" }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ürün ara..."
            style={{ width: "100%", padding: 16, borderRadius: 10, border: "none", fontSize: 16, boxSizing: "border-box" }}
          />
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "auto", padding: "30px 20px" }}>
        <h2>Kategoriler</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              style={{
                padding: "11px 18px",
                borderRadius: 25,
                border: "none",
                background: category === item ? "#1e40af" : "white",
                color: category === item ? "white" : "#222",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <h2 style={{ marginTop: 35 }}>Öne Çıkan Ürünler</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {filteredProducts.map((product) => (
            <article key={product.id} style={{ background: "white", borderRadius: 14, padding: 20, boxShadow: "0 2px 12px #0000000d" }}>
              <div style={{ background: "#eff6ff", borderRadius: 12, padding: 30, textAlign: "center", fontSize: 55 }}>
                {product.icon}
              </div>
              <p style={{ color: "#64748b", fontSize: 13 }}>{product.category}</p>
              <h3 style={{ minHeight: 45 }}>{product.name}</h3>
              <p style={{ color: "#1d4ed8", fontSize: 23, fontWeight: "bold" }}>
                {product.price.toLocaleString("tr-TR")} TL
              </p>
              <button
                onClick={() => setCart((current) => current + 1)}
                style={{ width: "100%", padding: 13, background: "#172554", color: "white", border: "none", borderRadius: 9, cursor: "pointer", fontWeight: "bold" }}
              >
                Sepete Ekle
              </button>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p>Aradığınız ürün bulunamadı.</p>
        )}
      </section>

      <footer style={{ background: "#172554", color: "white", padding: 25, textAlign: "center" }}>
        © 2026 EnUcuzBurada - Uygun fiyatlı alışverişin adresi.
      </footer>
    </main>
  );
}



2. Şimdi yapacağın işlem
1. Kodun tamamını kopyala.
