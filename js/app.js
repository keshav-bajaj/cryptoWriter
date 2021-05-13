function download(a,b){var c=document.createElement("a");c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b)),c.setAttribute("download",a),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c)}document.getElementById("download").addEventListener("click",function(){var a=createcrypto();download("app.js",a),notify("Downloaded Code","fa fa-check")}),setInterval(()=>{var a=document.getElementById("rounds-span"),b=document.getElementById("rounds-slider"),c=document.activeElement===a;c?b.value=a.value:a.value=b.value;var d=document.getElementById("time-slider"),e=document.forms["main-form"]["time-select"],f=document.getElementById("time-span"),g=document.getElementById("time-input"),h=document.activeElement===g;"auto"==e.value?(d.disabled=!0,f.innerHTML=e.value,g.style.display="none"):(d.disabled=!1,g.style.display="inline-block",f.innerHTML=e.value,h?d.value=g.value:g.value=d.value);var i=document.getElementById("delay-input"),j=document.getElementById("delay-slider"),k=document.forms["main-form"]["delay-unit"].value,l=document.getElementById("delay-span"),m=document.activeElement===i;l.innerHTML=" "+k,m?j.value=i.value:i.value=j.value,"seconds"==k?j.setAttribute("max",30):j.setAttribute("max",3e4);var n=document.getElementById("untildelay-input"),o=document.forms["main-form"]["until-delay"].value;"random"==o||"empty"==o||"same"==o?(n.disabled=!0,n.value=o):(n.disabled=!1,n.setAttribute("placeholder","Type Here")),document.getElementById("configuration").value=createcrypto()},1);function changevalue(a){var b=a.value,c=document.getElementById("delay-input"),d=document.getElementById("delay-slider");"seconds"==b?d.value/=1e3:setTimeout(()=>{d.value*=1e3},50)}function clearinput(){var a=document.getElementById("untildelay-input");a.value=""}function createcrypto(){var a="});",b=document.getElementById("rounds-span"),c=document.getElementById("time-input"),d=document.forms["main-form"]["time-select"],e="randomRounds:"+b.value+",",f=document.getElementById("untildelay-input"),g="untilDelay:'"+f.value+"',",h=document.forms["main-form"].allatonce.value,j=document.forms["main-form"].onvisible.value;if("auto"==d.value)var k="completionTime:'"+d.value+"',";else if("seconds"==d.value)var k="completionTime:"+c.value+",";else var k="completionTime:'"+c.value+"chars',";var l=document.getElementById("delay-input").value,m=document.forms["main-form"]["delay-unit"].value;if("seconds"==m)var n="delayTime:"+l+",";else var n="delayTime:"+l/1e3+",";var o=document.getElementsByClassName("set"),p="enabledSets:",q=[];for(let a=0;a<o.length;a++)o[a].checked&&q.push("'"+o[a].value+"'");p+="["+q+"],";var r=document.getElementById("custom-div"),s=r.innerHTML,t=0,u=[],v="";for(t=0;t<s.length;t++)","==s[t]?v="":(v+=s[t],(","==s[t+1]||null==s[t+1])&&(isNaN(v)?"'"==v?u.push("'\\''"):u.push("'"+v+"'"):u.push(v)));if(document.getElementById("comma").checked){u.push("','")}if("true"==document.forms["main-form"].cset.value){document.getElementById("cinfo").classList.add("cvisible");var w="  customSet:["+u+"],\n"+a}else{u=[],document.getElementById("cinfo").classList.remove("cvisible");var w=a}return null==q[0]&&null==u[0]?(document.getElementById("execute").disabled=!0,document.getElementById("download").disabled=!0,document.getElementById("copy").disabled=!0):(document.getElementById("execute").disabled="true"==document.getElementById("execute").getAttribute("data-running"),document.getElementById("download").disabled=!1,document.getElementById("copy").disabled=!1),"new cryptoWriter(document.querySelector('#myElement'),{\n  "+e+"\n  "+k+"\n  "+n+"\n  "+g+"\n  "+("onVisible:"+j+",")+"\n  "+("allAtOnce:"+h+",")+"\n  "+p+"\n"+w}document.getElementById("default").addEventListener("click",()=>{location.reload()}),document.getElementById("copy").onclick=function(){var a=document.getElementById("configuration");a.select(),a.setSelectionRange(0,99999),document.execCommand("copy"),notify("Copied Code","fa fa-check")};function notify(a,b){var c=document.createElement("div"),d=document.createElement("span"),e=document.createElement("span");e.setAttribute("class","notify-icon"),d.classList.add("notify-text"),d.style.display="inline-block",e.style.display="inline-block",c.appendChild(e);var f=document.createElement("i"),g=b.toString();f.setAttribute("class",g),e.appendChild(f),c.appendChild(d),d.innerHTML=a,document.body.appendChild(c),c.classList.add("notify-container"),setTimeout(()=>{c.remove()},5100)}var executebox=document.createElement("div");executebox.id="myElement",executebox.contentEditable=!0,executebox.innerHTML="Some Text",document.getElementById("btn-div").appendChild(executebox),document.getElementById("execute").addEventListener("click",()=>{var a=document.createElement("script");a.innerHTML=createcrypto();var b=document.getElementById("time-input"),c=document.forms["main-form"]["time-select"];if("auto"==c.value)var d=c.value;else if("seconds"==c.value)var d=b.value;else var d=b.value+"chars";var e=document.querySelector("#myElement").innerHTML.length,f=document.getElementById("delay-input").value,g=document.forms["main-form"]["delay-unit"].value;if("seconds"==g)var h=f;else var h=f/1e3;var i=d.toString().substring(d.length-5,d.length);"chars"==i&&(d=d.substring(0,d.length-5),d=e/d),"auto"==d&&(d=e/5);var j=parseFloat(h)+parseFloat(d);j+=.3,document.body.appendChild(a),document.getElementById("execute").setAttribute("data-running",!0),document.getElementById("execute").disabled=!0,setTimeout(()=>{document.getElementById("execute").disabled=!1,a.remove(),document.getElementById("execute").setAttribute("data-running",!1)},1e3*j)});