# BullMQ Basics

## What is BullMQ?
BullMQ is a Node.js library for handling background jobs, queues, and task scheduling using Redis.

## Key Concepts
- **Queue**: A list of jobs waiting to be processed.
- **Worker**: A process that processes jobs from a queue.
- **Job**: A unit of work (data + processing function).
- **QueueScheduler**: Manages delayed and repeatable jobs.
- **QueueEvents**: Emits events for job lifecycle changes.

## Delayed Jobs
Jobs can be delayed before processing using the `delay` option.

## Retries & Backoff
Jobs can be retried with custom delay strategies.

## Scaling
Run multiple workers across processes/servers for high throughput.


 Email Queue Example

This project demonstrates a simple **BullMQ** setup for sending emails using a **queue-worker architecture** with **Redis**.

## Features
- Queue creation using [BullMQ](https://docs.bullmq.io/)
- Separate producer and worker processes
- Queue Scheduler for delayed/repeat jobs
- Queue Events for job lifecycle logging

## Requirements
- Node.js >= 14
- Redis >= 6

## Installation
```bash
npm install
```

## Running Redis (Docker)
```bash
docker run --name redis -p 6379:6379 -d redis
```

## Usage

### Start the worker
```bash
node worker.js
```

### Run the producer
```bash
node producer.js
```

## Example Output
**Worker terminal:**
```
📩 Processing job 1 - Email to mimohshukla@gmail.com
✅ Email sent to mimohshukla@gmail.com
✅ Job 1 completed successfully
```

**Producer terminal:**
```
Job added with ID: 1
```

## Learn More
- [BullMQ Documentation](https://docs.bullmq.io/)
- [Redis Documentation](https://redis.io/)
