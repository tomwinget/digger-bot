const CONFIG = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Constants
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
const never=new Discord.RichEmbed().setImage("https://i.imgur.com/6gf1TXj.gif");
const developers=new Discord.RichEmbed().setImage("https://thumbs.gfycat.com/CheerfulAbandonedAmethystsunbird-max-1mb.gif");
const party=new Discord.RichEmbed().setImage("https://i.imgur.com/mP8ZRTX.gif");
const normies=new Discord.RichEmbed().setImage("https://i.imgur.com/8bdx5RF.gif");
const triggered=new Discord.RichEmbed().setImage("https://i.imgur.com/5HAvEKk.gif");
const dio=new Discord.RichEmbed().setImage("https://i.kym-cdn.com/photos/images/original/000/754/539/566.gif");
const shook=new Discord.RichEmbed().setImage("https://media1.tenor.com/images/74615c72cdb521769a2064c11e541d22/tenor.gif?itemid=5794225")
const bee=new Discord.RichEmbed().setImage("https://i.imgur.com/wes7iyz.gif")

client.on('ready', () => {
  console.log('I am ready!');
});

const triggers = {
  "420":"حشش",
  "blaze it":"حشش",
  "thick":"Awesome pics. Great size. Look thick. Solid. Tight. Keep us all posted on your continued progress with any new progress pics or vid clips. Show us what you got man. Wanna see how freakin' huge, solid, thick and tight you can get. Thanks for the motivation.",
  "thicc":"Awesome pics. Great size. Look thick. Solid. Tight. Keep us all posted on your continued progress with any new progress pics or vid clips. Show us what you got man. Wanna see how freakin' huge, solid, thick and tight you can get. Thanks for the motivation.",
  "chuck":"𝓹𝓻𝓪𝓲𝓼𝓮 𝓫𝓮 𝓾𝓷𝓽𝓸 𝓱𝓲𝓶",
  "chuckco":"𝓹𝓻𝓪𝓲𝓼𝓮 𝓫𝓮 𝓾𝓷𝓽𝓸 𝓱𝓲𝓶",
  "/not too":Jeans,
  "not too":Jeans,
  "jeans":Jeans,
  "fuck yea":trashdove,
  "hell yea":trashdove,
  "trashdove":trashdove,
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
  "hue":hueHueHue,
  "never":never,
  "logs":"The Lincoln logs look on the Lincoln logs unlock the Lincoln logs in laws suck my linking logs.",
  "developers":developers,
  "party":party,
  "normies":normies,
  "shook":shook,
  " dio ":dio,
  "sono chi no sadame":"JOOOOOOOOO JO",
  "power":"KONO POWA",
  "society":":b:️:o2:️:cross:️:cross:️:o2:️:scorpius:️   :cross:️🅴:x::cross:",
  "bee": bee,
  "fortnite": fortnite
}
var prevMessage = null;
var del = false;

var prevMessage = null;

client.on('message', message => {
  if(message.author.bot) return;
  var emojilist = Array.from(message.guild.emojis.values());
  if (message.content.charAt(0) === '^') {
    for (var i = 0; i < emojilist.length; i++){
      if(message.content.substring(1).toLowerCase().includes(emojilist[i].name.toLowerCase())){
        prevMessage.react(emojilist[i]);
        message.delete();
        return;
      }
    }
  }
  var triggerlist = Object.keys(triggers);
  for (var i = 0; i<triggerlist.length; i++){
    if(message.content.toLowerCase().includes(triggerlist[i])){
       message.channel.send(triggers[triggerlist[i]]);
    }
  }
  if(message.content.toLowerCase().includes("/help")){
    message.channel.send("Do you really need help shitposting?");
  }
  if (message.content.toLowerCase() === 'ping') {
    message.reply('pong',{tts:true});
  } 
  if (message.content.toLowerCase() === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  if (message.content.toLowerCase().includes('waste') && message.content.toLowerCase().includes('time')){
    message.channel.send(calvintime);
  }
  if (message.content.toLowerCase().includes('cisco') && !message.content.toLowerCase().includes('.com')){
    message.channel.send(".:|:.:|:. Chuck Co .:|:.:|:.");
  }
  if (message.content.toLowerCase().includes('steam') && message.content.toLowerCase().includes('ham')){
    message.channel.send(steamedham);
  }
  if (message.content.toLowerCase().includes('allahu') && !message.content.toLowerCase().includes('akbar')){
    message.channel.send("akbar");
  }
  if (message.content.toLowerCase().includes('well') && (message.content.toLowerCase().includes('start coming') || message.content.toLowerCase().includes('starts coming'))){
    var i;
    for (i = 0; i < 15; i++){
      message.channel.send("and they don't stop coming");
      sleep(1000);
    }
  }
  if (message.content.toLowerCase().includes('please') && message.content.toLowerCase().includes('clap')){
    message.channel.send(jebpleaseclap);
  }
  if (message.content.toLowerCase().includes('bless')){
    message.react("🙌");
  }
  if (message.content.toLowerCase() === "listemojis") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send(emojiList);
  }
  for (var i = 0; i< emojilist.length; i++){
    if(emojilist[i].name.toLowerCase() === 'fortnite' && message.content.toLowerCase().includes('retard')){
      message.react(emojilist[i]);
    }
    if(message.content.toLowerCase().includes(emojilist[i].name.toLowerCase())){
      message.react(emojilist[i]);
    }
  } 
  prevMessage = message;
});

client.login(token);
