let modInfo = {
	name: "The Experimental Tree v3.0.2",
	id: "experiments",
	author: "Ozvali",
	pointsName: "infects",
	modFiles: ["layers/a.js", "layers/c.js", "layers/E.js", "layers/F.js", "layers/H.js", "layers/R.js", "layers/W.js", "layers/timeline.js", "layers/timeline_FL.js", "layers/timeline_EX.js", "layers/timeline_SL.js", "layers/timeline_O.js", "layers/submergence_D.js", "layers/meta_C.js", "layers/meta_E.js", "layers/meta_H.js", "layers/meta_F.js", "tree.js"],
	discordName: "Solstice Studio Discord",
	discordLink: "https://discord.gg/solsticestudios",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 0.0001,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "3.0.2_1",
	name: "Meta-fication",
}

let changelog = `<h1>Changelog:</h1><br>
		<h2>vx.y.z_a</h2><br>
		x = major update<br>
		y = minor update<br>
		z = very minor update<br>
		a = bug/mechanic fixes<br><br>

<div class="link" onclick="showTab('info-tab')">Settings</div><br><br>

	<h2>v3.0.2: Meta-fication</h2><br>
- Added 18 more Achievements<br>
- Improved Balancing (Obfuscation -> Timeline 3) Section<br>
- Improved Meta-Timeline Section<br>
- Improved Timeline 1<br>
- Removed "Distortion Rows 2-3" and moved all content to "Main Distortion"<br>
- Do you got what it takes to finish the game sam?<br><br>


	<h2>v3.0.1: Scrapped Reality</h2><br>
- Ported "The Experimental Tree 2020" to current version<br>
- Updated Version & Background<br>
- Rebalanced some things<br>
- Added Special Credits<br>
- Added "Purple Corruption" Theme<br><br>

    <h3>v3.0.0a</h3><br>
- Fixed Meta-Experiments having a higher price than it's suppost to.<br>
- Meta-Crystals having a lower effect has been fixed.<br>
- Meta-Crystals price being significantly lower due to mE Buyables has been fixed.<br><br>

		<h1>v3.0: Metaful Lane</h1><br>
- Added 2 More Layers<br>
- Added more Distortion Content<br>
- Refixed 2 Distortion Upgrade Bugs<br>
- Refixed 2 Obfuscation Bugs<br>
- Refixed 3 Weapon Bugs<br>
- Refixed Distortion Text<br>
- Readjusted 'Distortion Rows 2 & 3' Catagory<br>
- Refixed 'R3alIz@ti0n' Challenge slightly.<br>
- Refixed Distortion causing inflation<br>
- Refixed 'Hallway C' Cost & Effect<br>
- Readjusted Positions for Bars in 'Distortion Rows 2 & 3'<br>
- Moved Achievements to another area; I.e Hoverbox (Achievement Icon)<br>
- Fixed 3 Achievements<br>
- Refixed 2 Milestones<br>
- Added 'Crediting'<br>
- Added 'Inspired By'<br>
- Refixed CSS slightly<br>
- Refined Pre-Timeline 3 Gameplay<br>
- Fixed Endgame Bug<br>
- Readjusted Mobile Mode<br>
- Made Mobile Mode easier to navigate.<br>
- Fixed Obfuscation Bug in an CT Challenge.<br>
- Fixed 19 other bugs or issues causing disruption or either game resetting.<br>
- Fixed devSpeed at later parts of the game. <a>:)</a><br>
- Added Settings Link in Changelog for bug purposes/ Mobile Mode<br>
- Refixed 4th Distortion Upgrade<br>
- Fixed 1 Random Upgrade Effect causing higher balancing.<br>
- Fixed 2 Bugs Concluding Mobile Mode<br>
- Readjusted Text for Mobile & Desktop Mode<br>
- Introduction to Buyables & Cap Breakers<br>
- <a>Endgame: 7th Meta-Experiment Milestone (Timeline 3)</a><br><br>


		<h2>v2.3: Distorted Reality</h2><br>
			- Added a new Layer<br>
			- Fixed 'Soul Shield' Challenge again<br>
			- Added more than 25 things<br>
			- Fixed Weapons going to e1,000,000 before the 5th Distortion Upgrade<br>
			- Fixed Explosives now having a purpose again & removing Milestones popups later<br>
			- Weapons now cap at 1e10,000 to prevent inflation of all layers<br>
			- 'Hallway C' cost is now ^3000 higher<br>
			- Nerf'd Weapon effect slightlyyyy<br>
			- Balanced & Adjustments up to Endgame<br>
			- Added Bar Requirements to unlock more content<br>
			- Planned Distortion Challenges<br>
			- Hidden CT for later purposes after Obsfucation<br>
			- Added Submergance Timeline<br>
			- Fixed UI<br>
			- Fixed Several CSS Errors<br>
			- Lower'd 5th Obsfucation Upgrade Cost Significantly<br>
			- Endgame is at an area where you can't go past it but Mod Creator can<br>
			- Endgame: 1e115,600 Infects<br><br>


		<h2>v2.1: Obfuscating Souls</h2><br>
			- Added a new Layer<br>
			- Fixed 'Soul Shield' Challenge<br>
			- Added 3 Soul Milestones<br>
			- Added 4 Soul Upgrades<br>
			- Requirement is now nerf'd at 1 if it is under 0.99.<br>
			- Fixed 'NaN' bug from Explosive Upgrades<br>
			- Nerf'd Soul Shield slightly<br>
			- Balanced & Adjustments up to 1e20 Souls in Normal Timeline<br>
			- Endgame: 2 Obfuscation<br><br>

		<h3>v2.0.1: Breaking News...</h3><br>
			- Removal of News Ticker<br>
			- Added Corrupted Theme<br>
			- Added more UI features to show Challenge & Timeline<br>
			- Balanced 'Lovebeast' Formula<br>
			- Balanced 'Snapper' Formula<br>
			- Balanced after 5M Experiments<br>
			- Balanced Timeline 2 by a smudge<br>
			- Fixed Souls having no effects<br>
			- Fixed News Ticker being shown on the bottom (:css_bonk:)<br>
			- No New Content Currently D:<br><br>


		<h1>v2.0: Another World?</h1><br>
			- Added 4 Layers<br> 
			- Added 6 Achievements<br> 
			- Added Balancing Before Timeline 1<br> 
			- Introducing Timeline 2 (Another World...)<br> 
			- Added 3 Challenges<br> 
			- Added Formula Balancing on Newer Content<br> 
			- Fixed Multiple bugs<br> 
			- Feedback is needed for slow'd gameplay...too fast gameplay...or unbalanced entirely...<br> 
			- Endgame: 1 Soul - Timeline 2<br> <br> 

		<h3>v1.1.4_stable</h3><br>
			- Added 2 Room Upgrades<br>
			- Removed Room Softcap but decreased the Room Effect significantly<br>
			- Changed Room Formula (^0.05 > ^0.046)<br>
			- Changed Weapon Formula (^0.03 > ^0.025)<br> 
			- Fixed Weapon Milestone<br>
			- Fixed 3 Crystal Upgrades<br>
			- Fixed 2 Experiment Upgrades<br>
			- Fixed 2 Room Upgrades being Inflated<br>
			- Fixed 4 Room Upgrades not giving effects<br><br>

 		<h3>v1.1.3_stable</h3><br>
   			- Added 2 Weapon Milestones<br>
   			- Pushed Crystal Upgrades on Fusion & Humans to be early.<br>
   			- Rooms will automatically make it easier to progress through Fusions & Humans.<br>
   			- Fixed CSS by a minor bit.<br>
   			- Fixed 3 Upgrades in Weapons being Faulty.<br>
			- Rebalanced Experiment Costs & Effects<br>
			-> Changed 'Snapper' and 'Somby' Effects significantly<br>
			- Reordered 5 Achievements<br>
   			- Decreased Goon Cost to make pre-fusions easier.<br>
			- Fixed a bug of Fusions that kept the 5th row of Crystal Upgrades when it isn't suppost to.<br>
			- Balanced more Crystal Upgrades.<br>
			- Made Fusion Milestone 1 require 1 Fusion instead of 2 Fusions due to progression.<br><br>

		<h3>v1.1.2_stable: Weapons, Weapons, Weapons!</h3><br>
			- Added 2 Weapon Upgrades.<br>
			- Added 1 Room Upgrade.<br>
			- Changed Milestone, Upgrades, Achievements, and Version Looks.<br>
			- Fixed Rooms becoming broken after reaching 3.<br>
			- Fixed Humans Gain Formula.<br>
			- Fixed Keep Milestones Again...<br>
			- Revamped 2 Crystal Upgrades.<br>
			- Revamped 1 Human Upgrade.<br>
			- Endgame: 8 Weapons<br><br>


		<h3>v1.1.1</h3><br>
			- Fixed Experiment Milestone 1 giving 2 Upgrades that weren't unlocked yet. (Subsited with a Upgrade.)<br>
			- Added 2 Weapon Upgrades that will make Crystal Upgrades more useful.<br>
			- Fixed Rooms breaking past the 3rd Room Upgrade<br>
			- Fixed All Fusion & Human Milestones to have the same effects.<br>
			- Humans now will not reset Crystal Upgrades if you get a Room.<br>
			- Secret Achievement has been fixed again.<br>
			- Fixed 2 Achievements giving the wrong Reward effect.<br>
			- Fixed 4 Crystal Upgrades giving faulty or weak effects. <br>
			- Thank you to a lot of players for playtesting this!<br>
			- Endgame: 7 Weapons<br><br>


		<h2>v1.1 The Battle Begins </h2><br>
			- Added Weapons.<br>
			- Added 6 Fusion Upgrades<br>
			- Added 5 Human Upgrades<br>
			- Added 3 Room Upgrades<br>
			- Added 2 Room Milestones<br>
			- Added 3 Weapon Upgrades<br>
			- Added 2 Weapon Milestones (WIP)<br>
			- Fixed 3 Upgrades not giving effects or nulling<br>
			- Fixed 5 Milestones not giving effects<br>
			- Fixed Weapons Layer Placement being on Row 3 rather than Row 2<br>
			- Fixed Multiple Bugs causing errors upon buying a certain upgrade.<br>
			- Fixed Room Gain going from 3 => 9 after buying the 3rd Room Upgrade.<br>
			- Steady Capped Room Gain<br>
			- Capped Multiple Upgrades to make the game balanced<br>
			- Achievements will be added in v1.2!<br>
			- Weapons now reset all previous layers.<br>
			- Weapons will now buff all previous layers except rooms.<br>
			- Some Weapon Upgrades will increase the game balancing making it easier to reach the Weapons Layer.<br>
			- Endgame: 4 Weapons<br><br>

		<h1>v1.0 The True Beginning </h1><br>
  			- Added Rooms.<br>
   			- Added 8 Fusion Upgrades.<br>
   			- Added 10 Human Upgrades.<br>
   			- Added 5 Human Milestones.<br>
  			- Added 3 Fusion Milestones.<br>
  			- Fixed Keeping Function.<br>
   			- Rebalanced all Functions & Formulas.<br>
   			- Rebalanced Humans going to e100 to early.<br>
  			- Changed Rooms to be Static rather than Normal to make better formulas for later.<br>
  			- Added Cos, Sine, and Ln Formulas.<br>
   			- Added 7 Achievements.<br>
   			- Fixed Multiple Bugs causing either; Crashes, incorrect formulas, or failure to keep.<br>
   			- Fixed 7 Fusion Upgrades having Custom Experiment Names.<br>
   			- Fixed 2 Fusion Upgrads having Actual Experiment Names.<br>
   			- Removed Challenges for Experiments & Humans.<br>
			- Rooms will have lore in v1.1!<br>
 			- Endgame: 1 Room<br><br>

		<h2>v0.5 The First Living Soul </h2><br>
			- Changed Kill > Humans<br>
			- Added 16 Total Upgrades<br>
			- Added 3 Total Milestones<br>
			- Changed Costs, Effects, and Buffs on all Layers<br>
			- Added more Lore in Humans<br>
			- Balanced Up-to Fusions<br>
			- Experiment Milestone 5 & Experiment Challenge 3 is Balanced now<br>
			- Crystal Upgrade 55 broke, causing fixture on js<br>
			- Fixed Achievements<br>
			- Added Some Effects to Achievements<br>
			- Added Text Change to some Achievements<br>
			- Added 2 Keep Milestones<br>
			- Changed more Stuff<br>
			- Endgame: 2 Humans<br><br>

		<h3>v0.4.1 Checks, Saves, and Balancing </h3><br>
			- Added A Savebank to Pre-Fusions (ongod?)<br>
			- Added Another Experiment Milestone to help with the During-Fusion Upgrades<br>
			- Breaking News: Experiment Milestone 13 was 15% E/sec and not 1% E/sec...<br>
			- Added Another Experiment Milestone to improve Breaking News of that Breaking News!<br>
			- Fixed 3 Upgrades having a higher Scale than the other one.<br><br>
			- v0.4.1.1:<br>
			- Changed the 'Foxnay' Upgrade a bit<br>
			- Added 2 Achievement Effects for Pre-Fusion & During-Fusion<br>
			- Fixed 2 Experiment Upgrades<br>
			- Fixed 1 Experiment Milestone<br><br>

		<h2>v0.4 Bloody Facility </h2><br>
			- Added Kills (Another Layer that will Reset Experiments & Crystals but not Fusions!)<br>
			- Changed 2 Upgrades<br>
			- Changed UI Layout<br>
			- Crystals & Experiment Layer's are balanced before Fusion<br>
			- Fusion is getting more attention. Added Lore to the Fusion Layer<br>
			- Fixed Multiple things to Balance all of the Layers<br>
			- Added 1 Crystal Upgrade<br>
			- Experiment Milestone 1 will automatically buy the next 3 hidden upgrades in Crystals (to make it easier for you :3)<br>
			- Fixed 'Experimental Brawl' & 'Immunity' to be more balanced and more of an active-playstyle.<br>
			- Endgame: 1 Kill(s)<br><br>

		<h3>v0.3.3 Someone Deadly </h3><br>
			- Added 2 Fusion Upgrades<br>
			- Changed the 3rd Experiment Challenge Formula & Effects<br>
			- Readjusted Crystals & Experiment to be more balanced Pre-Fusion<br>
			- Fixed Fusion Effect being too overpowered after 1,000 Fusions<br>
			- Fixed Fusion Effect only affecting Crystals after the 5th Upgrade in Fusions<br>
			- Added Another Layer (v0.4 Log lol)<br>
			- Nice Enough to change 'Experimental Brawl' to 1,500,000 Crystals instead of 5,000,000,000 Crystals :3<br>
			- Endgame: Completing Experiment Challenge "Entization"<br><br>


		<h3>v0.3.2 Rebalancing the Balance </h3><br>
			- Adjusted Crystal Gain by a tad bit to prevent inflation (Even though Crystals are higher than Infects).<br>
			- Added 2 Crystal Upgrades<br>
			- Added 2 Fusion Milestones<br>
			- Added 1 Experiment Challenge<br>
			- Rescaled 2 Upgrades in Crystals<br>
			- Rescaled 3 Upgrades in Experiments<br>
			- Max Offline Time is now 1 Hour instead of 5 Hours (Prevents upgrade skipping for later)<br>
		    - Endgame: 7,500 Fusions<br><br>

		<h3>v0.3.1+ Rebalances!?!</h3><br>
			- Adjusted Fusion Gain to make it actually balanced (^0.21 > ^0.111)<br>
			- Adjusted Experiment Gain by a 'small' ammount (^0.245 > ^0.23)<br>
			- Adjusted the 'Goon' Upgrade to avoid Inflation<br>
			- Fixed the 'Vixy' Upgrade showing after Fusion Reset without the required Milestone & Upgrade<br>
			- Added 2 Experiment Upgrades<br>
			- Fixed multiple formula's on Pre-Fusion Upgrades<br>
			- Fixed 3 Crystal Upgrades<br>
			- Fixed 'Fusion Crystals' Cost (250,000 Crystals [lmao] > 1e29 Crystals)<br>
			- Fixed the Newest Experiment Upgrades cost given from '5 Fusion' Milestone to be significantly lower.<br>
			- Endgame: 50 Fusions<br><br>

		<h2>v0.3 Beginning of Combinations</h2><br>
			- Added 1 Crystal Upgrade<br>
			- Added 9 Experiment Upgrades<br>
			- Readded 4 Fusion Upgrades<br>
			- Added Another Fusion Milestones<br>
			- Added 4 Achievements<br>
			- Added Fusion Effect<br>
			- Fixed Fusion Inflation<br>
			- Fixed 8 Softcaps<br>
			- Fixed 3 Challenge Breaks<br>
			- FIxed 'Keep Upgrade' Milestones<br>
			- Fixed Challenge Reward & Description Effects<br>
			- Adjusted Fusion Gain (^0.425 > ^0.21)<br>
			- Changed 13 Experiment Upgrade Effects or Names<br>
			- Endgame: Experiment Upgrade 46<br><br>

		<h3>v0.2.1.1</h3><br>
			- Fixed 'Experimental Brawl' being significantly impossible to progress (Infect /1e10 > Infect /1e6)<br>
			- Fixed 'Experimental Brawl' Milestone Disability<br>
			- Fixed Keeping Upgrades after leaving 'Experimental Brawl'<br>
			- Fixed Fusion Effect<br>
			- Fixed 2 Achievements.<br>
			- v0.2.1.1+<br>
			- Patched 'Experimental Brawl' Bug<br>
			- Fixed Keeping Row 3 Upgrades that makes 'Experimental Brawl' Start impossible to run<br>
			- Refixed Keep Row 3 Upgrades after 'Experimental Brawl' again<br><br>

		<h3>v0.2.1 Fusions are near</h3><br>
			- Added 4 Crystal Upgrades<br>
			- Added 3 Experiment Upgrades<br>
			- Added an Experiment Challenge & Milestone<br>
			- Fixed some upgrades being inflated somehow<br>
			- Balanced Crystals & Experiments<br>
			- Endgame: 2 Fusions<br><br>

		<h2>v0.2 Challenging Approach</h2><br>
			- Added 7 Experiment Upgrades<br>
			- Added 4 Crystal Upgrades<br>
			- Added 2 Experiment Challenges<br>
			- Added 2 Achievements<br>
			- Changed Experiment Base again<br>
			- Changed the 1st Challenge Requirement from 1e9 Crystals > 5e9 Crystals<br>
			- Changed Log Formula's on multiple Upgrades<br>
			- Fixed Experiment Gain Bug<br>
			- Endgame: 1e27 Infects<br><br>

		<h3>v0.1.10 Kryptox's Group</h3><br>
			- Added 2 Experiment Upgrades<br>
			- Added 3 Crystal Upgrades<br>
			- Added Softcaps, some of them with funny names.<br>
			- Changed Achievement Tooltips<br>
			- Changed some Upgrade Effects to balance infects more.<br>
			- Fixed Milestone Passive Bug<br>
			- Changed Log Formulas to make the game balanced.<br>
			- Fixed E205 Theme Again<br>
			- Endgame: 4.99e25 Infects<br><br>


		<h3>v0.1.9: Passive Crystals</h3><br>
			- Added Total & Best to Crystals to see progres!!<br>
			- Fixed some Caps on Crystals (They aren't changing, deal with it.)<br>
			- Experiment effect has been increased (^0.22 -> ^0.28).<br>
			- Added 2 New Upgrades<br>
			- Changed 40% of Upgrade Names<br>
			- Added a new Milestone in Experiments!<br><br>

		<h3>v0.1.8.1</h3><br>
			- Decreased Infect Gain on 5 Upgrades to make the game more stable.<br>
			- Fixed base gain being overpowered.<br>
			- Changed 'Azure' - ^1.075 -> ^1.005.<br>
			- Endgame Changed to 2.66e24 Infects instead of 1.33e27 Infects. <br><br>

		<h3>v0.1.8: Experimental Push</h3><br>
			- Added 2 Experiment Upgrades.<br>
			- Changed Experiment Upgrade Effects.<br>
			- Added Experiment Upgrade Effect Base & Exp<br>
			- Readded Fusions but has 4 upgrades. (Can't reach currently)<br>
			- Fixed 'E205' Theme.<br>
			- Fixed 2 Achievements.<br>
			- Added an Achievement.<br><br>

		<h3>v0.1.7: Theme & Compression</h3><br>
			- Added 1 Crystal Upgrade.<br>
			- Changed Crystal Formula Expo (.92^ -> .85^).<br>
			- Added a Milestone in Experiments.<br>
			- Pushed Fusion Layer to e30 Infects instead of e25 Infects.<br>
			- Added a Milestone in Fusions<br>
			- Endgame: 1.33e27 Infects<br><br>

		<h3>v0.1.6: New Experiments</h3><br>
			- Added 3 Experiment Upgrades<br>
			- Added an Effect Buff to Experiments<br>
			- Added 2 Crystal Upgrades<br>
			- Added 1 Fusion Upgrade<br>
			- Fixed Upgrades being Visible Again<br>
			- Fixed minor inflation at 'Aida'<br><br>

		<h3>v0.1.5: Experimental Growth</h3><br>
			- Added 6 Upgrades in Crystals<br>
			- Added 4 Upgrades in Experiments (E)<br>
			- Added Softcaps to the first three upgrades in Crystals<br>
			- Fixed Upgrades appearing and not being hidden.<br>
			- Fixed Layers not being Hidden & not in the correct row.<br>
			- Endgame: 1e22 Infects<br><br>

		<h3>v0.1.4: Experiments are forming</h3><br>
			- Added 2 Upgrades in Crystals<br>
			- Added 2 Upgrades in Experiments (E)<br>
			- Balanced 2 Updates in Crystals<br><br>

		<h3>v0.1.3: New Layers?</h3><br>
			- Added 1 more Upgrade in Crystals<br>
			- Added Experiments (E)<br>
			- Added Fusions (F)<br>
			- Added 3 Experiment Upgrades<br>
			- Added 3 Fusions Upgrades<br><br>

		<h3>v0.1.2 Crystals Reunited</h3><br>
			- Added 2 New Rows of Upgrades <br>
			- Endgame: 10,000,000 Infects<br><br>

		<h3>v0.1.1 The Facility</h3><br>
			- Added 3 Upgrades <br>
			- Added some...lore.<br>
			- Endgame: None Currently<br><br>

        <h2>v0.1 Crystals</h2><br>
	        - Added 2 Upgrades <br>
	        - Added the first layer, Crystals.<br>
	        - Endgame: None.<br>`

