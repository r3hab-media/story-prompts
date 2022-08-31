//run function onload
window.onload = () => {
	randomMainGenerator();
	randomOthersGenerator();
	randomSettingGenerator();
	randomThemeGenerator();
	randomConflictGenerator();
	randomArchetypeGenerator();
};

let newData = document.querySelector("#newData");
newData.addEventListener("click", () => {
	randomMainGenerator();
	randomOthersGenerator();
	randomSettingGenerator();
	randomThemeGenerator();
	randomConflictGenerator();
	randomArchetypeGenerator();
});

//Get main character
const randomMainGenerator = () => {
	fetch("https://randomuser.me/api/?nat=us")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			showRandomMainData(data);
		});
};

showRandomMainData = (randomMain) => {
	document.getElementById("mainCharacter").innerText = `${randomMain.results[0].name.first} ${randomMain.results[0].name.last}`;
};

//Get other characters
const randomOthersGenerator = () => {
	fetch("https://randomuser.me/api/?results=5&nat=us")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			showRandomUserData(data);
		});
};

showRandomUserData = (randomUsers) => {
	const others = randomUsers.results.map(({ name: { first, last } }) => `${first} ${last}`).join("<br>");
	document.getElementById("otherCharacters").innerHTML = others;
};

//Get setting
const settings = [
	`A young girl who experiences bullying at school is set in a suburb of Atlanta, GA in the 1980s`,
	`A young boy who grows up with a transgender father in inner-city New York`,
	`A boy at the zoo opens a door in a zoo office. The office is marked "Experiemental - DO NOT ENTER". As he opens the door, he sees several lab workers that appear dead on the floor. Each person is covered with locusts. The boy screams and the locusts chase him. They cover the boy as he continues to scream. As the screaming quiets, the locusts fly away. All we see is the boy's clothes in a pile on the floor.`,
	`A woman who is deeply in love with a man is crushed when she learns he's actually a serial killer`,
	`A high school student is studying to become an engineer. One day, he's experiementing with a high-powered battery to create a better power source for his home. The battery explodes, sending shrapnel across his face, leaving a deep cut. As he's gathering himself and cleaning up, he hears a knock at his front door. It's a man twice his age with a healed, but matching scar.`,
	`A boy stays home while his parents go out to dinner. The boy, 16, decides to take one of the other cars out with his friends. They buy some beer and the boy drinks while he drives with his friends. Suddenly, all the kids realize they've been in a car accident. They're upside down after rolling a few times. The boy gets out of the car to see what they hit. It was his parents as they were on their way home from their date.`,
	`As a 16 year old girl in Afghanistan is whipped and beaten, by her father, for trying going to school, her anger manifests. She looks in the mirror at one of the bruises that nearly covers a birthmark on her face. She cries and  after finding herself home alone later that day, she goes through her father's things and finds a birth certificate with another girls's name on it and a birthdate within a month of her own. She has no access to the Internet at home, so she delivers the birth certificate to a friend of hers. After a brief web search, her friend reports that the person listed on the birth certificate was kidnapped from the backyard of her house, 14 years earlier, from a small town in Ohio, in the United States. Her friend brought a picture of the kidnapped girl... who has a matching birthmark.`,
];

const randomSettingGenerator = () => {
	let randomSetting = settings[Math.floor(Math.random() * settings.length)];
	document.getElementById("setting").textContent = randomSetting;
};

const themes = [
	`Good vs. Evil`,
	`Love`,
	`Redemption`,
	`Courage and Perseverance`,
	`Coming of Age`,
	`Revenge`,
	`War`,
	`Betrayal`,
	`Friendship`,
	`Family`,
	`Death`,
	`Prejudice`,
	`Love and Marriage`,
	`Fate`,
	`Rebellion`,
	`Humility`,
	`Fear`,
	`Hate`,
	`Violence`,
	`Tragedy`,
	`Money`,
	`Greed`,
	`Personal Developoment`,
	`Oppression`,
	`Poverty`,
	`Sacrifice`,
	`Survival`,
	`Hypocrasy`,
	`Religion`,
	`Free Will`,
	`Immortality`,
	`Suffering`,
	`Freedom`,
	`Gender`,
	`Loneliness`,
];

const randomThemeGenerator = () => {
	let randomTheme = themes[Math.floor(Math.random() * themes.length)];
	document.getElementById("theme").textContent = randomTheme;
};

const conflicts = [
	`Person vs. Person`,
	`Person vs. Nature`,
	`Person vs. Society`,
	`Person vs. Technology`,
	`Person vs. Supernatural`,
	`Person vs. Self`,
	`Person vs. Destiny (fate, luck, God)`,
];

const randomConflictGenerator = () => {
	let randomConflict = conflicts[Math.floor(Math.random() * conflicts.length)];
	document.getElementById("conflict").textContent = randomConflict;
};

const archetypes = [
	{
		type: "The Magician",
		desc: "A powerful figure who has harnessed the ways of the universe to achieve key goals.",
		strengths: "omniscience, omnipotence, discipline",
		weaknesses: "corruptibility, arrogance",
	},
	{
		type: "The Lover",
		desc: "The romantic lead who’s guided by the heart.",
		strengths: "humanism, passion, conviction",
		weaknesses: "naivete, irrationality",
	},
	//https://www.masterclass.com/articles/writing-101-the-12-literary-archetypes#Xd05Y8CaLcnECgVeJdSfZ
];

const archetypesTemplate = (types) => {
	return `
    <h4><span><strong><i>${types.type}</i></strong></span></h4>
    <p class="desc">${types.desc}</p>
    <br>
    <h5><span><u><strong>Strengths:</strong></u> ${types.strengths}</span></h5>
    <br>
    <h5><span><u><strong>Weaknesses:</strong></u> ${types.weaknesses}</span></h5>  
  `;
};

const randomArchetypeGenerator = () => {
	let randomArchetype = archetypes[Math.floor(Math.random() * archetypes.length)];
	document.getElementById("archetype").innerHTML = archetypesTemplate(randomArchetype);
};
