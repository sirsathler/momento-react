import { API } from "../api/API";

export class UserSelectServices {
    static async fetchUserProfiles(userId: string, token: String) {
        const endpoint = `https://63fd0a098ef914c555a48067.mockapi.io/user`
        const response = await API.get(endpoint, {
            headers: { 'Authorization': token }
        })

        return response
    }

    static async fetchUserProfilesMocked(userId: string, token: string) {
        const mockup = [
            {
                "_id": { "$oid": "63fd0fdeaa7ee04f42bde5f6" },
                "userId": "598301572325310474",
                "serverId": "1071217720739242055",
                "username": "thenoah",
                "name": "Noah",
                "surname": "Carridge",
                "bio": "nerdy",
                "profilePictureURL": "https://cdn.discordapp.com/attachments/1073706433750761562/1073997069322293309/file.jpg"
            },
            {
                "_id": { "$oid": "63bf85c4385b75282a9fa7c8" },
                "userId": "598301572325310474",
                "serverId": "598301572325310474",
                "username": "dcastelano",
                "name": "Doug",
                "surname": "Castelano",
                "profilePictureURL": "https://cdn.discordapp.com/attachments/1062891535391273031/1062954838171856936/file.jpg",
                "bio": "CEO of Momento | 30 years | Married",
            },
        ]
        return mockup
    }
}