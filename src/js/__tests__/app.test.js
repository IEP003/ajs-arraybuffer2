import { ArrayBufferConverter, getBuffer } from "../app";

test('Тест конвертации буфера', () => {
  const arrayBuffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter(arrayBuffer);
  expect(arrayBufferConverter.toString()).toEqual(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
    )})
  

