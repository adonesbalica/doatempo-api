import { PrismaOngRepository } from '@/repositories/prisma/prisma-ong-repository'
import { SearchOngUseCase } from '../search-ong'

export function makeSeachUseCase() {
  const ongRepository = new PrismaOngRepository()
  const useCase = new SearchOngUseCase(ongRepository)

  return useCase
}
