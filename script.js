let completeListItem= document.querySelector(".complete");
let incompleteListItem= document.querySelector(".incomplete");
let form=document.querySelector("form");



//function

function taskCreate(taskTitle){

    let listItem=document.createElement('li');
    let checkBox=document.createElement('input');
    let label=document.createElement('label');

    checkBox.type='checkbox';
    label.innerText=taskTitle;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
}

function addTask(event){
    event.preventDefault();
    let taskTitle=form.querySelector('input[type="text"]');
    let listItem=taskCreate(taskTitle.value);
    incompleteListItem.append(listItem);
    taskTitle.value="";
    functionForCheckBox(listItem,actionOfCheckBox);
}
function functionForCheckBox(listItem,actionOfCheckBox){
    let reaction=listItem.querySelector('input[type="checkbox"]');
    reaction.onchange=actionOfCheckBox;
}

function actionOfCheckBox(){
    let Litem=this.parentNode;
    let button=document.createElement('button');
    button.innerText="Delete";
    button.className="delete";
    console.log(button);
    Litem.appendChild(button);
    
    this.remove();
    console.log(Litem);
    completeListItem.appendChild(Litem);
    functionForDelete(Litem,actionOfDelete);
}

function functionForDelete(Litem,actionOfDelete){
    let reaction=Litem.querySelector(".delete");
    reaction.onclick=actionOfDelete;
}

function actionOfDelete(){
    let Litem=this.parentNode;
    let unOrderList=Litem.parentNode;
    unOrderList.removeChild(Litem);
}

for(let i=0;i<incompleteListItem.children.length;i++){
    functionForCheckBox(incompleteListItem.children[i],actionOfCheckBox);
}

for(let i=0;i<completeListItem.children.length;i++){
    functionForDelete(completeListItem.children[i],actionOfDelete);
}

form.addEventListener('submit',addTask);
