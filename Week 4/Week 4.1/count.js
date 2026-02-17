const { Command } = require('commander');
const program = new Command();
const fs = require('fs');

program
  .name('count')
  .description('CLI Command that prints number of words in a file')
  .version('0.8.0');

program.command('count_words') // or program.command("count <file>")
  .description('Count the number of word in a file')
  .argument('<file>', 'string to split')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err){
        console.log(err);
      }else{
        const words = data.split(' ').length;
        console.log(`Total number of words: ${words}`);
      }
    })
});

program.command('count_sentences') // or program.command("count <file>")
  .description('Count the number of sentences in a file')
  .argument('<file>', 'string to split')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err){
        console.log(err);
      }else{
        const sentences = data.split('\n').length;
        console.log(`Total number of sentences: ${sentences}`);
      }
    })
});


program.parse();