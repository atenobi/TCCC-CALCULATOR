import './App.css';
import { useState } from 'react';
import PriceCalculator from './PriceCalculator/PriceCalculator';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'Zabiespiczenie', price: 1000 },
    { id: 2, name: 'Zabudowy G-K m.k.', price: 120 },
    { id: 3, name: 'Bruzda m.b.', price: 10 },
    { id: 4, name: 'Gladz m.k.', price: 60 },
    { id: 5, name: 'Malowanie m.k.', price: 30 },
    { id: 6, name: 'Silion/Akril m.b.', price: 15 },
    { id: 7, name: 'Betonokontakt m.k.', price: 10 },
    { id: 8, name: 'Grunt m.k.', price: 8 },
    { id: 9, name: 'Punkt Wodny', price: 300 },
    { id: 10, name: 'Punkt Kanalizacijny', price: 250 },
    { id: 11, name: 'Punk gn/wl.', price: 180 },
    { id: 12, name: 'Punk oswietlenie', price: 180 },
    { id: 13, name: 'Tasma LED m.b.', price: 50 },
    { id: 14, name: 'Bialy montaz gn/wl.', price: 80 },
    { id: 15, name: 'Bialy montaz Lampy', price: 100 },
    { id: 16, name: 'Zmiana Grzejnika', price: 500 },
    { id: 17, name: 'Regulator ogrzewania podłogowego', price: 100 },
    { id: 18, name: 'Montaz Grzejnika + punkt', price: 600 },
    { id: 19, name: 'Odplyw montaz', price: 600 },
    { id: 20, name: 'Zmywarka montaz', price: 150 },
    { id: 21, name: 'Montaż głowicy prysznicowej bidetu', price: 250 },
    { id: 22, name: 'Bateria umywalkowa montaz', price: 150 },
    { id: 23, name: 'Bateria umywalkowa podtynkowa montaz', price: 400 },
    { id: 24, name: 'Geberit + stelaz', price: 850 },
    { id: 25, name: 'Podloga ciepla ( regulator)', price: 100 },
    { id: 26, name: 'Odplyw montaz', price: 600 },
    { id: 27, name: 'Umywalka dla 2 zlewozmywaków montaz', price: 750 },
    { id: 28, name: 'Umywalka montaz', price: 250 },
    { id: 29, name: 'Bateria BIDE montaz', price: 200 },
    { id: 30, name: 'Kabina prysznicowa montaz', price: 1300 },
    { id: 31, name: 'Wanna (bateria+zabudowa+plytki/panele)', price: 1500 },
    { id: 32, name: 'Bateria prysznic podtynkowa montaz', price: 600 },
    { id: 33, name: 'Ciepla Podloga montaz m.k.', price: 300 },
    { id: 34, name: 'Drzwi montaz', price: 500 },
    { id: 35, name: 'Drzwi ukrytego montazu montaz', price: 1000 },
    { id: 36, name: 'Parapet montaz', price: 150 },
    { id: 37, name: 'Gres/Plytki Standart (60*60/30*60/120*60/30*30) podloga m.k.', price: 240 },
    { id: 38, name: 'Gres/Plytki Standart (60*60/30*60/120*60/30*30) Sciany m.k.', price: 260 },
    { id: 39, name: 'Gres/Plytki Format (10*20/15*25 i inne) m.k.', price: 200 },
    { id: 40, name: 'Gres/Plytki Cięcie Kąt 45 m.b.', price: 90 },
    { id: 41, name: 'Hidroizolacija m.k.', price: 20 },
    { id: 42, name: 'Brodzik z Plytek+Odplyw', price: 600 },
    { id: 43, name: 'Gres/Plytki Otwory w plytkach', price: 90 },
    { id: 44, name: 'Podloga Wylewka/Pustak', price: 300 },
    { id: 45, name: 'Podloga Wylewka m.k.', price: 70 },
    { id: 46, name: 'Podloga Wylewka samopoziomujaca m.k.', price: 70 },
    { id: 47, name: 'Podloga Parket m.k.', price: 125 },
    { id: 48, name: 'Panele podlogowe m.k.', price: 60 },
    { id: 49, name: 'Parket restawracija m.k.', price: 165 },
    { id: 50, name: 'Podloga Listwa przypodlogowa m.b.', price: 40 },
    { id: 51, name: 'Podloga Panele winilowe m.k.', price: 100 },
    { id: 52, name: 'Meble', price: 4000 },
  ]);

  return (
   <div className="App">
    <PriceCalculator items={items} />
   </div>
  );
}

export default App;
