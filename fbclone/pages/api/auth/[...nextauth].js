import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: '74e95634b21158c6c639',
            clientSecret: '02994c31851fd7070d49093c213ad5f1cb6d1339',
        })      
    ],
    database: 'mongodb://localhost:27017/FacebookClone',
})