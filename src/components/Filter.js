export default function Filter(props)
{
    // This function removes an individual filter when the close button on the filter is clicked
    function removeFilter(event)
    {
        const tag = event.target.parentNode.childNodes[0].innerHTML;

        props.setFilters((prevFilters) => [...prevFilters.filter(item => item !== tag)]);
    }

    // This function removes all the selected filters at once
    function clearFilters()
    {
        props.setFilters([]);
    }

    return(
        <div className="filter">
            <div className="filtered-words-div">

                {!props.filters.length && <>Add Filters</>}

                {props.filters.length > 0 &&

                    props.filters.map(
                        (item, index) => 

                        <div key={index} className="filter-keywords">

                            <div className="item">
                                {item}
                            </div>

                            <div onClick={removeFilter} className="close-button">
                                &#10006;
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                {props.filters.length > 0 &&
                    <h4 className="clear-button" onClick={clearFilters}>Clear</h4>
                }
            </div>
        </div>
    );
}