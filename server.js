const CONFIG = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.diggerToken;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Constants
const dabs = ["https://i.imgur.com/Kr6f5Vz.gif", "https://media.giphy.com/media/26uTt19akcFxRFCy4/giphy.gif","https://media.giphy.com/media/3oz8xODcLLAxb8Qyju/giphy.gif","https://media.giphy.com/media/WxIBO7AsS6OJP02KRN/giphy.gif","https://media.giphy.com/media/bXvwCQglnTGKs/giphy.gif","https://media0.giphy.com/media/nygYqzhe3HB6w/giphy.gif?cid=3640f6095c91539c6a32307773c710a5","https://media1.giphy.com/media/l46CySTsO9JqWL8di/giphy.gif?cid=3640f6095c91539c6a32307773c710a5","https://media.giphy.com/media/FsUrNVw5djj3DP7vuh/giphy.gif","https://media.tenor.com/images/40b5338a60e4a044f8905984c49f2967/tenor.gif"];
const sanics = ["https://media.giphy.com/media/yXVO50FJIJMSQ/200w_d.gif","http://giphygifs.s3.amazonaws.com/media/S18kGlKwjxNp6/200w_d.gif","https://media.giphy.com/media/olrl89TCYdFew/200w_d.gif","https://media.giphy.com/media/yBgwe4ftOtvlm/200w_d.gif","https://media.giphy.com/media/FzuiifgDBL3Lq/200w_d.gif","https://media.giphy.com/media/6Se9YaWR4zqzm/200w_d.gif","https://media.giphy.com/media/14wX0gs76QxUsw/200w_d.gif","http://giphygifs.s3.amazonaws.com/media/mE0M2TVys8k6Y/200w_d.gif"];
const yuhs = ["https://media.giphy.com/media/h37RZSg830CpG/giphy.gif"];
const fortnite = new Discord.RichEmbed().setImage("https://i.redd.it/lwq9doves6g11.gif");
const jebpleaseclap = new Discord.RichEmbed().setImage("https://media.giphy.com/media/l0NwPo3VHujpJDI4w/giphy.gif");
const trashdove = new Discord.RichEmbed().setImage("http://i.imgur.com/50wBJit.gif");
const understood = new Discord.RichEmbed().setImage("https://lh3.googleusercontent.com/hJlIRL8tQD9lG-x82xY3E5VW7hTEWd63MGnuSRASTdxSld3wzk3tGK_6BPp-F6U5z0HASxxCPKUNmoGnnTcBGTlVQ9nPIwDB5R4XQfIKna43SE8ac_C4_lZK3qedzTyxNDE0vPsyBGQvSPmiodb7ExScPJVp23PCe-UyRc3ZmVQtTVTLtcVFceINjw4w3Y3ydpoystUljD-6CJECx8ez2wkU1L0i2eDJZhlG256VmAO09nYO5WaRg3hft_6rk-lFkg45RJmWTfbwUMN5k4hb7S6gTkzlf59Xj1ZXStjqd-fOVLjyb1yRhoSEwtDz0vus0FDaMymED8mbnJ51QFJZ5H58caOTnuDD0H0BkltdHU_xupvwcg-ZwzyUpvAwP_YqGLwA19ziOeVsKda4qXAiYndzsX-WPAAIVdmhr9X8Xvhz4Oo8r7FoH5c-0ThONMkJMmwhS2_sWdpdG6QCvQS5U1tYkOKlo8hXKi_mLKJUBtYQqQLJ4F9GaAlOw8FBiHKyTGv0lsdUEb8OzB5pfK0qfq1yarNWKEw7Puhl6GPDx9ZKcZSH99abgWnqvpTgmjZGjITRL0R_ZVr49veilDH2viLsKFQ6yy79zdn6GyG8CdEx_bpDEFcGTGl-g0ijSxdGC0LO0aEAK0_ThfZcPjws96_01A9jEAJZ8c4bvd6BK-M=w1200-h675-no");
const children = new Discord.RichEmbed().setImage("https://lh3.googleusercontent.com/dNs-YgduU2QBAgI8bI-NTHxdb76IjQgTMAurbA5kJj3crlkvDupSzc8tk8Z-_ci5BfdEjVaGVbuvMTMyLhaPIAh0PyWdYLsP06ZOsbV0rWdJ6bHOEo59jZSshheXBde6ZbzP_QDimKa7Rvbd_KTdh7olqLsDWE0WNO5egk5wmNLKb9uErhYn8whRR2sJzDUp8cjtCZPcw7CtjUBnu0tsTq0WbmbDCqU_VkJID0qLbiLtunQ46dHy9ZnhaKm8ftEJaKSsc6uF9YZuY9OjvLb0ZnN52niAywOFR6HbuqQRCEyQFY2QQ1WEyW1e_OHjD8WsNx1tr90hMyyJBa1pgY-ihkK-AC-18dgWqWsBUZwnVAUXCGVAlkfFyhUBHJZcH5pcH5YN_-oZy0TETnYDM80mIJPIPiBhsYurGZgvs3LyUyvSXn3LRulr5tKO0K_Pn8G1FQ_bKAV1A6DE5ovVwjgV-qY9oDHju78_t2Sx8i1FHpmyZkzDVwvuORoXYSOqdCz0g6WCAgjpnPGOAhrW_ZXEM7-X-8l2-7vsrZZxeV4T3AAZp3aJDuvmDsrPb0LxutJNuEk5X9L2jVE0XxOlKQbSYYaLe8RYBCTJbw57P0XOx7ykqWqr9QDhQYu8Uokiax8Mt9c9rowD8N7qleHpNEOTOILfv6BqundAZKkG_3w54Gs=w106-h100-no");
const steamedham = new Discord.RichEmbed().setImage("https://lh3.googleusercontent.com/Ny4Icxd61yz42TXlWEdnEsVwUfs03bWSFQS_GSsl2t-SYldp5ITlFeNW7n1NdhW8ELniUwp04VbWeTIOOFvnv0_vH7gWVoD8wAZhc2hh5YiIoK9L1avYR1geOI1JG2L09DfX7mDZh4UYyGSHxywxJcUCPl8t5XxhDoJnaQEasQpKgS-sAcvy_nFM6RYkUciHrlJ2URfq1RQmu5r7COFDQGARsjO6wgmxnYrM5t-C9O-3QFyLV3i5ukuTSM1nfgNSJfIzP2hfeto2uBy4Nx78msIfY6ZOaKJDVbIV0mJ2FgGW_3np1sM2vFmVbmM_4Qzh75dZCld9nrcTUygzm0mrWJmeYnV3uJi7PhQ2W6C4U-K3csdzLkWRC8lpftkTSPgTGbTUGGbVrA-u53ah-mgJ8jWbfR6MTSQ3WHyD6UGSDQkUXM9Dq1GAgz1tf3rd50giTWr7eMo9pZUQvAA22nlM8lcnmaiehzSn2BugHsxZP7yfVqMWeCBlrt3L59PXXpvo2MQTKeh92iZS4C9SVNIoYzodM7NIaaP0hON1pRza4gNwwT6PK-Bwyef2znq0Q6twF8PT4M599Mfd5HWsIDROQyiM7oVx6rpOCOJrroSl-vFfab47lFwXJfkC6-Bxffokp2osqZLFjWJ5sUyx_veNhRTH4MVjCgw-M6v3wtHQJfk=w261-h141-no");
const calvintime = new Discord.RichEmbed().setImage("http://i3.kym-cdn.com/photos/images/original/000/897/738/706.png");
const Jeans = new Discord.RichEmbed().setImage("https://lh3.googleusercontent.com/SEKZgteoZn6-_fNJLWET5gPybQOKdOkdJG4pvUq2umoTL8oLBBIzUMASm9MPMEeaPMGqURkNeZOc028FeiAU5fEivXST_64r0KoJKyDWYP4b4kWkR4MhXSvYq1lHNkP5g9AQb6DunyHCHGI0e1dts8mbtdgPV_KOBzi5ExAepzm7JHPALlOM054E6RNXXxziMiQQu0TbeUo2O4Nw29XWTfiEiFPcV3x67f0wTRFsmCWPdb7lucczI7aOZfCyZ49-A1fBOnLHG5GPKhebrZjULsYH3Ju5i9FHKIOSqoZ7f0i11jePcC_R7AKHYewC2BJWUTrRGevn8fh07vhhl9F_0JQlF2qoGHB2RGzwJdXWq8JwgGCu8RkiQnUXecuhO4KjjtzAfWa0fV22kD7ojT4YEIyEI6wE7e7Q9rTR6TY58Q_Zozkc5n6S8m8_RQ3NmQxuySPSXu9vp7KzmUJ3Pc12Exqnq-U9ELfUoPyH676pPm8qXM3N_jOswtPxNwz2nFK9GK6pbhsJmOZ3DLSbiioBjvbKtE7rh_n1Vs3yFkQDKhK1iPnNf5RrT96UjrXsYG163l8DbFhZjaltOcBPxWZ8do0aTmfmgiVJ2fatuFP6xx5Nlw-VDjZNHxPI9u2hXLgcDa4PhRHBcaNG43cNHa34ocy2Tr240ItCmmD9VMVGJn8=w478-h592-no");
const Jonathan = new Discord.RichEmbed().setImage("https://lh3.googleusercontent.com/BZa-vEfXiCPh1y02kPEQo6U1YbkoaEkmybpnP_u0b35kLtmHHI9lcq-VUn_sUbL50nBjzq9r2Z_nFJIHwubQtuLd9Sd4O3E8cb4cM5HzOd8DfJzIjbapaC6xZ2kKbeD06jymUqk=w315-h420-no");
const bryanBug = new Discord.RichEmbed().setImage("https://lh3.googleusercontent.com/xScm_RRPDSzEkPrwymbufoMAzdbineiebFfAyAHParC2KpzntnrP41s8Gjs69GfWkgCaldnMm9TW6LxonYEbG77Duehy_8VjtazihtpAmdKLkm4euKg5v4-5OpbslYV1wMS2gJo=w287-h375-no");
const cashMeOutside = new Discord.RichEmbed().setImage("https://media.giphy.com/media/26gIOEsGb5mcTiQEw/giphy.gif");
const jabbascript = new Discord.RichEmbed().setImage("http://churchm.ag/wp-content/uploads/2011/01/jabbascript.jpg");
const gitGud = new Discord.RichEmbed().setImage("https://i.imgur.com/QdCdfmD.gif");
const nani=new Discord.RichEmbed().setImage("https://i.ytimg.com/vi/U_0eocL8aGA/maxresdefault.jpg");
const backdoor=new Discord.RichEmbed().setImage("https://i.imgur.com/bgwbje5.gif");
backdoor.setColor([255,255,255]);
const lolHarold=new Discord.RichEmbed().setImage("https://i.imgur.com/Yf8JBm5.gif");
const hueHueHue=new Discord.RichEmbed().setImage("https://i.imgur.com/rSZf8E7.gif");
//const never=new Discord.RichEmbed().setImage("https://i.imgur.com/6gf1TXj.gif");
const developers=new Discord.RichEmbed().setImage("https://thumbs.gfycat.com/CheerfulAbandonedAmethystsunbird-max-1mb.gif");
const party=new Discord.RichEmbed().setImage("https://i.imgur.com/mP8ZRTX.gif");
const normies=new Discord.RichEmbed().setImage("https://i.imgur.com/8bdx5RF.gif");
const triggered=new Discord.RichEmbed().setImage("https://i.imgur.com/5HAvEKk.gif");
const dio=new Discord.RichEmbed().setImage("https://i.kym-cdn.com/photos/images/original/000/754/539/566.gif");
const shook=new Discord.RichEmbed().setImage("https://media1.tenor.com/images/74615c72cdb521769a2064c11e541d22/tenor.gif?itemid=5794225")
//const bee=new Discord.RichEmbed().setImage("https://i.imgur.com/wes7iyz.gif")
const sasuke=new Discord.RichEmbed().setImage("https://i.pinimg.com/originals/86/e5/4e/86e54ec267e965ceb731d32cb0e4492a.jpg")
const thanksObama=new Discord.RichEmbed().setImage("https://i.imgur.com/mTSxGgU.gif")
const chuckSploosh=new Discord.RichEmbed().setImage("https://i.imgur.com/LArOCP9.gif")
const GOTTEM=new Discord.RichEmbed().setImage("https://i.postimg.cc/qMfhPgSR/dadem.jpg");
const troo=new Discord.RichEmbed().setImage("https://imgur.com/b0QWNlq.gif");
const yikes=new Discord.RichEmbed().setImage("https://cdn.discordapp.com/attachments/436581339119222785/600466883061350402/image0.jpg");
const vegan=new Discord.RichEmbed().setImage("https://www.greatveganathletes.com/wp-content/uploads/2016/07/Torre-Washington-Fruit_mini-777x935.jpg");
const cuck=new Discord.RichEmbed().setImage("https://cdn.discordapp.com/attachments/436581339119222785/608778096300130414/had-a-vasectomy-yesterday-and-when-i-woke-up-my-43170650.png")
const bathwater=new Discord.RichEmbed().setImage("https://cdn.discordapp.com/attachments/441701175025467404/610960307606650920/bath_water_cycle.png");
const dance = new Discord.RichEmbed().setImage("https://media1.tenor.com/images/5fa45ff67f6f2e0e81e07458b29ef079/tenor.gif?itemid=11968618");
const bruhMoment = new Discord.RichEmbed().setImage("https://cdn.discordapp.com/attachments/436581339119222785/629020848287645698/4c5.png");
const nono = new Discord.RichEmbed().setImage("https://media.giphy.com/media/jncYBUAyu4r8Jv7Z1f/giphy.gif")
const jfc = new
    Discord.RichEmbed().setImage("https://cdn.discordapp.com/attachments/441701175025467404/671810944803930114/image0.jpg");

