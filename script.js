// ─── DATA STORE ───
const PLATFORMS = [
  { id:'amazon',   label:'Amazon.in',         logo:'A', color:'#FF9900' },
  { id:'flipkart', label:'Flipkart',           logo:'F', color:'#2874F0' },
  { id:'myntra',   label:'Myntra',             logo:'M', color:'#FF3F6C' },
  { id:'meesho',   label:'Meesho',             logo:'Me', color:'#9C27B0' },
  { id:'snapdeal', label:'Snapdeal',           logo:'S', color:'#E40026' },
  { id:'jiomart',  label:'JioMart',            logo:'J', color:'#0A4FE8' },
  { id:'croma',    label:'Croma',              logo:'C', color:'#00A651' },
  { id:'reliance', label:'Reliance Digital',   logo:'R', color:'#004B9B' },
];

const PRODUCTS = {
  smartphones: [
    {
      name:'iPhone 15 (128GB, Black)', emoji:'📱', img:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80', mrp:79900,
      platforms: [
        { pid:'flipkart', price:69499, rating:4.6, reviews:18302, discount:13, delivery:'Next Day', returns:'10 days', quality:92, trust:97, tag:'best' },
        { pid:'amazon',   price:72999, rating:4.4, reviews:12841, discount:9,  delivery:'1 Day (Prime)', returns:'30 days', quality:88, trust:94, tag:'fast' },
        { pid:'meesho',   price:71200, rating:3.9, reviews:4201,  discount:11, delivery:'4–6 Days', returns:'7 days', quality:69, trust:72, tag:'budget' },
        { pid:'snapdeal', price:74500, rating:4.1, reviews:3207,  discount:7,  delivery:'3–5 Days', returns:'7 days', quality:80, trust:75, tag:'' },
        { pid:'jiomart',  price:73450, rating:4.2, reviews:2890,  discount:8,  delivery:'2–3 Days', returns:'15 days', quality:80, trust:80, tag:'' },
        { pid:'croma',    price:75990, rating:4.5, reviews:6100,  discount:5,  delivery:'Same Day', returns:'14 days', quality:90, trust:96, tag:'trusted' },
        { pid:'reliance', price:74999, rating:4.3, reviews:3400,  discount:6,  delivery:'2 Days', returns:'10 days', quality:85, trust:88, tag:'' },
      ]
    },
    {
      name:'Samsung Galaxy S24 (256GB)', emoji:'📱', img:'https://images.unsplash.com/photo-1706438459482-0e29a52ae558?w=400&q=80', mrp:79999,
      platforms: [
        { pid:'amazon',   price:67999, rating:4.5, reviews:21000, discount:15, delivery:'1 Day (Prime)', returns:'30 days', quality:91, trust:95, tag:'best' },
        { pid:'flipkart', price:69999, rating:4.4, reviews:16200, discount:13, delivery:'Next Day', returns:'10 days', quality:90, trust:93, tag:'fast' },
        { pid:'croma',    price:72999, rating:4.6, reviews:8400,  discount:9,  delivery:'Same Day', returns:'14 days', quality:92, trust:97, tag:'trusted' },
        { pid:'reliance', price:71999, rating:4.3, reviews:5100,  discount:10, delivery:'2 Days', returns:'10 days', quality:88, trust:87, tag:'' },
        { pid:'jiomart',  price:70499, rating:4.1, reviews:2700,  discount:12, delivery:'2–3 Days', returns:'15 days', quality:82, trust:80, tag:'budget' },
        { pid:'snapdeal', price:73500, rating:3.9, reviews:1900,  discount:8,  delivery:'3–5 Days', returns:'7 days', quality:75, trust:71, tag:'' },
        { pid:'meesho',   price:68999, rating:3.7, reviews:3100,  discount:14, delivery:'5–7 Days', returns:'7 days', quality:66, trust:65, tag:'' },
      ]
    },
    {
      name:'OnePlus 12 (256GB, Silky Black)', emoji:'📱', img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80', mrp:64999,
      platforms: [
        { pid:'amazon',   price:57499, rating:4.5, reviews:14300, discount:12, delivery:'1 Day (Prime)', returns:'30 days', quality:89, trust:94, tag:'best' },
        { pid:'flipkart', price:58999, rating:4.4, reviews:11800, discount:9,  delivery:'Next Day', returns:'10 days', quality:87, trust:92, tag:'' },
        { pid:'jiomart',  price:59999, rating:4.2, reviews:3100,  discount:8,  delivery:'2–3 Days', returns:'15 days', quality:81, trust:82, tag:'' },
        { pid:'meesho',   price:56500, rating:3.8, reviews:2800,  discount:13, delivery:'4–6 Days', returns:'7 days', quality:65, trust:68, tag:'budget' },
        { pid:'snapdeal', price:62000, rating:3.9, reviews:1500,  discount:5,  delivery:'3–5 Days', returns:'7 days', quality:74, trust:70, tag:'' },
        { pid:'reliance', price:60499, rating:4.3, reviews:4200,  discount:7,  delivery:'2 Days', returns:'10 days', quality:86, trust:87, tag:'' },
        { pid:'croma',    price:61999, rating:4.5, reviews:5600,  discount:5,  delivery:'Same Day', returns:'14 days', quality:90, trust:96, tag:'trusted' },
      ]
    },
  ],
  laptops: [
    {
      name:'MacBook Air M2 (8GB/256GB)', emoji:'💻', img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', mrp:114900,
      platforms: [
        { pid:'amazon',   price:99900, rating:4.8, reviews:32000, discount:13, delivery:'2 Days', returns:'10 days', quality:97, trust:96, tag:'best' },
        { pid:'flipkart', price:101900, rating:4.7, reviews:24000, discount:11, delivery:'Next Day', returns:'10 days', quality:96, trust:94, tag:'' },
        { pid:'croma',    price:103990, rating:4.9, reviews:12000, discount:9,  delivery:'Same Day', returns:'14 days', quality:97, trust:99, tag:'trusted' },
        { pid:'reliance', price:104999, rating:4.7, reviews:7800,  discount:9,  delivery:'2 Days', returns:'10 days', quality:95, trust:90, tag:'' },
        { pid:'jiomart',  price:107000, rating:4.3, reviews:4100,  discount:7,  delivery:'3–4 Days', returns:'15 days', quality:83, trust:80, tag:'' },
        { pid:'meesho',   price:97500, rating:3.5, reviews:1200,   discount:15, delivery:'6–8 Days', returns:'5 days', quality:55, trust:50, tag:'budget' },
        { pid:'snapdeal', price:109000, rating:3.8, reviews:900,   discount:5,  delivery:'4–5 Days', returns:'7 days', quality:70, trust:65, tag:'' },
      ]
    },
    {
      name:'Dell XPS 15 (i7, 16GB, 512GB)', emoji:'💻', img:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80', mrp:149990,
      platforms: [
        { pid:'amazon',   price:124999, rating:4.6, reviews:9800, discount:17, delivery:'2 Days', returns:'10 days', quality:92, trust:95, tag:'best' },
        { pid:'flipkart', price:127999, rating:4.5, reviews:7600, discount:15, delivery:'Next Day', returns:'10 days', quality:91, trust:92, tag:'' },
        { pid:'croma',    price:129990, rating:4.7, reviews:4200, discount:13, delivery:'Same Day', returns:'14 days', quality:93, trust:98, tag:'trusted' },
        { pid:'reliance', price:131000, rating:4.4, reviews:3100, discount:13, delivery:'2 Days', returns:'10 days', quality:88, trust:86, tag:'' },
        { pid:'jiomart',  price:132000, rating:4.1, reviews:1900, discount:12, delivery:'3–4 Days', returns:'15 days', quality:79, trust:77, tag:'' },
        { pid:'meesho',   price:122000, rating:3.4, reviews:700,  discount:19, delivery:'6–8 Days', returns:'5 days', quality:52, trust:48, tag:'budget' },
        { pid:'snapdeal', price:135000, rating:3.7, reviews:600,  discount:10, delivery:'4–5 Days', returns:'7 days', quality:67, trust:60, tag:'' },
      ]
    },
  ],
  fashion: [
    {
      name:"Levi's 511 Slim Fit Jeans (Blue)", emoji:'👖', img:'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&q=80', mrp:3999,
      platforms: [
        { pid:'myntra',   price:2399, rating:4.5, reviews:18400, discount:40, delivery:'3 Days', returns:'30 days', quality:88, trust:92, tag:'best' },
        { pid:'amazon',   price:2799, rating:4.3, reviews:12100, discount:30, delivery:'1 Day', returns:'30 days', quality:85, trust:93, tag:'' },
        { pid:'meesho',   price:1999, rating:3.7, reviews:9400,  discount:50, delivery:'5–7 Days', returns:'7 days', quality:60, trust:55, tag:'budget' },
        { pid:'flipkart', price:2599, rating:4.2, reviews:8700,  discount:35, delivery:'2 Days', returns:'10 days', quality:82, trust:88, tag:'' },
        { pid:'snapdeal', price:2899, rating:3.9, reviews:3200,  discount:28, delivery:'4–5 Days', returns:'7 days', quality:70, trust:68, tag:'' },
        { pid:'jiomart',  price:2999, rating:4.0, reviews:2100,  discount:25, delivery:'3–4 Days', returns:'15 days', quality:76, trust:78, tag:'' },
        { pid:'reliance', price:3199, rating:4.1, reviews:1800,  discount:20, delivery:'2 Days', returns:'10 days', quality:80, trust:84, tag:'' },
      ]
    },
    {
      name:'H&M Oversized T-Shirt (White)', emoji:'👕', img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', mrp:1299,
      platforms: [
        { pid:'myntra',   price:649, rating:4.4, reviews:24100, discount:50, delivery:'3 Days', returns:'30 days', quality:82, trust:91, tag:'best' },
        { pid:'meesho',   price:499, rating:3.6, reviews:31000, discount:62, delivery:'5–7 Days', returns:'7 days', quality:55, trust:52, tag:'budget' },
        { pid:'amazon',   price:799, rating:4.2, reviews:15400, discount:38, delivery:'1 Day', returns:'30 days', quality:79, trust:92, tag:'' },
        { pid:'flipkart', price:699, rating:4.1, reviews:12200, discount:46, delivery:'2 Days', returns:'10 days', quality:76, trust:85, tag:'' },
        { pid:'snapdeal', price:849, rating:3.8, reviews:4100,  discount:35, delivery:'4–5 Days', returns:'7 days', quality:65, trust:62, tag:'' },
        { pid:'jiomart',  price:899, rating:3.9, reviews:2800,  discount:31, delivery:'3–4 Days', returns:'15 days', quality:68, trust:72, tag:'' },
        { pid:'reliance', price:949, rating:4.0, reviews:1600,  discount:27, delivery:'2 Days', returns:'10 days', quality:73, trust:79, tag:'' },
      ]
    },
  ],
  appliances: [
    {
      name:'Samsung 55" 4K Smart TV', emoji:'📺', img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80', mrp:79990,
      platforms: [
        { pid:'amazon',   price:49999, rating:4.5, reviews:28000, discount:38, delivery:'3–5 Days', returns:'10 days', quality:90, trust:95, tag:'best' },
        { pid:'flipkart', price:51999, rating:4.4, reviews:21400, discount:35, delivery:'4–6 Days', returns:'10 days', quality:89, trust:92, tag:'' },
        { pid:'croma',    price:54990, rating:4.7, reviews:14200, discount:31, delivery:'2–3 Days', returns:'14 days', quality:93, trust:98, tag:'trusted' },
        { pid:'reliance', price:52999, rating:4.5, reviews:9800,  discount:34, delivery:'2–4 Days', returns:'10 days', quality:88, trust:89, tag:'' },
        { pid:'jiomart',  price:53999, rating:4.2, reviews:6400,  discount:33, delivery:'4–5 Days', returns:'15 days', quality:81, trust:80, tag:'' },
        { pid:'meesho',   price:48999, rating:3.4, reviews:2100,  discount:39, delivery:'7–10 Days', returns:'5 days', quality:50, trust:45, tag:'budget' },
        { pid:'snapdeal', price:55000, rating:3.8, reviews:2800,  discount:31, delivery:'5–7 Days', returns:'7 days', quality:66, trust:63, tag:'' },
      ]
    },
    {
      name:'LG 8kg Washing Machine (Front Load)', emoji:'🫧', img:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80', mrp:54990,
      platforms: [
        { pid:'amazon',   price:37999, rating:4.4, reviews:16800, discount:31, delivery:'3–5 Days', returns:'10 days', quality:88, trust:94, tag:'best' },
        { pid:'flipkart', price:38999, rating:4.3, reviews:13200, discount:29, delivery:'4–6 Days', returns:'10 days', quality:87, trust:91, tag:'' },
        { pid:'croma',    price:41990, rating:4.6, reviews:8900,  discount:24, delivery:'2–3 Days', returns:'14 days', quality:91, trust:97, tag:'trusted' },
        { pid:'reliance', price:39999, rating:4.4, reviews:7100,  discount:27, delivery:'2–4 Days', returns:'10 days', quality:86, trust:88, tag:'' },
        { pid:'jiomart',  price:40999, rating:4.1, reviews:4600,  discount:25, delivery:'4–5 Days', returns:'15 days', quality:79, trust:78, tag:'' },
        { pid:'snapdeal', price:42500, rating:3.7, reviews:2100,  discount:23, delivery:'5–7 Days', returns:'7 days', quality:62, trust:60, tag:'' },
        { pid:'meesho',   price:36999, rating:3.2, reviews:1400,  discount:33, delivery:'7–10 Days', returns:'5 days', quality:45, trust:42, tag:'budget' },
      ]
    },
  ],
  footwear: [
    {
      name:'Nike Air Max 270 (Black/White)', emoji:'👟', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', mrp:12995,
      platforms: [
        { pid:'myntra',   price:7797, rating:4.6, reviews:21400, discount:40, delivery:'3 Days', returns:'30 days', quality:91, trust:93, tag:'best' },
        { pid:'amazon',   price:8499, rating:4.4, reviews:14200, discount:35, delivery:'1 Day', returns:'30 days', quality:87, trust:94, tag:'' },
        { pid:'flipkart', price:8999, rating:4.3, reviews:9800,  discount:31, delivery:'2 Days', returns:'10 days', quality:84, trust:89, tag:'' },
        { pid:'meesho',   price:6999, rating:3.5, reviews:7600,  discount:46, delivery:'5–7 Days', returns:'7 days', quality:55, trust:50, tag:'budget' },
        { pid:'snapdeal', price:9499, rating:3.8, reviews:3400,  discount:27, delivery:'4–5 Days', returns:'7 days', quality:68, trust:65, tag:'' },
        { pid:'jiomart',  price:9999, rating:4.0, reviews:2700,  discount:23, delivery:'3–4 Days', returns:'15 days', quality:74, trust:76, tag:'' },
        { pid:'reliance', price:10499, rating:4.2, reviews:2100, discount:19, delivery:'2 Days', returns:'10 days', quality:80, trust:82, tag:'' },
      ]
    },
  ],
  books: [
    {
      name:'Atomic Habits — James Clear', emoji:'📚', img:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80', mrp:799,
      platforms: [
        { pid:'amazon',   price:399, rating:4.8, reviews:84000, discount:50, delivery:'1 Day', returns:'7 days', quality:95, trust:97, tag:'best' },
        { pid:'flipkart', price:449, rating:4.7, reviews:54000, discount:44, delivery:'2 Days', returns:'7 days', quality:93, trust:92, tag:'' },
        { pid:'meesho',   price:349, rating:3.9, reviews:21000, discount:56, delivery:'5–7 Days', returns:'5 days', quality:70, trust:65, tag:'budget' },
        { pid:'snapdeal', price:479, rating:4.1, reviews:12100, discount:40, delivery:'3–5 Days', returns:'7 days', quality:78, trust:74, tag:'' },
        { pid:'jiomart',  price:419, rating:4.3, reviews:8900,  discount:48, delivery:'2–3 Days', returns:'7 days', quality:80, trust:80, tag:'' },
        { pid:'reliance', price:469, rating:4.4, reviews:4200,  discount:41, delivery:'2 Days', returns:'7 days', quality:82, trust:85, tag:'' },
        { pid:'croma',    price:499, rating:4.2, reviews:2100,  discount:38, delivery:'Same Day', returns:'14 days', quality:85, trust:90, tag:'' },
      ]
    },
  ],
  beauty: [
    {
      name:"L'Oréal Paris Serum (30ml)", emoji:'✨', img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80', mrp:1499,
      platforms: [
        { pid:'myntra',   price:899, rating:4.5, reviews:18400, discount:40, delivery:'3 Days', returns:'15 days', quality:88, trust:91, tag:'best' },
        { pid:'amazon',   price:999, rating:4.4, reviews:14100, discount:33, delivery:'1 Day', returns:'30 days', quality:85, trust:93, tag:'' },
        { pid:'flipkart', price:1049, rating:4.2, reviews:9700,  discount:30, delivery:'2 Days', returns:'10 days', quality:82, trust:88, tag:'' },
        { pid:'meesho',   price:749, rating:3.6, reviews:21000, discount:50, delivery:'5–7 Days', returns:'7 days', quality:55, trust:52, tag:'budget' },
        { pid:'snapdeal', price:1099, rating:3.9, reviews:4200,  discount:27, delivery:'4–5 Days', returns:'7 days', quality:68, trust:66, tag:'' },
        { pid:'jiomart',  price:1149, rating:4.0, reviews:3100,  discount:23, delivery:'3–4 Days', returns:'15 days', quality:72, trust:74, tag:'' },
        { pid:'reliance', price:1199, rating:4.1, reviews:2400,  discount:20, delivery:'2 Days', returns:'10 days', quality:76, trust:80, tag:'' },
      ]
    },
  ],
  sports: [
    {
      name:'Decathlon Artengo Racket Set', emoji:'🎾', img:'https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=400&q=80', mrp:2999,
      platforms: [
        { pid:'amazon',   price:1799, rating:4.4, reviews:8900, discount:40, delivery:'1 Day', returns:'30 days', quality:85, trust:93, tag:'best' },
        { pid:'flipkart', price:1899, rating:4.3, reviews:6700, discount:37, delivery:'2 Days', returns:'10 days', quality:82, trust:89, tag:'' },
        { pid:'meesho',   price:1499, rating:3.6, reviews:4200, discount:50, delivery:'5–7 Days', returns:'7 days', quality:58, trust:54, tag:'budget' },
        { pid:'snapdeal', price:1999, rating:4.0, reviews:2800, discount:33, delivery:'3–5 Days', returns:'7 days', quality:74, trust:70, tag:'' },
        { pid:'jiomart',  price:2099, rating:4.1, reviews:1900, discount:30, delivery:'3–4 Days', returns:'15 days', quality:76, trust:77, tag:'' },
        { pid:'reliance', price:2199, rating:4.2, reviews:1400, discount:27, delivery:'2 Days', returns:'10 days', quality:79, trust:83, tag:'' },
        { pid:'croma',    price:2399, rating:4.4, reviews:900,  discount:20, delivery:'Same Day', returns:'14 days', quality:84, trust:92, tag:'' },
      ]
    },
  ],
  kitchen: [
    {
      name:'Instant Pot Duo 7-in-1 (5.7L)', emoji:'🍲', img:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80', mrp:9999,
      platforms: [
        { pid:'amazon',   price:5999, rating:4.6, reviews:28000, discount:40, delivery:'1 Day', returns:'30 days', quality:92, trust:96, tag:'best' },
        { pid:'flipkart', price:6299, rating:4.5, reviews:18400, discount:37, delivery:'2 Days', returns:'10 days', quality:89, trust:91, tag:'' },
        { pid:'croma',    price:6799, rating:4.7, reviews:8200,  discount:32, delivery:'Same Day', returns:'14 days', quality:93, trust:97, tag:'trusted' },
        { pid:'reliance', price:6599, rating:4.5, reviews:5400,  discount:34, delivery:'2 Days', returns:'10 days', quality:87, trust:87, tag:'' },
        { pid:'jiomart',  price:6499, rating:4.2, reviews:3900,  discount:35, delivery:'3–4 Days', returns:'15 days', quality:80, trust:78, tag:'' },
        { pid:'meesho',   price:5499, rating:3.4, reviews:2100,  discount:45, delivery:'6–8 Days', returns:'5 days', quality:50, trust:46, tag:'budget' },
        { pid:'snapdeal', price:6999, rating:3.8, reviews:1800,  discount:30, delivery:'4–5 Days', returns:'7 days', quality:65, trust:62, tag:'' },
      ]
    },
  ],
  toys: [
    {
      name:'LEGO Classic Bricks Set (600pcs)', emoji:'🧱', img:'https://images.unsplash.com/photo-1560961911-ba7ef651a56c?w=400&q=80', mrp:3499,
      platforms: [
        { pid:'amazon',   price:2099, rating:4.7, reviews:19200, discount:40, delivery:'1 Day', returns:'30 days', quality:93, trust:96, tag:'best' },
        { pid:'flipkart', price:2199, rating:4.6, reviews:14100, discount:37, delivery:'2 Days', returns:'10 days', quality:91, trust:92, tag:'' },
        { pid:'meesho',   price:1799, rating:3.5, reviews:8700,  discount:49, delivery:'5–7 Days', returns:'7 days', quality:52, trust:48, tag:'budget' },
        { pid:'snapdeal', price:2299, rating:4.0, reviews:4200,  discount:34, delivery:'3–5 Days', returns:'7 days', quality:75, trust:70, tag:'' },
        { pid:'jiomart',  price:2399, rating:4.1, reviews:2800,  discount:31, delivery:'3–4 Days', returns:'15 days', quality:77, trust:78, tag:'' },
        { pid:'reliance', price:2499, rating:4.3, reviews:2100,  discount:29, delivery:'2 Days', returns:'10 days', quality:81, trust:84, tag:'' },
        { pid:'croma',    price:2599, rating:4.5, reviews:1400,  discount:26, delivery:'Same Day', returns:'14 days', quality:87, trust:91, tag:'' },
      ]
    },
  ],
  audio: [
    {
      name:'Sony WH-1000XM5 Headphones', emoji:'🎧', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', mrp:34990,
      platforms: [
        { pid:'amazon',   price:24990, rating:4.7, reviews:34100, discount:29, delivery:'1 Day (Prime)', returns:'30 days', quality:95, trust:96, tag:'best' },
        { pid:'flipkart', price:26490, rating:4.6, reviews:24800, discount:24, delivery:'Next Day', returns:'10 days', quality:93, trust:93, tag:'' },
        { pid:'croma',    price:27990, rating:4.8, reviews:12600, discount:20, delivery:'Same Day', returns:'14 days', quality:96, trust:99, tag:'trusted' },
        { pid:'reliance', price:27490, rating:4.5, reviews:7900,  discount:21, delivery:'2 Days', returns:'10 days', quality:91, trust:88, tag:'' },
        { pid:'jiomart',  price:28000, rating:4.3, reviews:4100,  discount:20, delivery:'2–3 Days', returns:'15 days', quality:82, trust:81, tag:'' },
        { pid:'meesho',   price:23500, rating:3.3, reviews:2800,  discount:33, delivery:'5–7 Days', returns:'5 days', quality:48, trust:42, tag:'budget' },
        { pid:'snapdeal', price:28990, rating:3.8, reviews:2100,  discount:17, delivery:'3–5 Days', returns:'7 days', quality:65, trust:62, tag:'' },
      ]
    },
  ],
  cameras: [
    {
      name:'Canon EOS R50 (Body Only)', emoji:'📷', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80', mrp:59990,
      platforms: [
        { pid:'amazon',   price:44990, rating:4.6, reviews:8900, discount:25, delivery:'2 Days', returns:'10 days', quality:92, trust:95, tag:'best' },
        { pid:'flipkart', price:46490, rating:4.5, reviews:6700, discount:22, delivery:'Next Day', returns:'10 days', quality:90, trust:92, tag:'' },
        { pid:'croma',    price:47990, rating:4.7, reviews:4100, discount:20, delivery:'Same Day', returns:'14 days', quality:93, trust:98, tag:'trusted' },
        { pid:'reliance', price:47490, rating:4.5, reviews:3200, discount:21, delivery:'2 Days', returns:'10 days', quality:88, trust:87, tag:'' },
        { pid:'jiomart',  price:48000, rating:4.2, reviews:2100, discount:20, delivery:'3–4 Days', returns:'15 days', quality:80, trust:79, tag:'' },
        { pid:'meesho',   price:43000, rating:3.2, reviews:900,  discount:28, delivery:'6–8 Days', returns:'5 days', quality:45, trust:40, tag:'budget' },
        { pid:'snapdeal', price:49000, rating:3.7, reviews:800,  discount:18, delivery:'4–5 Days', returns:'7 days', quality:62, trust:58, tag:'' },
      ]
    },
  ],
};

