alert("Hru hod kostkou jsem vytvořila pomocí HTML CSS a JavaScriptu. Pravidla hry: Vítězem se stává hráč, který získá Skóre 100 bodů. Tlačítkem Nová hra vše resetujete. Když si budete chtít počet bodů ponechat, stiskněte tlačítko Podržet skóre. Skóre se Vám propíše a bude hrát další hráč.Pokud kliknete na tlačítko Hodit kostkou a padne jednička tak se Vaše současné skóre smaže, ale propsané skóre zůstává a hraje další hráč. Vyzkoušejte si vše nanečisto. Užijte si plno zábavy se svým hráčem, který sedí u počítače vedle Vás.");
// základní proměnné
var totalScore, roundScore, activePlayer, dice; //celkové skóre, skóre v rámci 1 kola, aktivní hráč, kostka
var playGame; // proměnná hrát hru bude nabývat 2 hodnot true false

//funkce, která resetuje
function newStart(){ //zde jsme třídu pouze vytvořili.
    
    totalScore = [0,0]; //výchozí  celkové skóre je 0, 0 když je nová hra //pozn. totalScore [0] tímto zápisem vytáhnu první hodnotu z pole tj. 0
    roundScore = 0; //výchozí donota je 0 a načítá se pouze u hráče, který právě hraje hází kostkou
    activePlayer = 0; //hráč jedna má číslo 0 a druhý hráč má číslo 1, zde předpokládáme že když se zahájí nová hra tak hraje vždy první hráč.
    playGame = true; //výchozí hodnota je pravda
    // vynulování a odstranění kostky
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    //odstranění kostky
    document.querySelector(".diceImage").style.display = "none";////vytáhli jsme z html (název třídy) a dotkly jsme se CSS display = none tj. odstraň obrázek

    //původní texty dělám to kvůli tomu aby zmizel text vítěz vítěz
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";//vytáhli jsme z html (název id #name-0).zajámá nás pouze text bez tagů = a ten text pokud je tam cokoliv jiného chci přepsat na "Skóre 1. hráče". 
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    //chci aby začínal vždy 1. hráč tzn. třída active v html je vždy u prvního hráče
    document.querySelector(".totalScore0").classList.add("active");  //první hráč se třída "active" přidá a druhému hráči se třída "active" odebere. CSS pouze active zvýrazní, ale neovlivňuje kde to active zrovna bude to ovlivňují tyto 2 kódy.
    document.querySelector(".totalScore1").classList.remove("active"); //vytáhli jsme z html (název třídy totálnískóre2.hráče) // classlist tj. Seznam tříd, remove tj. odstranit, add tj. přidat
}
newStart(); //zde jsme funkci spustili

//Tlačíko hodit kostkou
    //měníme obrázek kostky podle náhodného čísla na kliknutí tlačítka hodit kostkou
    document.querySelector(".rollDice").addEventListener("click", function(){ //vytáhli jsme z html (název třídy) přidatUdálostKterášmíruje(když se klikne, spusť moji funkci)
        if(playGame){ //pokud je playGame true tak je tlačítko zapnuté  a kód se provede, pokud je false tak se neprovede.
            // 1. generujeme náhodné číslo mezi 1 a 6
            var dice = Math.ceil(Math.random()*6); //dice=>kostka ceil je zaokrouhlení vždy nahoru, random()generování náhodných čísel 6 je 100% => že 7, 8 zde nenajdu

            // 2. zobrazit správný obrázek
            var diceElement = document.querySelector(".diceImage"); //proměnná = vytáhli jsme z html (název třídy)
            diceElement.style.display = "block"; // proměnná a dotkly jsme se CSS display = "block" tj. zobraz obrázek
            console.log(diceElement.src = "img/" + dice + ".jpg"); //zobraz (proměnnou . chci pouze tag src = který se bude rovnat složka img/ + proměnná dice což je náhodně generované číslo +jpg tj. koncovka obrázku)
            
            // 3. Nasčítáme čísla z kostky
                if (dice !== 1){ //když na kostce nepadne č. 1 tak
                    roundScore = roundScore + dice; //skóre v rámci jednoho kola = skóre v rámci 1 kola + číslo z kostky př.: 1) 0 = 0+ číslo z kostky 5  2) 9 = 5+číslo z kostky 4
                    document.getElementById("currentScore-" + activePlayer).textContent = roundScore; //teď ty hodnoty, které jsme spočítali promítmene do html takže:  vytáhli jsme z html (název ID + hrář1 nebo hráč 2 mi označuje aktive player) zajímá nás pouze text nebo číslo pozn. bez html tagů v tomto případě č.3 a toto číslo = přepíčeme na hodnotu kterou jsme spočitali
                } else { //když padne č. 1 tak 
                    nextPlayer();// bude hrát další hráč. Chci spustit funkci, která přepne na dalšího hráče a vynuluje skóre a odstaní kostku
                }
        }
            
    }); //aby vše fungovalo tzn. zda je tlačítko zapnuté nebo vypnuté musí document.querySelector(".rollDice").addEventListener("click", function(){ zde končit
        
