const fs = require('fs');

fs.readdir('./', (e, is) => {
  is.forEach(i => {
    fs.rename('./' + i, './' + i.replace('JPG', 'jpg'))
  })
})
