import type { OngRepository } from '@/repositories/ongs-repository'
import { hash } from 'bcryptjs'
import type { Ong } from 'generated/prisma'
import { OngAlreadyExistsError } from './errors/ong-already-exists-error'

interface CreateUseCaseRequest {
  name: string
  email: string
  password: string
  cnpj: string
  description: string
  city: string
}

interface CreateUseCaseResponse {
  ong: Ong
}

export class CreateUseCase {
  constructor(private ongRepository: OngRepository) {}

  async execute({
    name,
    email,
    password,
    cnpj,
    description,
    city,
  }: CreateUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const ongWithSameEmail = await this.ongRepository.findByEmail(email)

    if (ongWithSameEmail) {
      throw new OngAlreadyExistsError()
    }

    const ong = await this.ongRepository.create({
      name,
      email,
      password_hash,
      cnpj,
      description,
      city,
      role: 'ONG',
    })

    return {
      ong,
    }
  }
}
