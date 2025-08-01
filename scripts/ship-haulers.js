import { getHaulers, getShips } from "./database.js"


export const haulerList = () => {
    const haulers = getHaulers()
    const sortedHaulers = haulers.sort((a, b) => a.name.localeCompare(b.name))

    let haulerHTML = "<ul>"

    for (const hauler of sortedHaulers) {
        // Convert each hauler object to an <li> and append to the haulerHTML string
        haulerHTML += `
            <li class="line-item" data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>    
        `
    }

    haulerHTML += "</ul>"

    return haulerHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        const allHaulingShips = getHaulers()
        const allShippingShips = getShips()
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            //turn id of hauler clicked into int instead of string
            const haulerId = parseInt(itemClicked.dataset.id)
            // Start a counter variable at 0
            let n = 0
            // Iterate all of the Hauling ships
            for (const shippingShip of allShippingShips) {
                // Does the haulerId foreign key match the id?
                if (shippingShip.haulerId === haulerId) {
                    // Increase the counter by 1
                        n++
                    }
                }

            window.alert(`This hauler is carrying ${n} shipping ships`)   

                }
            }
    
)