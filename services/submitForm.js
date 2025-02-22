async function submitForm(name, email, message) {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "2510f8a8-388f-4f7b-b618-f4200feff6da",
            name: name,
            email: email,
            message: message,
        }),
    });
    const result = await response.json();
    return result;
}

export default submitForm;