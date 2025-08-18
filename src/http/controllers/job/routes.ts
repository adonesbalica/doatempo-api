import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { list } from './list'

export async function jobRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)
  
  app.get('/job', list)
  

  app.post('/job', { onRequest: [verifyUserRole('ONG')] }, create)

}
