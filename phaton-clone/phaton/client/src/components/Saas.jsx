import React from "react";
import ItemGrid from "./DataServices";

const saasItems = [
  { id: 1, title: "MailChimp", image: "https://res.cloudinary.com/secretsaas/image/upload/dpr_auto,f_auto,fl_progressive,q_auto:good/v1/production/1n15ysfckyrrt0jiwub2nxtmioj2" },
  { id: 2, title: "Hubspot", image: "https://play-lh.googleusercontent.com/4ciMOQ0XcqbChkij9FV1HPShKHfCJwm5Ph5fypIG6veCOyAvFUmk7PCZgso_ub8nLw" },
  { id: 3, title: "Adobe", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Adobe_Express_Logo.svg" },
  { id: 4, title: "Lightroom", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfGsNzhTiuBNUcVd1xRP0dRuSgCfQE92BYg&s" },
  { id: 5, title: "Dropbox", image: "https://www.hotspotshield.com/imgs/resources/how-to-unblock-dropbox.png" },
  { id: 6, title: "Zoom Meet", image: "https://crowded-byui-edu.imgix.net/page_featured_image/c_97642_e70aa639-65e9-4543-83d2-dbb049435071.png?auto=format&h=900&w=1200&fit=max" },
  { id: 7, title: "Zendesk", image: "https://etimg.etb2bimg.com/photo/114333283.cms" },
  { id: 8, title: "Asana", image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2022/08/Project-Management.png" },
];

export default function Saas() {
  return (
    <ItemGrid 
      title="SAAS" 
      items={saasItems} 
    />
  );
}
