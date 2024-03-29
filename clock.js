const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

const moveClockHands = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;

  if(secondsDegrees === 90 || minutesDegrees === 90 || hoursDegrees === 90) {
    allHands.forEach(hand => {
      hand.style.transition = 'none';
    })
  } else {
    allHands.forEach(hand => {
      hand.style.transition = '';
    })
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(moveClockHands, 1000);