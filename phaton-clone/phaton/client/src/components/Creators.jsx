import React from "react";
import ItemGrid from "./DataServices";   

const creators = [
  { id: 1, title: "Designers", image: "https://theartcareerproject.com/wp-content/uploads/2021/07/How-to-Become-a-Fashion-Designer.webp" },
  { id: 2, title: "Developers", image: "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2024/03/adobestock_555498374.jpeg" },
  { id: 3, title: "Writers", image: "https://static.wixstatic.com/media/b31d161c2d5b4abf8c9d06c62e5fe2ff.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b31d161c2d5b4abf8c9d06c62e5fe2ff.jpg" },
  { id: 4, title: "Marketers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2iKw2uKlI631GbgNzzNf42WeLmExXA98GQ&s" },
  { id: 5, title: "Photographers", image: "https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_2066678423-scaled.jpg" },
  { id: 6, title: "Video Editors", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiq98SUlqEIBmQ9OHftAIQTibfzYThpP2Hgw&s" },
  { id: 7, title: "Animators", image: "https://variety.com/wp-content/uploads/2017/05/animators-to-watch.jpg?w=1000&h=562&crop=1" },
  { id: 8, title: "Music Producers", image: "https://www.careersinmusic.com/wp-content/uploads/2021/01/music-producer.jpg" },
  { id: 9, title: "Entrepreneurs", image: "https://www.businessapac.com/wp-content/uploads/2020/07/Women-Entrepreneurs-in-India.jpg" },
  { id: 10, title: "Bloggers", image: "https://read.crowdfireapp.com/wp-content/uploads/2023/04/Blog-Banner_The-Difference-between-Blogger-Influencer.png" },
];

export default function Creators() {
  return (
    <ItemGrid
      title="POPULAR CREATORS"
      items={creators}
      sliceCount={5}   
    />
  );
}
