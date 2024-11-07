
var TArticles = [
    { code: "P01", designation: "Pizza 4 Fromages", prix: 80 },
    { code: "P02", designation: "Pizza Viande Hachée", prix: 120 },
    { code: "P03", designation: "Pizza Herbo", prix: 75 },
    { code: "P04", designation: "Pizza Fruits de Mer", prix: 120 }
];

var TArticlesChoisis = [];

function ajouter() {
    var nom = document.getElementById("nom").value;
    var adresse = document.getElementById("adresse").value;
    var carte = document.getElementById("carte").value;
    var paiement = document.getElementById("paiement").value;
    var quantite = parseInt(document.getElementById("quantite").value);
    var pizzaSelect = document.getElementById("pizza");
    var pizzaCode = pizzaSelect.value;
    var pizza = TArticles.find(article => article.code === pizzaCode);

    if (!nom || !adresse || (paiement === "carte" && !carte)) {
        alert("Tous les champs sont obligatoires !");
        return;
    }

    if (quantite < 1 || quantite > 10) {
        alert("La quantité doit être comprise entre 1 et 10 !");
        return;
    }

    var articleChoisi = {
        pizza: pizza.designation,
        prix: pizza.prix,
        quantite: quantite,
        total: pizza.prix * quantite
    };
    TArticlesChoisis.push(articleChoisi);

    var table = document.getElementById("commandeTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    newRow.insertCell(0).textContent = pizza.designation;
    newRow.insertCell(1).textContent = pizza.prix + " DH";
    newRow.insertCell(2).textContent = quantite;

    var totalFacture = TArticlesChoisis.reduce((acc, article) => acc + article.total, 0);
    document.getElementById("totalFacture").textContent = totalFacture + " DH";
}

document.getElementById("paiement").addEventListener("change", function() {
    var carteInput = document.getElementById("carte");
    if (this.value === "cheque") {
        carteInput.disabled = true;
        carteInput.value = "";
    } else {
        carteInput.disabled = false;
    }
});
