import React from "react";
import ItemGrid from "./DataServices"; 

const designItems = [
  { id: 1, title: "Business Cards", image: "https://res.cloudinary.com/zenbusiness/q_auto,w_1200,h_630,g_auto,c_auto/v1/shared-assets/s2/raster/business-card-template.jpg", price: "$125" },
  { id: 2, title: "Poster", image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-e-commerce-store-flyers-design-template-ea63915117224b3b0e8efbabcd7c6160_screen.jpg?ts=1707683429", price: "$129" },
  { id: 3, title: "Printable products", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJe1L70QSIhSyuoKlPhx3SLW3dBb6inOb-A&s", price: "$120" },
  { id: 4, title: "Poster", image: "https://img.freepik.com/premium-vector/poster-business-website-that-says-we-are-perfect-business_502601-657.jpg", price: "$129" },
  { id: 5, title: "Resume Writing", image: "https://images.ctfassets.net/pdf29us7flmy/b790775c-b0af-5591-898f-c90a935c0058/12473440d178dbbaac2a620bcd620d63/resized.jpg?w=720&q=100&fm=jpg", price: "$125" },
  { id: 6, title: "Sale Template", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurU1ovuxP0UcnHPTgqhn8J06Xtww6RJj07A&s", price: "$129" },
  { id: 7, title: "Resume Writing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQiCDT0fP2uLeHKuBMjHRzXqtmlG6XWEwUGJwcMriy8YM1OK_AFdn2y4GvUTw8yBUl8U&usqp=CAU", price: "$125" },
  { id: 8, title: "Logo Design", image: "https://img.freepik.com/free-vector/set-company-logo-design-ideas-vector_53876-60292.jpg", price: "$129" },
  { id: 9, title: "Flyer Design", image: "https://i0.wp.com/graphicsalon.com/wp-content/uploads/2019/04/Professional-Business-Flyer-Design-1.jpg?fit=1864%2C2228&ssl=1", price: "$110" },
  { id: 10, title: "Brochure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kpxrJfbH8wtLwLwiK83uuibJtCGdV4E7mg&s", price: "$135" },
  { id: 11, title: "Social Media Post", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6WvkndiGrqmNF83smb-wL9keU7mYP0FfNA&s", price: "$99" },
  { id: 12, title: "Infographic", image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/5_Steps_to_Create_an_Infographic_Blog_Post.jpg", price: "$140" },
];

export default function GraphicDesign() {
  return (
    <ItemGrid
      title="GRAPHIC DESIGN"  
      items={designItems}     
      sliceCount={6}          
    />
  );
}
