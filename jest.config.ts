import { Config } from 'jest';

const config: Config = {
  bail: true,  // para parar os testes no primeiro erro.
  preset: 'ts-jest', // preset para usar o ts-jest
  testEnvironment: 'node', // ambiente de teste
}

export default config