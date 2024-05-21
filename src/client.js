const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const readline = require('readline');

const { ChatService} = grpc.loadPackageDefinition(
    protoLoader.loadSync('chat.proto', {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
).chat;

const client = new ChatService('localhost:50051', grpc.credentials.createInsecure());

let user_id; // = "User123"//process.argv[2];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to start the chat
function startChat() {
    const call = client.chat();
    call.on('data', (message) => {
        console.log(`Echo message from Bot ---- ${message.user_id}: ${message.message}`);
    });

    console.log("Type your message and press Enter to send. Type 'exit' to quit.");

    rl.on('line', (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            call.end();
            rl.close();
            return;
        }
        //Write message to server
        call.write({ user_id, message: input }); // Include user_id in the message object
    });

    call.on('end', () => {
        console.log('Chat ended');
    });
}

promptForUserId()
// Function to prompt for user ID
function promptForUserId() {
    rl.question('Enter your user ID: ', (id) => {
        user_id = id;
        startChat();
    });
}

