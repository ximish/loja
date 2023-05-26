let startBg = document.getElementById('start-bg');
let submitBtn = document.getElementById('submit-btn');
let moshaCheck = document.getElementById('mosha-box');
let emptyInput = document.getElementById('empty-input');
let gameContent = document.getElementById('container');
let playerName = document.getElementById('player-name') ;
let playerCash = document.getElementById('player-cash');
let playerNickname = document.getElementById('player-nickname');
let moneyMinus = document.getElementById('minus-money');
let moneyPlus = document.getElementById('plus-money');
let winEffect = document.getElementById('win');
let loseEffect = document.getElementById('lose')
let cashCheck = [5000, 7000, 10000]
let gamestartBtn = document.getElementById('lojapofillon')
let cartSound = new Audio('foto/cartsound.mp3')
let cartsSound = new Audio('foto/carts-sound.mp3')
let winSound = new Audio('foto/winsound.mp3')
let shuffleSound = new Audio('foto/shuffle-sound.mp3')
let casinoSound = new Audio('foto/casino-sound.mp3')
let money = Number(playerCash.textContent)
let playerMoneyenter;
let isAlive = false;
let hold = false;
let isBlackjack = false;
let isGameOver = false
let check = true;
let newCardBtn = false;
let holdBtn = false;
let playerWin = false;
let dealerWin = false;
let tie = false;
let holdClear = false;
let muteSound = true;
let cardenable = 1;
let cardenable2 = 1;


let cardNumbers = {
   1: document.getElementById('A').src,
   2: document.getElementById('2').src,
   3: document.getElementById('3').src,
   4: document.getElementById('4').src,
   5: document.getElementById('5').src,
   6: document.getElementById('6').src,
   7: document.getElementById('7').src,
   8: document.getElementById('8').src,
   9: document.getElementById('9').src,
   10: document.getElementById('10').src, 
   11: document.getElementById('J').src,
   12: document.getElementById('Q').src,
   13: document.getElementById('K').src,
   unknown: document.getElementById('unknown').src
}


let playercardA = document.getElementById('acebtn1');
let playerCardA2 = document.getElementById('acebtn2');

let dealer = [document.getElementById('dealer1'), document.getElementById('dealer2'), document.getElementById('dealer3'), document.getElementById('dealer4'), document.getElementById('dealer5'), document.getElementById('dealer6')];
let player = [document.getElementById('player1'), document.getElementById('player2'), document.getElementById('player3'), document.getElementById('player4'), document.getElementById('player5'), document.getElementById('player6')];

let playerTotal = document.getElementById('player-total')
let dealerTotal = document.getElementById('dealer-total')
let playersum = 0; 
let dealersum = 0;


let startBtn;
let dealerStop;
let dealerNewCard;


let nameN = document.querySelectorAll('#input');

document.getElementById('emri-field').addEventListener('focusout', () => {
   
   if(document.getElementById('emri-field').value == ''){
      
      nameN[0].style.bottom = '2px';
      nameN[0].style.left = '2px';
      nameN[0].style.fontSize = '16px';
      nameN[0].style.color = 'rgb(141, 134, 134)';
      document.getElementById('emri-field').style.borderBottom = '2px solid white';
      document.getElementById('emri-field').style.opacity = '.7'
   } else {
      
      nameN[0].style.bottom = '25px';
      nameN[0].style.color = '#00cc66';
      document.getElementById('emri-field').style.borderBottom = '2px solid #00cc66';
      document.getElementById('emri-field').style.opacity = '1'
   }
});
document.getElementById('emri-field').addEventListener('focusin', () => {
   
   nameN[0].style.bottom = '25px';
   nameN[0].style.fontSize = '14px';
   nameN[0].style.color = '#00cc66';
   document.getElementById('emri-field').style.opacity = '1'
});


document.getElementById('mbiemri-field').addEventListener('focusout', () => {
   if(document.getElementById('mbiemri-field').value == ''){
      
      nameN[1].style.bottom = '2px';
      nameN[1].style.left = '2px';
      nameN[1].style.fontSize = '16px';
      nameN[1].style.color = 'rgb(141, 134, 134)';
      document.getElementById('mbiemri-field').style.borderBottom = '2px solid white';
      document.getElementById('mbiemri-field').style.opacity = '.7';
   } else {
      
      nameN[1].style.bottom = '25px';
      nameN[1].style.color = '#00cc66';
      document.getElementById('mbiemri-field').style.borderBottom = '2px solid #00cc66';
      document.getElementById('mbiemri-field').style.opacity = '1';
   }
});
document.getElementById('mbiemri-field').addEventListener('focusin', () => {
   nameN[1].style.bottom = '25px';
   nameN[1].style.color = '#00cc66';
   nameN[1].style.fontSize = '14px';
   document.getElementById('mbiemri-field').style.opacity = '1';
});


document.getElementById('nickname-field').addEventListener('focusout', () => {
   if(document.getElementById('nickname-field').value == ''){
      
      nameN[2].style.bottom = '2px';
      nameN[2].style.left = '2px';
      nameN[2].style.fontSize = '16px';
      nameN[2].style.color = 'rgb(141, 134, 134)';
      document.getElementById('nickname-field').style.borderBottom = '2px solid white';
      document.getElementById('nickname-field').style.opacity = '1';
   } else {
      
      nameN[2].style.bottom = '25px';
      nameN[2].style.color = '#00cc66';
      document.getElementById('nickname-field').style.borderBottom = '2px solid #00cc66';
      document.getElementById('nickname-field').style.opacity = '1';
   }
});
document.getElementById('nickname-field').addEventListener('focusin', () => {
   nameN[2].style.bottom = '25px';
   nameN[2].style.color = '#00cc66';
   nameN[2].style.fontSize = '14px';
   document.getElementById('nickname-field').style.opacity = '1';
  
});

