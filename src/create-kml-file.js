import { count } from "./Plot"; //import { origLat, origLong, fileName } from "./Plot"
// var angles = require('angles'); angles.SCALE = 360;

function angle(deg, min) { return (deg) + (min / 60) }
function toRadians(Deg) { return Deg * Math.PI / 180 }

let $1 = '<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">';
let $2 = '<Document>\n<name>Untitled Project</name>\n<gx:CascadingStyle kml:id="__managed_style_2B0C170D2A278B35F0EF">';
let $3 = '<Style>\n<IconStyle>\n<scale>1.2</scale>\n<Icon>\n<href>https://earth.google.com/earth/rpc/cc/icon?color=1976d2&amp;id=2000&amp;scale=4</href>';
let $4 = '</Icon>\n<hotSpot x="64" y="128" xunits="pixels" yunits="insetPixels"/>\n</IconStyle>\n<LabelStyle>\n</LabelStyle>\n<LineStyle>\n<color>ff2dc0fb</color>';
let $5 = '<width>4.8</width>\n</LineStyle>\n<PolyStyle>\n<color>40ffffff</color>\n</PolyStyle>\n<BalloonStyle>\n<displayMode>hide</displayMode>\n</BalloonStyle>\n</Style>\n</gx:CascadingStyle>';
let $6 = '<gx:CascadingStyle kml:id="__managed_style_1066D1B849278B35F0EF">\n<Style>\n<IconStyle>\n<Icon>\n<href>https://earth.google.com/earth/rpc/cc/icon?color=1976d2&amp;id=2000&amp;scale=4</href>\n</Icon>';
let $7 = '<hotSpot x="64" y="128" xunits="pixels" yunits="insetPixels"/>\n</IconStyle>\n<LabelStyle>\n</LabelStyle>\n<LineStyle>\n<color>ff2dc0fb</color>\n<width>3.2</width>\n</LineStyle>';
let $8 = '<PolyStyle>\n<color>40ffffff</color>\n</PolyStyle>\n<BalloonStyle>\n<displayMode>hide</displayMode>\n</BalloonStyle>\n</Style>\n</gx:CascadingStyle>';
let $9 = '<StyleMap id="__managed_style_00CBE2F525278B35F0EF">\n<Pair>\n<key>normal</key>\n<styleUrl>#__managed_style_1066D1B849278B35F0EF</styleUrl>\n</Pair>\n<Pair>\n<key>highlight</key>\n<styleUrl>#__managed_style_2B0C170D2A278B35F0EF</styleUrl>\n</Pair>';
let $10 = '</StyleMap>\n<Placemark id="">\n<name>Untitled Polygon</name>\n<LookAt>\n<longitude>120.617505005376</longitude>\n<latitude>15.44651080137277</latitude>\n<altitude>0</altitude>\n<heading>0</heading>\n<tilt>0</tilt>\n<gx:fovy>30.00000244104212</gx:fovy>\n<range>7999.487717386801</range>\n<altitudeMode>absolute</altitudeMode>\n</LookAt>';
let $11 = '<styleUrl>#__managed_style_00CBE2F525278B35F0EF</styleUrl>\n<Polygon>\n<outerBoundaryIs>\n<LinearRing>\n<coordinates>';
const $1st = $1 + "\n" + $2 + "\n" + $3 + "\n" + $4 + "\n" +
    $5 + "\n" + $6 + "\n" + $7 + "\n" + $8 + "\n" + $9 + "\n" + $10 + "\n" + $11 + "\n";
let $12 = '\n</coordinates>\n</LinearRing>\n</outerBoundaryIs>\n</Polygon>\n</Placemark>';
let $13 = '\n</Document>\n</kml>';
//let line1 = angle(document.getElementById("deg1").value, document.getElementById("min1").value, document.getElementById("sec1").value);
// Lat is 15.432510, Long is 120.603607
let objectDir1st; let objectDeg; let objectMin; let objectDir2nd; let objectDist;
let origLat, origLong, origDir1st, origDeg, origMin, origDir2nd, origDist, fileName;

