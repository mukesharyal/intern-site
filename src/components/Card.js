export default function Card(props)
{
    const today = new Date();

    const todaySec = today.getTime();
    const postedDaySec = props.content.posted_on;

    let numDays = Math.ceil((todaySec - postedDaySec) / 86400000);
    let numMonths;

    if(numDays >= 30)
    {
        numMonths = Math.floor(numDays / 30);
        numDays = Math.ceil(numDays % 30);
    }

    // This function adds a new filter whenever the keyword is clicked
    function addFilter(event)
    {
        const tag = event.target.innerHTML;

        if(!props.filters.includes(tag))
        {
            props.setFilters((prevFilters) => [...prevFilters, tag]);
        }
    }

    return(
        <div className="card">

            <div>
                <img className="card-company-image" src={props.content.company_logo} alt="Company logo"/>
            </div>

            <div className="card-main-content">

                <b className="card-company-name">
                    {props.content.company}
                </b>

                <h3 className="card-position">
                    {props.content.position}
                </h3>

                <div className="card-details">

                    <small>
                        {numMonths && <>{numMonths}m </>}
                        {numDays !== 0 && <>{numDays}d</>} ago
                    </small>

                    &#x2022;

                    <small>{props.content.timing}</small>

                    &#x2022;
                    
                    <small>{props.content.location}</small>
                </div>
            </div>

            <div className="card-keywords">
                    {
                        props.content.keywords.map(
                            (item) => 
                            <li className={props.filters.includes(item) ? "selected" : "normal"} key={item} onClick={addFilter}>
                                {item}
                            </li>
                        )
                    }
            </div>

        </div>
    );
}