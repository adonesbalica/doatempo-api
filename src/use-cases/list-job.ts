import { JobRepository } from '@/repositories/job-repository'

export class ListJobUseCase {
  constructor(private jobRepository: JobRepository) {}

  async execute() {
    const jobs = await this.jobRepository.findAll()

    return { jobs }
  }
}