import type { OngRepository } from '@/repositories/ongs-repository'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { compare } from 'bcryptjs'

interface AuthenticateOngUseCaseRequest {
  email: string
  password: string
}

export class AuthenticateOngUseCase {
  constructor(private ongRepository: OngRepository) {}

  async execute({ email, password }: AuthenticateOngUseCaseRequest) {
    const ong = await this.ongRepository.findByEmail(email)

    if (!ong) {
      throw new InvalidCredentialsError()
    }

    const doestPasswordMatches = await compare(password, ong.password_hash)

    if (!doestPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      ong,
    }
  }
}
