import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      role: 'ONG' | 'USER'
      sub: string
    }
  }
}