function returnInputDefault(id){
   id.style.bottom = '2px';
   id.style.left = '2px';
   id.style.fontSize = '16px';
   id.style.color = 'rgb(141, 134, 134)';
   document.getElementById('emri-field').style.borderBottom = '2px solid white';
   document.getElementById('emri-field').style.opacity = '1';
   document.getElementById('mbiemri-field').style.borderBottom = '2px solid white';
   document.getElementById('mbiemri-field').style.opacity = '1';
   document.getElementById('nickname-field').style.borderBottom = '2px solid white';
   document.getElementById('nickname-field').style.opacity = '1';
}

document.querySelector('body').addEventListener('submit', (e) => {
   e.preventDefault()
});



function hideWin() {
   let hide1 = document.getElementById('hide1');
   let hide2 = document.getElementById('hide2');

   let playerWinName = document.getElementById('win-lose');
   let playerWinMoney = document.querySelector('#money-win');

   let hideContainer = document.querySelector('.hide-container');
   let winLoseBox = document.getElementById('win-lose-box');
   let randomColor = Math.floor(Math.random() * 5);

   if (randomColor === 0){
      winLoseBox.style.backgroundColor = 'rgba(94, 13, 37, 0.884)'
   } else if(randomColor === 1){
      winLoseBox.style.backgroundColor = 'rgba(34, 0, 51, 0.884)'
   }  else if(randomColor === 2){
      winLoseBox.style.backgroundColor = 'rgba(77, 19, 0, .884)'
   }  else if(randomColor === 3){
      winLoseBox.style.backgroundColor = 'rgba(0, 26, 51, .884)'
   }  else if(randomColor === 4){
      winLoseBox.style.backgroundColor = 'rgba(77, 0, 0, .884)'
   }

   setTimeout(() => {
      hideContainer.style.display = 'flex';
      setTimeout(() => {
         hide1.style.transform = 'translateY(0)';
         hide2.style.transform = 'translateY(0)';
      }, 200);
   }, 200);

   let verify = $('#win-lose-box').css('max-width');

   setTimeout(() => {
      winLoseBox.style.display = 'flex';
      if(verify == '704px'){
         setTimeout(() => {
            hide1.style.transform = 'translateX(-350px)';
            hide2.style.transform = 'translateX(350px)';
            winLoseBox.style.width = '44rem';
         }, 200);
      } else if(verify == '640px'){
         setTimeout(() => {
            hide1.style.transform = 'translateX(-318px)';
            hide2.style.transform = 'translateX(318px)';
            winLoseBox.style.width = '40rem';
         }, 200);
      } else if(verify == '544px'){
         setTimeout(() => {
            hide1.style.transform = 'translateX(-272px)';
            hide2.style.transform = 'translateX(272px)';
            winLoseBox.style.width = '34rem';
         }, 200);
      } else if(verify == '416px'){
         setTimeout(() => {
            hide1.style.transform = 'translateX(-210px)';
            hide2.style.transform = 'translateX(210px)';
            winLoseBox.style.width = '26rem';
         }, 200);
      } else if(verify == '320px'){
         setTimeout(() => {
            hide1.style.transform = 'translateX(-160px)';
            hide2.style.transform = 'translateX(160px)';
            winLoseBox.style.width = '20rem';
         }, 200);
      }
      

      setTimeout(() => {
         playerWinName.textContent = playerNickname.textContent + ' Ka Fituar ';
         playerWinMoney.innerHTML = ' $' + playerMoneyenter;
      }, 400);
      winSound.play();
   }, 1000);

   setTimeout(() => {
      hide1.style.transform = 'translateX(0)';
      hide2.style.transform = 'translateX(0)';
      winLoseBox.style.width = '0';

      setTimeout(() => {
         hide1.style.transform = 'translateY(12rem)';
         hide2.style.transform = 'translateY(-12rem)';
      }, 1250);
      
      setTimeout(() => {
         hideContainer.style.display = 'none';
         winLoseBox.style.display = 'none';
      }, 2000);
      
   }, 5000);


}

function hideLose(){
   $('#dealer-win').css('display', 'block');

}


// Game

