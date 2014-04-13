a=document;
b="getElementsByTagName";
c="";
d="</td><td>";
j=a[b.slice(0,13)+"ClassName"]("tablehead");
for(k=0;k<j.length;){
	l=j[k++][b]("tr");
	for(m=2;m<l.length;){
		n=l[m++][b]("td")[0].innerText;
		c+=n.indexOf(",")<0?"":"<tr><td>"+l[0].innerText+d+n.match(/[A-Z][\.A-Za-z ]+[a-z]/g).join(d)+d+"</td></tr>"
	}
}
a.write("<table>"+c+"</table>")
