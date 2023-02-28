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
                    <Post postImageURL={'https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg'} />
                    <Post postImageURL={'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg'} />
                    <Post postImageURL={'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg'} />
                </div>
            </div>
        )
    }
    else return (<UserSelect />)
}