function gameStarter() {
   let tekstiNfillim = document.getElementById('teksti-nfillim')
   let emriMbiemri = ' ' + document.forms['frm1'].notempty.value + ' ' + document.forms['frm2'].notempty.value;

   let nameInput = document.forms['frm1'].notempty.value;
   let surnameInput = document.forms['frm2'].notempty.value;
   let nickInput = document.forms['frm3'].notempty.value;
   nameInput = nameInput.split(' ');
   surnameInput = surnameInput.split(' ');
   nickInput = nickInput.split(' ');

   if (nameInput == "" || surnameInput == "" || nickInput == "") {
      emptyInput.textContent = ' nuk keni shenuar te dhenat!!';
   } else if(nameInput.length == 2) {
      document.getElementById('emri-field').style.borderBottom = '2px solid red';
      document.getElementById('emri-field').style.transform = 'translateX(5px)';
      emptyInput.textContent = ' shenoni te dhenat me radhe!!';
      setTimeout(() => {
         document.getElementById('emri-field').style.transform = 'translateX(-10px)';
      }, 100);
      setTimeout(() => {
         document.getElementById('emri-field').style.transform = 'translateX(0)';
      }, 150);
   } else if(surnameInput.length == 2) {
      document.getElementById('mbiemri-field').style.borderBottom = '2px solid red';
      document.getElementById('mbiemri-field').style.transform = 'translateX(5px)';
      emptyInput.textContent = ' shenoni te dhenat me radhe!!';
      setTimeout(() => {
         document.getElementById('mbiemri-field').style.transform = 'translateX(-10px)';
      }, 100);
      setTimeout(() => {
         document.getElementById('mbiemri-field').style.transform = 'translateX(0)';
      }, 150);
   } else if(nickInput.length == 2) {
      document.getElementById('nickname-field').style.borderBottom = '2px solid red';
      document.getElementById('nickname-field').style.transform = 'translateX(5px)';
      emptyInput.textContent = ' shenoni te dhenat me radhe!!';
      setTimeout(() => {
         document.getElementById('nickname-field').style.transform = 'translateX(-10px)';
      }, 100);
      setTimeout(() => {
         document.getElementById('nickname-field').style.transform = 'translateX(0)';
      }, 150);
   } else if(document.forms['frm3'].notempty.value.length > 10){
      document.getElementById('nickname-field').style.borderBottom = '2px solid red';
      document.getElementById('nickname-field').style.transform = 'translateX(5px)';
      emptyInput.textContent = 'Shenoni nickname me te shkurter deri me 10!!';
      emptyInput.style.whiteSpace = 'none';
      setTimeout(() => {
         document.getElementById('nickname-field').style.transform = 'translateX(-10px)';
      }, 100);
      setTimeout(() => {
         document.getElementById('nickname-field').style.transform = 'translateX(0)';
      }, 150);
   } else {
      startBg.style.display = 'none';
      gameContent.style.display = 'block';
      playerName.textContent = emriMbiemri;
      playerNickname.textContent = document.forms['frm3'].notempty.value;
      tekstiNfillim.textContent = 'Miresevini ' + emriMbiemri;
      playerTotal.textContent = playerNickname.textContent + ': '
      casinoSound.play();
      emptyInput.textContent = '';

   }

   let gameE = document.getElementById('gamee');
   gameE.style.display = 'block';
   gamestartBtn.style.display = 'none';

   let zgjedhKutin = document.getElementById('game-starter');
   let pack1 = document.getElementById('pack-1')
   let pack2 = document.getElementById('pack-2')
   let pack3 = document.getElementById('pack-3')
   zgjedhKutin.style.display = 'block';
   pack1.style.display = 'none';
   pack2.style.display = 'none';
   pack3.style.display = 'none';

   playerCash.textContent = '0';
   playersum = 0;
   dealersum = 0;
   playerTotal.textContent = document.forms['frm3'].notempty.value + ': ';
   dealerTotal.textContent = 'DEALER: ';
   money = 0;
   isAlive = false;
   isBlackjack = false;
   isGameOver = false
   check = true;
   newCardBtn = false;
   hold = false;
   holdBtn = false;
   playerWin = false;
   dealerWin = false;
   tie = false;
   holdClear = false;
   muteSound = true;
   cardenable = 1;
   cardenable2 = 1;

   document.forms['frm4'].notempty.style.opacity = '1';
   document.getElementById('money-entered').style.display = 'none';

   for(let i = 0; i < player.length; i++){
      player[i].src = '';
   }

   for(let i = 0; i < dealer.length; i++){
      dealer[i].src = '';
   }
   
}

function moneycheck() {
   let zgjedhKutin = document.getElementById('game-starter')
   let pack1 = document.getElementById('pack-1')
   let pack2 = document.getElementById('pack-2')
   let pack3 = document.getElementById('pack-3')
   let random = Math.floor(Math.random() * 3) + 1;

   if(random === 1) {
      zgjedhKutin.style.display = 'none'
      pack1.style.display = 'block'
      playerCash.textContent = cashCheck[0];
   } else if(random === 2) {
      zgjedhKutin.style.display = 'none'
      pack2.style.display = 'block'
      playerCash.textContent = cashCheck[1];
   } else {
      zgjedhKutin.style.display = 'none'
      pack3.style.display = 'block'
      playerCash.textContent = cashCheck[2];
   }
}

function enterGame(){
   let gameE = document.getElementById('gamee')
   gameE.style.display = 'none'
   gamestartBtn.style.display = 'block'
}

function theGame(){
   let startCard = [Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1];


   playersum = 0;
   dealersum = 0;
   playerTotal.textContent = document.forms['frm3'].notempty.value + ': ';
   dealerTotal.textContent = 'DEALER: ';

   isAlive = false;
   isBlackjack = false;
   isGameOver = false
   check = true;
   newCardBtn = false;
   hold = false;
   holdBtn = false;
   playerWin = false;
   dealerWin = false;
   tie = false;
   holdClear = false;
   muteSound = true;
   cardenable = 1;
   cardenable2 = 1;
   money = Number(playerCash.textContent);
   let creditchecker = document.getElementById('credit-check');
   playerMoneyenter = document.forms['frm4'].notempty.value;
   
   

   for(let i = 0; i < player.length; i++){
      player[i].src = ''
   }

   for(let i = 0; i < dealer.length; i++){
      dealer[i].src = ''
   }

   if (playerMoneyenter == '') {
      creditchecker.style.display = 'block'
      creditchecker.textContent = 'Nuk keni shenuar creditat!'
   } else if(playerCash.textContent === '0') {
      creditchecker.style.display = 'block'
      creditchecker.textContent = 'ju keni $0 shtypni butonin per te restartuar lojen'
   } else if(money < playerMoneyenter){
      creditchecker.style.display = 'block'
      creditchecker.textContent = 'na vjen keq nuk keni credita te mjaftueshme'
   } else if(playerMoneyenter < 500) {
      creditchecker.style.display = 'block'
      creditchecker.textContent = 'nuk pranohet kerkesa juaj nese eshte me pak se "$500"'
   } else {

      let dealerWinHide = document.getElementById('dealer-win');

      dealerWinHide.style.transform = 'scale(0)';
      setTimeout(() => {
         dealerWinHide.style.display = 'none';
         dealerWinHide.style.transform = 'scale(1)';
      }, 300);

      document.forms['frm4'].notempty.style.opacity = '.8'
      document.getElementById('money-entered').style.display = 'block'

      shuffleSound.play();
      isAlive = true;
      minusMoney()
      gamestartBtn.style.display = 'none'
      creditchecker.style.display = 'none'
      document.forms['frm4'].notempty.value = ''
      playerCash.textContent -= playerMoneyenter
      cardscheck();

      setTimeout(function(){
         
         setTimeout(function(){
            player[0].src = cardNumbers[startCard[0]];
            if(muteSound){
               cartsSound.play();
            }
         }, 500)
   
         setTimeout(function(){
            player[1].src = cardNumbers[startCard[1]];
         }, 1500)
   
         setTimeout(function(){
            dealer[0].src = cardNumbers.unknown;
         }, 1000) 
   
         setTimeout(function(){
            dealer[1].src = cardNumbers[startCard[2]];
         }, 2000)
   
         setTimeout(function(){
            cardscheck()
         }, 2000)
   
         setTimeout(() => {
            if(playersum === 21){
               holdBtn = true;
               gameHold()
            } else if(player[0].src === cardNumbers[1] || player[1].src === cardNumbers[1]){
               newCardBtn = false;
            } else {
   
               hold = true;
               newCardBtn = true;
               document.getElementById('new-cardbtn').style.opacity = 1;
               document.getElementById('holdbtn').style.opacity = 1;

   
            }
         }, 3000);
      },2000)
      
   }   
   playerMoneyenter = Number(playerMoneyenter);
}

