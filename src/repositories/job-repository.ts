import { Job, Prisma } from 'generated/prisma'

export interface JobRepository {
  findById(id: string): Promise<Job | null>
  // findByTitle(title: string): Promise<Job | null>
  searchMany(query: string, page: number): Promise<Job[]>
  create(data: Prisma.JobCreateInput): Promise<Job>
}
