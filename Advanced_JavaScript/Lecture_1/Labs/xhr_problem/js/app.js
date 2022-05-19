import HTTP from "./http.js";

const http = new HTTP();

const tableBodyUI = document.querySelector("#table-body");

const renderTable = (user) => {
  const rowTemp = `
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.phone}</td>
      <td>${user.username}</td>
      <td>${user.website}</td>
    </tr>
  `;

  tableBodyUI.insertAdjacentHTML("beforeend", rowTemp);
};

http.get("https://jsonplaceholder.typicode.com/users", (dsd, users) => {
  users.forEach(renderTable);
});
