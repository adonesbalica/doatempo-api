import { FastifyInstance } from 'fastify'
import { create } from './create'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { profile } from './profile'
import { authenticate } from './authenticate'
import { search } from './search'

export async function ongRoutes(app: FastifyInstance) {
  app.post('/ong', create)
  app.post('/ong/sessions', authenticate)

  app.get('/ong/search', search)

  /** Authenticated */
  app.get('/ong/me', { onRequest: [verifyJwt] }, profile)
}
