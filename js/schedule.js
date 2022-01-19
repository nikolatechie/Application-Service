function createSchedule() {
    const divCreate = document.getElementsByClassName("create")[0];
    const movieId = divCreate.getElementsByTagName("input")[0].value;
    const dateTime = divCreate.getElementsByTagName("input")[1].value;
    const hallId = divCreate.getElementsByTagName("input")[2].value;
    const price = divCreate.getElementsByTagName("input")[3].value;

    fetch("http://localhost:8080/api/schedule", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im5ncnVqaWMyNDE5cm5AcmFmLnJzIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDI1MjE3Nzl9.L8dc7jCfOLDBWkw7awTM_MGk-yiQ81TwaHGaYOmTqn4"
        },
        body: JSON.stringify({
            movieId: movieId,
            dateTime: dateTime,
            hallId: hallId,
            price: price
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

function readSchedule() {
    fetch("http://localhost:8080/api/schedule", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im5ncnVqaWMyNDE5cm5AcmFmLnJzIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDI1MjE3Nzl9.L8dc7jCfOLDBWkw7awTM_MGk-yiQ81TwaHGaYOmTqn4"
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
                td.appendChild(document.createTextNode(it.movieId));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.dateTime));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.hallId));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.price));
            });

        })
        .catch(err => alert("ERROR"));
}

function updateSchedule() {
    const divUpdate = document.getElementsByClassName("update")[0];
    const id = divUpdate.getElementsByTagName("input")[0].value;
    const movieId = divUpdate.getElementsByTagName("input")[1].value;
    const dateTime = divUpdate.getElementsByTagName("input")[2].value;
    const hallId = divUpdate.getElementsByTagName("input")[3].value;
    const price = divUpdate.getElementsByTagName("input")[4].value;

    fetch("http://localhost:8080/api/schedule/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im5ncnVqaWMyNDE5cm5AcmFmLnJzIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDI1MjE3Nzl9.L8dc7jCfOLDBWkw7awTM_MGk-yiQ81TwaHGaYOmTqn4"
        },
        body: JSON.stringify({
            movieId: movieId,
            dateTime: dateTime,
            hallId: hallId,
            price: price
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

function deleteSchedule() {
    const divDelete = document.getElementsByClassName("delete")[0];
    const id = divDelete.getElementsByTagName("input")[0].value;

    fetch("http://localhost:8080/api/schedule/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im5ncnVqaWMyNDE5cm5AcmFmLnJzIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDI1MjE3Nzl9.L8dc7jCfOLDBWkw7awTM_MGk-yiQ81TwaHGaYOmTqn4"
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