import React from "react";
import ItemGrid from "./DataServices";

const tools = [
  { id: 1, title: "SaaS Tools", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAjQHccg8tmtPxsVHuXyDtWx8HbH5_TssJQ&s" },
  { id: 2, title: "Plugin & Extension", image: "https://appsero.com/app/uploads/2021/10/Plugin-vs-Extention_-Things-Developers-Must-Know.png" },
  { id: 3, title: "Mobile Apps", image: "https://www.devicemagic.com/wp-content/uploads/2021/06/mobile-apps-1-scaled.jpg" },
  { id: 4, title: "Desktop software", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDQMiLJiZREmrAkFs88xkv4FoBFL2OHFZaQ&s" },
  { id: 5, title: "AI Assistant", image: "https://reply.io/wp-content/uploads/Virtual-AI-assistant.png" },
  { id: 6, title: "Design Tools", image: "https://blog-frontend.envato.com/cdn-cgi/image/width=4800,quality=75,format=auto/uploads/sites/2/2022/05/graphic-design-tools.png" },
  { id: 7, title: "Project Management", image: "https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg" },
  { id: 8, title: "Video Tools", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNQVnyINFhBqfmujL93efKfwB2gHu9tE0qw&s" },
  { id: 9, title: "Analytics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHXElrJJvCrr0ORNs2c9COeeXlWa1nOEe7g&s" },
  { id: 10, title: "Marketing Tools", image: "https://www.proofhub.com/articles/wp-content/uploads/2024/03/Top-27-Marketing-Tools-to-Make-You-a-Smart-Marketer.jpg" },
];

export default function Tools() {
  return (
    <ItemGrid 
      title="TOOLS THAT WORKS" 
      items={tools} 
    />
  );
}