const downloadKmlFile = () => {
    const element = document.createElement("a");
    objectDir1st = document.querySelectorAll(".Dir1st" + count);
    objectDeg = document.querySelectorAll('.Degclass input[value]');
    objectMin = document.querySelectorAll('.Minclass input[value]');
    objectDir2nd = document.querySelectorAll(".Dir2nd" + count);
    objectDist = document.querySelectorAll('.Distclass input[value]');

    origLat = Number(document.querySelector("#origLatId").value);
    origLong = Number(document.querySelector("#origLongId").value)
    origDir1st = document.querySelector(".Dir1stIniclass select").value
    origDeg = Number(document.querySelector("#origDegId").value);
    origMin = Number(document.querySelector("#origMinId").value)
    origDir2nd = document.querySelector(".Dir2ndIniclass select").value
    origDist = Number(document.querySelector("#origDistId").value)
    if (origDir1st === "card1") {
        console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return
    }
    if (origDir2nd === "card2") {
        console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return
    }
    if (origLat === "" || origLat === " ") {
        console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return
    }
    if (origLong === "" || origLong === " ") {
        console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return
    }

    fileName = document.querySelector("#fileNameId").value

    const arrayDir1st = []; const arrayDeg = []; const arrayMin = []; const arrayDir2nd = []; const arrayDist = [];
    let arrayLat = []; arrayLat.push(origLat)
    let arrayLong = []; arrayLong.push(origLong)
    arrayDir1st.push(origDir1st, objectDir1st.value); arrayDeg.push(origDeg, objectDeg.value);
    arrayMin.push(origMin, objectMin.value); arrayDir2nd.push(origDir2nd, objectDir2nd.value);
    arrayDist.push(origDist, objectDist.value)

    const final_array = [];
    const points_array = [];
    let c = 0; let o = 0; let i = 0; let t = 0; let u = 0; //console.log(arrayDir1st[0].value)
    while (c < objectDir1st.length) { arrayDir1st.push(objectDir1st[c].value); c++; }
    while (o < objectDeg.length) { if (objectDeg[o].value === "") { alert("Please check your inputs."); return } arrayDeg.push(objectDeg[o].getAttribute('value')); o++; }
    while (i < objectMin.length) { if (objectMin[i].value === "") { alert("Please check your inputs."); return } arrayMin.push(objectMin[i].getAttribute('value')); i++; }
    while (t < objectDir2nd.length) { arrayDir2nd.push(objectDir2nd[t].value); t++; }
    while (u < objectDist.length) { if (objectDist[u].value === "" || objectDist[u].value === " ") { alert("Please check your inputs."); return } arrayDist.push(objectDist[u].getAttribute('value')); u++; }

    for (let s = 0; s <= (count - 1); s++) {
        if (arrayDir1st[s] === "north" && arrayDir2nd[s] === "west") {
            arrayLat.push(arrayLat[arrayLat.length - 1] +
                (Math.cos(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            arrayLong.push(arrayLong[arrayLong.length - 1] -
                (Math.sin(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            console.log(`Lat${i} for NW: ${arrayLat}\nLong${i} for NW: ${arrayLong}`)
        }
        else if (arrayDir1st[s] === "north" && arrayDir2nd[s] === "east") {
            arrayLat.push(arrayLat[arrayLat.length - 1] +
                (Math.cos(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            arrayLong.push(arrayLong[arrayLong.length - 1] +
                (Math.sin(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            console.log(`Lat${i} for NE: ${arrayLat}\nLong${i} for NE: ${arrayLong}`)
        }
        else if (arrayDir1st[s] === "south" && arrayDir2nd[s] === "west") {
            arrayLat.push(arrayLat[arrayLat.length - 1] -
                (Math.cos(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            arrayLong.push(arrayLong[arrayLong.length - 1] -
                (Math.sin(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            console.log(`Lat${i} for SW: ${arrayLat}\nLong${i} for SW: ${arrayLong}`)
        }
        else if (arrayDir1st[s] === "south" && arrayDir2nd[s] === "east") {
            arrayLat.push(arrayLat[arrayLat.length - 1] -
                (Math.cos(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            arrayLong.push(arrayLong[arrayLong.length - 1] +
                (Math.sin(toRadians(angle(arrayDeg[s], arrayMin[s]) / 10)) * arrayDist[s]) / 110000)
            console.log(`Lat${i} for SE: ${arrayLat}\nLong${i} for SE: ${arrayLong}`)
        }
        else { console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return }
        if (fileName == null || fileName === "") { console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return }
        /*if (arrayDir2nd[s] === "west") {
            arrayLong.push(arrayLong[arrayLong.length - 1] -
                (Math.sin(toRadians(angle(arrayDeg[s], arrayMin[s]))) * arrayDist[s]) / 10000)
        }
        else if (arrayDir2nd[s] === "east") {
            arrayLong.push(arrayLong[arrayLong.length - 1] +
                (Math.sin(toRadians(angle(arrayDeg[s], arrayMin[s]))) * arrayDist[s]) / 10000)
        }
        else { console.log("Something went wrong. Gave you an alert."); alert("Please check your inputs."); return }*/
    }
    console.log(`arrayLong: ${arrayLong}\n arrayLat: ${arrayLat}`)
    let z = 0
    while (z <= count) {
        final_array.push(`${arrayLong[z]},${arrayLat[z]},0`)
        z++
    }
    for (let y = 0; y < count; y++) {
        if (y === 0) {
            points_array.push(`<Placemark id=""><name>Point of BLLM</name><LookAt>\n<longitude>${arrayLong[y]}</longitude>\n
        <latitude>${arrayLat[y]}</latitude>\n<altitude>0</altitude>\n
        <heading>0</heading>\n<tilt>0</tilt>\n<gx:fovy>30.00000244104212</gx:fovy>\n<range>431.5834488848486</range>\n
        <altitudeMode>absolute</altitudeMode>\n</LookAt>\n<styleUrl>#__managed_style_00CBE2F525278B35F0EF</styleUrl>\n
        <Point>\n<coordinates>${arrayLong[y]},${arrayLat[y]},0</coordinates>\n</Point>\n</Placemark>`)
        }
        else {
            points_array.push(`<Placemark id=""><name>Point ${y}</name><LookAt>\n<longitude>${arrayLong[y]}</longitude>\n
        <latitude>${arrayLat[y]}</latitude>\n<altitude>0</altitude>\n
        <heading>0</heading>\n<tilt>0</tilt>\n<gx:fovy>30.00000244104212</gx:fovy>\n<range>431.5834488848486</range>\n
        <altitudeMode>absolute</altitudeMode>\n</LookAt>\n<styleUrl>#__managed_style_00CBE2F525278B35F0EF</styleUrl>\n
        <Point>\n<coordinates>${arrayLong[y]},${arrayLat[y]},0</coordinates>\n</Point>\n</Placemark>`)
        }
    }
    final_array.splice(-1, 1);
    final_array.push(`${arrayLong[1]},${arrayLat[1]},0`)
    console.log(`Row info: \n${arrayDir1st}\n${arrayDeg}\n${arrayMin}\n${arrayDir2nd}\n${arrayDist}\n`)
    console.log("The final_array:\n" + final_array)
    const file = new Blob([
        $1st
        + final_array.join("\n")
        + $12 + points_array.join("\n") + $13
    ],
        { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}.`
    document.body.appendChild(element);
    element.click();
}

export default downloadKmlFile;
console.log("bye!")