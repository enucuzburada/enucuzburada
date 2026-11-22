
"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Kablosuz Bluetooth Kulaklik", price: 499, category: "Elektronik", icon: "🎧" },
  { id: 2, name: "Akilli Saat", price: 899, category: "Elektronik", icon: "⌚" },
  { id: 3, name: "Spor Ayakkabi", price: 749, category: "Giyim", icon: "👟" },
  { id: 4, name: "Kadin Canta", price: 599, category: "Moda", icon: "👜" },
  { id: 5, name: "Kahve Makinesi", price: 1299, category: "Ev ve Yasam", icon: "☕" },
  { id: 6, name: "Gunes Gozlugu", price: 349, category: "Moda", icon: "🕶️" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tumu");
  const [cart, setCart] = useState(0);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Tumu" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 24, background: "#f5f6fa", minHeight: "100vh" }}>
      <header style={{ background: "#173b72", color: "white", padding: 24, borderRadius: 12 }}>
        <h1>EnUcuzBurada</h1>
        <p>Aradigin urun, en uygun fiyatla burada!</p>
        <strong>Sepet: {cart}</strong>
      </header>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Urun ara..."
        style={{ width: "100%", padding: 14, marginTop: 20, marginBottom: 16, boxSizing: "border-box", borderRadius: 8, border: "1px solid #ccc" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {["Tumu", "Elektronik", "Giyim", "Moda", "Ev ve Yasam"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{ padding: "10px 16px", borderRadius: 20, border: 0, background: category === item ? "#173b72" : "#ddd", color: category === item ? "white" : "#222" }}
          >
            {item}
          </button>
        ))}
      </div>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
        {filteredProducts.map((product) => (
          <article key={product.id} style={{ background: "white", padding: 20, borderRadius: 12, textAlign: "center" }}>
            <div style={{ fontSize: 48 }}>{product.icon}</div>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <h2>{product.price.toLocaleString("tr-TR")} TL</h2>
            <button
              onClick={() => setCart(cart + 1)}
              style={{ background: "#173b72", color: "white", border: 0, padding: 12, borderRadius: 8, width: "100%" }}
            >
              Sepete Ekle
            </button>
          </article>
        ))}
      </section>

      {filteredProducts.length === 0 && <p>Aradigin urun bulunamadi.</p>}
    </main>
  );
}
