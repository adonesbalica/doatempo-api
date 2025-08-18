import { Job, Prisma } from 'generated/prisma'
import { JobRepository } from '../job-repository'
import { prisma } from '@/lib/prisma'

export class PrismaJobRepositoy implements JobRepository {
  async findById(id: string): Promise<Job | null> {
    const job = await prisma.job.findUnique({
      where: {
        id,
      },
    })

    return job
  }

  async findAll(): Promise<Job[]> {
    const jobs = await prisma.job.findMany()

    return jobs
  }

  // async findByTitle(title: string): Promise<Job | null> {
  //   const job = await prisma.job.findUnique({
  //     where: {
  //       ,
  //     },
  //   })

  //   return job
  // }

  async searchMany(query: string, page: number): Promise<Job[]> {
    const jobs = await prisma.job.findMany({
      where: {
        title: {
          contains: query,
        },
      },

      take: 20,
      skip: (page - 1) * 20,
    })

    return jobs
  }

  async create(data: Prisma.JobCreateInput): Promise<Job> {
    const job = await prisma.job.create({
      data,
    })

    return job
  }
}
