# Sample Demo Chat Application using gRPC and NodeJs

## Prerequisites
We will need a basic knowledge of:
 * JavaScript
 * How Nodejs works
 * REST
 * API
 * Client to server communication.

## Installation

Install  require packages using npm

```
npm install
```

## Run the server

```
node server.js
```
## Run the client

```
node client.js
```

![screenshot](image (6).png)

## WHY GRPC AND ITS SIGNIFICANCE

gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.

It uses **Protocol buffer** is a library that helps us serialize structured data built by Google. It is platform-, and language-neutral, it currently supports generated code in Java, Python, Objective-C, and C++. The latest proto3 version supports more languages. The protocol buffers are where we define our service definitions and messages. This is written in IDL(Interface Definition Language) language, this will be like a contract or common interface between the client and server on what to expect from each other; the methods, types, and returns of what each operation would bear.

###A gRPC service contains, the server, protocol buffer, and the client
1. The server has the procedures or subroutines or methods that perform different actions. They could be to remove an item, add an item, edit an item, or anything the dev wants to do. The point here is that any action is carried out in the subroutines/methods. The server adds a service to itself using the service declared in the proto file. Methods/procedures will be created in the service to match the methods the service exports in the proto file.
2. The protocol buffer states the types, and shape of each request and response.
3. The client uses the protocol buffer to get a service and then connect to it via the server's URL and port. From here now, the client can call the methods set in the server. The awesome thing here is that the server can be built in any language and the client can be built also in any language, only the proto is written in IDL.

### Often Confused on using grPC vs Websocket?

the context of implementing a chat application like the one we discussed, both WebSockets and gRPC could be viable options, but they have different characteristics and are suited for different use cases. Here's a comparison:

WebSockets:

Bidirectional communication: WebSockets provide full-duplex communication channels over a single, long-lived TCP connection. This allows both the client and server to send messages to each other asynchronously.
Text-based protocol: WebSockets use a text-based protocol, which makes it easier to understand and debug the messages being sent.
Widely supported: WebSockets are supported by most modern web browsers and web servers, making it a popular choice for real-time applications.
Flexible: WebSockets allow you to define your own message formats and protocols, giving you flexibility in how you structure your messages.
Stateful: WebSockets maintain a stateful connection between the client and server, which can be both an advantage and a disadvantage depending on the use case.
gRPC:

RPC framework: gRPC is a high-performance RPC framework that uses HTTP/2 as its transport protocol. It's designed for building efficient, lightweight, and interoperable services.
Protocol Buffers: gRPC uses Protocol Buffers (protobuf) as its interface definition language, which allows you to define the service interface and message types in a language-neutral way.
Strongly typed: gRPC uses strongly typed messages and service definitions, which can help prevent errors and make code easier to maintain.
Automatic code generation: gRPC provides tools for generating client and server code in multiple programming languages, which can save development time and reduce the likelihood of errors.
Bidirectional streaming: gRPC supports bidirectional streaming, allowing both the client and server to stream messages to each other asynchronously over a single connection.



In the context of implementing a chat application like the one we discussed, both WebSockets and gRPC could be viable options, but they have different characteristics and are suited for different use cases. Here's a comparison:

**WebSockets:**

* Bidirectional communication: WebSockets provide full-duplex communication channels over a single, long-lived TCP connection. This allows both the client and server to send messages to each other asynchronously.
* Text-based protocol: WebSockets use a text-based protocol, which makes it easier to understand and debug the messages being sent.
* Widely supported: WebSockets are supported by most modern web browsers and web servers, making it a popular choice for real-time applications.
* Flexible: WebSockets allow you to define your own message formats and protocols, giving you flexibility in how you structure your messages.
* Stateful: WebSockets maintain a stateful connection between the client and server, which can be both an advantage and a disadvantage depending on the use case.


**gRPC:**

* RPC framework: gRPC is a high-performance RPC framework that uses HTTP/2 as its transport protocol. It's designed for building efficient, lightweight, and interoperable services.
* Protocol Buffers: gRPC uses Protocol Buffers (protobuf) as its interface definition language, which allows you to define the service interface and message types in a language-neutral way.
* Strongly typed: gRPC uses strongly typed messages and service definitions, which can help prevent errors and make code easier to maintain.
* Automatic code generation: gRPC provides tools for generating client and server code in multiple programming languages, which can save development time and reduce the likelihood of errors.
* Bidirectional streaming: gRPC supports bidirectional streaming, allowing both the client and server to stream messages to each other asynchronously over a single connection.

In summary, WebSockets are well-suited for building real-time applications that require bidirectional communication over a long-lived connection, while gRPC is more focused on building efficient and interoperable RPC services using HTTP/2 and Protocol Buffers. The choice between WebSockets and gRPC depends on factors such as the requirements of your application, the programming languages you're using, and your familiarity with the technologies involved.