client.on('ready', () => {
  console.log('I am ready!');
});

var triggers = {
  "(420|blaze it)":"حشش",
  "(thick|thicc)":"Awesome pics. Great size. Look thick. Solid. Tight. Keep us all posted on your continued progress with any new progress pics or vid clips. Show us what you got man. Wanna see how freakin' huge, solid, thick and tight you can get. Thanks for the motivation.",
  "chuck(co)*":"𝓹𝓻𝓪𝓲𝓼𝓮 𝓫𝓮 𝓾𝓷𝓽𝓸 𝓱𝓲𝓶",
  "((\/)?not too|jeans)":Jeans,
  "(fuck yea(h)?|hell yea(h)?|trashdove)":trashdove,
  "cancer":"WARNING: This message contains chemicals known to the State of California to cause cancer and birth defects or other reproductive harm.",
  "be humble":"Sit down",
  "sit down":"Be humble (lil bitch)",
  "fake news":"WRONG!",
  "bug":bryanBug,
  "children":children,
  "good shit":"👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit     right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right ther    e right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌",
  "understood":understood,
  "please stop":"Threading isn't enabled yet, enjoy the 15 cummies",
  "cash me outside":cashMeOutside,
  "jabbascript":jabbascript,
  "git gud":gitGud,
  "nani":nani,
  "backdoor":backdoor,
  "ianal":backdoor,
  "good bot":"fuck you!",
  "triggered":"DIGGER-ED!",
  "hyperlul":lolHarold,
  "(hue|huehuehue)":hueHueHue,
  //"never":never,
  "logs":"The Lincoln logs look on the Lincoln logs unlock the Lincoln logs in laws suck my linking logs.",
  "developers":developers,
  "party":party,
  "normies":normies,
  "shook":shook,
  "dio":dio,
  "sono chi no sadame":"JOOOOOOOOO JO",
  "power":"KONO POWA",
  "society":":b:️:o2:️:cross:️:cross:️:o2:️:scorpius:️   :cross:️🅴:x::cross:",
  //"bee": bee,
  "fortnite": fortnite,
  "(sasuke|nsfw|sauce)": sasuke,
  "kage bunshin no jutsu": sasuke,
  "thanks obama": thanksObama,
  "cisco & stock (order does not matter)": chuckSploosh,
  "GOTTEM": GOTTEM,
  "aliens": "Tips and tricks for area 51 raiders (PLEASE SHARE THIS WITH OTHER RAIDERS)\n\nIf possible, get yourself some body armour (you don't want to die)\n\nGet yourself some supplies: a map, wire cutters, medkits, food, lot of water (it's a fucking desert) and monster energy drinks (for all the Kyle's) and a gas mask or swimming goggles (against tear gas)\n\nAnd courage, lots and lots of courage\n\nStay strong",
  "troo": troo,
  "yikes":yikes,
  "coding": "no pauce, just type",
  "oppressed": "What's even more sickening are those who say us gamers aren't oppressed. They say that the camps weren't actually all that bad, and that we were allowed movie nights and even given our own video game console. Trying to make the Nazis out as good guys. What they don't tell you is the only movies we were allowed to watch were Tyler Perry movies, and the only game system we were given was a VirtualBoy. People need to read the history books.",
  "vegan":vegan,
  "cuck":cuck,
  "nintendo switch":"you too can get a switch from your wife's BF if you follow these simple steps:\n\n1. Get a wife\n\n2. Make sure your wife has tinder and gets a boyfriend who makes decent income but also has a smaller penis than you\n\n3. Get a vasectomy\n\n4. SMASH BROS\n\n -- @420_daddy_fever",
  "bath":bathwater,
  "dance":dance,
  "bruh.*(moment)+":bruhMoment,
  "time": "What a time!",
  "no(no)+": nono,
  "jfc|Jesus": jfc
}

