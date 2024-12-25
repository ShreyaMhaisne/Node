function mentor(o) {
  o();
}

mentor(() => {
  console.log("mentor");
});
