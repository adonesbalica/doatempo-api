import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListJobUseCase } from '@/use-cases/factories/make-list-job-use-case'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const listJobs = makeListJobUseCase()

  const { jobs } = await listJobs.execute()

  return reply.status(200).send({ jobs })
}