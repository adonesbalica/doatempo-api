import { OngAlreadyExistsError } from '@/use-cases/errors/ong-already-exists-error'
import { makeCreateOngUseCase } from '@/use-cases/factories/make-create-ong-use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    cnpj: z.string().min(14),
    description: z.string().min(10),
    city: z.string().min(2),
  })

  const { name, email, password, cnpj, city, description } =
    createBodySchema.parse(request.body)

  try {
    const createUseCase = makeCreateOngUseCase()

    await createUseCase.execute({
      name,
      email,
      password,
      cnpj,
      city,
      description,
    })
  } catch (err) {
    if (err instanceof OngAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
