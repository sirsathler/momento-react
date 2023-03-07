import { DiscordUser } from "../classes/DiscordUser"
import { MomentoUser } from "../classes/MomentoUser"
import { API } from "./API"

export async function fetchUserByDiscordToken(accessToken: string, tokenType: string): Promise<MomentoUser> {
    const endpoint = "https://discord.com/api/users/@me"
    const config = { "Authorization": `${tokenType} ${accessToken}` }
    const discordUser: DiscordUser = await API.get(endpoint, config)

    const response = {
        user: 'thenoah',
        name: 'Noah',
        surname: 'Carridge',
        profilePictureURL: 'https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg',
        bio: 'all about you',
        collage: {
            img1: "https://cdn.discordapp.com/attachments/1073706433750761562/1073997112028700793/file.jpg",
            img2: "https://cdn.discordapp.com/attachments/1062891535391273031/1065059551101059102/file.jpg",
            img3: "https://cdn.discordapp.com/attachments/1073706433750761562/1073997379830825040/file.jpg",
            img4: "https://cdn.discordapp.com/attachments/1073706433750761562/1073997949601849454/file.jpg",
            img5: "https://cdn.discordapp.com/attachments/1073706433750761562/1073997857310376006/file.jpg",
            img6: "https://cdn.discordapp.com/attachments/1073706433750761562/1073997711222788236/file.jpg",
        },
        collageStyle: 1,
    }

    const momentoUser = new MomentoUser(
        discordUser.discordId,
        discordUser.username,
        discordUser.email,
        response.user,
        response.name,
        response.surname,
        response.profilePictureURL,
        response.bio,
        response.collage,
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