import { displayData } from "../Display/displayData.js"
import { fetchData } from "../Fetch/fetchData.js"

export const deleteData = (deleteValue) => {
    const url = '?'

    fetchData(`${url}?=${deleteValue}`, "DELETE")
        .then(_ => {
            displayData(`${deleteValue} supprimé`, 'h1')
        })
        .catch(error => {
            console.error(error)
            displayData(`Erreur dans la suppression de ${deleteValue}`)
        })
}