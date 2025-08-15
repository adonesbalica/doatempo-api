import { makeSeachUseCase } from '@/use-cases/factories/make-search-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const seachOngBodySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { q, page } = seachOngBodySchema.parse(request.query)

  const searchOngUseCsae = makeSeachUseCase()

  const { ongs } = await searchOngUseCsae.execute({
    query: q,
    page,
  })

  return reply.status(200).send({
    ongs,
  })
}
