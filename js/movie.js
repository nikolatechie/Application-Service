function createMovie() {
    const divCreate = document.getElementsByClassName("create")[0];
    const title = divCreate.getElementsByTagName("input")[0].value;
    const year = divCreate.getElementsByTagName("input")[1].value;
    const genre = divCreate.getElementsByTagName("input")[2].value;
    const rating = divCreate.getElementsByTagName("input")[3].value;

    fetch("http://localhost:8080/api/movie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im5ncnVqaWMyNDE5cm5AcmFmLnJzIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDI1MjE3Nzl9.L8dc7jCfOLDBWkw7awTM_MGk-yiQ81TwaHGaYOmTqn4"
        },
        body: JSON.stringify({
            title: title,
            year: year,
            genre: genre,
            rating: rating
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

function readMovies() {
    fetch("http://localhost:8080/api/movie", {
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
                td.appendChild(document.createTextNode(it.title));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.year));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.genre));

                td = row.insertCell();
                td.appendChild(document.createTextNode(it.rating));
            });

    })
        .catch(err => alert("ERROR"));
}

function updateMovie() {
    const divUpdate = document.getElementsByClassName("update")[0];
    const id = divUpdate.getElementsByTagName("input")[0].value;
    const title = divUpdate.getElementsByTagName("input")[1].value;
    const year = divUpdate.getElementsByTagName("input")[2].value;
    const genre = divUpdate.getElementsByTagName("input")[3].value;
    const rating = divUpdate.getElementsByTagName("input")[4].value;

    fetch("http://localhost:8080/api/movie/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im5ncnVqaWMyNDE5cm5AcmFmLnJzIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDI1MjE3Nzl9.L8dc7jCfOLDBWkw7awTM_MGk-yiQ81TwaHGaYOmTqn4"
        },
        body: JSON.stringify({
            title: title,
            year: year,
            genre: genre,
            rating: rating
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

function deleteMovie() {
    const divDelete = document.getElementsByClassName("delete")[0];
    const id = divDelete.getElementsByTagName("input")[0].value;

    fetch("http://localhost:8080/api/movie/" + id, {
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