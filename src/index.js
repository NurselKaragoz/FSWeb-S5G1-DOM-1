const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

document.getElementById("logo-img").src = "http://localhost:9000/img/logo.png";

document.getElementById("cta-img").src = "http://localhost:9000/img/cta.png";

document.getElementById("middle-img").src =
  "http://localhost:9000/img/accent.png";

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button ").textContent =
  siteContent.cta.button;

document.querySelector(".text-content h4").textContent =
  siteContent["ana-içerik"]["özellikler-h4"];

document.querySelector(".text-content h4").textContent =
  siteContent["ana-içerik"]["hakkımızda-h4"];

const navelement = document.querySelectorAll(" nav a");
for (let i = 0; i < navelement.length; i++)
  navelement[i].classList.add("italic");

navelement[0].textContent = siteContent.nav["nav-item-1"];
navelement[1].textContent = siteContent.nav["nav-item-2"];
navelement[2].textContent = siteContent.nav["nav-item-3"];
navelement[3].textContent = siteContent.nav["nav-item-4"];

const footer = document.querySelector(" footer a");
footer.classList.add("bold");
footer.textContent = siteContent.footer.copyright;

const textcont = document.querySelectorAll(".text-content h4");

textcont[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
textcont[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
textcont[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
textcont[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
textcont[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const text = document.querySelectorAll(".text-content p");

text[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
text[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
text[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
text[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
text[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];

document.querySelectorAll(".contact p")[0].textContent =
  siteContent.iletisim.adres;
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.iletisim.telefon;
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.iletisim.email;
