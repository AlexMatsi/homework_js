var nameArr = [],
    isPresent = false;
for(let i = 0;i < 5; i++){
    var name = prompt('Please enter name');
    nameArr = nameArr.concat([name]);
}
var islogIn = (name)=>{
    for(i of nameArr){
        if(name === i){
            isPresent = true
        }
    }
    if(isPresent){
        alert(`${name}, вы успешно вошли`);
    }
    else{
        alert('Пользователя не существует');
    }
}
islogIn(prompt("Please enter user name"));
