import './App.css';
import { useState } from 'react';

import PriceCalculator from './PriceCalculator/PriceCalculator';
import ProductSearch from './ProductSearch/ProductSearch';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'Zabiespiczenie', price: 1000 },
    { id: 2, name: 'Demontaz inne', price: 70 },
    { id: 3, name: 'Stary tynk Demontaz m.k.', price: 40 },
    { id: 4, name: 'Demontaz starej Gladzi m.k.', price: 50 },
    { id: 5, name: 'Bruzdy po Elektrykach', price: 10 },
    { id: 6, name: 'Demontaz Parket m.k.', price: 50 },
    { id: 7, name: 'Demontaz Plytki m.k.', price: 50 },
    { id: 8, name: 'Demontaz Drzwi szt.', price: 150 },
    { id: 9, name: 'Demontaz Grzejnik szt.', price: 100 },
    { id: 10, name: 'Przesunięcie drzwi  szt.', price: 300 },
    { id: 11, name: 'Zmiana wysykosci Drzwi  szt.', price: 300 },   

    { id: 12, name: 'Szlifowanie sciany  m.k.', price: 30 },
    { id: 13, name: 'Wyrownanie Scian (G-K) Stelaz m.k.', price: 80 },
    { id: 14, name: 'Wyrownanie Scian (G-K) Klej m.k.', price: 60 },
    { id: 15, name: 'Tynk gipsowy m.k.', price: 60 },
    { id: 16, name: 'Tynk gipsowy Sufit m.k.', price: 70 },
    { id: 17, name: 'Sciana Bloczek G-K m.k.', price: 140 },
    { id: 18, name: 'Sufit podwieszany m.k.', price: 200 },
    { id: 19, name: 'Ubytki', price: 25 },
    { id: 20, name: 'Zabudowy G-K m.k.', price: 120 },
    { id: 21, name: 'Bruzda m.b.', price: 10 },
    { id: 22, name: 'Gladz m.k.', price: 50 },
    { id: 23, name: 'Malowanie m.k.', price: 30 },
    { id: 24, name: 'Silion/Akril m.b.', price: 15 },
    { id: 25, name: 'Betonokontakt m.k.', price: 15 },
    { id: 26, name: 'Grunt m.k.', price: 10 },
    { id: 27, name: 'Liswa sufitowa m.b.', price: 35 },
    { id: 28, name: 'Listwa scienna m.b.', price: 30 },
    { id: 29, name: 'Naroznik aluminiowy m.b.', price: 30 },

    { id: 30, name: 'Punkt Wodny', price: 300 },
    { id: 40, name: 'Punkt Kanalizacijny', price: 250 },
    { id: 41, name: 'Montaz zawor katowy', price: 80 },
    { id: 42, name: 'Punk gn/wl.', price: 130 },
    { id: 43, name: 'Punk otwór', price: 70 },
    { id: 44, name: 'Tasma LED m.b.', price: 50 },
    { id: 45, name: 'Bialy montaz gn/wl.', price: 80 },
    { id: 46, name: 'Bialy montaz Lampy', price: 140 },
    { id: 47, name: 'Szyna oświetleniowa', price: 130 },
    { id: 48, name: 'Regulator ogrzewania podłogowego', price: 150 },
    { id: 49, name: 'Montaz Grzejnika + punkt', price: 600 },
    // { id: 50, name: 'Zmiana Grzejnika', price: 500 },
   
    { id: 51, name: 'Odplyw montaz', price: 600 },
    { id: 52, name: 'Montaż głowicy prysznicowej bidetu', price: 250 },
    { id: 53, name: 'Bateria umywalkowa montaz', price: 200 },
    { id: 54, name: 'Bateria umywalkowa podtynkowa montaz', price: 400 },
    { id: 55, name: 'Geberit + stelaz + plytki', price: 1000 },
    { id: 56, name: 'Podloga ciepla', price: 150 },
    { id: 57, name: 'Zmywarka montaz', price: 150 },
    { id: 58, name: 'Umywalka dla 2 zlewozmywaków montaz', price: 700 },
    { id: 59, name: 'Umywalka montaz', price: 300 },
    { id: 60, name: 'Kabina prysznicowa montaz (drzwi + brodzik + zabudowa)', price: 1300 },
    { id: 61, name: 'Wanna', price: 1500 },
    { id: 62, name: 'Bateria prysznic podtynkowa montaz', price: 800 },
    { id: 63, name: 'Bateria prysznic montaz', price: 400 },
    { id: 64, name: 'Drzwi montaz', price: 500 },
    { id: 65, name: 'Drzwi ukrytego montazu montaz', price: 1000 },
    { id: 66, name: 'Parapet montaz', price: 150 },

    { id: 67, name: 'Gres/Plytki Standart (60*60/30*60/120*60/30*30) podloga m.k.', price: 180 },
    { id: 68, name: 'Gres/Plytki Standart (60*60/30*60/120*60/30*30) Sciany m.k.', price: 190 },
    { id: 69, name: 'Gres/Plytki Format (10*20/15*25 i inne) m.k.', price: 240 },
    { id: 70, name: 'Schody', price: 400 },
    { id: 71, name: 'Gres/Plytki Cięcie Kąt 45 m.b.', price: 100 },
    { id: 72, name: 'Hidroizolacija m.k.', price: 20 },
    { id: 73, name: 'Brodzik z Plytek+Odplyw', price: 600 },
    { id: 74, name: 'Gres/Plytki Otwory w plytkach', price: 100 },

    { id: 75, name: 'Podloga Wylewka m.k.', price: 80 },
    { id: 76, name: 'Podloga Wylewka samopoziomujaca m.k.', price: 60 },
    { id: 77, name: 'Podloga Parket m.k.', price: 160 },
    { id: 78, name: 'Panele podlogowe m.k.', price: 60 },
    { id: 79, name: 'Parket restawracija m.k.', price: 190 },
    { id: 80, name: 'Podloga Listwa przypodlogowa m.b.', price: 40 },
    { id: 81, name: 'Podloga Panele winilowe m.k.', price: 100 },
    { id: 82, name: 'Meble', price: 4000 },
  ]);

  return (
   <div className="App">  
    <PriceCalculator items={items} />
    <ProductSearch products={items} />
   </div>
  );
}

export default App;
