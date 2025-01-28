// URL ကနေ endpoint ကို ဖတ်ပါ
const urlParams = new URLSearchParams(window.location.search);
const endpoint = urlParams.get('endpoint');

if (endpoint) {
    fetchData(endpoint);
} else {
    document.getElementById('output').innerText = 'No endpoint provided in URL.';
}

async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        // JSON ပုံစံနဲ့ ပြဖို့
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        document.getElementById('output').innerText = 'Error fetching data';
    }
}
