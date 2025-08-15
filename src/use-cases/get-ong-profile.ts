import { Ong } from 'generated/prisma'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { OngRepository } from '@/repositories/ongs-repository'

interface GetOngProfileUseCaseRequest {
  ongId: string
}

interface GetOngProfileUseCaseResponse {
  ong: Ong
}

export class GetOngProfileUseCase {
  constructor(private ongRepository: OngRepository) {}

  async execute({
    ongId,
  }: GetOngProfileUseCaseRequest): Promise<GetOngProfileUseCaseResponse> {
    const ong = await this.ongRepository.findById(ongId)

    if (!ong) {
      throw new ResourceNotFoundError()
    }

    return {
      ong,
    }
  }
}
