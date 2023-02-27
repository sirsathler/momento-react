import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UserSelect from "../user-select/UserSelect";

export function Feed() {
    const { serverId } = useContext(AuthContext)
    if (serverId) {
        return (
            <div className="feed-page">
                
            </div>
        )
    }
    else return (<UserSelect />)
}