const log = console.log;

let url =
  "https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=a7aaf907-e0d5-4865-8ec5-2145a2c443d5";

const Get = (yourUrl) => {
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  console.log(Httpreq)
  return Httpreq.responseText;
}

let jsonObj = JSON.parse(Get(url))
log(jsonObj)