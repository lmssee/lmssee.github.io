window.addEventListener('load', function () {
  const currentDomain = this.window.location.hostname;
  const titleElement = this.document.getElementsByClassName('title')[0];
  const copyRight =
    this.document.getElementsByClassName('footer__copyright')[0];

  console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');
  console.log(copyRight);
  console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');
});
