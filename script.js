async function buy() {
  const username = document.getElementById("nickname").value;

  if (!username) return;

  const res = await fetch("https://voidhub-b.onrender.com/create-checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username })
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Error creating checkout");
  }
}
