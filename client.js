Framepay.initialize({
    publishableKey: 'pk_sandbox_S95ATjj4hXZs-T9QpZq1ENl2tDSrUkCGv98utc9',
    organizationId: '5977150c-1c97-4dd4-9860-6bb2bab070b4',
    websiteId: 'demo.com',
    transactionData: {
        currency: "USD",
        amount: 10,
    },
});
Framepay.on("ready", function () {
    const card = Framepay.card.mount("#mounting-point");
});
// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    try {
        const form = document.getElementById("payment-form");
        const paymentToken = await Framepay.createToken(form);
        console.log(paymentToken);
    } catch (error) {
        console.log("❌ Create token error:", error);
    }
}

// Attach form submit handler
const form = document.getElementById("payment-form");
if (form) {
    form.addEventListener("submit", handleFormSubmit);
}
