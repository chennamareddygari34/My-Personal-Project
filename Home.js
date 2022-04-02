const images = [
  "//img.tttcdn.com/advertising/2022/3/11/mGV1Fm1556807806.jpg",
  "//img.tttcdn.com/advertising/2022/4/1/k00ElY-177868946.jpg",
  "//img.tttcdn.com/advertising/2022/3/2/HPg3Ky1965352620.jpg",
  "//img.tttcdn.com/advertising/2022/3/17/x2JdWL814569952.jpg",
];

const data = [{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/R/U/RTYSY-B14W-EU/RTYSY-B14W-EU-1-cfac-2OWB.jpg",
    "name": "Bicycle",
    "description": "Nubility B14 super cycle",
    "discountedprice": "$623 .25",
    "actualprice": "$1099"
}, {
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/R/E21203GR/E21203GR-1-b93f-qCsZ.jpg",
    "name": "Radio",
    "description": "Emergency Radio Hank crank sole",
    "discountedprice": "$20.26",
    "actualprice": "$30.22"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/B/PAA2597B/PAA2597B-1-5527-PS4j.jpg",
    "name": "Xiamo 55w wireless charger",
    "description": "Wireless charger for fast charger",
    "discountedprice": "$30.26",
    "actualprice": "$99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/R/1/RM14051/RM14051-1-975c-0JFw.jpg",
    "name": "forklift",
    "description": "Fork lift toy for children",
    "discountedprice": "$29.99",
    "actualprice": "$49.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/C/1/C12306B-1/C12306B-1-1-1ba3-zxCb.jpg",
    "name": "Wireless Keyboard",
    "description": "78 keys keyboard using bluetooth and very light weight",
    "discountedprice": "$21.99",
    "actualprice": "$32.00"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/C/P/C12297P/C12297P-1-ac06-dur6.jpg",
    "name": "Mibro color smart watch",
    "description": "multiple usage watch",
    "discountedprice": "$40.90",
    "actualprice": "$66.25"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/I/8/I3498/I3498-1-6c18-SUfv.jpg",
    "name": "Acoustic Guitar",
    "description": "Plays Beautiful music",
    "discountedprice": "$149.99",
    "actualprice": "$199.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/D/8/D10478/D10478-1-8989-rg1N.jpg",
    "name": "Tripod",
    "description": "Flexible to shoot videos and group photos",
    "discountedprice": "$69.99",
    "actualprice": "150.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/R/S/RM5060B-US/RM5060B-US-1-44ce-3JxD.jpg",
    "name": "Drone camera",
    "description": "Drone camera with remote control",
    "discountedprice": "$165.99",
    "actualprice": "$299.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/K/K1867/K1867-2-b802.JPG",
    "name": "Rechareble light",
    "description": "charges with in 2 hours",
    "discountedprice": "$23.99",
    "actualprice": "$50"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/L/L0144/L0144-8-af20.JPG",
    "name": "Ac to Dc",
    "description": "ac to dc adapoter for backup purposes",
    "discountedprice": "$35.99",
    "actualprice": "70.00"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/L/L0374UK/L0374UK-1-31ec-CgoC.jpg",
    "name": "15 w disco lights",
    "description": "usable for parties and functions",
    "discountedprice": "$100.00",
    "actualprice": "500.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/1/E20431/E20431-1-11fa-kiCs.jpg",
    "name": "Tactical window braker set",
    "description": "Can be used for breaking windows and glasses in bad situatuations",
    "discountedprice": "$49.99",
    "actualprice": "$149.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/W/E20560W/E20560W-1-354b-RZOB.jpg",
    "name": "Bluetooth speaker",
    "description": "25 w rechargeable bluetooth speaker with extra bass",
    "discountedprice": "$29.99",
    "actualprice": "$79.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/C/8/C12248/C12248-1-c904-aO1O.jpg",
    "name": "wired gaming mouse",
    "description": "RGB wired gaming mouse with better dp speeds",
    "discountedprice": "$29.99",
    "actualprice": "$44.45"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/H/U/H18400EU/H18400EU-1-945e-rr39.jpg",
    "name": "Levinho fresh fruit juicer",
    "description": "For all kinds of fruits and vegetables extracts 99 percent juice",
    "discountedprice": "%99.99",
    "actualprice": "$149.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/P/U/PAS0590EU/PAS0590EU-1-c2ff-H39N.jpg",
    "name": "Honor wifi router",
    "description": "wifi 5.0 compatible and gives upto 30mbps",
    "discountedprice": "$45.55",
    "actualprice": "$99.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/D/6/D6226/D6226-1-90eb-TDb7.jpg",
    "name": "Table top tripod",
    "description": "Gimbal stabillized photo and video shooter",
    "discountedprice": "$33.33",
    "actualprice": "$69.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/K/3/K19753/K19753-1-b073-PtbW.jpg",
    "name": "Usb Dash Camera",
    "description": "web cam for multi purposes",
    "discountedprice": "$20.22",
    "actualprice": "$99.99"
},
{
    "imgsrc": "https://img.tttcdn.com/product/xy/220/220/p/gu1/E/0/E20300/E20300-1-746c-Zt64.jpg",
    "name": "Electronic digital verier calipers",
    "description": "very accurate measurable callipers",
    "discountedprice": "$45.55",
    "actualprice": "$99.99"
}
]
var i=0;
const changesrc = () =>{
    i = i+1;
    document.getElementById("slider").src = images[i%4];
    console.log('hi');
} 

var timer = setInterval(() => {
    changesrc()
}, 3000);

const loaddata = (id , s, e) =>{
    const list1 = document.getElementById(id)

    for(let i=s ;i<=e; i++)
    {
        const div = document.createElement("div")
        div.className="card"
        const img = document.createElement("img")
        img.src = data[i].imgsrc;
        const title = document.createElement("p")
        title.innerHTML=data[i].name;

        const addtocartprice = document.createElement("div")
        const pricediv = document.createElement("div")
        pricediv.className="pricediv"
         
        const price = document.createElement("h2")
        price.innerHTML= data[i].discountedprice;
        const oldprice = document.createElement("s")
        oldprice.innerHTML= data[i].actualprice;

        const Button = document.createElement("button")
        Button.innerHTML = "Add To Cart"

        pricediv.append(price)
        pricediv.append(oldprice)

        addtocartprice.append(pricediv)
        addtocartprice.append(Button)

        div.append(img , title, addtocartprice)
        list1.append(div);
    }
}
loaddata("items1", 0 ,9);
loaddata("items2", 10,14);
loaddata("items3", 15 ,20);


const redir = () =>{
    window.location.href = "login.html"
}

