import 'next-auth'
import { DefaultSession } from 'next-auth';

declare module 'next-auth'{

    interface User{
        email:string;
        profession:string;
        maritalstatus:string;
        gender:string;
        name:string;
    }
    interface Session{
        user:{
        email?: string;
        profession?:string;
        maritalstatus?:string;
        gender?:string;
        name?:string;
        } & DefaultSession['user']
        
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        email?: string;
        profession?:string;
        maritalstatus?:string;
        gender?:string;
        name?:string;
    }
}
