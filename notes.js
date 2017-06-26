console.log('notes js is starting');
//引入fs module
const fs =require('fs');

//取得檔案中的notes json資料
let fetchNotes = ()=>{
    //成功就run try，錯誤就run catch
   try {
    //先讀取檔案中的資料並取得
   let notesString = fs.readFileSync('notes-data.json');
   //將取得的json資料轉回js資料型態
    return JSON.parse(notesString);
   } catch(err) {
     return [];
   }
};

//負責儲存新的note進入notes-data.json，並轉為json格式
let saveNotes = (notes)=>{
  //這個method第一個參數要求要寫入的檔案
  //第二個參數是寫入內容
  //此method可以將想要寫入的內容寫入想要寫入的檔案中
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

//負責新增note
let addNote = (title,body) => {
   //建立一陣列儲存notes們，透過呼叫fetchNotes()
   //來取得json檔案中既存的notes
   let notes = fetchNotes();
   //新增note的格式
   let note = {
       title,//等於title:title
       body
   };
   //返回符合note.title等於傳入title的陣列元素
   //我們希望的檢查結果為0，因為如果已經存在相同title的話
   //這樣元素就會重複title了
   let duplicateNotes = notes.filter((note) => note.title === title);

   //確認沒有重複title的陣列元素後執行儲存新增note的動作
   //另外在js中if..else，如果if條件未達成，
   //那else就會預設返回undefined
   if(duplicateNotes.length === 0){
       //將新增的note推回notes陣列
   notes.push(note);
   //將notes陣列寫入notes-data.json檔案中
   saveNotes(notes);
   //返回我們新增的note
   return note;
   }
  
};


let getAll = ()=>{
    let notes = fetchNotes();
    let mapNotes = notes.map((note)=>{
      return `title: ${note.title} body: ${note.body}`
  });
  return mapNotes;

}

let getNote = (title)=>{
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note)=> note.title === title);
   // let mapNotes = filteredNotes.map((note)=>`title: ${note.title} body: ${note.body}`);
    
    return filteredNotes[0] ;
}

let removeNote = (title)=>{
    //fetch notes
    let notes = fetchNotes();
    //filter notes,remove the title equal we want to remove
    let filteredNotes = notes.filter((note)=> note.title !== title);
    console.log(filteredNotes);
    //save the new notes array
    saveNotes(filteredNotes);
    //如果notes.length與filteredNotes.length不同
    //會返回true如果相同會返回false
    return notes.length !== filteredNotes.length;
}

let logNote = (note) => {
    debugger;
    //break on this line and use repl to output note
        console.log('------');
        console.log(`title: ${note.title}`);
        console.log(`body: ${note.body}`);
}

//匯出這些method
module.exports = {
    addNote,//等於addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
}