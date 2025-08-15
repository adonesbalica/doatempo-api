import { PrismaOngRepository } from '@/repositories/prisma/prisma-ong-repository'
import { AuthenticateOngUseCase } from '../ong-authenticate'

export function makeOngAuthenticateUseCase() {
  const ongRepository = new PrismaOngRepository()
  const authenticateUseCase = new AuthenticateOngUseCase(ongRepository)

  return authenticateUseCase
}
