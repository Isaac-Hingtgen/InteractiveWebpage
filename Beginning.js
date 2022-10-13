export default function moveMountains(beginButton) {
    const frontMountainStyle = document.querySelector('.frontMountain').style;
    const rearMountainStyle = document.querySelector('.rearMountain').style;

    beginButton.style.display = 'none';
    frontMountainStyle.transition =  '500ms';
    frontMountainStyle.transform = 'translateX(-400px)';
    rearMountainStyle.transition = '500ms';
    rearMountainStyle.transform = 'translateX(400px)';
}