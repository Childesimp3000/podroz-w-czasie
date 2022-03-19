import React from 'react';
export default class Gra extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gracz:1,
            pola:Array(16).fill(null),
            poprzedniaTablica:[],
            numerRuchu:0
        }
    
    }
    wygrana(){
        var linie = [
            [0,1,2,3],
            [4,5,6,7],
            [8,9,10,11],
            [0,4,8,12],
            [12,13,14,15],
            [1,5,9,13],
            [2,6,10,14],
            [3,7,11,15],
            [0,5,10,15],
            [3,6,8,12]
        ]
        var win = 0
        linie.forEach(linia => {
            console.log(this.state.pola[linia[2]] == this.state.pola[linia[3]])
            console.log(this.state.pola[linia[0]] + this.state.pola[linia[1]] + this.state.pola[linia[2]] + this.state.pola[linia[3]])
            if(this.state.pola[linia[0]] == this.state.pola[linia[1]] && this.state.pola[linia[1]] == this.state.pola[2] && this.state.pola[linia[2]] == this.state.pola[linia[3]] && (this.state.pola[linia[3]] == "x" || this.state.pola[linia[3]] == "o") )
            {
                win++
            }
            
        });
        console.log(win)
        if(win != 0)
        {
            alert("Koniec gry")
        }
    }
cofnij(){
    console.log(this.state.poprzedniaTablica)
    var historia=this.state.poprzedniaTablica
    var numer=this.state.numerRuchu
    this.setState({
        pola:historia[numer-1],
        numerRuchu: numer-1
    })
}
historia(){
    var tablica=this.state.pola
    var historia=this.state.poprzedniaTablica
    var numer=this.state.numerRuchu
    numer++
    historia.push(tablica)
    this.setState({
        poprzedniaTablica:historia,
        numerRuchu:numer
    })
}
klikniecie(id){
    console.log(this.state.poprzedniaTablica)
   // console.log(this.state.pola);
    if(this.state.pola[id]==null){
        this.historia()
        if(this.state.gracz==1){
            var tablica=this.state.pola
            tablica[id]="x"
            this.setState({
                gracz:0,
                pola:tablica
            })
        }else{
            var tablica=this.state.pola
            tablica[id]="o"
            this.setState({
                gracz:1,
                pola:tablica
            })
        }
        this.wygrana()
    }else{
        alert("pole zajete");
    }
}
    render()
    {
return(
            <div id="kontener">
                <div id="a0" onClick={()=>this.klikniecie(0)}>
                    {this.state.pola[0]}
                </div>
                <div id="a1" onClick={()=>this.klikniecie(1)}>
                  {this.state.pola[1]}
                </div>
                <div id="a2" onClick={()=>this.klikniecie(2)}>
                  {this.state.pola[2]}    
                </div>
                <div id="a3" onClick={()=>this.klikniecie(3)}>
                   {this.state.pola[3]}    
                </div>
                <div id="a4" onClick={()=>this.klikniecie(4)}>
                    {this.state.pola[4]}
                </div>
                <div id="a5" onClick={()=>this.klikniecie(5)}>
                    {this.state.pola[5]}
                </div>
                <div id="a6" onClick={()=>this.klikniecie(6)}>
                    {this.state.pola[6]}
                </div>
                <div id="a7" onClick={()=>this.klikniecie(7)}>
                    {this.state.pola[7]}
                </div>
                <div id="a8" onClick={()=>this.klikniecie(8)}>
                    {this.state.pola[8]}
                </div>
                <div id="a9" onClick={()=>this.klikniecie(9)}>
                    {this.state.pola[9]}
                </div>
                <div id="a10" onClick={()=>this.klikniecie(10)}>
                    {this.state.pola[10]}
                </div>
                <div id="a11" onClick={()=>this.klikniecie(11)}>
                    {this.state.pola[11]}
                </div>
                <div id="a12"onClick={()=>this.klikniecie(12)}>
                    {this.state.pola[12]}
                </div>
                <div id="a13" onClick={()=>this.klikniecie(13)}>
                    {this.state.pola[13]}
                </div>
                <div id="a14" onClick={()=>this.klikniecie(14)}>
                    {this.state.pola[14]}
                </div>
                <div id="a15" onClick={()=>this.klikniecie(15)}>
                    {this.state.pola[15]}
                </div>
                <div id="his" onClick={()=>this.cofnij()}>
                    numer ruchu: {this.state.numerRuchu}
                </div>
            </div>
        )
    }
}
// dlaczego nie dziala wygrana i hisotria dziwnie