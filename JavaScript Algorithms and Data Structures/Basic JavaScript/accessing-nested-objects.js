const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// const gloveBoxContents = undefined;
const gloveBoxContents = myStorage.car.inside["glove box"];
