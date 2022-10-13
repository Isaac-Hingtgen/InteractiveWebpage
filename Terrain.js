const frontMountain = document.querySelector('.frontMountain');
const rearMountain = document.querySelector('.rearMountain');
const wrapper = document.querySelector('.gameWrapper');

export default function loadMountains() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    frontMountain.style.borderBottom = `${height * .6}px solid var(--color2)`;
    frontMountain.style.borderRight = `${width * .7}px solid transparent`;
    rearMountain.style.borderBottom = `${height * .55}px solid var(--color3)`;
    rearMountain.style.borderLeft = `${width * .75}px solid transparent`;
    
}


export function moveMountains() {
    frontMountain.style.transition =  '500ms';
    frontMountain.style.transform = 'translateX(-400px)';
    rearMountain.style.transition = '500ms';
    rearMountain.style.transform = 'translateX(400px)';
}

