//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233257514504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUQ0MjkvSlpRNkFRbVdqUXVjK0JYODhXQ3NWRndJSHRVcGxuZ0VSUVVYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTM2Q211clJxd2taaks5M3dFdFlMZUtKUUVrdS8xcDNaVE1aWlIxZy9WVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQi9sTTZNLzBlMit1RTdubjhCa2FIKzJVM1FabmhIWGRRa0R5UUhoL2xnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvcFFyTm52Q2MvcEJXRysrcE1zSFZXZkRNMHQ0RlJnVVhNTzdpVXZSNWprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGajYzRVBsczgyd0F2dFY1Z21EUmVkUHhSVy95MnVwbjdGbm1aOE5qRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU2OVlBTkYvRURONFV4YlVUQUJqalh2aUgrT2lqd0hqVm55b1JOdjUzRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lhWlBMUldGbjJNdVFRS2plZUhRY05LeGd1WmRtb0MyWW84d2JlcXFYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lFT1JHWVdZN1VmNkg0MWFIZjMrd3REV3dWTU9GeTA2eSsxdk5rMW1GST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVxMTFjY3BJWVAyaXdmZHg4YnY5SjEvajJFT3FtOE1RZ3RtWHVsYzUweWxHWEtUTkQrM1lVcEtjdkxkdWhwRDAreGdIZ2dZTGRIWEpTdlpJaG1hcWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJMS1hQRlU5Tit2M2JLY2FiWUFRcmE5K3BLYTBUMWYwWVZvV0oxQmV4S3FVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXMDdwZGc2bVRuVzRKT3lyY3c5Tm9RIiwicGhvbmVJZCI6Ijc0MjIyZTI3LTMyODQtNGIzNC1hMjkwLWM3ODJiYzBjY2M5YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydkZUaDh0UFQ1eno4Skt1YmszMFhFY2FQSUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW5MS0NxSXlKOEZnY25RK3JOdmI3eVVOcGdVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllORURaTVJYIiwibWUiOnsiaWQiOiIyMzMyNTc1MTQ1MDQ6NDdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YSXpkOE9FUGFOOExnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBLVVllbXBVZjV1cTdYNnI4OUhvV3FTWDNXUmowdktuNi8vYzlGcnZraUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRlbmovL2JXRktLYW5vTGtSc05RbHVZMWxyYUdBS0JVMGhmR3E0bFhDVktFdGEySStwMmFUMlljTEN0dEJrRFdhVmE1dU5QWWZUNERnV050dmJwSGpRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4YlBONzQrV2lhN3FGSVFXYU9sOW1RaGV3alZLbHY3RTJGWElVZHFCWFJqbmxZYWtrUVEzRkdLUTM2YkFUWnkwODRCbVVsT09uYlQza1R3ODZBR1Nodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzI1NzUxNDUwNDo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkQ2xHSHBxVkgrYnF1MStxL1BSNkZxa2w5MWtZOUx5cCt2LzNQUmE3NUloIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk4OTAwNTB9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSE™`",
  author: process.env.PACK_AUTHER || "KING",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "Reverse King",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
