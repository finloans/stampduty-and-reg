function calculateFees() {
    // Get the property value input by the user
    let propertyValue = parseFloat(document.getElementById('propertyValue').value);
    
    // Get the selected gender and state
    let gender = document.getElementById('gender').value;
    let state = document.getElementById('state').value;

    // Validate the property value to ensure it's a positive number
    if (isNaN(propertyValue) || propertyValue <= 0) {
        document.getElementById('feesResult').innerText = "Please enter a valid property value.";
        return;
    }

    // Define stamp duty rates for different states
    let stampDutyRates = {
        "odisha": (gender === "female") ? 0.04 : 0.05, // Odisha: 4% for females, 5% for males
        "maharashtra": (gender === "female") ? 0.05 : 0.06, // Maharashtra: 5% for females, 6% for males
        "delhi": 0.04, // Delhi: 4% flat rate for all
        "karnataka": (gender === "female") ? 0.03 : 0.05, // Karnataka: 3% for females, 5% for males
        "tamilnadu": 0.07, // Tamil Nadu: 7% flat rate for all
        "westbengal": 0.06 // West Bengal: 6% flat rate for all
    };

    // Registration fee is 2% for all states
    let registrationFeeRate = 0.02;

    // Get the stamp duty rate based on the selected state
    let stampDutyRate = stampDutyRates[state];

    // Calculate stamp duty and registration fee based on the property value
    let stampDuty = propertyValue * stampDutyRate;
    let registrationFee = propertyValue * registrationFeeRate;

    // Display the calculated fees in the result section
    document.getElementById('feesResult').innerHTML = `
        <h3>Stamp Duty and Registration Fees:</h3>
        <strong>Stamp Duty: ₹${stampDuty.toFixed(2)}</strong><br>
        <strong>Registration Fee: ₹${registrationFee.toFixed(2)}</strong><br>
    `;
}
