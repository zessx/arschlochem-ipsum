var lorem = 'Àrschlöch ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.<br><br>Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Àrschlöch ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.<br><br>Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.';
var parts = [
    ['', '', '', '', '', '', '', '', '', '', '', '', '', 'süff', 'àlt'],
    ['àrsch', 'bluetwurscht', 'rotwin', 'wisswin', 'hàse', 'bock', 'hammel', 'hund', 'bledder', 'bluet', 'bütz', 'cactus', 'làppe', 'löch', 'mohr', 'küeh', 'eier', 'nudel', 'zéwwel'],
    ['fratz', 'brùnzer', 'wickser', 'büch', 'süger', 'schlischer', 'lècker', 'fécker', 'schiesser', 'séckel', 'pfurzer', 'gluewer', 'jäjer', 'fresser', 'macher']
];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.isCapitalized = function() {
    return this.charAt(0).toUpperCase() == this.charAt(0);
}

function schenerate() {
    var arschlorem = lorem.replace(/\w{6,}/g, function(match) {
        var wort = parts[0][Math.floor(Math.random() * parts[0].length)]
                 + parts[1][Math.floor(Math.random() * parts[1].length)]
                 + parts[2][Math.floor(Math.random() * parts[2].length)];
        return match.isCapitalized() ? wort.capitalize() : wort;
    });
    document.querySelector('#output').innerHTML = arschlorem;
}

if (document.readyState != 'loading'){
    schenerate();
} else {
    document.addEventListener('DOMContentLoaded', schenerate);
}