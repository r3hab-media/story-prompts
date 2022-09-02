const currYr = new Date().getFullYear();
thisYear.textContent = currYr;

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

//Get german names
const randomGermanGenerator = () => {
	fetch("https://randomuser.me/api/?nat=de")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			showRandomGermanData(data);
		});
};

showRandomGermanData = (randomGerman) => {
	document.getElementById("mainCharacter").innerText = `${randomGerman.results[0].name.first} ${randomGerman.results[0].name.last}`;
};

//Get french names
const randomFrenchGenerator = () => {
	fetch("https://randomuser.me/api/?nat=fr")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			showRandomFrenchData(data);
		});
};

showRandomFrenchData = (randomFrench) => {
	document.getElementById("mainCharacter").innerText = `${randomFrench.results[0].name.first} ${randomFrench.results[0].name.last}`;
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
	`You lost your site sight... along with everyone else on Earth - in the Great Blinding. Two years later, without warning, your sight returns. As you look around, you realize that every available wall, floor and surface has been painted with the same message - <i><strong>DON'T TELL THEM YOU CAN SEE</strong></i>.`,
	`After years of gentle persuasion, the best friend you've had since childhood finally agrees to see a professional therapist for some serious mental issues. As she begins to improve, you slowly start to realize that you are her imaginary friend.`,
	`Your parents have always been protective of you for as long as you could remember. The entire house was padded, even when you grew out of your toddler years. You were home-schooled and someone was alwways hovering in the area to make sure you didn't trip or hurt yourself. You thought this was just overprotective parents until one January day. Your hands were so dry that your skin broke. A drop of blood fell to the ground and almost instantly, red flowers grew and bloomed from where the drop landed.`,
	`When people are born, they are assigned a soulmate. The two soulmates are assigned a song that only they know. On a rainy night, you hear someone break in through the back door. They are wearing a mask and carrying a large knife. They are also humming your song under their breath.`,
	`Everytime you fall in love, you lose a part of your sould to the person you love. Everytime someone flals in love with you, you get a piece of their soul. You die when you run out of soul to give. History only knows of two immortals so far... one who never found love and one who makes people fall in love with them in order to extend their life.`,
	`Children who die at a young age are given a very special role in the afterlife: they become invisible friends and are assigned to other children who need them back in the living realm.`,
	`Whenever you feel like someone is watchging you, you try to shrug it off. However, one night you can't shake the feeling that someone is right behind you, so you turn around and standing there in front of you, right in the doorway, is anything but imaginary. It's an imaginary friend you created as a child. They drop a note on the ground and fade into the light. The note says, "<i><strong>Get me out of here</strong></i>.`,
	`You have the ability to mentally hear the honst answer to any question just by looking at a person and thinking the question. It was all fun and games until you looked in the mirror and asked a question you shouldn't have.`,
	`Every baby is taken away by the government and returned when they are 10 years old. They never remember what happened in those years, but they always recognize their parents. You, however, are a different story. You remember everything that happened and the people you are sent to live with... they're not your parents.`,
	`You are in a typical awkward elevator ride with a group of people you don't know. Suddenly a man says, "<i>So, I bet you're all wondering why I've gathered you here..."</i>, before hitting the ermgency button.`
];

const randomSettingGenerator = () => {
	let randomSetting = settings[Math.floor(Math.random() * settings.length)];
	document.getElementById("setting").innerHTML = randomSetting;
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
	{
		type: "The Hero",
		desc: "The protagonist who rises to meet a challenge and saves the day.",
		strengths: "courage, perseverance, honor",
		weaknesses: "overconfidence, hubris",
	},
	{
		type: "The Outlaw",
		desc: "The rebel who won’t abide by society’s demands.",
		strengths: "independent thinking, virtue, owes no favors",
		weaknesses: "self-involved, potentially criminal",
	},
	{
		type: "The Explorer",
		desc: "A character naturally driven to push the boundaries of the status quo and explore the unknown.",
		strengths: "curious, driven, motivated by self-improvement",
		weaknesses: "restless, unreliable, never satisfied",
	},
	{
		type: "The Sage",
		desc: "A wise figure with knowledge for those who inquire. The mother figure or mentor is often based on this archetype.",
		strengths: "wisdom, experience, insight",
		weaknesses: "cautious, hesitant to actually join the action",
	},
	{
		type: "The Innocent",
		desc: "A morally pure character, often a child, whose only intentions are good.",
		strengths: "morality, kindness, sincerity",
		weaknesses: "vulnerable, naive, rarely skilled",
	},
	{
		type: "The Creator",
		desc: "A motivated visionary who creates art or structures during the narrative.",
		strengths: "creativity, willpower, conviction",
		weaknesses: "self-involvement, single-mindedness, lack of practical skills",
	},
	{
		type: "The Ruler",
		desc: "A character with legal or emotional power over others.",
		strengths: "omnipotence, status, resources",
		weaknesses: "aloofness, disliked by others, out of touch",
	},
	{
		type: "The Caregiver",
		desc: "A character who continually supports others and makes sacrifices on their behalf.",
		strengths: "honorable, selfless, loyal",
		weaknesses: "lacking personal ambition or leadership",
	},
	{
		type: "The Everyman",
		desc: "A relatable character who feels recognizable from daily life.",
		strengths: "grounded, salt-of-the-earth, relatable",
		weaknesses: "lacking special powers, often unprepared for what’s to come",
	},
	{
		type: "The Jester",
		desc: "A funny character or trickster who provides comic relief, but may also speak important truths.",
		strengths: "funny, disarming, insightful",
		weaknesses: "can be obnoxious and superficial",
	}
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

//checkboxes
const elements = document.querySelectorAll(".filter-items");
const inputs = document.querySelectorAll("input");
inputs.forEach((item) => {
	item.addEventListener("change", function () {
		if (this.checked) {
			elements.forEach((e) => {
				if (e.getAttribute("data-text") == this.value) {
					e.style.display = "flex";
				}
			});
		} else {
			elements.forEach((e) => {
				if (e.getAttribute("data-text") == this.value) {
					e.style.display = "none";
				}
			});
		}
	});
});
