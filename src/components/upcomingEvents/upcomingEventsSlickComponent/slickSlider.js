import "./slickSlider.scss";

function UpcomingEventsSlickComponent(props) {
    return (
        <div className="subCommitteeComponent" onClick = {props.onClick}>
            <div className="subCommitteeBanner">
                <img src = {require("./"+props.bannerUrl)} />
            </div>
            <div className="subCommitteeComponentHeading">
                {props.title}
            </div>
            <div className="subCommitteeComponentDescription">
                {props.description}
            </div>
            
        </div>
    )
}

export default UpcomingEventsSlickComponent;