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
