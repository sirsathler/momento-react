import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navbar } from "../../global/components/navbar/Navbar.jsx";
import UserSelect from "../user-select/UserSelect";

import './Feed.scss'

export function Feed() {
    const { serverId } = useContext(AuthContext)
    if (serverId) {
        return (
            <div className="feed-page">
                <Navbar />
            </div>
        )
    }
    else return (<UserSelect />)
}