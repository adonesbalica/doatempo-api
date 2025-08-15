import type { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(roleToVerify: 'ONG' | 'USER') {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user

    if (role !== roleToVerify) {
      return reply.status(401).send('Unauthorized')
    }
  }
}
