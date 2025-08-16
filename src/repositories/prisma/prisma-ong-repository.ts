import { Ong, type Prisma } from 'generated/prisma'
import { OngRepository } from '../ongs-repository'
import { prisma } from '@/lib/prisma'

export class PrismaOngRepository implements OngRepository {
  async findById(id: string): Promise<Ong | null> {
    const ong = await prisma.ong.findUnique({
      where: {
        id,
      },
    })

    return ong
  }

  async findByEmail(email: string): Promise<Ong | null> {
    const ong = await prisma.ong.findUnique({
      where: {
        email,
      },
    })

    return ong
  }

  async searchMany(query: string, page: number): Promise<Ong[]> {
    const ongs = await prisma.ong.findMany({
      where: {
        name: {
          contains: query,
        },
      },

      take: 20,
      skip: (page - 1) * 20,
    })

    return ongs
  }

  async create(data: Prisma.OngCreateInput): Promise<Ong> {
    const ong = await prisma.ong.create({
      data,
    })

    return ong
  }
}
