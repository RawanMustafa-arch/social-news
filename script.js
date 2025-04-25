const links = [];

function startMenu() {
  let choice;
  do {
    choice = prompt(`Choose an action:
1. Show links
2. Add a link
3. Remove a link
4. Quit`);

    switch (choice) {
      case "1":
        showLinks();
        break;
      case "2":
        addLink();
        break;
      case "3":
        removeLink();
        break;
      case "4":
        alert("Thanks for using the Social News Program!");
        break;
      default:
        alert("Invalid choice. Please enter 1, 2, 3, or 4.");
    }
  } while (choice !== "4");
}

function showLinks() {
  if (links.length === 0) {
    alert("No links available.");
    document.getElementById("output").textContent = "No links available.";
  } else {
    let list = "";
    links.forEach((link, index) => {
      list += `${index}. "${link.title}" (${link.url}) by ${link.author}\n`;
    });
    alert(list);
    document.getElementById("output").textContent = list;
  }
}

function addLink() {
  const title = prompt("Enter the link title:");
  let url = prompt("Enter the link URL:");
  const author = prompt("Enter the link author:");

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }

  links.push({ title, url, author });
  alert("Link added successfully!");
}

function removeLink() {
  if (links.length === 0) {
    alert("No links to remove.");
    return;
  }

  let index;
  do {
    index = parseInt(prompt("Enter the index of the link to remove:"), 10);
  } while (isNaN(index) || index < 0 || index >= links.length);

  links.splice(index, 1);
  alert("Link removed.");
}