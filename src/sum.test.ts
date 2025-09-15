import { sum } from "./server";

test("sum of  3 + 7 must be 10", () => {
  const result = sum(3, 7); // Chama a função sum com 3 e 7

  expect(result).toBe(10); // Verifica se o resultado é 10
});

// para rodar esse teste específico, use o comando:
// npx jest src/sum.test.ts 

// ou, para rodar todos os testes, use o comando:
// npx jest