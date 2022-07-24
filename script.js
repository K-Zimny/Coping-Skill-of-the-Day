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
  "G.L.A.D Journal",
  "Give Thanks",
  "Go for a mindfulness walk",
  "Write a Gratitude Letter to someone",
  "Self Sooth",
  "Acknowledge Your Positives, write them out",
  "Learn a New Skill",
  "Help Someone Else",
  "Connect with Others",
  "Practice Forgiveness",
  "Achieve, Connect, and enjoy an Activity",
  "Write Down your Positive Qualities",
  "Don't Throw away the Positives",
  "Make a Crisis Plan",
  "Read some positive Quotes",
  "Stop Overthinking",
  "Ask for help if you need it",
  "Avoid Drugs",
  "Get enough Sleep",
  "Eat well",
  "Read a book",
  "Volunteer",
  "Dont put all your eggs in one basket",
  "Self Esteem Journal Prompts",
  "Fake it until you make it",
  "Practice Self Love",
  "Watch motivational videos",
  "Reserve time for yourself",
  "Practice Grounding Exercises",
  "Make a mental commitment many times in the space of a few minutes",
  "Radical Acceptance",
  "Focus on what you can control, not what's out of your control",
  "Strive for goodness, not perfection",
  "The Worry Tree",
  "Avoid all or nothing thinking",
  "What can you do to improve your mood",
  "Shower",
  "Make a wellness toolbox",
  "Write out your early warning signs",
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
