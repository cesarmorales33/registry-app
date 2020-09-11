import React, {useState} from "react"
import { Link } from "react-router-dom"

function Registry() {
const [registryData, setRegistryData] = useState([])
const [textInput, setTextInput] = useState("")

const addItem = (e) => {
    e.preventDefault();

    const tempData = [...registryData];
    tempData.push(textInput)
    setRegistryData(tempData)
    setTextInput("")


}

console.log(registryData)
    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go to Home</Link>
            <form onSubmit={addItem}>
                    <label>text input:
                    <input type="text" 
                    value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
                    </label>
                    <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Registry;