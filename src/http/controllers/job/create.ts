import { OngAlreadyExistsError } from '@/use-cases/errors/ong-already-exists-error'
import { makeCreateJobUseCase } from '@/use-cases/factories/make-create-job-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createJobSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    ongId: z.string().uuid(),
  })

  const { title, description, ongId } = createJobSchema.parse(request.body)

  try {
    const creteJobUseCase = makeCreateJobUseCase()

    await creteJobUseCase.execute({
      title,
      description,
      ongId,
    })
  } catch (err) {
    if (err instanceof OngAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