//Přepínání na dalšího hráče
function nextPlayer(){
    if(activePlayer === 0){ //když proměnná  bude mít hodnotu 0
        activePlayer = 1; //proměnná bude 1 tzn. přepni na dalšího (druhého) hráče
    } else { //když proměnná  NEbude mít hodnotu 0 => že má hodnotu 1
        activePlayer = 0; ///proměnná bude 0 tzn. přepni na dalšího (prvního) hráče
    }
    
    roundScore = 0; //chci aby se proměnná současný skóre měla opět hodnotu 0 pozn. hráč bude hrát s čistým štítem
    
    document.getElementById("currentScore-0").textContent = 0; //potřebuju vynulovat čísla, která se načítala na obrazovce  tzn. do html kódu potřebuju dát hodnotu 0
    document.getElementById("currentScore-1").textContent = 0; ////vytáhli jsme to z html (název iD z html)  zajímá nás pouze text nebo číslo pozn. bez html tagů = přiřadíme tomu hodnotu 0;
    
    document.querySelector(".diceImage").style.display = "none"; ////vytáhli jsme z html (název třídy) a dotkly jsme se CSS display = none tj. odstraň obrázek
    
    document.querySelector(".totalScore0").classList.toggle("active"); //vytáhli jsme (název třídy z html).classList ->vyber v html seznam tříd a toggle -> přepni (název třídy). 
    document.querySelector(".totalScore1").classList.toggle("active"); //pozn. klása aktiv se přepíná v html mezi těmito dvěma subjekty. CSS pouze active zvýrazní, ale neovlivňuje kde to active zrovna bude to ovlivňují tyto 2 kódy.   
}
    
//Tlačítko podržet skóre
document.querySelector(".holdScore").addEventListener("click", function(){ //vytáhli jsme z html (název třídy podržet skóre) přidatUdálostKterášmíruje(když se klikne, spusť moji funkci)
    if(playGame){ //pokud je playGame true tak se kód provede, pokud je false tak se neprovede tzn. tlačítko je vypnuté
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore; //celkové skóre = celkové skóre + skóre v rámci jednoho kola  Př.: 1) 0 = 0 + 10 bodů, které jsem nabrala, Kliknu na podržet skóre 2) 10  = 10 + 14 bodů, které jsme získala běhěm dalšího kola 3) 24 = 24 + ...
        //totalScore[0] = totalScore[0] + roundScore; toto platí pro prního hráče, ale díky tomu že ACTIVEPLAYER přepínám v podmínce if tak do hranatých závorek dám přímo [activeplayer] a mám vyřešený univerzální zápis pro každého hráče tzn. buď zde mám [0] první hráč nebo [1] druhý hráč. To mi zajišťuje [activeplayer] //aktiveplayer je moje proměnná
        
        //V současné době je celkové skóre uložené pouze v proměnné totalScore[activePlayer] teď chci to číslo, které se spočítalo propsat do HTML
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer]; ////vytáhli jsme to z html (název iD z html + hláč č.)  to číslo 30 nebo 40 které je natvrdo napsané v html  = přepíšeme na hodnotu celkového skóre pozn. které jsme spočítali títmo způsobem totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        
        if(totalScore[activePlayer]>=100){ //pokud celkové skore [aktivního hráče]>= 100
            document.querySelector("#name-" + activePlayer).textContent = "Vítěz Vítěz!"; //přepíšeme Skóre 1. hráče nebo Skóre 2. hráče na text "Vítěz Vítěz!"
            document.querySelector(".diceImage").style.display = "none"; //skrýt kostku
                playGame = false;//když někdo vyhraje tak proměnnou nastavíme na nepravda
        }else{
            nextPlayer(); //spusť fci další hráč
        }
    }
        
}); //zde musí být funkce ukončena

//Tlačítko Nová hra
document.querySelector(".newGame").addEventListener("click", newStart); //vytáhli jsme z html (název třídy nová hra) přidatUdálostKterášmíruje(když se klikne, spustí se moje funkce reset)
