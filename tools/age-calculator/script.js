function calculateAge(){

    const birth = new Date(document.getElementById("birthdate").value);

    if(isNaN(birth)){
        document.getElementById("result").innerText="Select a valid date.";
        return;
    }

    const today = new Date();

    let age = today.getFullYear()-birth.getFullYear();

    const month = today.getMonth()-birth.getMonth();

    if(month<0 || (month===0 && today.getDate()<birth.getDate())){
        age--;
    }

    document.getElementById("result").innerText =
        `You are ${age} years old.`;
}