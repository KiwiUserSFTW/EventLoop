export let START_CODE = 
`console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve("3").then((result) => {
    console.log(result);
  });
}, 1000);

console.log("4"); `