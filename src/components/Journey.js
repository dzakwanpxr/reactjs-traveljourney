import location from "../assets/location.png"

function journey(props) {
    return (
        <section className="content">
            <img className="content-img" src={props.imageUrl} alt="content-img"/>
            <div className="content-text">
                <div className="content-location">
                    <img className="location-icon" src={location}/>
                    <p className="location-title">{props.location}</p>
                    <a className="location-url" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
            <h1 className="content-title">{props.title}</h1>
            <h3 className="content-date">{props.startDate} - {props.endDate}</h3>
            <p className="content-desc">{props.description}</p>
            </div>
        </section>

    )
}

export default journey