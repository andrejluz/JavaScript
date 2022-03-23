// Prasykite funkcija, kuri priima tris skaicius. Funkcija turi suskaiciuoti ar is situ skaiciu, 
// kurie yra trikampio kastines, galima sudaryti statuji trikampi. 
// Skaiciai turi buti didesni uz nuli. Ar toks trikampis gali buti, patikrinti pagal Pitagoro teorema. (edited) 

function steepAngle(a,b,c) {
    let pirmaKrastine = a ** 2;
    let antraKrastine = b ** 2;
    let izambyne = c ** 2;
    let sumaKrastiniu = pirmaKrastine + antraKrastine;

    if (sumaKrastiniu === izambyne) {
        return `a krastines ilgis ${a} : b krasitnes ilgis ${b}: c krastine ${c}. Stasusis kampas gaunasi`;
        console.log(a)
    } else {
        console.log(pirmaKrastine)
        console.log(antraKrastine)
        console.log(izambyne)
        return`Status kampas neimanomas`;
    }
}


console.log(steepAngle(2,2,2))