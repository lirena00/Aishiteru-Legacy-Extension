let requrl ="https://api.waifu.im/random/?selected_tags=waifu&is_nsfw=False"


let styleElement = document.createElement('style');
styleElement.id = 'remove-scroll-style';
styleElement.textContent =
    'html::-webkit-scrollbar{display:none !important}' +
    'body::-webkit-scrollbar{display:none !important}';

const UniformTagButton = document.getElementById("uniform");
const RaidenTagButton = document.getElementById("raiden");
const WaifuTagButton = document.getElementById("waifu");
const OppaiTagButton = document.getElementById("oppai");
const SelfiesTagButton = document.getElementById("selfies");
const MoriTagButton = document.getElementById("mori");
const MarinTagButton = document.getElementById("marin");
const MaidTagButton = document.getElementById("maid");
const AssTagButton = document.getElementById("ass");
const HentaiTagButton = document.getElementById("hentai");
const MilfTagButton = document.getElementById("milf");
const OralTagButton = document.getElementById("oral");
const PaizuriTagButton = document.getElementById("paizuri");
const EcchiTagButton = document.getElementById("ecchi");
const EroTagButton = document.getElementById("ero");
const NsfwTagButton = document.getElementById("nsfw");


document.getElementsByTagName('body')[0].appendChild(styleElement);
const nextButton = document.getElementById("next");
const imgElement = document.getElementById("url");
const linkElement = document.getElementById("source");

nextButton.addEventListener("click", fetchData);

UniformTagButton.addEventListener("click", uniform);
RaidenTagButton.addEventListener("click", raiden);
OppaiTagButton.addEventListener("click", oppai);
SelfiesTagButton.addEventListener("click", selfies);
MoriTagButton.addEventListener("click", mori);
MarinTagButton.addEventListener("click", marin);
MaidTagButton.addEventListener("click", maid);
AssTagButton.addEventListener("click", ass);
HentaiTagButton.addEventListener("click", hentai);
MilfTagButton.addEventListener("click", milf);
OralTagButton.addEventListener("click", oral);
PaizuriTagButton.addEventListener("click", paizuri);
EcchiTagButton.addEventListener("click", ecchi);
EroTagButton.addEventListener("click", ero);
NsfwTagButton.addEventListener("click", nsfw);

function uniform() {
  if (UniformTagButton.className == "tagbtn"){
    UniformTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=uniform" ;
  }
  else{
    UniformTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=uniform','');
  }
  fetchData();
}

function raiden() {
  if (RaidenTagButton.className == "tagbtn"){
    RaidenTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=raiden-shogun" ;
  }
  else{
    RaidenTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=raiden-shogun','');
  }
  fetchData();
}


function oppai() {
  if (OppaiTagButton.className == "tagbtn"){
    OppaiTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=oppai" ;
  }
  else{
    OppaiTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=oppai','');
  }
  fetchData();
}

function mori() {
  if (MoriTagButton.className == "tagbtn"){
    MoriTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=mori-calliope" ;
  }
  else{
    MoriTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=mori-calliope','');
  }
  fetchData();
}

function selfies() {
  if (SelfiesTagButton.className == "tagbtn"){
    SelfiesTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=selfies" ;
  }
  else{
    SelfiesTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=selfies','');
  }
  fetchData();
}


function maid() {
  if (MaidTagButton.className == "tagbtn"){
    MaidTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=maid" ;
  }
  else{
    MaidTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=maid','');
  }
  fetchData();
}

function marin() {
  if (MarinTagButton.className == "tagbtn"){
    MarinTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=marin-kitagawa" ;
  }
  else{
    MarinTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=marin-kitagawa','');
  }
  fetchData();
}

function ass() {
  if (AssTagButton.className == "tagbtn"){
    AssTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=ass" ;
  }
  else{
    AssTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=ass','');
  }
  fetchData();
}

function milf() {
  if (MilfTagButton.className == "tagbtn"){
    MilfTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=milf" ;
  }
  else{
    MilfTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=milf','');
  }
  fetchData();
}

function hentai() {
  if (HentaiTagButton.className == "tagbtn"){
    HentaiTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=hentai" ;
  }
  else{
    HentaiTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=hentai','');
  }
  fetchData();
}

function ecchi() {
  if (EcchiTagButton.className == "tagbtn"){
    EcchiTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=ecchi" ;
  }
  else{
    EcchiTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=ecchi','');
  }
  fetchData();
}

function oral() {
  if (OralTagButton.className == "tagbtn"){
    OralTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=oral" ;
  }
  else{
    OralTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=oral','');
  }
  fetchData();
}

function paizuri() {
  if (PaizuriTagButton.className == "tagbtn"){
    PaizuriTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=paizuri" ;
  }
  else{
    PaizuriTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=paizuri','');
  }
  fetchData();
}

function ero() {
  if (EroTagButton.className == "tagbtn"){
    EroTagButton.className = "seltagbtn";
    requrl = requrl+"&selected_tags=ero" ;
  }
  else{
    EroTagButton.className = "tagbtn";
    requrl=requrl.replace('&selected_tags=ero','');
  }
  fetchData();
}

function nsfw() {
  if (NsfwTagButton.className == "tagbtn"){
    NsfwTagButton.className = "seltagbtn";
    requrl=requrl.replace('&is_nsfw=False','');
    requrl = requrl+"&is_nsfw=True" ;
  }
  else{
    NsfwTagButton.className = "tagbtn";
    requrl=requrl.replace('&is_nsfw=True','');
    requrl = requrl+"&is_nsfw=False" ;
  }
  fetchData();
}



async function fetchData() {
  const res = await fetch(requrl);
  const record = await res.json();
  console.log(record);
  if (record.code){
    imgElement.src = "images/404.png";
  }
  else{
  imgElement.src = record.images[0].url;
  linkElement.href = record.images[0].source;
}
}
fetchData();
