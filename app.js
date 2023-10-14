// alert('Hello World');

// 変数の書き方------------------------------
// let hello = "Hello World";
// alert(hello);

// let int1 = 1;
// alert(int1);

// let int2 = -10;
// alert(int2);

// let float1 = 3.14;
// alert(float1);

// let str1 = 'JavaScriptを覚えよう';
// alert(str1);

// 四則演算の書き方------------------------------
// alert(4+3);
// alert(8-5);
// alert(2*6);
// alert(10/2);

// 文字列を結合------------------------------
// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// 条件分岐------------------------------
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// 繰り返し処理------------------------------
// 「while文」では、条件式が真（true）である間は繰り返し処理が実行されます。------------------------------
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 「for文」は、決められた回数の処理を繰り返すときに使います。------------------------------
let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算をした結果は' + num + 'です');