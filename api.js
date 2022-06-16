let container = document.querySelector("#container");

fetch("https://reqres.in/api/users", {
  method: "GET",
})
  .then(res => res.json())
  .then(data => {
    handleDataRender(data);
  });

function handleDataRender(updtatedData) {
  console.log(updtatedData);
  const html = updtatedData.data
    .map(item => {
      return `
    <div class="user">
    <div class="img-container">
      <img src="${item.avatar}">
    </div>
        <p>${item.first_name + item.last_name}</p>
    </div>
        `;
    })
    .join("");
  console.log(html);

  container.innerHTML = html;
}
