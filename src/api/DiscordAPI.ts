import { DiscordUser } from "../classes/DiscordUser"
import { MomentoUser } from "../classes/MomentoUser"
import { API } from "./API"

export async function fetchUserByDiscordToken(accessToken: string, tokenType: string): Promise<MomentoUser> {
    const endpoint = "https://discord.com/api/users/@me"
    const config = { "Authorization": `${tokenType} ${accessToken}` }
    const discordUser: DiscordUser = await API.get(endpoint, config)

    const response = {
        user: 'dcastelano',
        name: 'Doug',
        surname: 'Castelano',
        profilePictureURL: 'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg',
    }

    const momentoUser = new MomentoUser(
        discordUser.discordId,
        discordUser.username,
        discordUser.email,
        response.user,
        response.name,
        response.surname,
        response.profilePictureURL
    )

    return momentoUser
}

export async function fetchDiscordGuildsByToken(accessToken: string, tokenType: string) {
    const endpoint = "https://discord.com/api/users/@me/guilds"
    const config = {
        "Authorization": `${tokenType} ${accessToken}`
    }
    const userGuilds = await API.get(endpoint, config)
    return userGuilds
}