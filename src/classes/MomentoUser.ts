import { Collage } from "./Collage"
import { DiscordUser } from "./DiscordUser"

export class MomentoUser extends DiscordUser {
    public user: string
    public name: string
    public surname: string
    public bio: string
    public profilePictureURL: string
    public collage: Collage

    constructor(
        id: string, username: string, email: string,
        user: string, name: string, surname: string, profilePictureURL: string, bio: string, collage: Collage
    ) {
        super(id, username, email)
        this.user = user
        this.name = name
        this.surname = surname
        this.profilePictureURL = profilePictureURL
        this.bio = bio
        this.collage = collage
    }
}