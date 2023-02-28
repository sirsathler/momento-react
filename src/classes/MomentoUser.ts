import { DiscordUser } from "./DiscordUser"

export class MomentoUser extends DiscordUser {
    public user: string
    public name: string
    public surname: string
    public profilePictureURL: string

    constructor(
        id: string, username: string, email: string,
        user: string, name: string, surname: string, profilePictureURL: string
    ) {
        super(id, username, email)
        this.user = user
        this.name = name
        this.surname = surname
        this.profilePictureURL = profilePictureURL
    }
}