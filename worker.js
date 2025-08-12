const { Worker } = require("bullmq");

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Processing job ${job.id}`);
    console.log(`Sending email to ${job.data.email}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Email sent successfully");
  },
  {
    connection: { host: "127.0.0.1", port: 6379 },
  }
);
