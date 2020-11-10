function isTouching(mo1,mo2){
    if (mo1.x - mo2.x < mo2.width/2 + mo1.width/2
      && mo2.x - mo1.x < mo2.width/2 + mo1.width/2
      && mo1.y - mo2.y < mo2.height/2 + mo1.height/2
      && mo2.y - mo1.y < mo2.height/2 + mo1.height/2) {
        return true;
  }
  else {
    return false;
  }
  }
  function bounceOff(b1,b2){
    if (b1.y - b2.y < b2.height/2 + b1.height/2
      && b2.y - b1.y < b2.height/2 + b1.height/2){
      b1.velocityY = b1.velocityY * (-1);
      b2.velocityY = b2.velocityY * (-1);
    }
  }