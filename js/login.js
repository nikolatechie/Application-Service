const userLogin = () => {
    const parent = document.getElementsByTagName("div")[0];
    const email = parent.getElementsByTagName("input")[0].value;
    const password = parent.getElementsByTagName("input")[1].value;

    fetch("http://localhost:8081/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        if (data.token != undefined && data != "") {
            alert("Success " + data.token);
            localStorage.setItem("token", data.token);
            window.location.replace("http://localhost:8082/admin");
        }
        else throw new Error("Login failed!");
    }).catch(err => alert(err));
}