// Change each value of `trigger` to be an array containing exactly two objects:
// (1) its RegExp and (2) the original value in that order.
var triggerlist = Object.keys(triggers);
for(var i = 0; i < triggerlist.length; i++){
  var key = triggerlist[i];
  var value = triggers[key];
  var pattern = new RegExp("[^a-z]" + key + "[^a-z]", "i");
  triggers[key] = [pattern, value];
}

var del = false;

var dabReg = /dab/gi, yuhReg = /yuh/gi, sasReg = /sasuke/gi, emojiReg = /<a:/gi, emos=[];


client.on('message', message => {
  if(message.author.bot) return;
  if (message.channel.type === 'dm' && message.content.charAt(0) === '>') {
    var newMessage = "```css\n";
    var messageText = message.content;
    var i = 0;
    while((result = emojiReg.exec(messageText))){
      var emo = messageText.substring(messageText.indexOf(':',result.index),messageText.indexOf(':',result.index+4));
      emos.push(client.emojis.find(e => e.name === emo));
      messageText = messageText.slice(0,result.index)+'${emos[i]'+messageText.slice(messageText.indexOf('>',result.index));
      i++;
    }
    newMessage = newMessage.concat(messageText);
    var hash = Math.floor(Math.random() * 100000000);
    newMessage = newMessage.concat("\n -- "+hash.toString());
    newMessage = newMessage.concat("\n```");
    message.client.channels.find(c=>c.name==='vape-naysh').send(newMessage);
    emos=[];
    console.log('Received and sent greenText request');
    return;
  }
  if (message.channel.type === 'dm' && message.content.charAt(0) != '>'){
    message.reply('l2greentextpls, you need to start with the \'>\' char');
    console.log('l2greentext sent');
    return;
  }
  var formattedText = " " + message.content.toLowerCase() + " ";
  for (var i = 0; i < triggerlist.length; i++){
    var key = triggerlist[i];
    var pattern = triggers[key][0];
    var media = triggers[key][1];
    var triggered = formattedText.match(pattern);
    if(triggered){
       message.channel.send(media);
       console.log('Sent trigger: ' + key);
    }
  }
  if (message.content.toLowerCase().includes("dab")){
    const count = (str) => {
      return ((str || '').match(dabReg) || []).length
    }
    if (count(message.content.toLowerCase()) >= 3){
      const dab = new Discord.RichEmbed().setImage(dabs[Math.floor(Math.random()*dabs.length)]);
      message.channel.send(dab);
      console.log('Sent triple dab');
    }
  }
  if (message.content.toLowerCase().includes("sanic")){
    const sanic = new Discord.RichEmbed().setImage(sanics[Math.floor(Math.random()*sanics.length)]);
    message.channel.send(sanic);
    console.log('Sent random sanic');
  }
  if (message.content.toLowerCase().includes("yuh")){
    const count = (str) => {
      return ((str || '').match(yuhReg) || []).length
    }
    if (count(message.content.toLowerCase()) >= 3){
      const yuh = new Discord.RichEmbed().setImage(yuhs[Math.floor(Math.random()*yuhs.length)]);
      message.channel.send(yuh);
      console.log('Sent triple yuh');
    }
  }
  if (message.content.toLowerCase().includes("sasuke")){
    const count = (str) => {
      return ((str || '').match(sasReg) || []).length
    }
    if (count(message.content.toLowerCase()) >= 3){
      message.channel.send(sasuke);
      message.channel.send(sasuke);
      message.channel.send(sasuke);
      console.log('Sent sfw Sasuke');
    }
  }
  if(message.content.toLowerCase().includes("/help")){
    message.channel.send("Do you really need help shitposting?");
    console.log('Sent shitposting help');
  }
  if (message.content.toLowerCase() === 'ping') {
    message.reply('pong',{tts:true});
    console.log('Sent ping pong');
  } 
  if (message.content.toLowerCase() === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
    console.log('Sent author avatar');
  }
  if (message.content.toLowerCase().includes('waste') && message.content.toLowerCase().includes('time')){
    message.channel.send(calvintime);
    console.log('Sent waste of time');
  }
  if (message.content.toLowerCase().includes('cisco') && !message.content.toLowerCase().includes('.com')){
    message.channel.send(".:|:.:|:. Chuck Co .:|:.:|:.");
    console.log('Sent chuck co');
    if (message.content.toLowerCase().includes('stock')){
      message.channel.send(chuckSploosh);
    }
  }
  if (message.content.toLowerCase().includes('steam') && message.content.toLowerCase().includes('ham')){
    message.channel.send(steamedham);
    console.log('Sent steamedham');
  }
  if (message.content.toLowerCase().includes('allahu') && !message.content.toLowerCase().includes('akbar')){
    message.channel.send("akbar");
    console.log('Sent akbar');
  }
  if (message.content.toLowerCase().includes('well') && (message.content.toLowerCase().includes('start coming') || message.content.toLowerCase().includes('starts coming'))){
    var i;
    for (i = 0; i < 15; i++){
      message.channel.send("and they don't stop coming");
      sleep(1000);
    }
    console.log('Sent dont stop coming');
  }
  if (message.content.toLowerCase().includes('please') && message.content.toLowerCase().includes('clap')){
    message.channel.send(jebpleaseclap);
    console.log('Sent jebus clap');
  }
  if (message.content.toLowerCase().includes('bless')){
    message.react("🙌");
    console.log('Sent bless react');
  }
  if (message.content.toLowerCase() === "listemojis") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(emojiList);
    console.log('Sent emojilist');
  }
  if (message.content.toLowerCase() === "peanutbutter" || message.content.toLowerCase() === "shrug"){
          message.channel.send("¯\\\_(ツ)\_/¯");
      console.log('Sent Aaron');
  }
  if (message.content.toLowerCase().includes ('regex') && message.content.toLowerCase().includes('html')){
    message.channel.send("You can't parse [X]HTML with regex. Because HTML can't be parsed by regex. Regex is not a tool that can be used to correctly parse HTML. As I have answered in HTML-and-regex questions here so many times before, the use of regex will not allow you to consume HTML. Regular expressions are a tool that is insufficiently sophisticated to understand the constructs employed by HTML. HTML is not a regular language and hence cannot be parsed by regular expressions. Regex queries are not equipped to break down HTML into its meaningful parts. so many times but it is not getting to me. Even enhanced irregular regular expressions as used by Perl are not up to the task of parsing HTML. You will never make me crack. HTML is a language of sufficient complexity that it cannot be parsed by regular expressions. Even Jon Skeet cannot parse HTML using regular expressions. Every time you attempt to parse HTML with regular expressions, the unholy child weeps the blood of virgins, and Russian hackers pwn your webapp. Parsing HTML with regex summons tainted souls into the realm of the living. HTML and regex go together like love, marriage, and ritual infanticide. The <center> cannot hold it is too late. The force of regex and HTML together in the same conceptual space will destroy your mind like so much watery putty. If you parse HTML with regex you are giving in to Them and their blasphemous ways which doom us all to inhuman toil for the One whose Name cannot be expressed in the Basic Multilingual Plane, he comes.");
      message.channel.send("HTML-plus-regexp will liquify the n​erves of the sentient whilst you observe, your psyche withering in the onslaught of horror. Rege̿̔̉x-based HTML parsers are the cancer that is killing StackOverflow it is too late it is too late we cannot be saved the trangession of a chi͡ld ensures regex will consume all living tissue (except for HTML which it cannot, as previously prophesied) dear lord help us how can anyone survive this scourge using regex to parse HTML has doomed humanity to an eternity of dread torture and security holes using regex as a tool to process HTML establishes a breach between this world and the dread realm of c͒ͪo͛ͫrrupt entities (like SGML entities, but more corrupt) a mere glimpse of the world of reg​ex parsers for HTML will ins​tantly transport a programmer's consciousness into a world of ceaseless screaming, he comes, the pestilent slithy regex-infection wil​l devour your HT​ML parser, application and existence for all time like Visual Basic only worse he comes he comes do not fi​ght he com̡e̶s, ̕h̵i​s un̨ho͞ly radiańcé destro҉ying all enli̍̈́̂̈́ghtenment, HTML tags lea͠ki̧n͘g fr̶ǫm ̡yo​͟ur eye͢s̸ ̛l̕ik͏e liq​uid pain, the song of re̸gular exp​ression parsing will exti​nguish the voices of mor​tal man from the sp​here I can see it can you see ̲͚̖͔̙î̩́t̲͎̩̱͔́̋̀ it is beautiful t​he final snuffing of the lie​s of Man ALL IS LOŚ͖̩͇̗̪̏̈́T ALL I​S LOST the pon̷y he comes he c̶̮omes he comes the ich​or permeates all MY FACE MY FACE ᵒh god no NO NOO̼O​O NΘ stop the an​*̶͑̾̾​̅ͫ͏̙̤g͇̫͛͆̾ͫ̑͆l͖͉̗̩̳̟̍ͫͥͨe̠̅s ͎a̧͈͖r̽̾̈́͒͑e n​ot rè̑ͧ̌aͨl̘̝̙̃ͤ͂̾̆ ZA̡͊͠͝LGΌ ISͮ̂҉̯͈͕̹̘̱ TO͇̹̺ͅƝ̴ȳ̳ TH̘Ë͖́̉ ͠P̯͍̭O̚​N̐Y̡ H̸̡̪̯ͨ͊̽̅̾̎Ȩ̬̩̾͛ͪ̈́̀́͘ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜Ȇ̴̟̟͙̞ͩ͌͝S̨̥̫͎̭ͯ̿̔̀ͅ");
      sleep(1000);
      message.channel.send("Have you tried using an XML parser instead?");
      console.log('Sent regex html copypasta');
  }
  if (message.content.toLowerCase().includes("chinese") && message.content.toLowerCase().includes("earthquake")){
    message.channel.send("Here comes another chinese earthquake! BrbrbBrbRRBbRBRBBRBRBRBRBRBRR",{tts: true});
    console.log('Sent chinese earthquake');
  }
  if (message.content.toLowerCase().includes("make money")){
    message.channel.send("Holla Holla Get Dolla!",{tts: true});
    console.log('Sent holla holla');
  }

  //Build set of emojis per message, until we have a way to get guild without a message this will be done per message
  var emojilist = Array.from(message.guild.emojis.values());
  for(var i = 0; i< emojilist.length; i++){
      var key = emojilist[i].name.toLowerCase();
      var value = emojilist[i];
      var pattern = new RegExp("[^a-z]" + key + "[^a-z]", "i");
      emojilist[i] = [pattern, value];
  }

  if (message.content.charAt(0) === '^') {
    //String the leading ^ character
    var formattedMessage = " " + message.content.substring(1).toLowerCase() + " ";
    for (var i = 0; i < emojilist.length; i++){
      var pattern = emojilist[i][0];
      var emoji = emojilist[i][1];
      var react = formattedMessage.match(pattern);
      if(react){
        message.channel.fetchMessages({limit: 1,before:
            message.id}).then(messages => messages.first().react(emoji));
        message.delete();
        console.log('added update message');
        return;
      }
    }
  }

  //If we reach here, for all the emojis in the guild, check if pattern matches and react
  for (var i = 0; i< emojilist.length; i++){
    var pattern = emojilist[i][0];
    var emoji = emojilist[i][1];
    var react = formattedText.match(pattern);
    if(emoji.name === 'fortnite' && message.content.toLowerCase().includes('retard')){
      message.react(emoji);
      console.log('Sent forknife react');
    }
    if(emoji.name === 'trumpkiss' && message.content.toLowerCase().includes('papa kumquat')){
      message.react(emoji);
      console.log('Sent trumpkiss kumquat react');
    }
    if(react){
      message.react(emoji);
      console.log('Sent emoji react: '+emoji.name);
    }
  } 
  prevMessage = message;
});

client.login(token);
