export interface JobPayload {
  id: string;
  type: 'email_notification' | 'image_processing' | 'abandoned_cart' | 'sitemap_regeneration';
  data: any;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  attempts: number;
  createdAt: Date;
}

const jobQueue: JobPayload[] = [
  {
    id: 'job-1',
    type: 'email_notification',
    data: { recipient: 'ananya@example.com', template: 'order_confirmation' },
    status: 'completed',
    attempts: 1,
    createdAt: new Date(Date.now() - 3600000)
  },
  {
    id: 'job-2',
    type: 'sitemap_regeneration',
    data: { trigger: 'catalog_change' },
    status: 'completed',
    attempts: 1,
    createdAt: new Date(Date.now() - 1800000)
  }
];

export class QueueService {
  static getQueueStatus() {
    return {
      activeJobs: jobQueue.filter(j => j.status === 'processing' || j.status === 'queued').length,
      completedJobs: jobQueue.filter(j => j.status === 'completed').length,
      deadLetterCount: jobQueue.filter(j => j.status === 'failed').length,
      recentJobs: jobQueue.slice(0, 5)
    };
  }

  static addJob(type: JobPayload['type'], data: any) {
    const job: JobPayload = {
      id: `job-${Date.now()}`,
      type,
      data,
      status: 'queued',
      attempts: 0,
      createdAt: new Date()
    };
    jobQueue.unshift(job);
    setTimeout(() => {
      job.status = 'completed';
    }, 100);
    return job;
  }
}
