module.exports=(a,b,c=10,d='depth')=>{e={[d+1]:a};for(f=1;f<c;f++)e[d+(f+1)]=e[d+f]+'|'+(b[f-1]||'');return e}
