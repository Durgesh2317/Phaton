import React from "react";
import ItemGrid from "./ItemGrid";

const workbooks = [
  { id: 1, title: "Startup Guide", image: "https://m.media-amazon.com/images/I/61pOsf8RW5L._UF1000,1000_QL80_.jpg" },
  { id: 2, title: "Marketing Workbook", image: "https://m.media-amazon.com/images/I/71HDf2B+63L._UF1000,1000_QL80_.jpg" },
  { id: 3, title: "UI/UX Handbook", image: "https://m.media-amazon.com/images/I/61c8Op4tkQL._UF1000,1000_QL80_.jpg" },
  { id: 4, title: "SEO Playbook", image: "https://m.media-amazon.com/images/I/71FXZZNx+iL._UF1000,1000_QL80_.jpg" },
  { id: 5, title: "Freelancing 101", image: "https://m.media-amazon.com/images/I/71ZaxWahCLL._UF1000,1000_QL80_.jpg" },
  { id: 6, title: "Growth Hacking", image: "https://usetrust.io/wp-content/uploads/2019/09/growthHacking.png" },
  { id: 7, title: "Personal Finance", image: "https://m.media-amazon.com/images/I/611kUl6HNML._UF1000,1000_QL80_.jpg" },
  { id: 8, title: "AI for Beginners", image: "https://m.media-amazon.com/images/I/71ExXtmvHTL._UF1000,1000_QL80_.jpg" },
  { id: 9, title: "Web Dev Guide", image: "https://m.media-amazon.com/images/I/61HN-hRIGsL._UF1000,1000_QL80_.jpg" },
  { id: 10, title: "Social Media Hacks", image: "https://cdn.slidesharecdn.com/ss_thumbnails/socialmediahacks-150508231621-lva1-app6892-thumbnail.jpg?width=640&height=640&fit=bounds" },
];

export default function Workbooks() {
  return (
  <ItemGrid sectionTitle="TRENDING WORKBOOKS" items={workbooks} />
);
}
