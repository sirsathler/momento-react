import './Feed.scss'

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Post } from "./Post/Post";
import { Bottombar } from "../../global/components/bottombar/Bottombar";
import UserSelect from "../user-select/UserSelect";


export function Feed() {
    const { serverId } = useContext(AuthContext)
    if (serverId) {
        return (
            <div className="feed-page generic-container">
                <div className="feed-container">
                    <Post postImageURL={'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg'}
                        likesCount={4921}
                        commentsCount={6500}
                        sharesCount={12}
                        user={"thenoah"}
                        />
                    <Post postImageURL={'https://static-cse.canva.com/blob/611603/screen3.jpg'}
                        likesCount={4921}
                        commentsCount={6500}
                        sharesCount={12}
                        user={"thenoah"}
                        />
                    <Post postImageURL={'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg'}
                        likesCount={4921}
                        commentsCount={6500}
                        sharesCount={12}
                        user={"thenoah"}
                         />
                </div>
                <Bottombar />
            </div>
        )
    }
    else return (<UserSelect />)
}