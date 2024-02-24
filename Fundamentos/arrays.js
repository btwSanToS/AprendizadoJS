const valores = [7.7, 8.9, 6.3, 9.2];
//Selecionando um Array com o número índice em vista.
console.log(valores[0], valores [3]);
//Se existir um índice sem valor, retornará: Undefined.
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);

//length irá informar quantos índices existe no Array.
console.log(valores.length);

//push irá inserir dados no Array já existente.
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//pop irá retirar o último ÍNDICE inserido no seu Array.
console.log(valores.pop());
console.log(valores);

//delete irá retirar o índice informado.
delete valores[0];
console.log(valores);

//Array é um Objeto em Javascript.
console.log(typeof valores);