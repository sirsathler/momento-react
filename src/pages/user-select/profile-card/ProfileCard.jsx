import "./ProfileCard.scss"
// import teste from "../../../assets/logo/new-big.png"

export function ProfileCard() {
    return (
        <div className="profile-card-container">
            <div className="profile-img-container">
                <img src='https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg' alt="profile-picture" />
            </div>
            <div className="profile-info">
                <p className="profile-info__name-label">Doug Castelano</p>
                <p className="profile-info__username-label forte-font">@dcastelano</p>
            </div>
        </div>
    )
}