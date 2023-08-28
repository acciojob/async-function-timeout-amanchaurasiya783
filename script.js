//your JS code here. If required.
const submitBtn = document.getElementById('btn');
const output = document.getElementById('output');
const text = document.getElementById('text');
const delay = document.getElementById('delay');
submitBtn.addEventListener('click', async function(e){
	const result = await displayMsg(text.value, delay.value);
	output.innerHTML = result;
})

function displayMsg(text, delay){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(text);
		}, delay);
	})
}