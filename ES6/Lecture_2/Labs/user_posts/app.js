const UI = {
  tabsContainer: document.getElementById("tabs-container"),
  postsContainer: document.getElementById("tab-content"),
  switchActiveTab: (activeBtn) => {
    activeBtn.parentElement
      .querySelectorAll("button")
      .forEach((activeBtnSibling) => {
        activeBtnSibling.classList.remove("active");
      });
    activeBtn.classList.add("active");
  },
  renderUsersTabs: (users) => {
    const frag = document.createDocumentFragment();
    users.forEach((user, indx) => {
      '<button class="nav-link active" type="button">Home</button>';
      const tabBtn = document.createElement("button");
      tabBtn.type = "button";
      tabBtn.textContent = user.name;
      tabBtn.className = indx === 0 ? "nav-link active" : "nav-link";
      tabBtn.addEventListener("click", (e) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
          .then((res) => res.json())
          .then((posts) => UI.renderUserPosts(posts));
        UI.switchActiveTab(e.currentTarget);
      });
      frag.appendChild(tabBtn);
    });
    UI.tabsContainer.appendChild(frag);
  },
  renderUserPosts: (posts) => {
    let postsUI = "";
    posts.forEach((post, indx) => {
      const postTemp = `
        <article class="pb-3">
          <h2>${indx + 1}. ${post.title}</h2>
          <p>${post.body}</p>
        </article>
      `;
      postsUI += postTemp;
    });
    UI.postsContainer.innerHTML = postsUI;
  },
};

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  UI.renderUsersTabs(users);
});
