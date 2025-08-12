const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function sendEmail() {
	const res = await notificationQueue.add("email to mimohshukla@gmail.com", {
		email: "mimohshukla@gmail.com",
		subject: "welcome to bullmq",
		body: "bullmq is awesome",
	});

	console.log("Email sent", res.id);
}

sendEmail();
