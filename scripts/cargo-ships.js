import { getShips, getHaulers } from "./database.js";

export const shipList = () => {
  const ships = getShips();

  let shipHTML = "<ul>";

  for (const ship of ships) {
    // Convert each ship object to an <li> and append to the shipHTML string
    shipHTML += `
            <li class="line-item" data-type="shipping" data-shipName="${ship.name}" data-haulerId="${ship.haulerId}">${ship.name}</li>    
        `;
  }

  shipHTML += "</ul>";

  return shipHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const shippingShipName = itemClicked.dataset.shipname;
  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "shipping") {
    // Get the haulerId value of the shipping ship clicked
    const haulerId = parseInt(itemClicked.dataset.haulerid);
    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" };

    // Iterate the array of hauler objects
    const allHaulers = getHaulers();
    for (const hauler of allHaulers) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (hauler.id === haulerId) {
        // Reassign the value of `haulingShip` to the current hauler
        haulingShip.name = hauler.name;
      }
    }
    // Show an alert to the user with this format...
    // Palais Royal is being hauled by Seawise Giant
    window.alert(`${shippingShipName} is being hauled by ${haulingShip.name}`);
  }
});
