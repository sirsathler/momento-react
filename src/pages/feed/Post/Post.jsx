import './Post.scss'
import Heart from '../../../global/icons/heart/Heart';

export function Post(props) {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="post-header__profile-picture">
                    <img src="https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg" alt="profile-picture" />
                </div>
                <div className="post-user-info">
                    <p className="post-user-info__user-name">Doug Castelano</p>
                    <a href={`/profile/${props.user}`} className="post-user-info__username light-font">@dcastelano</a>
                </div>
            </div>
            <div className="post-body">
                <div className="post-body__post-img">
                    <img src={props.postImageURL} alt="post-image" />
                    <div className="post-img-informations">
                        <div className="post-img-informations__stats">
                            <Heart />
                            <span>{props.likesCount || "0"}</span>
                        </div>
                        {/* <div className="post-img-informations__stats">
                            <Comment />
                            <span>{props.commentsCount || "0"}</span>
                        </div>
                        <div className="post-img-informations__stats">
                            <Share />
                            <span>{props.sharesCount || "0"}</span>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="post-footer">
                <Heart />
            </div>
        </div>
    )
}