// ─── STATE ───
let activePlatformFilter = 'all';
let currentCategory = null;
let currentProductIndex = 0;

// ─── HELPERS ───
function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }
function starsHtml(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  s += '☆'.repeat(5 - Math.ceil(r));
  return s;
}
function getPlatform(pid) { return PLATFORMS.find(p => p.id === pid) || { label: pid, logo: pid[0].toUpperCase(), color:'#888' }; }
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ─── PLATFORM FILTER ───
function togglePlatform(el, platform) {
  document.querySelectorAll('.platform-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activePlatformFilter = platform;
  document.querySelectorAll('.product-card[data-platform]').forEach(card => {
    if (platform === 'all') card.style.display = '';
    else card.style.display = card.dataset.platform === platform ? '' : 'none';
  });
}

// ─── SEARCH ───
function handleSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;
  const btn = document.getElementById('searchBtn');
  btn.textContent = '⏳ Scanning...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '🔍 Compare Now';
    btn.disabled = false;
    searchProducts(q);
  }, 900);
}

function searchProducts(q) {
  // Find matching products across all categories
  let matches = [];
  for (const [cat, products] of Object.entries(PRODUCTS)) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase().includes(q) || cat.includes(q)) {
        matches.push({ cat, product: products[i], idx: i });
      }
    }
  }
  if (matches.length === 0) {
    renderEmpty(q);
    return;
  }
  // Show first match
  const { cat, product } = matches[0];
  currentCategory = cat;
  renderResults(product, cat, `Search: "${q}" — ${matches.length} product${matches.length>1?'s':''} found`);
}

