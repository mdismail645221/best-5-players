


const playerArrayObj = [];






// =======================setSelectedPlayer========================//
function setSelectedPlayer(playerArrayObj){
    const setPlayerTbody = document.getElementById('player-set-tbody');

    setPlayerTbody.innerHTML = '';
    for (let i = 0; i < playerArrayObj.length; i++){
        if ( i>= 4) {
            alert('Limite Over.');
            return;
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i+1}</td>
        <td>${playerArrayObj[i].singlePlayers}</td>
        `;
        setPlayerTbody.appendChild(tr);
    }
 
}



// ====================cardSelectPlayers=================//

function cardSelectPlayers(player) {
    // console.log(player.parentNode.children[0].innerText)
    const singlePlayers = player.parentNode.children[0].innerText;
    const playerObj = {
        singlePlayers: singlePlayers,
    }
    playerArrayObj.push(playerObj)

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = playerArrayObj.length;
    setSelectedPlayer(playerArrayObj)


}






// Per Player total value set //
document.getElementById('per-players-calculate').addEventListener('click', function (){
    const playerCountNumber = playerArrayObj.length;
    const perPlayerInputValue = getElementByinputFieldValue('per-player-input');
    console.log
    const perPlayerTotalMoney = (perPlayerInputValue * playerCountNumber);
    
    if (isNaN(perPlayerTotalMoney) === true) {
        alert('Please added the number.')
        return;
    }
    
    setElementByTotalValue('player-expense-money', perPlayerTotalMoney)
})




// Total [Total Money Coast]
document.getElementById('total-calculate').addEventListener('click', function(){
    const playerExpenseTotalMoney = getElementByInnerText('player-expense-money');
    const managerInputField = getElementByinputFieldValue('manager-input-field')
    const coachInputField = getElementByinputFieldValue('coach-input-field')
    const totalMoneyCost = coachInputField + managerInputField + playerExpenseTotalMoney;

     if (isNaN(totalMoneyCost) === true) {
        alert('Please added the number.')
        return;
    }
   
    setElementByTotalValue('total-money', totalMoneyCost);
})






