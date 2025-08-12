const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
	connection: { host: "127.0.0.1", port: 6379 },
});

async function sendEmail() {
	const res = await notificationQueue.add("send-email", {
		email: "mimohshukla@gmail.com",
		subject: "Welcome to BullMQ",
		body: "BullMQ is awesome!",
	});

	console.log("Job added with ID:", res.id);
}

sendEmail();
