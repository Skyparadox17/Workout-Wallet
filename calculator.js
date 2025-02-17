function calculate() {
    const membershipCost = parseFloat(document.getElementById('membershipCost').value);
    const visitCost = parseFloat(document.getElementById('visitCost').value);
    const visitsNeeded = membershipCost / visitCost;
    document.getElementById('result').innerText = `You need to visit the gym ${visitsNeeded.toFixed(2)} times to break even.`;
}
