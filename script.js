const copingSkills = [
  "Deep Breathing",
  "Listening to Music",
  "Body Scan",
  "Moment to Pause",
  "Be kind to yourself",
  "Exercise",
  "Connect with Others",
  "Acknowledge your positives",
  "Mindfulness / Meditation",
  "Practice Gratitude",
  "Visualization",
  "Progressive Muscle Relaxation",
  "Do what needs to be done",
  "Practice Wise Mind",
  "Notice what energizes you, what you are grateful for, and what's not working and why",
  "Practice self love",
  "Laughter",
  "Build self esteem",
  "Journal",
  "Get outside",
  "Urge Surfing",
  "Facts vs Opinion",
  "Go for a walk",
  "Do something you enjoy",
  "Face unpleasant tasks early",
  "Challenge Your Own Beliefs",
  "Read something positive",
];
const copingSkillParagraphElement = document.querySelector(".coping-skill");
const newButton = document.querySelector("button");
let copingSkillIndex = Math.floor(Math.random() * copingSkills.length);

copingSkillParagraphElement.innerHTML = copingSkills[copingSkillIndex];
copingSkills.splice(copingSkillIndex, 1);

newButton.addEventListener("click", function () {
  copingSkillIndex = Math.floor(Math.random() * copingSkills.length);
  copingSkillParagraphElement.innerHTML = copingSkills[copingSkillIndex];

  if (copingSkills.length === 0) {
    copingSkillParagraphElement.innerHTML = "No more Skills :(";
  }

  copingSkills.splice(copingSkillIndex, 1);
});
