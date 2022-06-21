import React from "react";

export default function TravelCard(props) {
    return (
        <div className="travel-card">
            <img src={props.card.imageUrl} alt="" className="travel-card--image" />
            <div className="travel-card--info">
                <div className="travel-card--info-top">
                    <div className="travel-card--location">
                        <img src="../images/location-icon.png" alt="" className="travel-card--location-image"/>
                        <span className="travel-card--location-text">{props.card.location.toUpperCase()}</span>
                    </div>
                    <a className="travel-card--google-maps" href={props.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="travel-card--title">{props.card.title}</h2>
                <h6 className="travel-card--date">{props.card.startDate}&nbsp;-&nbsp;{props.card.endDate}</h6>
                <p className="travel-card--description">{props.card.description}</p>

            </div>
        </div>
    );
}