import { Prisma, Ong } from 'generated/prisma'

export interface OngRepository {
  findById(id: string): Promise<Ong | null>
  findByEmail(email: string): Promise<Ong | null>
  searchMany(query: string, page: number): Promise<Ong[]>
  create(data: Prisma.OngCreateInput): Promise<Ong>
}
