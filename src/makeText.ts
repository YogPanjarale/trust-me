export default (letters:string)=>{
    const text = document.querySelector('.text') as HTMLElement;
    for (let i = 0; i < letters.length; i++) {
        const l = letters.charAt(i);
        const div = document.createElement('div');
        div.innerHTML+=l;
        for (let i = 0; i < 9; i++) {
            const d = document.createElement('div');
            d.classList.add('fill');
            d.innerHTML=l;
            div.appendChild(d);
        }
        text.appendChild(div);
      }
    
}