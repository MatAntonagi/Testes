import { sum } from "./sum";

describe("Sum Function Tests", () => {
  let sumResult: number;

  beforeAll(() => {
    // Código que será executado antes de todos os testes
    sumResult = 10;
    console.log("executado antes dos testes.", sumResult);
  });

  afterAll(() => {
    // Código que será executado depois de todos os testes
    sumResult = 0;
    console.log("executado depois dos testes.", sumResult);
  });

  it("should do sum of  2 + 2 must be 4", () => {
    const result = sum(2, 2); // Chama a função sum com 2 e 2

    expect(result).toBe(4); // Verifica se o resultado é 4
  });

  test("sum of  3 + 7 must be 10", () => {
    const result = sum(3, 7); // Chama a função sum com 3 e 7

    expect(result).toBe(sumResult); // Verifica se o resultado é 10
  });
})

// para rodar esse teste específico, use o comando:
// npx jest src/sum.test.ts 

// ou, para rodar todos os testes, use o comando:
// npx jest

// it e test são equivalentes no Jest

// beforeAll é uma função do Jest que executa um bloco de código antes de todos os testes

// afterAll é uma função do Jest que executa um bloco de código depois de todos os testes