// ─── CATEGORY LOAD ───
function loadCategory(cat) {
  currentCategory = cat;
  // Update active nav cat
  document.querySelectorAll('.nav-cat-btn').forEach(b => b.classList.remove('active'));
  const names = { smartphones:'Smartphones',laptops:'Laptops',fashion:'Fashion',appliances:'Appliances',footwear:'Footwear',books:'Books',beauty:'Beauty',sports:'Sports',kitchen:'Kitchen',toys:'Toys',audio:'Audio',cameras:'Cameras' };
  document.querySelectorAll('.nav-cat-btn').forEach(b => { if (b.textContent.trim().includes(names[cat]||'')) b.classList.add('active'); });
  // Update cat grid
  document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
  const el = document.getElementById('cat-' + cat);
  if (el) el.classList.add('active');
  // Set search input
  document.getElementById('searchInput').value = names[cat] || cat;
  const products = PRODUCTS[cat];
  if (!products || products.length === 0) { renderEmpty(cat); return; }
  renderResults(products[0], cat, `${names[cat]} — comparing across all platforms`);
  window.scrollTo({ top: 200, behavior: 'smooth' });
}

function navCatClick(el, cat) {
  document.querySelectorAll('.nav-cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  if (cat === 'all') { goHome(); return; }
  loadCategory(cat);
}

// ─── RENDER RESULTS ───
function renderResults(product, cat, subtitle) {
  const area = document.getElementById('resultsArea');
  const sorted = [...product.platforms].sort((a, b) => a.price - b.price);
  const best = sorted[0];
  const allPlatforms = sorted;

  // Build AI recommendation text
  const bestPlat = getPlatform(best.pid);
  const worst = sorted[sorted.length - 1];
  const worstPlat = getPlatform(worst.pid);
  const savings = product.mrp - best.price;
  const aiText = `🏆 <strong>${bestPlat.label} offers the best deal</strong> for ${product.name} at <strong>${fmt(best.price)}</strong> — saving you ${fmt(savings)} (${best.discount}%) vs MRP. It holds a strong ${best.rating}-star rating from ${best.reviews.toLocaleString()}+ buyers with seller trust score of <strong>${best.trust}/100</strong>. Delivery in ${best.delivery} with ${best.returns} returns. ${worstPlat.label} comes in last at ${fmt(worst.price)} with a lower trust score of ${worst.trust}/100.`;

  // Build cards HTML (show up to 7 platforms)
  const cardsHtml = allPlatforms.map((p, i) => {
    const plat = getPlatform(p.pid);
    const isBest = i === 0;
    return `
      <div class="product-card ${isBest ? 'best-deal' : ''}" data-platform="${p.pid}">
        ${isBest ? '<div class="best-deal-badge">⭐ Best Deal</div>' : ''}
        <div class="card-platform">
          <div class="platform-logo" style="background:${plat.color}">${plat.logo}</div>
          <span class="platform-name">${plat.label}</span>
        </div>
        <div class="card-img">
          ${product.img
            ? `<img src="${product.img}" alt="${product.name}" onerror="this.parentElement.innerHTML='<span class=\\"img-fallback\\">${product.emoji}</span>'" loading="lazy"><div class="card-img-overlay"></div>`
            : `<span class="img-fallback">${product.emoji}</span>`
          }
        </div>
        <div class="card-body">
          <div class="card-title">${product.name}</div>
          <div class="price-row">
            <span class="price-main" style="${isBest?'color:var(--gold)':''}">${fmt(p.price)}</span>
            <span class="price-old">${fmt(product.mrp)}</span>
            <span class="price-discount">-${p.discount}%</span>
          </div>
          <div class="ratings-row">
            <span class="stars">${starsHtml(p.rating)}</span>
            <span class="rating-val">${p.rating}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()} reviews)</span>
          </div>
          <div class="quality-bar">
            <div class="quality-label"><span>Build Quality</span><span>${p.quality}/100</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0%" data-w="${p.quality}%"></div></div>
          </div>
          <div class="quality-bar">
            <div class="quality-label"><span>Seller Trust</span><span>${p.trust}/100</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0%" data-w="${p.trust}%"></div></div>
          </div>
          <div class="delivery-chip">⚡ ${p.delivery}</div>
          <button class="card-cta ${isBest?'primary':''}" onclick="buyNow('${plat.label}', '${product.name}', '${fmt(p.price)}')">${isBest?'🛒 Best Price — Buy Now':'View on ' + plat.label + ' →'}</button>
        </div>
      </div>
    `;
  }).join('');

  // Table rows
  const tableRows = allPlatforms.map((p, i) => {
    const plat = getPlatform(p.pid);
    let tagHtml = '';
    if (p.tag === 'best') tagHtml = '<span class="tag-badge tag-best">⭐ Best Overall</span>';
    else if (p.tag === 'fast') tagHtml = '<span class="tag-badge tag-fast">⚡ Fastest</span>';
    else if (p.tag === 'trusted') tagHtml = '<span class="tag-badge tag-fast">🔒 Trusted</span>';
    else if (p.tag === 'budget') tagHtml = '<span class="tag-badge tag-cheap">💸 Budget Pick</span>';
    else tagHtml = '<span class="tag-badge" style="background:rgba(255,255,255,0.06);color:var(--muted)">Standard</span>';
    return `
      <tr ${i===0?'class="winner-row"':''}>
        <td><div class="td-platform"><div class="platform-logo" style="background:${plat.color};width:22px;height:22px;font-size:0.6rem;border-radius:5px">${plat.logo}</div>${plat.label}</div></td>
        <td class="td-price" style="${i===0?'color:var(--gold)':''}">${fmt(p.price)}</td>
        <td style="color:var(--green)">${p.discount}% off</td>
        <td><span class="stars">${starsHtml(p.rating)}</span> ${p.rating}</td>
        <td>${p.delivery}</td>
        <td>${p.returns}</td>
        <td>${Math.round((p.quality+p.trust)/2)}/100</td>
        <td>${tagHtml}</td>
      </tr>
    `;
  }).join('');

  area.innerHTML = `
    <div class="section-header" style="animation:fadeUp 0.5s ease both">
      <div>
        <div class="section-label">🔥 ${subtitle}</div>
        <h2>${product.name}</h2>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button class="sort-btn active" onclick="sortCards('price',this)">💰 Price</button>
        <button class="sort-btn" onclick="sortCards('rating',this)">⭐ Rating</button>
        <button class="sort-btn" onclick="sortCards('trust',this)">🔒 Trust</button>
        <span class="view-all" onclick="showModal()">Full comparison →</span>
      </div>
    </div>
    <div class="comparison-grid" id="comparisonGrid">${cardsHtml}</div>
    <div class="ai-recommend">
      <div class="ai-header">
        <div class="ai-icon">🤖</div>
        <div>
          <div class="ai-title">AI Deal Recommendation</div>
          <div class="ai-subtitle">Based on price, quality, seller trust & delivery speed</div>
        </div>
      </div>
      <div class="ai-recommendation-text">${aiText}</div>
      <div class="ai-chips">
        <div class="ai-chip green">✅ Lowest Price</div>
        <div class="ai-chip green">✅ Highest Rating</div>
        <div class="ai-chip blue">⚡ Fast Delivery</div>
        <div class="ai-chip orange">🔥 Limited Time Deal</div>
        <div class="ai-chip green">✅ Top Seller Trust</div>
      </div>
    </div>
    <div class="compare-table-section">
      <div class="section-header">
        <div>
          <div class="section-label">📊 Detailed Breakdown</div>
          <h2>Side-by-Side Comparison — All Platforms</h2>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Platform</th><th>Price</th><th>Discount</th><th>Rating</th>
              <th>Delivery</th><th>Returns</th><th>Score</th><th>Tag</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>
  `;

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.bar-fill[data-w]').forEach(b => {
      b.style.width = b.dataset.w;
    });
  }, 300);

  // Apply platform filter
  if (activePlatformFilter !== 'all') {
    document.querySelectorAll('.product-card[data-platform]').forEach(card => {
      card.style.display = card.dataset.platform === activePlatformFilter ? '' : 'none';
    });
  }
}

