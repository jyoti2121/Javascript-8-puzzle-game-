var num_moves=0;
function startgame(){
    var jo=new Array()
    while(jo.length<9)
    {
        var num=Math.round(Math.random()*100);
        if((num==11) || (num==12) || (num==13) || (num==21) || (num==22) || (num==23) || (num==32) || (num==32) || (num==33))
        {
            if(jo.includes(num))
            {
                jo[jo.length]=num;
            }
        }
    }
    document.getElementById('p11').textContent=jo[0];
    document.getElementById('p11').style.backgroung='url('+jo[0]+'.jpg)';

    document.getElementById('p12').textContent=jo[1];
    document.getElementById('p12').style.backgroung='url('+jo[1]+'.jpg)';

    document.getElementById('p13').textContent=jo[2];
    document.getElementById('p13').style.backgroung='url('+jo[2]+'.jpg)';

    document.getElementById('p21').textContent=jo[3];
    document.getElementById('p21').style.backgroung='url('+jo[3]+'.jpg)';

    document.getElementById('p22').textContent=jo[4];
    document.getElementById('p22').style.backgroung='url('+jo[4]+'.jpg)';

    document.getElementById('p23').textContent=jo[5];
    document.getElementById('p23').style.backgroung='url('+jo[5]+'.jpg)';

    document.getElementById('p31').textContent=jo[6];
    document.getElementById('p31').style.backgroung='url('+jo[6]+'.jpg)';

    document.getElementById('p32').textContent=jo[7];
    document.getElementById('p32').style.backgroung='url('+jo[7]+'.jpg)';

    document.getElementById('p33').textContent=jo[8];
    document.getElementById('p33').style.backgroung='url('+jo[8]+'.jpg)';

    document.getElementById('moves').textContent="Moves:0";
}
function switching(cell){
    if(document.getElementById(cell).textContent!='1'){
        switch(cell){
            case 'p11':
                if(document.getElementById('p12').textContent=='11'){
                    var t=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=t;

                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                    num_moves++;
                    document.getElementById('moves').textContent="Moves:"+num_moves;
                }
                if(document.getElementById('p21').textContent=='11'){
                    var t=document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=t;

                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                    document.getElementById('p21').style.background='url('+document.getElementById('p21').textContent+'.jpg)';
                    num_moves++;
                    document.getElementById('moves').textContent="Moves:"+num_moves;
        }
            break;
            case 'p12':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
        }
        break;
        case 'p13':
        if(document.getElementById('p12').textContent=='1'){
            var t=document.getElementById('p12').textContent;
            document.getElementById('p12').textContent=document.getElementById('p11').textContent;
            document.getElementById('p11').textContent=t;

            document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
            document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
            num_movesmoves++;
            document.getElementById('moves').textContent="Moves:"+num_moves;
        }
        if(document.getElementById('p14').textContent=='1'){
            var t=document.getElementById('p12').textContent;
            document.getElementById('p14').textContent=document.getElementById('p11').textContent;
            document.getElementById('p11').textContent=t;

            document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
            document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
            num_movesmoves++;
            document.getElementById('moves').textContent="Moves:"+num_moves;
        }
        break;
            case 'p21':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            break;
            case 'p22':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            break;
            case 'p23':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            break;
            case 'p31':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            break;
            case 'p32':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            break;
            case 'p33':
            if(document.getElementById('p12').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p12').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;
            }
            if(document.getElementById('p14').textContent=='1'){
                var t=document.getElementById('p12').textContent;
                document.getElementById('p14').textContent=document.getElementById('p11').textContent;
                document.getElementById('p11').textContent=t;

                document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpg)';
                document.getElementById('p11').style.background='url('+document.getElementById('p14').textContent+'.jpg)';
                num_movesmoves++;
                document.getElementById('moves').textContent="Moves:"+num_moves;