function cardscheck() {

   if(cardenable === 1){

      switch (player[0].src) {
         case cardNumbers[2]:
            playersum = 2;
            break;
         case cardNumbers[3]:
            playersum = 3;
            break;
         case cardNumbers[4]:
            playersum = 4;
            break;
         case cardNumbers[5]:
            playersum = 5;
            break;
         case cardNumbers[6]:
            playersum = 6;
            break;
         case cardNumbers[7]:
            playersum = 7;
            break;
         case cardNumbers[8]:
            playersum = 8;
            break;
         case cardNumbers[9]:
            playersum = 9;
            break;
         case cardNumbers[10]:
            playersum = 10;
            break;
         case cardNumbers[11]:
            playersum = 10;
            break;
         case cardNumbers[12]:
            playersum = 10;
            break;
         case cardNumbers[13]:
            playersum = 10;
            break;
         case cardNumbers[1]:
            aceCardPlayer();
            break;
   
      } 
   
      switch (player[1].src) {
         case cardNumbers[2]:
            playersum += 2;
            break;
         case cardNumbers[3]:
            playersum += 3;
            break;
         case cardNumbers[4]:
            playersum += 4;
            break;
         case cardNumbers[5]:
            playersum += 5;
            break;
         case cardNumbers[6]:
            playersum += 6;
            break;
         case cardNumbers[7]:
            playersum += 7;
            break;
         case cardNumbers[8]:
            playersum += 8;
            break;
         case cardNumbers[9]:
            playersum += 9;
            break;
         case cardNumbers[10]:
            playersum += 10;
            break;
         case cardNumbers[11]:
            playersum += 10;
            break;
         case cardNumbers[12]:
            playersum += 10;
            break;
         case cardNumbers[13]:
            playersum += 10;
            break;
         case cardNumbers[1]:
            aceCardPlayer();
            break;
      }

   } else if(cardenable === 2){

      switch (player[2].src) {
         case cardNumbers[2]:
            playersum += 2;
            break;
         case cardNumbers[3]:
            playersum += 3;
            break;
         case cardNumbers[4]:
            playersum += 4;
            break;
         case cardNumbers[5]:
            playersum += 5;
            break;
         case cardNumbers[6]:
            playersum += 6;
            break;
         case cardNumbers[7]:
            playersum += 7;
            break;
         case cardNumbers[8]:
            playersum += 8;
            break;
         case cardNumbers[9]:
            playersum += 9;
            break;
         case cardNumbers[10]:
            playersum += 10;
            break;
         case cardNumbers[11]:
            playersum += 10;
            break;
         case cardNumbers[12]:
            playersum += 10;
            break;
         case cardNumbers[13]:
            playersum += 10;
            break;
         case cardNumbers[1]:
            aceCardPlayer();
            break;
            
         
      }

   } else if(cardenable === 3){

      switch (player[3].src) {
         case cardNumbers[2]:
            playersum += 2;
            break;
         case cardNumbers[3]:
            playersum += 3;
            break;
         case cardNumbers[4]:
            playersum += 4;
            break;
         case cardNumbers[5]:
            playersum += 5;
            break;
         case cardNumbers[6]:
            playersum += 6;
            break;
         case cardNumbers[7]:
            playersum += 7;
            break;
         case cardNumbers[8]:
            playersum += 8;
            break;
         case cardNumbers[9]:
            playersum += 9;
            break;
         case cardNumbers[10]:
            playersum += 10;
            break;
         case cardNumbers[11]:
            playersum += 10;
            break;
         case cardNumbers[12]:
            playersum += 10;
            break;
         case cardNumbers[13]:
            playersum += 10;
            break;
         case cardNumbers[1]:
            aceCardPlayer();
            break;
      }

   } else if(cardenable === 4){

      switch (player[4].src) {
         case cardNumbers[2]:
            playersum += 2;
            break;
         case cardNumbers[3]:
            playersum += 3;
            break;
         case cardNumbers[4]:
            playersum += 4;
            break;
         case cardNumbers[5]:
            playersum += 5;
            break;
         case cardNumbers[6]:
            playersum += 6;
            break;
         case cardNumbers[7]:
            playersum += 7;
            break;
         case cardNumbers[8]:
            playersum += 8;
            break;
         case cardNumbers[9]:
            playersum += 9;
            break;
         case cardNumbers[10]:
            playersum += 10;
            break;
         case cardNumbers[11]:
            playersum += 10;
            break;
         case cardNumbers[12]:
            playersum += 10;
            break;
         case cardNumbers[13]:
            playersum += 10;
            break;
         case cardNumbers[1]:
            aceCardPlayer();
            break;
      }

   } else if(cardenable === 5){

      switch (player[5].src) {
         case cardNumbers[2]:
            playersum += 2;
            break;
         case cardNumbers[3]:
            playersum += 3;
            break;
         case cardNumbers[4]:
            playersum += 4;
            break;
         case cardNumbers[5]:
            playersum += 5;
            break;
         case cardNumbers[6]:
            playersum += 6;
            break;
         case cardNumbers[7]:
            playersum += 7;
            break;
         case cardNumbers[8]:
            playersum += 8;
            break;
         case cardNumbers[9]:
            playersum += 9;
            break;
         case cardNumbers[10]:
            playersum += 10;
            break;
         case cardNumbers[11]:
            playersum += 10;
            break;
         case cardNumbers[12]:
            playersum += 10;
            break;
         case cardNumbers[13]:
            playersum += 10;
            break;
         case cardNumbers[1]:
            aceCardPlayer();
            break;
      }
   }

   playerTotal.textContent = playerNickname.textContent + ': ' + playersum;


   if(holdClear){
      if(cardenable2 === 1){

         switch (dealer[0].src) {
            case cardNumbers[2]:
               dealersum = 2;
               break;
            case cardNumbers[3]:
               dealersum = 3;
               break;
            case cardNumbers[4]:
               dealersum = 4;
               break;
            case cardNumbers[5]:
               dealersum = 5;
               break;
            case cardNumbers[6]:
               dealersum = 6;
               break;
            case cardNumbers[7]:
               dealersum = 7;
               break;
            case cardNumbers[8]:
               dealersum = 8;
               break;
            case cardNumbers[9]:
               dealersum = 9;
               break;
            case cardNumbers[10]:
               dealersum = 10;
               break;
            case cardNumbers[11]:
               dealersum = 10;
               break;
            case cardNumbers[12]:
               dealersum = 10;
               break;
            case cardNumbers[13]:
               dealersum = 10;
               break;
            case cardNumbers[1]:
               aceCardDealer();
               break;
         }

         switch (dealer[1].src) {
            case cardNumbers[2]:
               dealersum += 2;
               break;
            case cardNumbers[3]:
               dealersum += 3;
               break;
            case cardNumbers[4]:
               dealersum += 4;
               break;
            case cardNumbers[5]:
               dealersum += 5;
               break;
            case cardNumbers[6]:
               dealersum += 6;
               break;
            case cardNumbers[7]:
               dealersum += 7;
               break;
            case cardNumbers[8]:
               dealersum += 8;
               break;
            case cardNumbers[9]:
               dealersum += 9;
               break;
            case cardNumbers[10]:
               dealersum += 10;
               break;
            case cardNumbers[11]:
               dealersum += 10;
               break;
            case cardNumbers[12]:
               dealersum += 10;
               break;
            case cardNumbers[13]:
               dealersum += 10;
               break;
            case cardNumbers[1]:
               aceCardDealer();
               break;
         }

      } else if(cardenable2 === 2){
         switch (dealer[2].src) {
            case cardNumbers[2]:
               dealersum += 2;
               break;
            case cardNumbers[3]:
               dealersum += 3;
               break;
            case cardNumbers[4]:
               dealersum += 4;
               break;
            case cardNumbers[5]:
               dealersum += 5;
               break;
            case cardNumbers[6]:
               dealersum += 6;
               break;
            case cardNumbers[7]:
               dealersum += 7;
               break;
            case cardNumbers[8]:
               dealersum += 8;
               break;
            case cardNumbers[9]:
               dealersum += 9;
               break;
            case cardNumbers[10]:
               dealersum += 10;
               break;
            case cardNumbers[11]:
               dealersum += 10;
               break;
            case cardNumbers[12]:
               dealersum += 10;
               break;
            case cardNumbers[13]:
               dealersum += 10;
               break;
            case cardNumbers[1]:
               aceCardDealer();
               break;
         }

      } else if(cardenable2 === 3){
         switch (dealer[3].src) {
            case cardNumbers[2]:
               dealersum += 2;
               break;
            case cardNumbers[3]:
               dealersum += 3;
               break;
            case cardNumbers[4]:
               dealersum += 4;
               break;
            case cardNumbers[5]:
               dealersum += 5;
               break;
            case cardNumbers[6]:
               dealersum += 6;
               break;
            case cardNumbers[7]:
               dealersum += 7;
               break;
            case cardNumbers[8]:
               dealersum += 8;
               break;
            case cardNumbers[9]:
               dealersum += 9;
               break;
            case cardNumbers[10]:
               dealersum += 10;
               break;
            case cardNumbers[11]:
               dealersum += 10;
               break;
            case cardNumbers[12]:
               dealersum += 10;
               break;
            case cardNumbers[13]:
               dealersum += 10;
               break;
            case cardNumbers[1]:
               aceCardDealer();
               break;
         }

      } else if(cardenable2 === 4){
         switch (dealer[4].src) {
            case cardNumbers[2]:
               dealersum += 2;
               break;
            case cardNumbers[3]:
               dealersum += 3;
               break;
            case cardNumbers[4]:
               dealersum += 4;
               break;
            case cardNumbers[5]:
               dealersum += 5;
               break;
            case cardNumbers[6]:
               dealersum += 6;
               break;
            case cardNumbers[7]:
               dealersum += 7;
               break;
            case cardNumbers[8]:
               dealersum += 8;
               break;
            case cardNumbers[9]:
               dealersum += 9;
               break;
            case cardNumbers[10]:
               dealersum += 10;
               break;
            case cardNumbers[11]:
               dealersum += 10;
               break;
            case cardNumbers[12]:
               dealersum += 10;
               break;
            case cardNumbers[13]:
               dealersum += 10;
               break;
            case cardNumbers[1]:
               aceCardDealer();
               break;
         }

      } else if(cardenable2 === 5){
         switch (dealer[5].src) {
            case cardNumbers[2]:
               dealersum += 2;
               break;
            case cardNumbers[3]:
               dealersum += 3;
               break;
            case cardNumbers[4]:
               dealersum += 4;
               break;
            case cardNumbers[5]:
               dealersum += 5;
               break;
            case cardNumbers[6]:
               dealersum += 6;
               break;
            case cardNumbers[7]:
               dealersum += 7;
               break;
            case cardNumbers[8]:
               dealersum += 8;
               break;
            case cardNumbers[9]:
               dealersum += 9;
               break;
            case cardNumbers[10]:
               dealersum += 10;
               break;
            case cardNumbers[11]:
               dealersum += 10;
               break;
            case cardNumbers[12]:
               dealersum += 10;
               break;
            case cardNumbers[13]:
               dealersum += 10;
               break;
            case cardNumbers[1]:
               aceCardDealer();
               break;
         }
      }
   
      let dealername = 'DEALER';
      dealerTotal.textContent = dealername + ': ' + dealersum;

   }


}

