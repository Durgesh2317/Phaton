import React from "react";
import ItemGrid from "./DataServices";  

const ebooks = [
  { id: 1, title: "The Bride Collection (Novels 1-3)", image: "https://m.media-amazon.com/images/I/81WjgWoq31L._CLa%7C2566,2100%7C815eaZcuY7L.jpg,91Ac2OTabKL.jpg%7C0,0,1166,2100+1400,0,1166,2100+583,0,1400,2100_._SY200_.jpg", price: "$125" },
  { id: 2, title: "The Lost Connection featuring Gods Children", image: "https://m.media-amazon.com/images/I/81+6nKuJr2L._UF894,1000_QL80_.jpg", price: "$125" },
  { id: 3, title: "The Eliminator Season 1-3", image: "https://m.media-amazon.com/images/I/81rcAX3K9dL._UF1000,1000_QL80_.jpg", price: "$125" },
  { id: 4, title: "The Perfect Divorce", image: "https://m.media-amazon.com/images/I/815F2WuJj8L._UF1000,1000_QL80_.jpg", price: "$120" },
  { id: 5, title: "A Killer’s Heart: FBI Mystery Thriller", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_r6d-Qd0dpPS1yp_G85uew3lNZCi7AE5vA&s", price: "$125" },
  { id: 6, title: "10Pieces Gold Silverware", image: "https://m.media-amazon.com/images/I/81NhuhHhiFL._UF894,1000_QL80_.jpg", price: "$129" },
  { id: 7, title: "Startup Playbook", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrwrZiXG7flI5RKQLNhTb26LcDgLnWGW-Uw&s", price: "$99" },
  { id: 8, title: "Marketing Secrets", image: "https://m.media-amazon.com/images/M/MV5BNWU4MTlkMjUtNGQyYi00ZjMyLTkwZTktMTg0OGU5ZTVlMjE3XkEyXkFqcGc@._V1_.jpg", price: "$79" },
  { id: 9, title: "UI/UX Guidebook", image: "https://m.media-amazon.com/images/I/71a9sa3uqTL._UF1000,1000_QL80_.jpg", price: "$89" },
  { id: 10, title: "AI for Beginners", image: "https://m.media-amazon.com/images/I/71ExXtmvHTL._UF1000,1000_QL80_.jpg", price: "$119" },
];

export default function Ebooks() {
  return (
    <ItemGrid
      title="EBOOKS"   
      items={ebooks}   
      sliceCount={6}   
    />
  );
}
