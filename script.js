function copyText() {
  const input = document.getElementById("text");
  input.select();
  input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(input.value);

  document.getElementById("msg").textContent = "Copied!";
}
