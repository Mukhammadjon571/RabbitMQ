const amqplib = require("amqplib");

const queue = "hello1";
const msg = "Ferfero";

const receiveMessage = async ()=>{
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue,{durable:false});
    console.log(`Waiting for messages in ${queue}.`);
    channel.consume(queue,(meg)=>{
        console.log(`[X] Received ${meg.content.toString()}`);
    },{noAck:true})
}

receiveMessage();