function checkNames (name) {
    var naam = document.getElementById(name).value;
    var lengteNaam = naam.length;
    if ( lengteNaam < 2 ) {
        document.getElementById("error_" + name ).removeAttribute("hidden");
    } else {
        document.getElementById("error_" + name ).setAttribute("hidden", "hidden");
    }
}

function checkNumber() {
    var aei = document.getElementById("aantal_extra_inschrijvingen").value;
    if ( isNaN(aei) ) {
        document.getElementById("error_aei").removeAttribute("hidden");
    } else {
        document.getElementById("error_aei" ).setAttribute("hidden", "hidden");
    }
}

function aantalInschrijvingen () {
    var aei = document.getElementById("aantal_extra_inschrijvingen").value;
    var ae = parseInt(aei) + 1;
    if ( ! isNaN(aei) ) {
        document.getElementById("aantal_inschrijvingen").innerHTML = ae;
        document.getElementById("totaal_inschrijvingen").removeAttribute("hidden");
    }
}