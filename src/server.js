
const protoLoader = require('@grpc/proto-loader');
const grpc = require("grpc");

const { ChatService} = grpc.loadPackageDefinition( protoLoader.loadSync('chat.proto')).chat;

function chat(call) {
    call.on('data', (message) => {
        console.log(JSON.stringify(message));
        console.log(`'Received message from ${message.userId}:' ${message.message}`);
        const response = {
            userId: message.userId,
            message: message.message
        }
        //echo message back to client
        call.write(response);
    });
}

const server = new grpc.Server();
server.addService(ChatService.service, {chat});
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server running at http://127.0.0.1:50051');
    server.start();
});

