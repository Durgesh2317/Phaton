import React from "react";
import ItemGrid from "./DataServices";  

const learnItems = [
  { id: 1, title: "Checklists", image: "https://imgv3.fotor.com/images/videoImage/Design-a-checklist-easily-with-Fotors-free-online-checklist-maker_2022-10-24-070150_ziup.jpg" },
  { id: 2, title: "Clean Sheets", image: "https://www.shutterstock.com/image-vector/man-clean-sheet-paper-fill-260nw-1477776587.jpg" },
  { id: 3, title: "Frameworks", image: "https://sourcebae.com/blog/wp-content/uploads/2023/08/Top-web-app-frameworks.webp" },
  { id: 4, title: "Swipe files", image: "https://magazine.talkutalku.com/wp-content/uploads/sites/2/2023/03/Swipe-File_talku-talku.jpg" },
  { id: 5, title: "Workflows", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbxqmJmak5MSh6gaXAiORiQM5U-Q3c8q7Dg&s" },
  { id: 6, title: "Templates", image: "https://static.vecteezy.com/system/resources/thumbnails/001/952/994/small_2x/business-digital-marketing-post-template-free-vector.jpg" },
];

export default function LearnInMinutes() {
  return (
    <ItemGrid
      title="Learn in Minutes"  
      items={learnItems}        
      sliceCount={4}             
    />
  );
}
