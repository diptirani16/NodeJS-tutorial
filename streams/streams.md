# What is stream ?

Streams are objects that let you read data from a source or write data to a destination in continous fashion.

# Four types of streams ?

- Readable: streams used for read operations.
- Writable: streams used for write operations.
- Duplex: streams used for both read and write operations.
- Transform: a type of duplex stream where the output is computed based on input.

### Each type of stream is an EventEmitter instance and throws several instance of times.

#### Some of the commanly used events are:

- data
- end
- error
- finish