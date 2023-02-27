import "./ProfileCard.scss"

export function ProfileCard(props) {
    return (
        <div className="profile-card-container">
            <div className="profile-img-container">
                <img src={props.profilePictureURL} alt="profile-picture" />
            </div>
            <div className="profile-info">
                <p className="profile-info__name-label">{`${props.name} ${props.surname}`}</p>
                <p className="profile-info__username-label forte-font">@{props.username}</p>
            </div>
        </div>
    )
}