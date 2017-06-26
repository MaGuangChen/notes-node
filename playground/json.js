/*let obj = {
  name: 'Paul',
};
let arr = [
    {text:'hello',age:25}
    ,{text:'haha',age: 32}
    ];
//JSON.stringify()method能將帶入的參數轉換成json格式
//不論是陣列或是obj
//也就都被轉換為字串的資料型態囉，以此例來說就不是object的格式
//而變成字串，因為json檔案是string啦
let stringObj = JSON.stringify(obj);
let arrJson = JSON.stringify(arr);
console.log(typeof stringObj);
console.log(stringObj);
console.log('arr json is',arrJson);
//將輸出
/*
string
{"name":"Paul"}
 */
/*
let personString = '{"name": "Paul","age": 26}';
//JSON.parse可以把json檔案轉回原本的資料型態
let person = JSON.parse(personString);
console.log(person);
*/
//要求系統檔案管理module
const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
}
//originalNoteString
//要求兩個或三個argument，
//第一個為file name將會寫入此檔案，第二個為要寫入的內容
//第三個則為失敗時的call back function

//這邊將變數轉為json資料格式
let originalNotesString = JSON.stringify(originalNote);
//這邊將變數內容寫入notes.json檔案中
fs.writeFileSync('notes.json',originalNotesString,(err)=>{
   console.log('notes json task is fail');
});
//fs.readFileSync跟上面的method很像，只不過只要求一個argument
//也就是只取某段落，參數是要取的檔案或變數

//這邊將檔案內容取出來
let noteString = fs.readFileSync('notes.json');
//這邊將取出來的json資料轉換為一般js資料格式
let note = JSON.parse(noteString);
//note
console.log(typeof note);
console.log(note.title);
console.log(note.body);