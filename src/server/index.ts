import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from '@grpc/grpc-js'
import { GreeterService } from '../../gen/proto/hello_grpc_pb'
import { HelloReply, HelloRequest } from '../../gen/proto/hello_pb'

function sayHello(
  call: ServerUnaryCall<HelloRequest, HelloReply>,
  callback: sendUnaryData<HelloReply>
) {
  const greeter = new HelloReply()
  const name = call.request.getName()
  const message = `Helaaaaaaalo ${name}`

  greeter.setMessage(message)
  callback(null, greeter)
}

function startServer() {
  const server = new Server()
  server.addService(GreeterService, { sayHello })
  server.bindAsync(
    `0.0.0.0:8000`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log(error)
      }

      server.start()
      console.log(`server start port`)
    }
  )
}

startServer()
