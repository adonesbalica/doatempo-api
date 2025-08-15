import { PrismaOngRepository } from '@/repositories/prisma/prisma-ong-repository'
import { GetOngProfileUseCase } from '../get-ong-profile'

export function makeGetOngProfileUseCase() {
  const ongRepository = new PrismaOngRepository()
  const useCase = new GetOngProfileUseCase(ongRepository)

  return useCase
}
