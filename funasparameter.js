const arr = () => {
  console.log("hello");
};

const hello = (param) => {
  param();
};
hello(arr);
