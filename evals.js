let k = 'value';

let games = ['sb', 'bb', 'hitw', 'tgttos'];
for (i = 0; i < 3; i++) {
    eval('var ' + games[i] + 'coins' + '= ' + gameSel + ';');
    console.log(eval(games[i] + 'coins'));
}