
window.onload =() => {
const listacontenitore = document.getElementById("primaparte")
listacontenitore.innerHTML += "<div class='list1' onclick='aggiungiClasseSelected(event)'>Carne</div>"
listacontenitore.innerHTML += "<div class='list1' onclick='aggiungiClasseSelected(event)'>Pesce</div>"
}
 const addclass = event => {
 const elementocliccato = event.target
 elementocliccato.classlist.toogle("selected")
 }

 const gestiscikey = event => {
    console.log("L'utente ha digitato: ", event.key)
    if(event.key==="Enter"){
        const valoreInput = document.getElementById("input1").value
        if(valoreInput==="") {
            alert("Non lasciare vuoto il testo")
        } else {
            const divnuovo= document.createElement("div")
            divnuovo.classList.add("lista1")
            divnuovo.innerText = valoreInput
            divnuovo.onclick = addclass
            document.getElementById("input1").appendChild(divnuovo)
            document.getElementById("input1").value =""
        }
    }
 }


