//your JS code here. If required.
const submitBtn = document.getElementById('btn');
const output = document.getElementById('output');

submitBtn.addEventListener('submit', async function(e){
	e.preventDefault();
	const text = document.getElementById('text');
	const delay = document.getElementById('delay');
	const result = await displayMsg;
	output.innerHTML = result;
})

function displayMsg(text, delay){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(text);
		}, delay);
	})
}