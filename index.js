// Write your code in this file!
function scuberGreetingforFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 200 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

      expect(scuberGreetingForFeet(199)).to.equal();
    });

    it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal();
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal();