## Jest Mocks

No Jest, os mocks são uma ferramenta poderosa para controlar o comportamento de funções e objetos durante a execução dos testes. Existem duas maneiras principais de criar mocks: manualmente e usando a biblioteca `jest.mock()`. 

Os mocks oferecem uma maneira flexível de isolar partes específicas do código durante os testes e garantir que o comportamento desejado seja mantido. Seja criando mocks manualmente ou usando a biblioteca `jest.mock()`, você pode adaptar a abordagem às necessidades específicas do seu teste.

### Funções Mocks Criadas Manualmente:

* O método `jest.fn()` cria uma função mock que registra chamadas, argumentos e valores de retorno.

```js
const mockFunction = jest.fn();
mockFunction(); // Mock foi chamado
expect(mockFunction).toHaveBeenCalled();

```
####  **Objetos Simples:**

* Para criar um mock de um objeto simples, você pode simplesmente criar um objeto com funções mock.

```js
const mockObject = {
  method: jest.fn(),
};
mockObject.method();
expect(mockObject.method).toHaveBeenCalled();

```
#### **Objetos com Métodos Mock**

*  Para objetos mais complexos, você pode usar `jest.spyOn()` para criar mocks de métodos específicos.

```js 
const myObject = { method: () => 'real implementation' };
const mock = jest.spyOn(myObject, 'method').mockImplementation(() => 'mocked implementation');
myObject.method();
expect(mock).toHaveBeenCalled();

```

###  Mocks Criados pela Biblioteca:

A função `jest.mock()` é usada para automatizar a criação de mocks e substituir automaticamente as implementações existentes.

#### **Automatizando a Criação de Mocks para Módulos Inteiros:**

* O `jest.mock()` pode ser usado para substituir toda a implementação de um módulo.

```js
jest.mock('./myModule');
const myModule = require('./myModule'); // myModule agora é um mock

```

#### **Especificar Implementações para Funções:**

* Você pode especificar manualmente as implementações de funções quando usa `jest.mock()`.

```js
jest.mock('./myModule', () => ({
  myFunction: jest.fn(() => 'mocked result'),
}));
```

#### **Resetar Implementações:**

* Para redefinir as implementações de mocks criados pela biblioteca, você pode usar `jest.resetAllMocks()`.

```js
jest.resetAllMocks();
```

###  Propriedades dos mocks: 

Cada mock criado no Jest possui uma propriedade `mock` que contém informações sobre como a função ou objeto mock foi chamado. Essa propriedade `mock` é especialmente útil para asserções mais avançadas em seus testes, proporcionando uma visão mais detalhada do comportamento do seu mock durante a execução do teste.
#### **`mock.calls`**

* Contém um array com todas as chamadas da função mock. Cada entrada no array é um array dos argumentos passados na respectiva chamada.

```js 
const mockFunction = jest.fn();
mockFunction('arg1', 'arg2');
console.log(mockFunction.mock.calls);
// Output: [['arg1', 'arg2']]
```

#### **`mock.results`**

* Contém um array com os resultados de cada chamada da função mock.

```js
const mockFunction = jest.fn().mockReturnValueOnce('result1').mockReturnValue('result2');
console.log(mockFunction());
console.log(mockFunction());
console.log(mockFunction.mock.results);
// Output: ['result1', 'result2']

```
#### **`mock.instances`**

* Se a função mock for uma instância de uma classe (por exemplo, criada com `jest.fn(() => new MyClass())`), `mock.instances` contém uma array de todas as instâncias criadas.

```js
class MyClass {}
const mockInstance = jest.fn(() => new MyClass());
const instance1 = new mockInstance();
const instance2 = new mockInstance();
console.log(mockInstance.mock.instances);
// Output: [MyClass {}, MyClass {}]
```

