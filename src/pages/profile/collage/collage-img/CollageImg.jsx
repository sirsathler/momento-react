import "./CollageImg.scss"

export default function CollageImg(props) {
    return (
        <div className="profile-collage-img">
            <img src={props.imgURL} alt="collage-1" />
        </div>
    )
}