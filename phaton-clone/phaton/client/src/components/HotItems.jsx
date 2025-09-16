import React from "react";
import ItemGrid from "./DataServices"; 

const hotItems = [
  { id: 1, title: "AI", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s" },
  { id: 2, title: "Automation scripts", image: "https://cdn.prod.website-files.com/619e15d781b21202de206fb5/6267a1eeb5de188bb281bc88_How-to-Write-an-Automated-Test-Script-Using-Selenium-1280x720%20(2)%20(1).jpg" },
  { id: 3, title: "Notion templates", image: "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2F6c02b141-dcdc-46f6-a984-7f243b7e0df7%2Fdesktop.png&w=3840&q=75" },
  { id: 4, title: "Digital Planners", image: "https://static-cse.canva.com/blob/1100114/create_planner_lead2x.jpg" },
  { id: 5, title: "Viral Canva Template", image: "https://i.etsystatic.com/32936238/r/il/802246/3685876186/il_570xN.3685876186_6few.jpg" },
  { id: 6, title: "Web3 Tools", image: "https://files.buildwithfern.com/https://alchemy.docs.buildwithfern.com/docs/2025-08-20T23:12:05.990Z/tutorials/getting-started/how-to-set-up-core-web3-developer-tools/e030088-web3-dev-setup.jpeg" },
  { id: 7, title: "Stock Photos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanwdKpwlXoeIF-QCUI3B2cyilVer2xOsxbw&s" },
  { id: 8, title: "UI Kits", image: "https://public-images.interaction-design.org/tags/1.UI%20Kit%20Example.jpg" },
  { id: 9, title: "Course Templates", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlKUgb7bid_10JQ9I-bjMM3F65q8P8Fz_dA&s" },
  { id: 10, title: "3D Assets", image: "https://b2904855.smushcdn.com/2904855/wp-content/uploads/2024/01/sketchfab_homepage_screenshot-1024x507.png?lossy=1&strip=1&webp=1" },
];

export default function HotItems() {
  return (
    <ItemGrid 
      title="WHAT'S HOT IN 2025" 
      items={hotItems} 
      sliceCount={5}   
    />
  );
}
