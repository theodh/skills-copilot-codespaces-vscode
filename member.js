function skillsMember() {
    var member = this;
    member.name = "John Doe";
    member.skills = [
        "JavaScript",
        "HTML",
        "CSS"
    ];
    member.showSkills = function () {
        member.skills.forEach(function (skill) {
            console.log(member.name + " knows " + skill);
        });
    };
}