const genererNombreAleatoire=()=> {
    //generer un nombre entre 1 et 100
    const nombreDecimal= Math.random()*100+1
    const nombre= Math.trunc (nombreDecimal)
    //retourner un nombre
    return nombre
}


const proposerNombre=()=> {

    //recuperer le champs text avce le nombre
    const input= document.getElementById('input-nombre')

    //recuperer la valeur du champs
const valeur= input.value
console.log (valeur, typeof valeur)
 // transformer la valeur text en nombre
const nombre= parseInt(valeur, 10)
console.log (nombre, typeof nombre)
}



//recuperer le bouton
//lorsqu'il y'a un click effectuer une proposition de nombre
const button=document.getElementById('button-proposer')
button.addEventListener('click', proposerNombre)
