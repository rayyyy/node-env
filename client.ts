import { credentials } from '@grpc/grpc-js'
import { GreeterClient } from './gen/proto/hello_grpc_pb'
import { HelloRequest } from './gen/proto/hello_pb'

const serverURL = `localhost:${8000}`
const req = new HelloRequest()
const client = new GreeterClient(serverURL, credentials.createInsecure())
req.setName('testします')

client.sayHello(req, (e, r) => {
  if (e) {
    console.log(e)
  } else {
    console.log(r.toObject())
  }
})
