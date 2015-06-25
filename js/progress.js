var xmlhttp = new XMLHttpRequest();
var donationsUrl = "https://thisguy-donation.herokuapp.com/count_serve.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var donationData = JSON.parse(xmlhttp.responseText);
        console.log("Money: " + donationData.money);
        console.log("Donors: " + donationData.donors);
        var goal = 1700000;
                console.log("goal: " + goal);
        var dollars = donationData.money / 100;
                console.log("dollars: " + dollars);
        var percentToGoal = (donationData.money / goal) * 100;
                console.log("p2g: " + percentToGoal);

        document.getElementById('progress-bar-inner').style.width = percentToGoal + "%";
        document.getElementById('progress-bar-inner').innerHTML = parseFloat(percentToGoal.toFixed(2)) + "%";
        document.getElementById('data-money').innerHTML = dollars;
        document.getElementById('data-donors').innerHTML = donationData.donors;

    }
}
xmlhttp.open("GET", donationsUrl, true);
xmlhttp.send();


