const fs = require('fs');

try {
  const css = fs.readFileSync('styles.css', 'utf8');
  let openBraces = 0;
  let closeBraces = 0;
  let insideComment = false;
  
  for (let i = 0; i < css.length; i++) {
    if (!insideComment && css.slice(i, i + 2) === '/*') {
      insideComment = true;
      i++;
    } else if (insideComment && css.slice(i, i + 2) === '*/') {
      insideComment = false;
      i++;
    } else if (!insideComment) {
      if (css[i] === '{') openBraces++;
      if (css[i] === '}') closeBraces++;
    }
  }
  
  console.log(`Braces: open={${openBraces}}, close={${closeBraces}}`);
  console.log(`Inside comment at end: ${insideComment}`);
  if (openBraces !== closeBraces) {
    console.error('Mismatch in curly braces!');
  } else {
    console.log('CSS braces match perfectly.');
  }
} catch (e) {
  console.error(e);
}
