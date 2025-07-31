const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        // weird names from boat name generator
        { id: 1, name: "Shipwrecked", dockId: 2},
        { id: 2, name: "Work Horse", dockId: 3},
        { id: 3, name: "Blue Voyager", dockId: 1},
        { id: 4, name: "Odessey", dockId: 1}
    ],
    ships: [
        // weird names from boat name generator        
        { id: 1, name: "Ocean Voyage", haulerId: 1},
        { id: 2, name: "Wave Hello", haulerId: 1},
        { id: 3, name: "Ship's Ahoy", haulerId: 1},
        { id: 4, name: "Ship's Log", haulerId: 2},
        { id: 5, name: "River Spirit", haulerId: 2},
        { id: 6, name: "Sea of Opportunity", haulerId: 3},
        { id: 7, name: "Deck the Boat", haulerId: 3},
        { id: 8, name: "Water Works", haulerId: 4},
        { id: 9, name: "Ship to Shore", haulerId: 4},
        { id: 10, name: "Blue Nomad", haulerId: 4},
    ]
}

export const getDocks = () => {
    // You write the code for copying the array and returning it
    return structuredClone(database.docks);
}

export const getHaulers = () => {
    return structuredClone(database.haulers);
}

export const getShips = () => {
    return structuredClone(database.ships);
}