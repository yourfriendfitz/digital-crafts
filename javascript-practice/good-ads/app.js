// call the getRandomAd function

// get the adImage by id

// set the src property to the new random ad image
adElement = document.getElementById("adImage");

const changeAd = () => {
  adElement.outerHTML = `<img id="adImage" src="${getRandomAd()}" style="width:300px;height:300px" />`;
};

document.addEventListener("load", changeAd());
