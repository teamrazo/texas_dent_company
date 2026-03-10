import 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
      partnerId: string | null;
      ghlContactId: string | null;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: string;
    partnerId?: string;
    ghlContactId?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
    partnerId?: string | null;
    ghlContactId?: string | null;
  }
}
