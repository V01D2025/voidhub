async function buy(packageId) {
  const username = document.getElementById("username").value;

  const res = await fetch("https://voidhub-b.onrender.com/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, packageId })
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    console.log(data);
    alert("Checkout error");
  }
}