let winText = `You've reached the end! Thanks for playtesting!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints() {
	return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints() {
	return true
}

// Calculate points/sec!
function getPointGen() {
	if (!canGenPoints())
		return new Decimal(1)

	let gain = new Decimal(1)
	// C Upgrades
	if (hasUpgrade('c', 11)) gain = gain.times(upgradeEffect('c', 11))
	if (hasUpgrade('c', 12)) gain = gain.times(upgradeEffect('c', 12))
	if (hasUpgrade('c', 13)) gain = gain.times(upgradeEffect('c', 13))
	if (hasUpgrade('c', 14)) gain = gain.times(3)
	if (hasUpgrade('c', 15)) gain = gain.times(4.5)
	if (hasUpgrade('c', 21)) gain = gain.times(3.5)
	if (hasUpgrade('c', 22)) gain = gain.times(upgradeEffect('c', 22))
	if (hasUpgrade('c', 23)) gain = gain.times(upgradeEffect('c', 23))
	if (hasUpgrade('c', 24)) gain = gain.times(upgradeEffect('c', 24))
	if (hasUpgrade('c', 25)) gain = gain.times(4.2)
	if (hasUpgrade('c', 31)) gain = gain.times(2.5)
	if (hasUpgrade('c', 32)) gain = gain.times(upgradeEffect('c', 32))
	if (hasUpgrade('c', 33)) gain = gain.times(upgradeEffect('c', 33))
	if (hasUpgrade('c', 34)) gain = gain.times(upgradeEffect('c', 34))
	if (hasUpgrade('c', 35)) gain = gain.times(upgradeEffect('c', 35))
	if (hasUpgrade('c', 45)) gain = gain.times(upgradeEffect('c', 45))
	if (hasUpgrade('c', 51)) gain = gain.times(upgradeEffect('c', 51))
	if (hasUpgrade('c', 55)) gain = gain.times(upgradeEffect('c', 55))
	// E Upgrades
	if (hasUpgrade('E', 11)) gain = gain.times(8.7)
	if (hasUpgrade('E', 12)) gain = gain.times(10)
	if (hasUpgrade('E', 14)) gain = gain.times(5)
	if (hasUpgrade('E', 15)) gain = gain.times(Math.PI)
	if (hasUpgrade('E', 16)) gain = gain.times(upgradeEffect('E', 16))
	if (hasUpgrade('E', 22)) gain = gain.times(upgradeEffect('E', 22))
	if (hasUpgrade('E', 24)) gain = gain.times(upgradeEffect('E', 24))
	if (hasUpgrade('E', 25)) gain = gain.times(upgradeEffect('E', 25))
	if (hasUpgrade('E', 31)) gain = gain.times(upgradeEffect('E', 31))
	if (hasUpgrade('E', 33)) gain = gain.times(upgradeEffect('E', 33))
	if (hasUpgrade('E', 35)) gain = gain.times(1.25)
	if (hasUpgrade('E', 42)) gain = gain.times(upgradeEffect('E', 42))
	if (hasUpgrade('E', 46)) gain = gain.times(1.5)
	// F Upgrades
	if (hasUpgrade('F', 13)) gain = gain.times(60)
	if (hasUpgrade('F', 25)) gain = gain.times(upgradeEffect('F', 25))
	// H Upgrades
	if (hasUpgrade('H', 12)) gain = gain.times(upgradeEffect('H', 12))
	if (hasUpgrade('H', 13)) gain = gain.times(upgradeEffect('H', 13))
	if (hasUpgrade('H', 21)) gain = gain.times(upgradeEffect('H', 21))
	if (hasUpgrade('H', 35)) gain = gain.times(15)
	// R Upgrades
	if (hasUpgrade('R', 16)) gain = gain.times(upgradeEffect('R', 16))
	// All Milestones
	if (hasMilestone('W', 11)) gain = gain.times(2.2)
	// Layer Effects
	if (player.E.unlocked) gain = gain.times(tmp.E.effect)
	if (player.F.unlocked) gain = gain.times(tmp.F.effect)
	if (player.H.unlocked) gain = gain.times(tmp.H.effect)
	if (player.R.unlocked) gain = gain.times(tmp.R.effect)
	if (player.W.unlocked) gain = gain.times(tmp.W.effect)
	// Achievement Effects
	if (hasAchievement('a', 26)) gain = gain.times(2.5)
	if (hasAchievement('a', 32)) gain = gain.times(2.5)
	if (hasAchievement('a', 36)) gain = gain.times(3)
	// Prevents Devspeed changes
	if (player.devSpeed > 1) gain = gain.div("e1e30")
	if (inChallenge('D', 11)) gain = gain.pow(0.01)


	// ~~~~~~~~~~~~~~~Chapter 2 - 1st Collapsed Timeline~~~~~~~~~~~~~~~~~~~~~~~


	// FL Upgrades (# Order)
	if (hasUpgrade('FL', 12)) gain = gain.times(upgradeEffect('FL', 12))
	if (hasUpgrade('FL', 21)) gain = gain.times(upgradeEffect('FL', 21))
	// EX Upgrades (# Order)
	if (hasUpgrade('EX', 11)) gain = gain.times(upgradeEffect('EX', 11))
	if (hasUpgrade('EX', 12)) gain = gain.times(upgradeEffect('EX', 12))
	if (hasUpgrade('EX', 21)) gain = gain.times(upgradeEffect('EX', 21))
	if (hasUpgrade('EX', 23)) gain = gain.times(upgradeEffect('EX', 23))

	// Milestones (# Order)
	if (hasMilestone('FL', 11)) gain = gain.times(player.points.add(1).pow(0.07))
	// Challenges (# Order)
	if (inChallenge('CT', 11)) gain = gain.div(2.5)
	if (inChallenge('CT', 12)) gain = gain.div(4)
	if (inChallenge('CT', 21)) gain = gain.div(10)
	if (inChallenge('CT', 22)) gain = gain.div(500)
	if (hasChallenge('CT', 21)) gain = gain.times(player.FL.points.add(1).pow(0.066))

	// ~~~~~~~~~~~~~~~~Chapter 3 - The Future~~~~~~~~~~~~~~~~~~~~~~~~
	if (hasUpgrade('D', 23)) gain = gain.times("1e666")
	if (hasUpgrade('D', 35)) gain = gain.pow(1.002)
	if (hasChallenge('D', 12)) gain = gain.pow(1.02)
	// ~~~~~~~~~~~~~~~~Chapter 4 - Meta~~~~~~~~~~~~~~~~~~~~~~~~
	if (player.mC.unlocked) gain = gain.times(tmp.mC.effect)
	if (hasUpgrade('mC', 11)) gain = gain.times(upgradeEffect('mC', 11))
	if (hasUpgrade('mC', 12)) gain = gain.times(upgradeEffect('mC', 12))
	if (hasUpgrade('mC', 13)) gain = gain.times(upgradeEffect('mC', 13).div(2))




	if (player.CT.points.gte(2) && player.points.gte(1e10)) gain = gain.div(player.points.minus(1e10).add(1).pow(0.112))
	if (player.CT.points.gte(2) && player.points.gte(1e15)) gain = gain.div(7.2)
	if (player.CT.points.gte(2) && player.points.gte(1e25)) gain = gain.div(35)
	if (player.CT.points.gte(2) && player.points.gte(1e35)) gain = gain.div(12250000)
	if (player.CT.points.gte(2) && player.points.gte(1e50)) gain = gain.div(2.5e9)
	if (player.CT.points.gte(2) && player.points.gte("1e1700") || hasUpgrade("mH", 32)) gain = gain.pow(new Decimal(1).minus(player.points.log10().div(100000).max(0)))

	if (hasUpgrade('mC', 23)) gain = gain.times(6.2)
	if (hasUpgrade('mC', 24)) gain = gain.times(upgradeEffect('mC', 24))
	if (hasUpgrade('mC', 25)) gain = gain.times(upgradeEffect('mC', 25))
	if (hasMilestone('mE', 11)) gain = gain.times(1.2)
	if (hasUpgrade('mE', 11)) gain = gain.times(upgradeEffect('mE', 11))
	if (hasUpgrade('mE', 14)) gain = gain.times(9.2)
	if (hasMilestone('mE', 15)) gain = gain.times(player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35).times(12250000).times(2.5e9)
	if (hasMilestone('mE', 16)) gain = gain.times(1.4e9)
	if (hasUpgrade('mE', 33)) gain = gain.times(120)
	if (hasUpgrade('mE', 34)) gain = gain.times(1e12)
	if (hasUpgrade('mE', 36)) gain = gain.times(5.5)
	if (hasUpgrade('mH', 11)) gain = gain.times(100)
	if (hasUpgrade('mH', 12)) gain = gain.times(1500)
	if (hasUpgrade('mH', 14)) gain = gain.times(1e15)
	if (hasUpgrade('mH', 24)) gain = gain.pow(upgradeEffect('mH', 24))
	if (hasUpgrade('mH', 33)) gain = gain.pow(1.03)
	if (hasUpgrade('mH', 34)) gain = gain.pow(1.03)
	// important
	if (hasUpgrade('mF', 11)) gain = gain.times(1700)
	if (hasUpgrade('mF', 21)) gain = gain.times(1800000)
	if (hasUpgrade('mF', 22)) gain = gain.pow(1.1)
	if (hasUpgrade('mF', 31)) gain = gain.times(1e17)
	if (hasUpgrade('mF', 32)) gain = gain.pow(1.12)
	if (hasUpgrade('mF', 33)) gain = gain.pow(upgradeEffect('mF', 33))
	if (hasUpgrade('mF', 41)) gain = gain.times(1e31)
	if (hasUpgrade('mF', 42)) gain = gain.pow(1.15)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		newsTotal: decimalZero,
	}
}

function convertToB16(n) {
	let codes = {
		0: "0",
		1: "1",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
		7: "7",
		8: "8",
		9: "9",
		10: "A",
		11: "B",
		12: "C",
		13: "D",
		14: "E",
		15: "F",
	}
	let x = n % 16
	return codes[(n - x) / 16] + codes[x]
}
function getUndulatingColor(period = Math.sqrt(760)) {
	let t = new Date().getTime()
	let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0)
	let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
	let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
	a = convertToB16(Math.floor(a * 128) + 128)
	b = convertToB16(Math.floor(b * 128) + 128)
	c = convertToB16(Math.floor(c * 128) + 128)
	return "#" + String(a) + String(b) + String(c)
}

function getSinRat(period = Math.sqrt(488)) {
	let t = new Date().getTime()
	let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 1) + 2
	return a

}

// Display extra things at the top of the page
var displayThings = [
	function () {
		let x = getUndulatingColor()
		let a = colorText("b", x, "Endgame: 7th Meta-Experiment Milestone (Timeline 3)")
		let b = "<br><text style='color:red'>WARNING</text>: Unbalanced past Endgame"
		return a + b
	},
	function () {
		if (inChallenge('CT', 11))
			return "You are currently in: 'Explosive Floors' (Infects /2.5)"
		if (inChallenge('CT', 12))
			return "You are currently in: 'Planetary Length' (Infects /4, EX /1.5, FL *3)"
		if (inChallenge('CT', 21))
			return "You are currently in: 'Universal Floors' (Infects /10, EX /2, FL *250)"
		if (inChallenge('CT', 22))
			return "You are currently in: 'Soul Shield' (Infects /500 & EX /200)"
		if (hasMilestone('O', 11))
			return "You are currently in: Submergence Timeline"
		if (player.CT.points.gte(2))
			return "You are currently in: Meta Timeline"
		else
			return "You are currently in: Normal Timeline"
	},
	function () {
		if (player.devSpeed > 1)
			return `<h4 style='color: red; text-shadow: blue 1.75px 1.75px 10px;'>I will never let you change time in this reality</h4>`
	},
	function () {
		if (hasMilestone('O', 11))
			return "<br><br>"
		if (player.CT.points.gte(2))
			return "You are in Timeline " + formatWhole(player.CT.points.plus(1)) + "<br><br><br>"
		else
			return "You are in Timeline " + formatWhole(player.CT.points.plus(1)) + "<br><br><br>"
	},
	function () {
		let nerf = "<br>"
		if (player.CT.points.gte(2) && player.points.gte(1e10)) nerf = "Infect gain is nerfed by /" + format(player.points.minus(1e10).add(1).pow(0.112)) + " (Level 1 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e15)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2)) + " (Level 2 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e25)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35)) + " (Level 3 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e35)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35).times(12250000)) + " (Level 4 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e50)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35).times(12250000).times(2.5e9)) + " (Level 5 Nerf)"



		if (player.CT.points.gte(2) && player.points.gte(1e10) && hasUpgrade("mE", 14)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).div(9.2)) + " (Level 1 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e15) && hasUpgrade("mE", 14)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).div(9.2)) + " (Level 2 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e25) && hasUpgrade("mE", 14)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35).div(9.2)) + " (Level 3 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e35) && hasUpgrade("mE", 14)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35).div(9.2).times(1225000)) + " (Level 4 Nerf)"
		if (player.CT.points.gte(2) && player.points.gte(1e50) && hasUpgrade("mE", 14)) nerf = "Infect gain is nerfed by /" + format((player.points.minus(1e10).add(1).pow(0.112)).times(7.2).times(35).div(9.2).times(12250000).times(2.5e9)) + " (Level 5 Nerf)"

		if (hasMilestone('mE', 15)) nerf = "<br>"
		if (player.CT.points.gte(2) && player.points.gte("1e1700") || hasUpgrade("mH", 32)) nerf = "Infect gain is nerfed by ^" + format(new Decimal(1).minus(player.points.log10().div(100000).max(0))) + " (Level 1 Hardcap)"
		return nerf
	},
]





// Display extra things at the top of the page

// Determines when the game "ends"
function isEndgame() {
	return hasMilestone('mE', 17)
}
// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = function () {
	let backSty = { "background-image": "rgb(0, 0, 0)" }
	if (getThemeName() == "default") backSty = {
		'background': 'black',
		'background-color': 'black',
		"background-image": "repeating-linear-gradient(45deg, hsla(133, 89%, 27%, 0.4), hsla(133, 89%, 27%, 0.842), 15px, transparent 0, transparent 30px), repeating-linear-gradient(135deg, hsla(130, 80%, 26%, 1), hsla(130, 80%, 26%, 1), 15px, transparent 0, transparent 30px)",
		'background-size': '128px 128px',
		"background-position": " " + ((player.timePlayed) % 100) + "%"
	}
	if (getThemeName() == "Purple Corruption") backSty = {
		'background': 'black',
		'background-color': 'black',
		"background-image": "repeating-radial-gradient(circle at center, hsla(269, 89%, 27%, 0.4), hsla(269, 89%, 27%, 0.842) 15px, transparent 0, transparent 30px)",
		'background-size': '128px 128px',
		"background-position": " " + (player.timePlayed % 100) + "%" + " " + (player.timePlayed % 100) + "%"
	}
	return backSty
}

function maxTickLength() {
	return (3600)
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion) {
}
