## UN 2 : MATCHERS

Os "matchers" no Jest são funções que ajudam a avaliar se um valor atende a determinadas condições durante os testes. Eles são usados para fazer asserções e verificar se o resultado esperado é alcançado.

#### `toBe()` or `not.toBe()`

* O matcher `toBe` verifica se dois valores são estritamente iguais, usando `===` .
* Comumente usado ao comparar tipos primitivos.
* Pode ser precedido por um `.not`, fazendo com que a afirmativa seguinte seja negativa.

```js 
test('Exemplo usando toBe', () => { 
expect(2 + 2).toBe(4); 
expect('hello').not.toBe('world'); 

});

```

#### `toEqual()` e `not.toEqual()`

* O matcher `toEqual` verifica se dois valores são iguais em termos de conteúdo, sendo útil para objetos e arrays.

```js
test('Exemplo usando toEqual', () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

```

#### `toMatch()` e `not.toMatch()`

* O matcher `toMatch` verifica se uma string corresponde a uma expressão regular ou contém uma substring.

```js 
test('Exemplo usando toMatch', () => {
  expect('jest é incrível').toMatch(/incrível/);
});
```

####  `toBeTruthy()`, `toBeFalsy()` e `not.toBeTruthy()`, `not.toBeFalsy()`

* Matchers para verificar se um valor é avaliado como verdadeiro ou falso em um contexto booleano.

```js
test('Exemplo usando toBeTruthy e toBeFalsy', () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(null).not.toBeTruthy();
  expect(42).not.toBeFalsy();
});

```

#### `toThrow()` e `not.toThrow()`

* O matcher `toThrow` verifica se uma função lança uma exceção.

```js 
test('Exemplo usando toThrow', () => {
  const throwError = () => {
    throw new Error('Erro intencional');
  };
const notOk = () =>{
	throw new Error('its not OK') 
}
  expect(throwError).toThrow('Erro intencional');
  expect(notOk).not.toThrow('Erro intencional');
});

```
#### RESUMO: 

* Os matchers fornecem uma variedade de maneiras de fazer asserções em seus testes.

* Escolha o matcher mais apropriado para o tipo de verificação que você está realizando.

* A documentação oficial do [Jest](https://jestjs.io/docs/expect#expectvalue) é uma excelente referência para explorar todos os matchers disponíveis e suas opções