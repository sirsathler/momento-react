import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import CollageImg from "./collage-img/CollageImg"
import "./Collage.scss"

export default function Collage(props) {

    const { user } = useContext(AuthContext)

    return (
        <section className="profile-collage">
            <CollageImg imgURL={props.img1} />
            <CollageImg imgURL={props.img2} />
            <CollageImg imgURL={props.img3} />
            <CollageImg imgURL={props.img4} />
            <CollageImg imgURL={props.img5} />
            <CollageImg imgURL={props.img6} />
        </section>
    )
}