function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function localGreet(locale) {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);

  switch (region) {
    case 'US':  return 'Hey!';
    case 'GB':  return 'Hello!';
    case 'AU':  return 'Howdy!';
    default:  return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_BE.UTF-8')); // 'Howdy!'
console.log(localGreet('pt_UA.UTF-8')); // 'Howdy!'