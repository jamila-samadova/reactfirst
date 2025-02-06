import React from "react";
import style from "./card.module.css"; // Küçük harf olduğundan emin ol



const CardComponent = () => {
  return (
    <div className={style.card_component_content}>
      <div className={style.card_comp}>CardComponent</div>
    </div>
  );
};

export default CardComponent;
