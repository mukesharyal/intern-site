import React from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import "./App.css";
// Import the local JSON data
import jobData from "./data.json";

export default function App() {
    let [wholeData, setWholeData] = React.useState([]);
    
    const [data, setData] = React.useState([]);
    const [filters, setFilters] = React.useState([]);

    React.useEffect(() => {
        // Set the data from the local JSON file
        setWholeData(jobData);
        setData(jobData);
    }, []);

    React.useEffect(() => {
        const arr = [];
        for(let i = 0; i < wholeData.length; i++) {
            for(let j = 0; j < filters.length; j++) {
                if(wholeData[i].keywords.includes(filters[j])) {
                    if(!arr.includes(wholeData[i])) {
                        arr.push(wholeData[i]);
                    }
                }
            }
        }
        if(arr.length === 0) {
            setData(wholeData);
        }
        else {
            setData(arr);
        }
    }, [filters, wholeData]);
    
    return(
        <>
            <Filter
                filters={filters}
                setFilters={setFilters}
            />
            {data.map(
                (item) => 
                <Card
                    key={item.posted_on}
                    content={item}
                    filters={filters}
                    setFilters={setFilters}
                />
            )}
        </>
    );
}
