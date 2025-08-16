import { Job, Application, Ong } from 'generated/prisma'
import { JobRepository } from '@/repositories/job-repository'

interface CreateJobUseCaseRequest {
  title: string
  description: string
  ongId: string
}

interface CreateJobUseCaseResponse {
  job: Job
}

export class CreateJobUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute({
    title,
    description,
    ongId,
  }: CreateJobUseCaseRequest): Promise<CreateJobUseCaseResponse> {
    const job = await this.jobRepository.create({
      description,
      title,
      ong: {
        connect: { id: ongId },
      },
    })

    return {
      job,
    }
  }
}
