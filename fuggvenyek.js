
import { FocistakLista } from "./adat.js"


export function Tablazat(){
    const TartalomELEM = document.getElementsByClassName("tartalom")[0]
    console.log("tartalomELEM: "+ TartalomELEM);

    let txt = `<table id="table">`;
    txt += `<tr>
            <th>Neve</th>
            <th>Született</th>
            <th>Nemzetiség</th>
            <th>Csapat</th>
            </tr>`;
    for(let i = 0; i < FocistakLista.length; i++){
        console.log(FocistakLista[i].nev);
        txt += `<tr>
                <td>${FocistakLista[i].nev}</td>
                <td>${FocistakLista[i].szuletett}</td>
                <td>${FocistakLista[i].nemzetiseg}</td>
                <td>${FocistakLista[i].csapat}</td>
                </tr>`
    }

    txt += `</table>`;
    TartalomELEM.innerHTML = txt;
}









export function Szinvaltozas(){
    const tableELEM = document.getElementById("table")
    const hatterELEM = document.getElementById("body")


   function Csere() {
        hatterELEM.style.backgroundColor = "red";
   }

   function VisszaCsere() {
        hatterELEM.style.backgroundColor = "white";
   }

   return tableELEM.addEventListener("mouseenter", Csere), tableELEM.addEventListener("mouseleave", VisszaCsere);
}


