function gameHold(){
   let startCard = [Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 12) + 2, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1];

  
   cardenable = 8;
   hold = false;
   newCardBtn = false;
   setTimeout(() => {
      newCardBtn = false;
   }, 1200);

   setTimeout(function(){
      if(playersum >= 21){
         if(muteSound){
            cartSound.play();
         }
         dealer[0].src = cardNumbers[startCard[3]];
         holdClear = true;
         cardscheck();
         gameOver();
      } else {
   
         let timerID = setInterval(delay, 20000)
         if(muteSound){
            cartSound.play();
         }
         
         dealer[0].src = cardNumbers[startCard[3]];
         cardscheck();

            setTimeout(function(){
               if (dealersum <= 16) {
                  if(muteSound){
                     cartSound.play();
                  }
                  cardenable = 9;
                  dealer[2].src = cardNumbers[startCard[4]];
                  cardenable2 = 2;
                  cardscheck()
               } else if(cardenable === 8){
                  holdBtn = false;
                  clearInterval(timerID);
                  delay()
         
               }  
            }, 1000)
      
            setTimeout(function(){
               if (dealersum <= 16) {
                  if(muteSound){
                     cartSound.play();
                  }
                  cardenable = 10;
                  dealer[3].src = cardNumbers[startCard[5]]
                  cardenable2 = 3;
                  cardscheck()
               } else if(cardenable === 9){
                  holdBtn = false;
                  clearInterval(timerID);
                  delay()
         
               }    
            }, 2000)
      
            setTimeout(function(){
               if (dealersum <= 16) {
                  if(muteSound){
                     cartSound.play();
                  }
                  cardenable = 11;
                  dealer[4].src = cardNumbers[startCard[6]];
                  cardenable2 = 4;
                  cardscheck();
               } else if(cardenable === 10) {
                  holdBtn = false;
                  clearInterval(timerID);
                  delay()
         
               } 
            }, 3000)
      
            setTimeout(function(){
               if (dealersum <= 16) {
                  if(muteSound){
                     cartSound.play();
                  }
                  cardenable = 12;
                  dealer[5].src = cardNumbers[startCard[7]];
                  cardenable2 = 5;
                  cardscheck();
                  hold = false;
               } else if(cardenable === 11) {
                  holdBtn = false;
                  clearInterval(timerID);
                  delay()
         
               } 
            }, 4000)   
      }
   }, 1000)



   function delay(){
      if(dealersum > playersum){
         dealerWin = true;
         isGameOver = true
         gameOverCheck();
      } else if (playersum > dealersum){
         playerWin = true;
         isGameOver = true
         gameOverCheck();
      } else {
         isGameOver = true
         gameOver()
      }
   }
}

