import { API } from "./API.ts"

export async function fetchDiscordUserByToken(accessToken, tokenType) {
    const endpoint = "https://discord.com/api/users/@me"
    const config = { 'Authorization': `${tokenType} ${accessToken}` }
    const discordUser = await API.get(endpoint, config)
    return discordUser
}

export async function fetchDiscordGuildsByToken(accessToken, tokenType) {
    const endpoint = 'https://discord.com/api/users/@me/guilds'
    const config = { 'Authorization': `${tokenType} ${accessToken}` }
    const userGuilds = await API.get(endpoint, config)
    return userGuilds
}