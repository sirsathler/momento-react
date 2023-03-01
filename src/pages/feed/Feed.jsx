import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
    import UserSelect from "../user-select/UserSelect";
import { Post } from "./Post/Post";

import './Feed.scss'

export function Feed() {
    const { serverId } = useContext(AuthContext)
    if (serverId) {
        return (
            <div className="feed-page">
                <div className="feed-container">
                    <Post postImageURL={'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg'} />
                    <Post postImageURL={'https://static-cse.canva.com/blob/611603/screen3.jpg'} />
                    <Post postImageURL={'https://files.tecnoblog.net/wp-content/uploads/2021/03/cortar-fotos-celular-3-e1615824002308.jpg'} />
                </div>
            </div>
        )
    }
    else return (<UserSelect />)
}