function gameHoldBtn(){

   setTimeout(function() {
      if(hold){
         hold = false;
         holdClear = true;
         gameHold();
         setTimeout(() => {
            hold = true;
         }, 1050);
      } else {
         return console.log('nuk punon')
      }
   }, 1000);

   setTimeout(() => {
      document.getElementById('new-cardbtn').style.opacity = .5;
      document.getElementById('holdbtn').style.opacity = .5;
   }, 300);

}

function newCard(){
   let startCard = [Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1];
   if(newCardBtn === false){
      return console.log('nuk punon')
   } else {
      newCardBtn = false;
      setTimeout(function(){
         if(muteSound){
            cartSound.play();
         }
      }, 800);

      setTimeout(function(){
         if(cardenable === 4){
            player[5].src = cardNumbers[startCard[11]];
            cardscheck()

         } else if(cardenable === 3){
            cardenable = 4
            player[4].src = cardNumbers[startCard[10]];
            cardscheck()

         } else if(cardenable === 2){
            cardenable = 3
            player[3].src = cardNumbers[startCard[9]];
            cardscheck()

         } else if(cardenable === 1){
            cardenable = 2
            player[2].src = cardNumbers[startCard[8]];
            cardscheck()
   
         }
         gameOverCheck()
      }, 1000)

      setTimeout(() => {
         newCardBtn = true;
      }, 1000);

   } 
}

function aceCardDealer(){
   
   if(dealersum < 11){
      dealersum += 11
   } else {
      dealersum += 1
   }

}

function aceCardPlayer(){

   setTimeout(() => {
      playercardA.textContent = playersum + 1;
      playerCardA2.textContent = playersum + 11;
      newCardBtn = false;
      hold = false;
      document.getElementById('new-cardbtn').style.opacity = .5;
      document.getElementById('holdbtn').style.opacity = .5;
      
      if(playerCardA2.textContent === '21'){
         playersum = 21;
         playerTotal.textContent = playerNickname.textContent + ': ' + playersum;
         holdBtn = true;
         setTimeout(function(){
            gameHold();
         }, 2000)
      } else if(playercardA.textContent === '1' && playerCardA2.textContent === '11'){
         playercardA.textContent = playersum + 2;
         playerCardA2.textContent = playersum + 12;
         document.getElementById('ace').style.display = 'flex';

      } else if(playersum > 10){
         playersum += 1;
         playerTotal.textContent = playerNickname.textContent + ': ' + playersum;
         newCardBtn = true;
         hold = true;
         document.getElementById('new-cardbtn').style.opacity = 1;
         document.getElementById('holdbtn').style.opacity = 1;
      } else {
         document.getElementById('ace').style.display = 'flex';
      }
   }, 1000);

}

