function check(tab){
for (i=0;i<tab.length;i++)
{
	if(tab[i].checked)
	{
		var s = tab[i].value;
    console.log(s);
		break;
	}
}
}
