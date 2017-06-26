let person = {
    name: 'paul'
}
person.age = 25;
//可以設定debug 節點，只要設定節點
//每次在command line中run node inspect 檔案路徑進入debug時
//在debuger模式中run c則會到下一個節點，有點類似遊戲儲存點
debugger;

person.name = 'Mike';

console.log(person);