function renderEmpty(q) {
  document.getElementById('resultsArea').innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">🔍</div>
      <h3>No results for "${q}"</h3>
      <p>Try searching for: iPhone, Samsung, Nike, MacBook, Sony, Levi's, Instant Pot…</p>
    </div>
  `;
}

function sortCards(by, btn) {
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('comparisonGrid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.product-card')];
  cards.sort((a, b) => {
    if (by === 'price') {
      const pa = parseInt(a.querySelector('.price-main').textContent.replace(/[₹,]/g,''));
      const pb = parseInt(b.querySelector('.price-main').textContent.replace(/[₹,]/g,''));
      return pa - pb;
    }
    if (by === 'rating') {
      const ra = parseFloat(a.querySelector('.rating-val').textContent);
      const rb = parseFloat(b.querySelector('.rating-val').textContent);
      return rb - ra;
    }
    if (by === 'trust') {
      const ta = parseInt(a.querySelectorAll('.quality-label')[1]?.querySelector('span:last-child')?.textContent || '0');
      const tb = parseInt(b.querySelectorAll('.quality-label')[1]?.querySelector('span:last-child')?.textContent || '0');
      return tb - ta;
    }
    return 0;
  });
  cards.forEach(c => grid.appendChild(c));
}

function buyNow(platform, product, price) {
  showToast(`✅ Redirecting to ${platform} — ${price}`);
}

function goHome() {
  currentCategory = null;
  document.getElementById('resultsArea').innerHTML = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.nav-cat-btn').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(sec) {
  showToast(`🔜 ${sec.charAt(0).toUpperCase()+sec.slice(1)} section coming soon!`);
}

function showModal() { document.getElementById('modal').classList.add('open'); }
function closeModalOutside(e) { if (e.target.id === 'modal') e.target.classList.remove('open'); }

// ═══════════════════════════════════════════
// AUTH SYSTEM — localStorage based
// ═══════════════════════════════════════════

const AUTH_KEY   = 'dealradar_users';
const SESSION_KEY = 'dealradar_session';

function getUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]'); } catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; }
}
function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// ─── TAB SWITCH ───
function switchTab(tab) {
  document.getElementById('tabLogin').classList.remove('active');
  document.getElementById('tabSignup').classList.remove('active');
  document.getElementById('loginPanel').classList.remove('active');
  document.getElementById('signupPanel').classList.remove('active');
  clearAuthErrors();
  if (tab === 'login') {
    document.getElementById('tabLogin').classList.add('active');
    document.getElementById('loginPanel').classList.add('active');
  } else {
    document.getElementById('tabSignup').classList.add('active');
    document.getElementById('signupPanel').classList.add('active');
  }
}

function clearAuthErrors() {
  document.querySelectorAll('.form-error').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
}

function showErr(id, inputId) {
  document.getElementById(id).classList.add('show');
  if (inputId) document.getElementById(inputId).classList.add('error');
}

// ─── PASSWORD TOGGLE ───
function togglePwd(inputId, btn) {
  const inp = document.getElementById(inputId);
  inp.type = inp.type === 'password' ? 'text' : 'password';
  btn.textContent = inp.type === 'password' ? '👁' : '🙈';
}

// ─── PASSWORD STRENGTH ───
function checkStrength(val) {
  const fill = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');
  if (!val) { fill.style.width = '0'; label.textContent = ''; return; }
  let score = 0;
  if (val.length >= 6)  score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const levels = [
    { w:'20%', color:'#ef4444', text:'Weak' },
    { w:'40%', color:'#f97316', text:'Fair' },
    { w:'60%', color:'#eab308', text:'Good' },
    { w:'80%', color:'#22c55e', text:'Strong' },
    { w:'100%', color:'#00e5ff', text:'Very Strong' },
  ];
  const lvl = levels[Math.min(score - 1, 4)] || levels[0];
  fill.style.width = lvl.w;
  fill.style.background = lvl.color;
  label.textContent = lvl.text;
  label.style.color = lvl.color;
}

// ─── SIGN UP ───
function doSignup() {
  clearAuthErrors();
  const name     = document.getElementById('signupName').value.trim();
  const email    = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;
  const confirm  = document.getElementById('signupConfirm').value;
  const agreed   = document.getElementById('agreeTerms').checked;
  let valid = true;

  if (name.length < 2)         { showErr('signupNameErr','signupName'); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr('signupEmailErr','signupEmail'); valid = false; }
  if (password.length < 6)     { showErr('signupPasswordErr','signupPassword'); valid = false; }
  if (password !== confirm)    { showErr('signupConfirmErr','signupConfirm'); valid = false; }
  if (!agreed) {
    const err = document.getElementById('signupGeneralErr');
    err.textContent = 'Please agree to the Terms of Service.';
    err.classList.add('show'); valid = false;
  }
  if (!valid) return;

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    const err = document.getElementById('signupGeneralErr');
    err.textContent = '⚠️ This email is already registered. Try signing in.';
    err.classList.add('show');
    document.getElementById('signupEmail').classList.add('error');
    return;
  }

  // Loading state
  const btn = document.getElementById('signupBtn');
  btn.classList.add('loading'); btn.disabled = true;

  setTimeout(() => {
    const newUser = { name, email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    saveUsers(users);
    saveSession({ name, email });
    btn.classList.remove('loading'); btn.disabled = false;
    showAuthSuccess(`Welcome, ${name.split(' ')[0]}! 🎉`, 'Account created. Loading your dashboard…');
  }, 900);
}

// ─── LOGIN ───
function doLogin() {
  clearAuthErrors();
  const email    = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  let valid = true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr('loginEmailErr','loginEmail'); valid = false; }
  if (!password) { showErr('loginPasswordErr','loginPassword'); valid = false; }
  if (!valid) return;

  const btn = document.getElementById('loginBtn');
  btn.classList.add('loading'); btn.disabled = true;

  setTimeout(() => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    btn.classList.remove('loading'); btn.disabled = false;

    if (!user) {
      const err = document.getElementById('loginGeneralErr');
      err.textContent = '⚠️ Incorrect email or password. Please try again.';
      err.classList.add('show');
      document.getElementById('loginEmail').classList.add('error');
      document.getElementById('loginPassword').classList.add('error');
      return;
    }

    saveSession({ name: user.name, email: user.email });
    showAuthSuccess(`Welcome back, ${user.name.split(' ')[0]}!`, 'Signed in successfully. Loading your deals…');
  }, 900);
}

// ─── SUCCESS + REDIRECT ───
function showAuthSuccess(title, msg) {
  document.getElementById('authForms').style.display = 'none';
  document.querySelectorAll('.auth-tabs').forEach(t => t.style.display = 'none');
  const suc = document.getElementById('authSuccess');
  document.getElementById('successTitle').textContent = title;
  document.getElementById('successMsg').textContent = msg;
  suc.classList.add('show');
  setTimeout(() => enterApp(), 1400);
}

function enterApp() {
  const session = getSession();
  if (!session) return;
  // Hide overlay
  const overlay = document.getElementById('authOverlay');
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { overlay.style.display = 'none'; }, 500);
  // Update nav avatar
  updateNavUser(session);
}

// ─── UPDATE NAV USER ───
function updateNavUser(session) {
  const initial = (session.name || session.email)[0].toUpperCase();
  document.getElementById('userAvatar').textContent = initial;
  document.getElementById('dropdownName').textContent = session.name || 'User';
  document.getElementById('dropdownEmail').textContent = session.email;
}

// ─── LOGOUT ───
function doLogout() {
  clearSession();
  document.getElementById('userDropdown').classList.remove('open');
  // Reset auth overlay
  const overlay = document.getElementById('authOverlay');
  overlay.style.opacity = '0'; overlay.style.display = 'flex';
  setTimeout(() => { overlay.style.opacity = '1'; overlay.style.transition = 'opacity 0.4s ease'; }, 10);
  // Reset forms
  document.getElementById('authForms').style.display = '';
  document.querySelectorAll('.auth-tabs').forEach(t => t.style.display = '');
  document.getElementById('authSuccess').classList.remove('show');
  switchTab('login');
  ['loginEmail','loginPassword','signupName','signupEmail','signupPassword','signupConfirm'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('agreeTerms').checked = false;
  document.getElementById('userAvatar').textContent = '?';
  clearAuthErrors();
  showToast('👋 Signed out successfully');
}

// ─── USER MENU TOGGLE ───
function toggleUserMenu() {
  document.getElementById('userDropdown').classList.toggle('open');
}
document.addEventListener('click', e => {
  const wrap = document.querySelector('.user-menu-wrap');
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById('userDropdown').classList.remove('open');
  }
});

// ─── ENTER KEY FOR AUTH ───
document.getElementById('loginPassword').addEventListener('keydown', function(e) { if(e.key==='Enter') doLogin(); });
document.getElementById('signupConfirm').addEventListener('keydown', function(e) { if(e.key==='Enter') doSignup(); });
document.getElementById('loginEmail').addEventListener('keydown', function(e) { if(e.key==='Enter') doLogin(); });
document.getElementById('signupName').addEventListener('keydown', function(e) { if(e.key==='Enter') doSignup(); });
document.getElementById('signupEmail').addEventListener('keydown', function(e) { if(e.key==='Enter') doSignup(); });
document.getElementById('signupPassword').addEventListener('keydown', function(e) { if(e.key==='Enter') doSignup(); });

// ─── ENTER KEY FOR SEARCH ───
document.getElementById('searchInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') handleSearch();
});

// ─── INIT AUTH CHECK ───
(function initAuth() {
  try {
    const session = getSession();
    if (session && session.email) {
      document.getElementById('authOverlay').style.display = 'none';
      updateNavUser(session);
    }
  } catch(e) {
    // localStorage not available, just hide overlay
    document.getElementById('authOverlay').style.display = 'none';
  }
})();

// ─── INIT: Show smartphones by default ───
window.addEventListener('load', function() {
  renderResults(PRODUCTS.smartphones[0], 'smartphones', '🔥 Featured — Most Searched Today');
});
