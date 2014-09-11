var status = 'on';

function lightSwitch() {
	if (status === 'on') {
		document.body.className = 'dark';
		status = 'off';
		}
		else {
			document.body.className = '';
			status = "on";
			}
	}

document.getElementById('light_switch').onclick = lightSwitch;

