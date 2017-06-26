console.log('starting app');

//讓我們可以lode進module fs，這是node的核心模組
const fs = require('fs');
//可以將陣列或是其他數據轉換、匹配、查找等東西變簡單
//含有許多method可用
const _ = require('lodash');
const yargs = require('yargs');

//本地files
const notes = require('./notes.js');

//yargs.argv是儲存
const argv = yargs.argv;
let commandYargs = argv._[0];//這是yargs中的命令位置
//實驗看看兩個argv有何不同
console.log('Process',process.argv);
console.log('Yargs',argv);

//印出在process obj內的argv property
//可以讓我們command變成真的command不會command not found了
//下面這個代表著將我們的command放到index位置2，也就是陣列
//中的第二個元素
let command = process.argv[2];//這是一般process的命令位置

console.log('Command:',command);

if(commandYargs === 'add'){
  //取得addNote返回的值，也就是我們新增的note obj
  let note = notes.addNote(argv.title,argv.body);
  //如果note為true，那就印node的相關資訊
  if(note){
    console.log('Note created');
    notes.logNote(note);
  }else {
    console.log('Note title taken');
  }
}else if(commandYargs === 'list'){
    //列出目前全部data
    console.log(notes.getAll());
}else if(commandYargs === 'read'){
    //返回obj或undefined
    //利用command line傳入title
    let note = notes.getNote(argv.title);
    if(note) {
        console.log('Note found');
        notes.logNote(note);
    }else {
        console.log('Note not found');
    }

}else if(commandYargs === 'remove'){
   //取得removeNote()的返回值
   let noteRemove = notes.removeNote(argv.title);
   //返回值為true時，代表notes.length長度不等於
   //移除item的長度，因此可以如此返回訊息
   let message = noteRemove ? 'Note was removed' : 'Note not found'
   console.log(message);

}else {
    console.log('commandYargs 沒有啦');
}
//yargs是一個可以讓shell跟node js交互的npm 套件
//可以將不同的環境不同配置的變量寫道config配置文件中