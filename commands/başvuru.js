const Discord = require('discord.js');
const rakunayar = require('../Settings/config.json')

module.exports = {
    name: 'başvuru',
    aliases: ['basvuru'],

    run: async(client, message, args) => {
		const embed = new Discord.MessageEmbed().setColor(rakunayar.Color).setFooter(rakunayar.Footer)
if(![rakunayar.TagRoleID].some(role => message.member.roles.cache.get(role))) return message.react(rakunayar.CarpiID) 
if([rakunayar.Staff].some(role2 => message.member.roles.cache.get(role2))) return message.react(rakunayar.CarpiID) 

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(message.channel.id === rakunayar.CCID){
	var channel = message.guild.channels.cache.find((channel) => channel.name === `${message.member.displayName}-başvuru`);
	
	var LogChannel = message.guild.channels.cache.find((channel) => channel.id === rakunayar.LogChannelID);
	if(channel){
		return message.channel.send(`Zaten başvuru kanalınız açık! <#${channel.id}>`).then(msg => msg.delete({timeout: 6000}));
		} else {
        let category = message.guild.channels.cache.get(rakunayar.KategoryID);
        message.guild.channels.create(`${message.member.displayName}-başvuru`, {
            parent: category,
            permissionOverwrites: [
                {id: rakunayar.EveryoneID, deny: ['VIEW_CHANNEL']},
                {id: message.author.id, allow: [('VIEW_CHANNEL'), ('SEND_MESSAGES')]}]
            }).then(channel => {


				const filter = m => m.author === message.author;
				var cevaplar = [];
				message.react(rakunayar.TikID)


				channel.send("İsmin Nedir?");
				channel.awaitMessages(filter, { max: 1 })
				  .then(function (collected) {
					  collected.each(msj => cevaplar.push(msj.content));

				channel.send(`Kaç Yaşındasın?`);
			    channel.awaitMessages(filter, { max: 1 })
					.then(function (collected) {
					collected.each(msj => cevaplar.push(msj.content));

				channel.send(`Bize Ne Gibi Katkıların Ola Bilir?`);
				channel.awaitMessages(filter, { max: 1 })
					.then(function (collected) {
					collected.each(msj => cevaplar.push(msj.content));

				channel.send(`Haftalık Kaç İnvite Kasabilirsin ?`);
				channel.awaitMessages(filter, { max: 1 })
					.then(function (collected) {
					collected.each(msj => cevaplar.push(msj.content));

                channel.send(`Günlük Kaç Saat Seste Durabilirsin`);
				channel.awaitMessages(filter, { max: 1 })
						.then(function (collected) {
						collected.each(msj => cevaplar.push(msj.content));

                channel.send(`Gece Afk Bırakabilir misin ?`);
						channel.awaitMessages(filter, { max: 1 })
						.then(function (collected) {
						collected.each(msj => cevaplar.push(msj.content));
						
						channel.send(`Daha önce hiç başka bi sunucuda yetkili oldunmu ?`);
						channel.awaitMessages(filter, { max: 1 })
						.then(function (collected) {
						collected.each(msj => cevaplar.push(msj.content));

								  
				channel.send("Başvurunuz başarıyla alındı, yetkili arkadaşlar sizinle ilgilenecekler, başvuru için teşekkür ederiz. Kanal birazdan silinecek...")

				LogChannel.send(embed.setDescription(`
${message.author.tag} (\`${message.author.id}\`) **Kullanıcısının Başvuru Formu**  

Soru 1 = İsmin Nedir?
\`${cevaplar[0]}\`

Soru 2 = Kaç Yaşındasın?
\`${cevaplar[1]}\`

Soru 3 = Bize Ne Gibi Katkıların Ola Bilir?
\`${cevaplar[2]}\`

Soru 4 = Haftalık Kaç İnvite Kasabilirsin ?
\`${cevaplar[3]}\`

Soru 5 = Günlük Kaç Saat Seste Durabilirsin
\`${cevaplar[4]}\`

Soru 6 = Gece Afk Bırakabilir misin ?
\`${cevaplar[5]}\`

Soru 7 = Daha önce hiç başka bir sunucuda yetkili oldunmu ?
\`${cevaplar[6]}\``));
									setTimeout(function() {
										channel.delete()
									}, 3000);
							  })
							  })
							  })
							  })
							  })
							  })
							  })
			  }).catch(console.error);
		}
	}
}
}
