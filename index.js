let CATALOG = [];

function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}


// https://api.myjson.com/bins/esicc
fetch('server/catalog.json')
.then(result => result.json())
.then(body => {
  CATALOG = body;
  render();
})
.catch(error => {
  console.log(error)
})