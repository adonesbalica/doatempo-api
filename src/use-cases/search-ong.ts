import { OngRepository } from '@/repositories/ongs-repository'
import { Ong } from 'generated/prisma'

interface SearchOngUseCaseRequest {
  query: string
  page: number
}

interface SearchOngUseCaseResponse {
  ongs: Ong[]
}

export class SearchOngUseCase {
  constructor(private ongRepository: OngRepository) {}

  async execute({
    query,
    page,
  }: SearchOngUseCaseRequest): Promise<SearchOngUseCaseResponse> {
    const ongs = await this.ongRepository.searchMany(query, page)

    return {
      ongs,
    }
  }
}
