import { DockList } from "./docks.js";
import { haulerList } from "./ship-haulers.js";
import { shipList } from "./cargo-ships.js";

// render docks to DOM
const docks = DockList();

const dockHTML = document.querySelector(".allDocks");
dockHTML.innerHTML = docks;

// render haulers to DOM
const haulers = haulerList();

const haulerHTML = document.querySelector(".allHaulers");
haulerHTML.innerHTML = haulers;

// render cargo ships to DOM
const ships = shipList()

const shipHTML = document.querySelector(".allShips")
shipHTML.innerHTML = ships;
