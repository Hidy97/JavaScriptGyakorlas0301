window.addEventListener("load", init)



function init() {
    console.log("Hello világ");
   const articleElem = document.getElementById('tarolo');
   console.log(articleElem);
    articleElem.innerHTML = "<h1> Legjobb dolgok </h1>";
    const list = [
        {
            nev: "Maja",
            mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
        },
        {
            nev: "Szandi",
            mondat: "Tudtam ültetni és van két virágom.",
        },
        { 
            nev: "Trapi", 
            mondat: "Sikerült a Feast 1 teszt!" 
        }, 
        { 
            nev: "Ernő", 
            mondat: "Tegnap kialaudtam magam," 
        }, 
        { 
            nev: "Bálint", 
            mondat: "Kupcsik tanarnő vicces volt," 
        }, 
        { 
            nev: "Arnold", 
            mondat: "Lebetegedtem", 
        }, 
        { 
            nev: "Benedek", 
            mondat: "Tegnapi adatbázis-kezelés", 
        }, 
        { 
            nev: "Balázs", 
            mondat: "Újra elövettem egy régi játékot, amivel már rég játszottam és nosztalgikus érzéseket vált ki.", 
        }, 
        { 
            nev: "Duy", 
            mondat: "Felfrissít az edzés minden héten." 
        },
    ];
    megjelenit(list, articleElem);
    const Szuloelem = document.querySelectorAll("section");
    megjelenit2(list, Szuloelem);
    const tablazat = document.querySelectorAll("#tablazat")
    tablazatbanMegjelenít(list, tablazat);
    

}


function megjelenit(list, articleElem) {
    let txt = "<h1> Legjobb dolgok </h1>"
    txt += "<ul>";
    for (i=0; i<list.length; i++ ) {
        txt +=  "<li>" + list[i].mondat  + "</li>";
    }
    txt += "</ul>";
    articleElem.innerHTML = txt;
}


function megjelenit2(list, Szuloelem) {
    let text = "";
    for (i=0; i<list.length; i++ ) {
        text += "<div>" +"<h3>"+ list[i].nev +"</h3>"+ "<p>" + list[i].mondat + "</p>" + "</div>";
    }
    Szuloelem[0].innerHTML += text;
}

function tablazatbanMegjelenít(list, tablazat){
    let text = "<table>";
    text += "<tr><th>Név</th><th>Mondat</th></tr>"
    for (i=0; i<list.length; i++ ) {
        text += "<tr>" +"<td>"+ list[i].nev +"</td>"+ "<td>" + list[i].mondat + "</td>" + "</<tr>";
    }
    tablazat[0].innerHTML += text;
    text = "/table";
}