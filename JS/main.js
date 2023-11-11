document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the form data
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const deliveryCost = document.getElementById("deliveryCost").value;
    const info1 = document.getElementById("info1").value;
    const cost1 = document.getElementById("cost1").value;
    const info2 = document.getElementById("info2").value;
    const cost2 = document.getElementById("cost2").value;
    const info3 = document.getElementById("info3").value;
    const cost3 = document.getElementById("cost3").value;
    const info4 = document.getElementById("info4").value;
    const cost4 = document.getElementById("cost4").value;
    const info5 = document.getElementById("info5").value;
    const cost5 = document.getElementById("cost5").value;
    const info6 = document.getElementById("info6").value;
    const cost6 = document.getElementById("cost6").value;
    const info7 = document.getElementById("info7").value;
    const cost7 = document.getElementById("cost7").value;
    const info8 = document.getElementById("info8").value;
    const cost8 = document.getElementById("cost8").value;


    sessionStorage.setItem("name", name);
    sessionStorage.setItem("mobile", mobile);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("deliveryCost", deliveryCost);
    sessionStorage.setItem("info1", info1);
    sessionStorage.setItem("cost1", cost1);
    sessionStorage.setItem("info2", info2);
    sessionStorage.setItem("cost2", cost2);
    sessionStorage.setItem("info3", info3);
    sessionStorage.setItem("cost3", cost3);
    sessionStorage.setItem("info4", info4);
    sessionStorage.setItem("cost4", cost4);
    sessionStorage.setItem("info5", info5);
    sessionStorage.setItem("cost5", cost5);
    sessionStorage.setItem("info6", info6);
    sessionStorage.setItem("cost6", cost6);
    sessionStorage.setItem("info7", info7);
    sessionStorage.setItem("cost7", cost7);
    sessionStorage.setItem("info8", info8);
    sessionStorage.setItem("cost8", cost8);





    
    // Redirect to a thank-you page or another page to display the data
    window.location.href = "https://mhdamrshehab.github.io/InvoiceDelivery/Invoice.html";




});
document.getElementById('clearButton').addEventListener('click', function () {
    // Clear session storage
    sessionStorage.clear();
    // Reload the page
    window.location.reload();

});
