const amqplib = require("amqplib");

const queue = "hello1";
const msg = "Ferfero";

const sendMessage = async ()=>{
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue,{durable:false});
    channel.sendToQueue(queue,Buffer.from(msg));
    console.log(`Message sent: ${msg}`);
    setTimeout(()=>{
        connection.close();
        process.exit(0);
    },500);
}

sendMessage();