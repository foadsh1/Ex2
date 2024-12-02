//Students names:Foad shalata  ID:314743097       Rabea bader   ID:207530478

const num = 237;
let bool = true;
for (let first = 2; first < num; first++) {
  for (let i = 2; i < first && bool; i++) {
    if (first % i == 0) {
      bool = false;
    }
  }
  if (bool) {
    console.log(first);

  }
  bool = true;
}