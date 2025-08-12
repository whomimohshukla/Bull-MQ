const { Worker } = require("bullmq");

const worker = new Worker("email-queue", async (job) => {
	console.log(`Email sent to ${job.data.email}`);
	console.log("processing message", job.id);
	console.log(`sending email to ${job.data.email}`);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});

	console.log("email sent");
});

