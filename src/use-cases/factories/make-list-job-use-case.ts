import { ListJobUseCase } from '../list-job'
import { PrismaJobRepositoy } from '@/repositories/prisma/prisma-job-repository'

export function makeListJobUseCase() {
  const listJobRepository = new PrismaJobRepositoy()

  const listJobUseCase = new ListJobUseCase(listJobRepository)

  return listJobUseCase
}