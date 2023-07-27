function hackerEffect(text) { 
    const durationInMilliseconds = 390;
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let innerText = "";
    let iterationCount = 0;
    
    const intervalId = setInterval(() => {
        if (iterationCount === text.length) clearInterval(intervalId);
        
        innerText = text.slice(0, iterationCount);
        
        for (let i = iterationCount; i < text.length; i++) {
            const randomChar = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
            const nextCharinText = text.charAt(innerText.length);

            innerText += 
                (nextCharinText !== " " &&
                 nextCharinText !== "-")?
                randomChar : nextCharinText;
        }
    
        iterationCount++;     
        this.innerText = innerText;
        
    }, Math.min(durationInMilliseconds / text.length, 30));
}

const div = document.getElementById("hacker-effect");
const text = div.innerText;
div.addEventListener("mouseover", hackerEffect.bind(div, text));
div.addEventListener("touchend", hackerEffect.bind(div, text));