function aceBtn1(){

   playercardA.style.transform = 'scale(1.1)'

   if(playercardA.textContent === '2' && playerCardA2.textContent === '12'){
      playersum += 2;
      playerTotal.textContent = playerNickname.textContent + ': ' + playersum;
      playerCardA2.style.opacity = '0'
   } else {
      playersum += 1;
      playerTotal.textContent = playerNickname.textContent + ': ' + playersum;
      playerCardA2.style.opacity = '0';
   }

   setTimeout(() => {
      hold = true;
      newCardBtn = true;
      document.getElementById('new-cardbtn').style.opacity = 1;
      document.getElementById('holdbtn').style.opacity = 1;
      playercardA.style.opacity = '1';
      playercardA.style.transform = 'scale(1)'
      playerCardA2.style.opacity = '1';
      document.getElementById('ace').style.display = 'none';
   }, 1200);

   setTimeout(function(){
      playercardA.style.opacity = '.7';
   }, 800)
   setTimeout(function(){
      playercardA.style.opacity = '.5';
   }, 900)
   setTimeout(function(){
      playercardA.style.opacity = '.2';
   }, 1000)
   setTimeout(function(){
      playercardA.style.opacity = '0';
   }, 1100)

}

function aceBtn2(){
   playerCardA2.style.transform = 'scale(1.1)'

   if(playercardA.textContent === '2' && playerCardA2 === '12'){
      playersum += 12;
      playerTotal.textContent = playerNickname.textContent + ': ' + playersum;
      playercardA.style.opacity = '0'
   } else {
      playersum += 11;
      playerTotal.textContent = playerNickname.textContent + ': ' + playersum;
      playercardA.style.opacity = '0'
   }

   setTimeout(() => {
      hold = true;
      newCardBtn = true;
      document.getElementById('new-cardbtn').style.opacity = 1;
      document.getElementById('holdbtn').style.opacity = 1;
      playerCardA2.style.opacity = '1';
      playerCardA2.style.transform = 'scale(1)';
      playercardA.style.opacity = '1'
      document.getElementById('ace').style.display = 'none';
   }, 1200);

   setTimeout(function(){
      playerCardA2.style.opacity = '.7';
   }, 800)
   setTimeout(function(){
      playerCardA2.style.opacity = '.5';
   }, 900)
   setTimeout(function(){
      playerCardA2.style.opacity = '.2';
   }, 1000)
   setTimeout(function(){
      playerCardA2.style.opacity = '0';
   }, 1100)
}

function minusMoney() {

   setTimeout(function(){
      if (isAlive) {
         moneyMinus.textContent ='-$' + playerMoneyenter;
         moneyMinus.style.opacity = '1';
         setTimeout(function (){
            moneyMinus.style.opacity = '0.7'
         }, 2800)
         setTimeout(function (){
            moneyMinus.style.opacity = '0.3'
         }, 2900)
         setTimeout(function (){
            moneyMinus.style.opacity = '0'
         }, 3000)

      }
   }, 500);

   setTimeout(function (){
      loseEffect.style.opacity = 0.5;
   }, 100)
   setTimeout(function (){
      loseEffect.style.opacity = 1;
   }, 200)
   setTimeout(function (){
      loseEffect.style.opacity = 0.7;
   }, 300)
   setTimeout(function (){
      loseEffect.style.opacity = 0.4;
   }, 400)
   setTimeout(function (){
      loseEffect.style.opacity = 0;
   }, 500)

}

function plusMoney(){

   
   playerMoneyenter = Number(playerMoneyenter);
   money = Number(playerCash.textContent);
   let x = playerMoneyenter / 2;

   if(isGameOver && isBlackjack){
      playerMoneyenter = playerMoneyenter + playerMoneyenter + x;
      moneyPlus.textContent = '+$' + Math.floor(playerMoneyenter);
      money += playerMoneyenter;
      moneyPlus.style.opacity = '1';
      hideWin();
      setTimeout(function(){
         playerCash.textContent = Math.floor(money)
      }, 1000)
   } else if(isGameOver){
      playerMoneyenter += playerMoneyenter;
      moneyPlus.textContent = '+$' +  Math.floor(playerMoneyenter);
      money += playerMoneyenter;
      moneyPlus.style.opacity = '1';
      hideWin();
      setTimeout(function(){
         playerCash.textContent = Math.floor(money)
      }, 1000)
   } else if(tie){
      moneyPlus.textContent = '+$' + Math.floor(playerMoneyenter); 
      setTimeout(function(){
         playerCash.textContent = money + Math.floor(playerMoneyenter);
      }, 1000)
      isGameOver = true;
      moneyPlus.style.opacity = '1';
   }


   setTimeout(function (){
      moneyPlus.style.opacity = '0.7'
   }, 3800)
   setTimeout(function (){
      moneyPlus.style.opacity = '0.3'
   }, 3900)
   setTimeout(function (){
      moneyPlus.style.opacity = '0'
   }, 4000)
   

   setTimeout(function (){
      winEffect.style.opacity = 0.5;
   }, 800)
   setTimeout(function (){
      winEffect.style.opacity = 1;
   }, 900)
   setTimeout(function (){
      winEffect.style.opacity = 0.7;
   }, 1000)
   setTimeout(function (){
      winEffect.style.opacity = 0.4;
   }, 1100)
   setTimeout(function (){
      winEffect.style.opacity = 0;
   }, 1200)

}

function gameOverCheck(){

   if(dealersum === 21) {
      isBlackjack = true;
      newCardBtn = false;
      hold = false;
      blackJack()
   } else if(playersum === 21){
      isBlackjack = true;
      newCardBtn = false;
      hold = false;
      document.getElementById('new-cardbtn').style.opacity = .5;
      document.getElementById('holdbtn').style.opacity = .5;
      gameHold();
   } else if(playersum > 21){
      newCardBtn = false;
      hold = false;
      document.getElementById('new-cardbtn').style.opacity = .5;
      document.getElementById('holdbtn').style.opacity = .5;
      gameHold();
   } else if(dealersum > 21) {
      newCardBtn = false;
      hold = false;
      gameOver()
   } else if(dealerWin === true || playerWin === true) {
      isGameOver = true;
      newCardBtn = false;
      hold = false;
      gameOver()
   } else {
      return
   }

}

