document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
<div>
  <h4>Console out promise all.</h4>
</div>
`;

// const getFoo = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//     let data = await response.json();
//     console.log("Todos Data: ", data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const getBar = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/4");
//     let data = await response.json();
//     console.log("Posts Data: ", data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const getAll = async (link, name) => {
//   try {
//     console.log(`START ${name}`)
//     let response = await fetch(link);
//     let data = await response.json();
//     console.log(`END ${name}: `, data);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const links = [
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/todos/4'
// ]
// const fetcher = async () => {
// const result = await Promise.all([getAll(links[0], 'posts'), getAll(links[1], 'todos')])
//   .then(res => {return res})
//   .catch(err => console.error(err));

// console.log('Final Result: ', result)
// }
// fetcher()

// const countHelper = myTask => {
//   let bigNum = 0;
//   let smallNum = 0;
//   if (myTask === "big") {
//     while (bigNum < 10000) {
//       bigNum = bigNum + 1;
//     }
//   } else if (myTask === "small") {
//     while (smallNum < 100) {
//       smallNum = smallNum + 1;
//     }
//   }
//   if (bigNum !== 0) {
//     console.log("BIG result: ", bigNum);
//     return bigNum;
//   } else if (smallNum !== 0) {
//     console.log("small result: ", smallNum);
//     return smallNum;
//   }
// };

// const bigCount = async () => {
//   try {
//     let data = await countHelper("big");

//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// const smallCount = async () => {
//   try {
//     let data = await countHelper("small");
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// Promise.all([bigCount(), smallCount()])
//   .then(res => console.log("My Count Results: ", res))
//   .catch(err => console.error(err));

// const sleep = (ms) => {
//   console.log(`starting ${ms}`);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`done ${ms}`);
//       resolve(ms);
//     }, ms);
//   });
// }

class Timer {
  constructor(time, count) {
    this.time = time;
    this.count = count;
  }
  sleep() {
    console.log(`class-starting ${this.time}`);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`class-done ${this.time}`);
        // resolve(this.time);
        resolve(this.fetcher());
      }, this.time);
    });
  }
  async fetcher() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log("fetch");
    const total = await response.reduce((acc, val) => {
      const num = val.userId;
      return acc + num;
    });
    return total;
  }
  counter() {
    console.log(`class-starting-counting ${this.count}`);
    for (let i = 0; i <= this.count; i++) {
      if (i === this.count) {
        console.log(`class-ending-counting ${this.count}`);
        return this.count;
      }
    }
  }
}

let userSelected = [5000, 2, 2000, 400];
const promiseClasses = userSelected.map((x, i) => {
  const obj = new Timer(x, x);
  return obj;
});

const multiBall = async promises => {
  console.log("This will be executed in parallel using Promise.all(...)");
  const start = new Date();
  const run = promises.map(x => x.sleep());
  // const [a, b, c] = await Promise.all([sleep(3000), sleep(1000), sleep(2)]);
  // console.log(`sleeping done - got ${a} ${b} ${c} in ${new Date() - start}`);
  const data = await Promise.all(run);
  const final = data.join(" ");
  console.log(
    `sleeping done - started in ${start.getMilliseconds()} and got ${final} in ${new Date() -
      start}`
  );
};
multiBall(promiseClasses);
