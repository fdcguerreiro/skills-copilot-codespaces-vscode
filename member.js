function skillsMember() {
  // Get all the members
  var members = document.querySelectorAll('.member');
  // Loop through each member
  members.forEach(function(member) {
    // Get the member's skills
    var skills = member.querySelectorAll('.skill');
    // Loop through each skill
    skills.forEach(function(skill) {
      // Get the skill's percentage
      var percentage = skill.querySelector('.percentage').textContent;
      // Set the width of the skill bar
      skill.querySelector('.bar').style.width = percentage;
    });
  });
}