function blackJack(){
   if(isBlackjack) {
      isAlive = false;
      gameOver();
   }
}

function gameOver() {


   setTimeout(function(){
      if(playersum === 21 && dealersum !== 21) {
         isBlackjack = true;

         plusMoney();
      } else if(dealersum === 21 && playersum !== 21){
         hideLose()

         if(playerCash.textContent === '0'){
            soundSettings()
         }
   
      } else if(playersum === dealersum && playersum > 16 && dealersum > 16){
         isGameOver = false;
         tie = true;
         console.log('Barazim. Askush nuk fiton')
         plusMoney()
      } else if(playersum > 21){
         hideLose()
         if(playerCash.textContent === '0'){
            soundSettings()
         }
      } else if(dealersum > 21){

         plusMoney()
      } else if(playersum > dealersum){
   
         plusMoney()
      } else if(dealersum > playersum){
         hideLose()
         if(playerCash.textContent === '0'){
            soundSettings()
         }
      } 
   }, 500)

   isGameOver = true;

   
   setTimeout(function(){

      gamestartBtn.style.display = 'block';
      document.forms['frm4'].notempty.style.opacity = '1'
      document.getElementById('money-entered').style.display = 'none'
   }, 3000)
   


}

function soundSettings(){
   let settingsBtn = document.getElementById('settings-icon');
   let settings = document.getElementById('settings');

   if(settingsBtn.getAttribute('aria-checked') === 'false'){
      settingsBtn.setAttribute('src', 'foto/settings-after.svg');
      settingsBtn.setAttribute('aria-checked', 'true');
      settingsBtn.style.transform = 'rotate(80deg)';

      setTimeout(() => {
         settings.style.display = 'block';
      }, 300);
      

   } else if(settingsBtn.getAttribute('aria-checked') === 'true'){
      settingsBtn.setAttribute('src', 'foto/settings-before.svg');
      settingsBtn.setAttribute('aria-checked', 'false');
      settingsBtn.style.transform = 'rotate(0deg)';

      setTimeout(() => {
         settings.style.display = 'none';
      }, 100);
   }

}

function soundChange(){
   let music = document.getElementById('s1');
   let effect = document.getElementById('s2');

   switch(effect.value){
      case '0':
         cartSound.volume = '0'
         cartsSound.volume = '0'
         winSound.volume = '0' 
         shuffleSound.volume = '0'
         break;
      case '10':
         cartSound.volume = '.1'
         cartsSound.volume = '.1'
         winSound.volume = '.1' 
         shuffleSound.volume = '.1'
         break;
      case '20':
         cartSound.volume = '.2'
         cartsSound.volume = '.2'
         winSound.volume = '.2' 
         shuffleSound.volume = '.2'
         break;
      case '30':
         cartSound.volume = '.3'
         cartsSound.volume = '.3'
         winSound.volume = '.3' 
         shuffleSound.volume = '.3'
         break;
      case '40':
         cartSound.volume = '.4'
         cartsSound.volume = '.4'
         winSound.volume = '.4' 
         shuffleSound.volume = '.4'
         break;
      case '50':
         cartSound.volume = '.5'
         cartsSound.volume = '.5'
         winSound.volume = '.5' 
         shuffleSound.volume = '.5'
         break;
      case '60':
         cartSound.volume = '.6'
         cartsSound.volume = '.6'
         winSound.volume = '.6' 
         shuffleSound.volume = '.6'
         break;
      case '70':
         cartSound.volume = '.7'
         cartsSound.volume = '.7'
         winSound.volume = '.7' 
         shuffleSound.volume = '.7'
         break;
      case '80':
         cartSound.volume = '.8'
         cartsSound.volume = '.8'
         winSound.volume = '.8' 
         shuffleSound.volume = '.8'
         break;
      case '90':
         cartSound.volume = '.9'
         cartsSound.volume = '.9'
         winSound.volume = '.9' 
         shuffleSound.volume = '.9'
         break;
      case '100':
         cartSound.volume = '1'
         cartsSound.volume = '1'
         winSound.volume = '1' 
         shuffleSound.volume = '1'
         break;
   }

   switch(music.value){
      case '0':
         casinoSound.volume = '0'
         break;
      case '10':
         casinoSound.volume = '.1'
         break;
      case '20':
         casinoSound.volume = '.2'
         break;
      case '30':
         casinoSound.volume = '.3'
         break;
      case '40':
         casinoSound.volume = '.4'
         break;
      case '50':
         casinoSound.volume = '.5'
         break;
      case '60':
         casinoSound.volume = '.6'
         break;
      case '70':
         casinoSound.volume = '.7'
         break;
      case '80':
         casinoSound.volume = '.8'
         break;
      case '90':
         casinoSound.volume = '.9'
         break;
      case '100':
         casinoSound.volume = '1'
         break;
   }
}

function returnMain(){
   let music = document.getElementById('s1');
   let effect = document.getElementById('s2');
   effect.value = '60';
   music.value = '60';

   casinoSound.pause();
   casinoSound.currentTime = 0;
   cartSound.pause();
   cartSound.currentTime = 0;
   cartsSound.pause();
   cartsSound.currentTime = 0;
   winSound.pause();
   winSound.currentTime = 0;
   shuffleSound.pause();
   shuffleSound.currentTime = 0;

   startBg.style.display = 'block';
   gameContent.style.display = 'none';
   document.forms['frm1'].notempty.value = '';
   document.forms['frm2'].notempty.value = '';
   document.forms['frm3'].notempty.value = '';

   document.getElementById('new-cardbtn').style.opacity = .5;
   document.getElementById('holdbtn').style.opacity = .5;
   
   soundSettings()
   returnInputDefault(nameN[0]);
   returnInputDefault(nameN[1]);
   returnInputDefault(nameN[2]);

}













 





