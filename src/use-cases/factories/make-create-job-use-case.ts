import { CreateJobUseCase } from '../create-job'
import { PrismaJobRepositoy } from '@/repositories/prisma/prisma-job-repository'

export function makeCreateJobUseCase() {
  const jobRepository = new PrismaJobRepositoy()
  const createUseCase = new CreateJobUseCase(jobRepository)

  return createUseCase
}
