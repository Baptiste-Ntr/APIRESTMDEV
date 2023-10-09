import { displayData } from "../Display/displayData.js"
import { fetchData } from "../Fetch/fetchData.js"


export const getData = (searchValue) => {
    const url = '?'

    console.log(searchValue)

    fetchData(`${url}?=${searchValue}`, 'GET')
        .then (data => {
            if (data) {
                displayData(data, 'h1')
            }
        })
        .catch(error => {
            console.error(error)
        })
}