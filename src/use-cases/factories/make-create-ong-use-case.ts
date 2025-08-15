import { PrismaOngRepository } from '@/repositories/prisma/prisma-ong-repository'
import { CreateUseCase } from '../create-ong'

export function makeCreateOngUseCase() {
  const ongRepository = new PrismaOngRepository()
  const createUseCase = new CreateUseCase(ongRepository)

  return createUseCase
}
