
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, Bienvenido a los grupos oficiales, te invito a unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de LoliBot-MD 😸*

➤ Grupos oficiales del bot:
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Grupos del amistades donde esta el bot

*꧁⁣𓆩Aᴹᴵᴳᴼˢ Cᴴᴬᵀˢ Y Aᴾᴼᴿᵀᴱ*
https://chat.whatsapp.com/GVQQyg98dL87nce8BVlEmv

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

Si quieres que tu grupo aparezca aca habla con mi creador
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝐀𝐥𝐞𝐢𝐳𝐧-𝐌𝐃', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler
