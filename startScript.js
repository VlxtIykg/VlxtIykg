const os = require('os');

const { execSync } = require('child_process');
const currentOS = os.type();
if(currentOS === 'Linux') {
	const output = execSync('cd /home/kami/Documents/github/VlxtIykg/controller/scripts && ./startup.sh', { encoding: 'utf-8' });
	console.log(output);
} else if(currentOS === 'Windows_NT') {
	const output = execSync('cd C:\\Users\\kami\\Documents\\Github\\VlxtIykg\\controller\\scripts && ./startup.bat', { encoding: 'utf-8' });
	console.log(output);
} else {
	console.log("OS not found.");
}