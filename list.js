window.addEventListener("load", init);

function init() {
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
/*
    const adat1 = {
        nev: "Maja",
        mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
    };

    const adat2 = {
        nev: "Maja",
        mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
    };
*/
    console.log(list)
    console.log(list[1])
    console.log(list[1].nev)
    console.log(list[1].mondat)


    /**Külön a div tagben legyen még egy h3 tag, amibe a név kerül */
    const articleElem = document.getElementById("idNev");
    console.log(articleElem);
    const articleListak = document.getElementsByClassName("className");
    console.log(articleListak);
    const articleListak2 = document.querySelectorAll("classNev");
    console.log(articleListak2);
    const articleListak3 = document.querySelector("classNev");
    console.log(articleListak3);

}