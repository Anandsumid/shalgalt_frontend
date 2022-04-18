export async function getLists() {
    return await fetch("http://18.140.72.65:3001/api/lists");
  }
  export async function addLists(data) {
    return await fetch("http://18.140.72.65:3001/api/createlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => console.log(res.message));
  }
  export async function updateLists(id, data) {
    return await fetch(`http://18.140.72.65:3001/api/update/lists/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => console.log(res.message));
  }
  export async function deleteLists(id) {
    return await fetch(`http://18.140.72.65:3001/api/delete/lists/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((res) => console.log(res));
  }
  