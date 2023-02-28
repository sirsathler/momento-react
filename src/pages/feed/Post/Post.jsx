import './Post.scss'

export function Post(props) {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="post-header__profile-picture">
                    <img src="https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg" alt="profile-picture" />
                </div>
                <div className="post-user-info">
                    <p className="post-user-info__user-name">Doug Castelano</p>
                    <p className="post-user-info__username light-font">@dcastelano</p>
                </div>
            </div>
            <div className="post-body">
                <div className="post-body__post-img">
                    <img src={props.postImageURL} alt="post-image" />
                </div>
            </div>
            <div className="post-footer">

            </div>
        </div>
    )
}