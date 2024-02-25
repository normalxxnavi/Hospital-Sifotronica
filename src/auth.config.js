import Credentials from "@auth/core/providers/credentials"
import Google from "@auth/core/providers/google"
import GitHub from '@auth/core/providers/github'
import Spotify from "@auth/core/providers/spotify";
import GitLab from "@auth/core/providers/gitlab";
import { getUserByEmail } from "./app/lib/data";


export default {
    providers: [
        Google,
        GitHub,
        Spotify,
        GitLab,
        Credentials({
            async authorize(credentials) {
                console.log('AUTHORIZE');
                return getUserByEmail(credentials.email)
            },
        }),
    ]
}