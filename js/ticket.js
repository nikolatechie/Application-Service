function createTicket() {
    const divCreate = document.getElementsByClassName("create")[0];
    const scheduleId = divCreate.getElementsByTagName("input")[0].value;
    const seatNum = divCreate.getElementsByTagName("input")[1].value;
    const userId = divCreate.getElementsByTagName("input")[2].value;

    fetch("http://localhost:8080/api/ticket", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            scheduleId: scheduleId,
            seatNum: seatNum,
            userId: userId
        })
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data.message != null)
            throw new Error(data.message);

        alert("Successfully created!")
    })
        .catch(err => alert(err || "ERROR"));
}

function readTickets() {
    fetch("http://localhost:8080/api/ticket", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if (data.message != null)
                throw new Error("Error!");

            let table = document.getElementsByTagName("table")[0].tBodies[0];

            while (table.rows.length > 0)
                table.deleteRow(0);

            data.forEach(it => {
                const row = table.insertRow();

                let td = row.insertCell();
                td.appendChild(document.createTextNode(it.id));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.scheduleId));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.seatNum));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.userId));
            });

        })
        .catch(err => alert("ERROR"));
}

function updateTicket() {
    const divUpdate = document.getElementsByClassName("update")[0];
    const id = divUpdate.getElementsByTagName("input")[0].value;
    const scheduleId = divUpdate.getElementsByTagName("input")[1].value;
    const seatNum = divUpdate.getElementsByTagName("input")[2].value;
    const userId = divUpdate.getElementsByTagName("input")[3].value;

    fetch("http://localhost:8080/api/ticket/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            scheduleId: scheduleId,
            seatNum: seatNum,
            userId: userId
        })
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data.message != null)
            throw new Error(data.message);

        alert("Successfully updated!")
    })
        .catch(err => alert(err || "ERROR"));
}

function deleteTicket() {
    const divDelete = document.getElementsByClassName("delete")[0];
    const id = divDelete.getElementsByTagName("input")[0].value;

    fetch("http://localhost:8080/api/ticket/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data.message != null)
            alert(data.message);
        else
            alert("Successfully deleted!")
    })
        .catch(err => alert("ERROR"));
}