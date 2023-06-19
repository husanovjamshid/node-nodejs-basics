import { workerData, parentPort } from 'worker_threads';

const Fibonacci = (n) =>
  n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);

const sendResult = () => parentPort.postMessage(Fibonacci(workerData));

sendResult();

