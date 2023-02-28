export class DiscordUser {
    public discordId: string
    public username: string
    public email: string

    constructor(id: string, username: string, email: string) {
        this.discordId = id
        this.username = username
        this.email = email
    }
}