import React from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import "./App.css"

export default function App()
{
    let [wholeData, setWholeData] = React.useState([]);
    
    const [data, setData] = React.useState([]);

    const [filters, setFilters] = React.useState([]);

    React.useEffect(() => {
        fetch("https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json")
        .then((result) => result.json())
        .then((result) => {
            setWholeData(result);
            setData(result);
        });
    }, []);

    React.useEffect(() => {
        const arr = [];

        for(let i = 0; i < wholeData.length; i++)
        {
            for(let j = 0; j < filters.length; j++)
            {
                if(wholeData[i].keywords.includes(filters[j]))
                {
                    if(!arr.includes(wholeData[i]))
                    {
                        arr.push(wholeData[i]);
                    }
                }
            }
        }
        if(arr.length === 0)
        {
            setData(wholeData);
        }
        else
        {
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
                    )
            }
        </>
    );
}