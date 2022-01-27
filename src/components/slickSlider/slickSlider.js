import "./slickSlider.scss";

function SubCommitteesSlider(props) {
    return (
        <div className="subCommitteeComponent">
            <div className="subCommitteeBanner">
                <img src = {require("./"+props.bannerUrl)} />
            </div>
            <div className="subCommitteeComponentHeading">
                {props.title}
            </div>
            <div className="subCommitteeComponentDescription">
                {props.description}
            </div>
            <div className="subCommitteeHeads">
                {"Head | "+props.head}
            </div>
        </div>
    )
}

export default SubCommitteesSlider;