import { getDocks, getHaulers } from "./database.js"



export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"
    // const sortedDocks = [docks].sort((a, b) => a.type.localeCompare(b.type))

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `
            <li class="line-item" data-type="dock" data-id="${dock.id}" data-location="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo</li>    
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const allHaulers = getHaulers()
        // was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
        // get the id of the dock clicked
            const dockId = parseInt(itemClicked.dataset.id)

            const dockedHaulers = []
        // iterate the hauling ships
            for (const hauler of allHaulers) {
        // does the hauler dockId match the dock id?
                if (hauler.dockId === dockId) {
                    dockedHaulers.push(hauler.name)
                }
            }

        let unloadingMessage = ""
        // if no hauler is at the dock, present following message: "The Shanghai, China dock is currently unloading nothing"
        if (dockedHaulers.length === 0) {
            unloadingMessage += "nothing"
        } 
        // if dock is only unloading one boat, present message with format, "The Shanghai, China dock is currently unloading Boaty McBoatface"
        else if (dockedHaulers.length === 1) {
            unloadingMessage += dockedHaulers[0]
        }
        // if there is more than one hauler at the dock, present following message: "The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant"
        else {
            // const lastHauler = dockedHaulers.pop()
            unloadingMessage = `${dockedHaulers.join(", ")}`
        }
        
        

        window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${unloadingMessage}`)

    }
    }
)