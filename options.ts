interface SmoothieOptions {
  blueberry?: boolean;
  strawberries?: boolean;
  passionfruit?: boolean;
  nutbutter?: boolean;
}

const makeSmoothie = (options: SmoothieOptions) => {
  let smoothie = {
    blueberry: false,
    strawberries: false,
    passionfruit: false,
    nutbutter: false,
  };

  if (options.blueberry) {
    smoothie.blueberry = true;
  }

  if (options.strawberries) {
    smoothie.strawberries = true;
  }

  if (options.passionfruit) {
    smoothie.passionfruit = true;
  }

  if (options.nutbutter) {
    smoothie.nutbutter = true;
  }

  return smoothie;
};

const smooth1 = makeSmoothie({ blueberry: true, strawberries: true });
const smooth2 = makeSmoothie({
  blueberry: true,
  strawberries: true,
  passionfruit: true,
});
const smooth3 = makeSmoothie({
  blueberry: true,
  strawberries: true,
  passionfruit: true,
  nutbutter: true,
});
const smooth4 = makeSmoothie({});

console.log(smooth1);
console.log(smooth2);
console.log(smooth3);
console.log(smooth4);
