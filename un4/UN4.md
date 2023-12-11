## Jest Testando código assíncrono

Testar código assíncrono é uma parte crucial do desenvolvimento de software, uma vez que muitas operações em JavaScript, como chamadas a APIs, manipulação de banco de dados e temporizadores, são assíncronas por natureza. O Jest oferece várias maneiras de lidar com testes assíncronos, sendo as mais comuns utilizando `Promises` e a sintaxe `async/await`.


#### `hasAssertions`:

* O método `hasAssertions` é uma função do Jest que é usada para garantir que pelo menos um número especificado de asserções seja feito em um teste. Se nenhuma asserção for feita durante a execução do teste, o Jest considerará o teste como falho.

```js 
test('Exemplo com hasAssertions', async () => {
  await expectAsyncFunction(); // Função assíncrona que realiza asserções

  // Garante que pelo menos uma asserção seja feita durante o teste
  expect.hasAssertions();
});

```

#### `expect.assertions`

* O `expect.assertions` é uma função do Jest que ajuda a garantir que um número específico de asserções seja feito durante o teste. Isso é útil em testes assíncronos para evitar falsos positivos, garantindo que as asserções planejadas realmente ocorram.

```js 

test('Exemplo com expect.assertions', async () => {
  expect.assertions(2);

  const resultado1 = await funcaoAssincrona1();
  expect(resultado1).toBe('Valor Esperado 1');

  const resultado2 = await funcaoAssincrona2();
  expect(resultado2).toBe('Valor Esperado 2');
});
