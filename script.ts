const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var cell0=document.getElementById('cell0');
var cell1=document.getElementById('cell1');
var cell2=document.getElementById('cell2');
var cell3=document.getElementById('cell3');
var cell4=document.getElementById('cell4');
var cell5=document.getElementById('cell5');
var cell6=document.getElementById('cell6');
var cell7=document.getElementById('cell7');
var cell8=document.getElementById('cell8');

cell0.addEventListener('click',()=>{
    gameClick(0);
});
cell1.addEventListener('click',()=>{
    gameClick(1);
});
cell2.addEventListener('click',()=>{
    gameClick(2);
});
cell3.addEventListener('click',()=>{
    gameClick(3);
});
cell4.addEventListener('click',()=>{
    gameClick(4);
});
cell5.addEventListener('click',()=>{
    gameClick(5);
});
cell6.addEventListener('click',()=>{
    gameClick(6);
});
cell7.addEventListener('click',()=>{
    gameClick(7);
});
cell8.addEventListener('click',()=>{
    gameClick(8);
});
var gameState=[,,,,,,,,,];
var gameClick=(cellNum)=>
{
    let cell=document.getElementById('cell'+cellNum);
    
    if(gameState[cellNum]!=='X' && cell.innerHTML!=='O')
    {  
    cell.innerHTML='X';
    gameState[cellNum]='X';
    console.log(gameState);
    computerPlayer();
    }
    else
    alert('Wrong Move')
   
    
}
var computerPlayer=()=>
{
    let cellnum=Math.floor(Math.random()*9);
    let cell= document.getElementById('cell'+cellnum);
    if(cell.innerHTML!='X' && cell.innerHTML!='O')
    {
        cell.innerHTML='O';
        gameState[cellnum]='O';
        console.log(gameState);
        checkwinningConditions();
    }
    else
        computerPlayer();
};

var checkwinningConditions =()=>{

        for(let i=0;i<winningConditions.length;i++)
        {
            if(gameState[winningConditions[i][0]]==gameState[winningConditions[i][1]]&& gameState[winningConditions[i][1]]==gameState[winningConditions[i][2]])
            {
                if (gameState[winningConditions[i][0]]=='X') {
                    alert("You won the Game");
                    window.location.reload();
                    
                }
                else if (gameState[winningConditions[i][0]]=='O')
                {
                    alert('You lost the Game');
                    window.location.reload();
                }
            }
        }
}