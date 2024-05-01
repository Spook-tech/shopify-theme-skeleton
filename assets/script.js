const addToCartForms = document.querySelectorAll('form[action="/cart/add"]')

console.log(1)
console.log(addToCartForms)


addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form)
    })

    // cart object
    const res = await fetch('/cart.json');
    const cart = await res.json();

    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = cart.item_count;
    });

  })
})