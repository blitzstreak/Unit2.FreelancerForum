// Set the text and style for the dropdown
const headerPage = document.querySelector("#header");
headerPage.innerHTML = "Freelancer Forum";
headerPage.style.color = "cyan";
headerPage.style.textAlign = "center";

// Set the text and style for the average price
const avgPrice = document.querySelector("#avgPrice");
avgPrice.innerHTML = "The average starting price is $30.";
avgPrice.style.color = "purple";
avgPrice.style.textAlign = "center";

const box = document.createElement("div");
box.style.display = "flex";
box.style.justifyContent = "space-evenly"; // Set space-evenly
document.body.appendChild(box);

// Create and style the title elements
const createAndStyleTitle = (text) => {
    const title = document.createElement("h2");
    title.innerHTML = text;
    title.style.width = "100px"; // Set a fixed width for even alignment
    title.style.marginRight = "-30px"; // Adjusted right margin for better alignment
    return title;
}

// Create and append title elements
box.appendChild(createAndStyleTitle("Name"));
box.appendChild(createAndStyleTitle("Occupation"));


// Create a separate container for the "Starting Price" text
const priceTitleContainer = document.createElement("div");
priceTitleContainer.style.display = "flex";
priceTitleContainer.style.alignItems = "center"; // Align items vertically
box.appendChild(priceTitleContainer);

const priceTitle = createAndStyleTitle("StartingPrice");
priceTitle.style.marginRight = "0"; // Adjusted margin for better alignment
priceTitleContainer.appendChild(priceTitle);

const data = [
  { name: "Alice", job: "Writer", price: "$30" },
  { name: "Bob", job: "Teacher", price: "$50" },
  { name: "Carol", job: "Programmer", price: "$70" }
];

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "space-evenly"; // Set space-evenly
document.body.appendChild(container);

data.forEach(item => {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-evenly"; // Space columns evenly
  container.appendChild(row);

  const allNames = document.createElement("h3");
  allNames.innerHTML = item.name;
  row.appendChild(allNames);

  const allJobs = document.createElement("h3");
  allJobs.innerHTML = item.job;
  row.appendChild(allJobs);

  const allPayouts = document.createElement("h3");
  allPayouts.innerHTML = item.price;
  row.appendChild(allPayouts);
});
