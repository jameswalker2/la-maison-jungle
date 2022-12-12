import React from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

const ShoppingList = () => {
  const plantis = plantList.map((plant) => (
    <li key={plant.id} className="lmj-plant-item">
      {plant.name}{" "}
      {plant.isSpecialOffer && (
        <div className="lmj-sales">
          <p>Offres</p>
        </div>
      )}
    </li>
  ));

  return (
    <div>
      <ul className="lmj-plant-list">{plantis}</ul>
    </div>
  );
};

export default ShoppingList;
