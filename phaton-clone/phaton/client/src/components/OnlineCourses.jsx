import React from "react";
import ItemGrid from "./DataServices";

const courses = [
  { id: 1, title: "HTML & CSS Course with Online Practice Test, 3rd Edition", price: "$125", image: "https://img-c.udemycdn.com/course/750x422/594360_bee2_2.jpg" },
  { id: 2, title: "EMT (Emergency Medical Technician) Crash Course", price: "$125", image: "https://m.media-amazon.com/images/I/819z5CXEcBL._UF1000,1000_QL80_.jpg" },
  { id: 3, title: "One Million Followers: How I Built a Massive Social Following", price: "$125", image: "https://cdn.sanity.io/images/g7d1q21b/production/2cc1d9e2338693669523876e68c9dd384c787f7f-1200x840.png?auto=format&fit=max&q=75&w=1200" },
  { id: 4, title: "JavaScript with Heinzer", price: "$125", image: "https://img-c.udemycdn.com/course/750x422/5777104_ba65_6.jpg" },
  { id: 5, title: "The Ultimate Online Course Creation Guide", price: "$125", image: "https://m.media-amazon.com/images/I/61GU+7ehb7L._UF350,350_QL50_.jpg" },
  { id: 6, title: "Advanced Engineering Mathematics", price: "$129", image: "https://rukminim2.flixcart.com/image/704/844/xif0q/book/t/s/e/advanced-engineering-mathematics-original-imah7zcxrqy83vrr.jpeg?q=90&crop=false" },
  { id: 7, title: "Best Passive Income Streams Anybody Can Master", price: "$129", image: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/passive-income-ideas-feature-image-2-02a17f3463a19794378037c2815806b8.jpg" },
  { id: 8, title: "JavaScript from Beginner to Professional", price: "$129", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjgm_cR4lgFu1GzZDGlDqux7J8dZf51GTVA&s" },
  { id: 9, title: "React Fundamentals Crash Course", price: "$149", image: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg" },
  { id: 10, title: "Python for Data Science", price: "$159", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfPlbyOoHsKY8nZpdqDk4t_4bIpmkcHBXmw&s" },
  { id: 11, title: "Machine Learning with TensorFlow", price: "$179", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYnTIMA6s8lIa-v9LT9d4HEXMjvZio5Ob7Q&s" },
  { id: 12, title: "UI/UX Design Masterclass", price: "$139", image: "https://i.ytimg.com/vi/GAoFiHKO3WY/maxresdefault.jpg" },
  { id: 13, title: "Cyber Security Basics", price: "$119", image: "https://digialert.com/media/k2/items/cache/7acce66d40ec90c2d61987b409cbf850_XL.jpg" },
  { id: 14, title: "AWS Cloud Practitioner Essentials", price: "$169", image: "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png" },
];

export default function OnlineCourses() {
  return (
   <ItemGrid items={courses} title="Online Courses" showPrice={true} />
  );
 }
