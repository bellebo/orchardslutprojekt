(function(b){var c=false;function a(){var f=window,d="inner";if(!("innerWidth" in window)){d="client";f=document.documentElement||document.body}return{width:f[d+"Width"],height:f[d+"Height"]}}showDefaultMenu=function(e,k,g,f){if(b(g).find("ul").is(".submenu")){var d=b(g).find("ul.submenu");if(k.Orientation.toLowerCase()=="vertical"||b(g).parent().is(".submenu")){d.css("left",d.parent().outerWidth(true));b(g).css("position","relative");var i=b(g).children("a,span").offset().top-b(g).offset().top;i=i+b(g).children("a,span").outerHeight(true);if(!b("#MenuH em").hasClass("sf-sub-indicator")&&b("#MenuH select")){d.css("margin-top","-"+i+"px");d.css("margin-left","0px");var l=b(g).offset().left+b(g).outerWidth(true);if(l+d.outerWidth()>b(window).width()){d.css("left","0px").css("left","-"+d.outerWidth()+"px")}}}else{var h=b(g).children("a,span").offset().left-b(g).offset().left;if(h>0){d.css("margin-left","-"+h+"px")}var j=b(g).children("a,span").offset().top-b(g).offset().top;if(j>0){d.css("margin-top",j+"px")}}}b("ul:first",g).fadeIn(f)};hideDefaultMenu=function(g,d,e,f){b("ul:first",e).hide()};showAccordionMenu=function(g,d,e,f){if(d.Event=="hover"){if(b(e).siblings().parent().is(".menu")){b(e).siblings().children("ul").slideUp(f).parent("li").removeClass("has-children-open").addClass("has-children-close")}b("ul",e).slideDown(f).css({position:"relative",display:"block"})}else{if(b("ul.submenu",e).is(".submenu")){b(e).children("ul").slideDown(f).css({position:"relative",display:"block"})}}if(b(e).is(".has-children-close")){b(e).removeClass("has-children-close").addClass("has-children-open")}};hideAccordionMenu=function(g,d,e,f){if(d.Event=="hover"){if(b(e).parent("ul").is(".menu")){b("ul",e).slideUp(f)}}else{if(b("ul.submenu",e).is(".submenu")){b(e).children("ul").slideUp(f);if(b(e).parent("ul").css("display")!="none"){b("ul.submenu",e).slideUp(f).parent("li").removeClass("has-children-open").addClass("has-children-close")}}}if(b(e).is(".has-children-open")){b(e).removeClass("has-children-open").addClass("has-children-close")}};showMegaMenu=function(f,h,u,s){b("ul.submenu",f).hide();b("ul.submenu",f).css({left:""});var k=b(".container").outerWidth();if(b(u).children("ul").is(".submenu")){var l=b(u).children("ul.submenu");l.css("position","absolute");if(h.Orientation.toLowerCase()=="vertical"){l.css("left",l.parent().outerWidth(true));b(u).css("position","relative");var e=b(u).children("a,span").offset().top-b(u).offset().top;e=e+b(u).children("a,span").outerHeight(true);l.css("margin-top","-"+e+"px");l.css("margin-left","0px");var q=b(u).offset().left+b(u).outerWidth(true);if(q>b(window).width()/2){l.css("left","0px").css("left","-"+l.outerWidth()+"px")}}else{var i=b(u).find("a,span").offset().left-b(u).offset().left;if(i>0&&b(u).hasClass("mega")){l.css("margin-left","-"+i+"px")}var p=b(u).find("a,span").offset().top-b(u).offset().top;if(p>0){l.css("margin-top",p+"px")}if(h.Orientation.toLowerCase()=="horizontal"){var j=parseInt(b(".container").css("padding-left").split("px")[0]);var d=parseInt(b(".container").css("padding-right").split("px")[0]);var n=b(".container").width()+j+d;var w=Math.floor(((b(window).width()-n)/2));var g=l.width();var r=(g-b(u).width())/2;var v=b(u).width();var m=Math.floor(b(u).offset().left-w);var o=n-m-v;if(m+v+r>n){var t=g-v-o;l.css("left","-"+t+"px")}else{if(r>m){l.css("left","-"+m+"px")}else{if(b(u).hasClass("mega")){l.css("left","-"+r+"px")}}}}}}b("ul.submenu",u).fadeIn(s)};hideMegaMenu=function(g,d,e,f){b("ul.submenu",g).hide()};megaMenuWithColumns=function(l,n,d,f,h,e,q,g,r){g=g.toLowerCase();if(g=="vertical"){var o=b("#MenuV").width();var p=parseInt(b(".container").css("padding-left").split("px")[0]);var k=parseInt(b(".container").css("padding-right").split("px")[0]);var j=b(".container").width()-p-k;if(l>f){f=j-o}else{f=l}}var s=d.children("li");if(h==true){d=d.parent()}else{for(var m=0;m<s.length;m+=n){s.slice(m,m+n).wrapAll("<div class='megamenu-row'></div>")}}d.css("width",r*n+"px");d.children(".megamenu-row").children("li").css({display:"table-cell","max-width":q+"px","min-width":e+"px",width:l/n+"px"})};megaMenuNoColumns=function(j,d,f,e,o,l,p,k,g){g=g.toLowerCase();if(g=="vertical"){var m=b("#MenuV").width();var n=parseInt(b(".container").css("padding-left").split("px")[0]);var i=parseInt(b(".container").css("padding-right").split("px")[0]);var h=b(".container").width()-n-i;f=h-m}if(j<=f){d.css("width",j);d.children("li").css({"min-height":p+"px",width:k+"px","min-width":e+"px","max-width":o+"px"})}else{k=parseInt(f/l);maxCol=(100*k)/f;d.css("width",k*l);d.children("li").css({"max-width":o+"px","min-height":p+"px","min-width":e+"px",width:maxCol+"%"})}};showMobileMenu=function(i,d,l,e,f){if(i=="select"){if(c==false){var h=b("#MenuH");if(b(h).is("#MenuH")){b("<select></select><span></span>").appendTo(h);b("<option />",{selected:"selected",value:"",text:"Go to..."}).appendTo("#MenuH select");var g=b("select",h);var j=b("select + span",h);b("ul li",h).each(function(){var r=b(this),o=r.children("a:first, span:first"),m=r.parents("li"),n=new Array(m.length+1).join("-");if(o.html()!==""){var q=o.text();var p=b("<option>").text(n+" "+q);p.text().replace("»","-");p.val(o.attr("href"));if(p.val()==""){p.attr("disabled","disabled")}p.appendTo(g);if(r.hasClass("selected")||r.hasClass("current")){p.attr("selected","selected")}}});j.text(g.find("option:selected").text().replace(/^-+/,"").trim());g.change(function(){window.location=b(h).find("option:selected").val()});var k=b("#MenuH ul.menu > li:not(.current) > a").css("color");j.css("color",k)}c=true}}else{if(i=="toggle"){b("li > ul",d).each(function(){b(this).parent().children("a").append('<em class="sf-sub-indicator closed"></em>')});b("em.sf-sub-indicator",d).click(function(){var m=b(this).parent().parent("li");if(b(this).hasClass("closed")){b(this).removeClass("closed").addClass("opened");showDefaultMenu(d,l,m,f)}else{b(this).removeClass("opened").addClass("closed");hideDefaultMenu(d,l,m,f);b(m.children("ul").children("li")).find("em.sf-sub-indicator").removeClass("opened").addClass("closed");hideDefaultMenu(d,l,m.children("ul").children("li"),f);b(m.children("ul").children(".megamenu-row").children("li")).find("em.sf-sub-indicator").removeClass("opened").addClass("closed");hideDefaultMenu(d,l,m.children("ul").children(".megamenu-row").children("li"),f)}return false})}}};b.fn.BindMENU=function(q){var g="fast";var h="hover";var d=b(this);var e="select";var f="768";if(q.Speed!=null){g=q.Speed.toLowerCase()}if(q.Event!=null){if((q.Event.toLowerCase()=="hover")||(q.Event.toLowerCase()=="mouseover")){h="hover"}else{if((q.Event.toLowerCase()=="click")||(q.Event.toLowerCase()=="mouseclick")){h="click"}}}b("ul",this).addClass("submenu");if(navigator.userAgent.indexOf("MSIE 7")!=-1){b("ul.submenu",this).before('<div style="height: 0px; line-height: 0px; clear: both; overflow: hidden; font-size:0px; position:fixed" />')}eventOpenDefaultMenu=function(s,u,r,t){if(h=="hover"){b("li",s).hover(function(){showDefaultMenu(u,r,this,t)},function(){hideDefaultMenu(u,r,this,t)})}else{b("li > a, li > span",s).click(function(w){var v=b(this).parent("li");if(b(v).children("ul").is(".submenu")){w.preventDefault();if(b(v).children("ul").css("display")!="none"){hideDefaultMenu(u,r,v,t)}else{b(this).closest("ul").children("li").children("a, span").not(this).parent().find("ul").hide();showDefaultMenu(u,r,v,t)}}else{b(u).find("ul.submenu").hide()}})}};eventOpenAccordionMenu=function(r){if(h=="hover"){b("li",r).hover(function(s){s.stopPropagation();showAccordionMenu(d,q,this,g)},function(s){s.stopPropagation();hideAccordionMenu(d,q,this,g)})}else{b("li > a, li > span",r).click(function(t){var s=b(this).parent("li");if(b(s).children("ul").is(".submenu")){t.preventDefault();t.stopPropagation();if(b(s).children("ul").css("display")!="none"){hideAccordionMenu(d,q,s,g)}else{showAccordionMenu(d,q,s,g)}}})}};eventOpenMegaMenu=function(s,u,r,t){if(h=="hover"){b(s).children("li").hover(function(){showMegaMenu(u,r,this,t)},function(){hideMegaMenu(u,r,this,t)})}else{b("li > a, li > span",s).click(function(w){var v=b(this).parent("li");if(b(v).children("ul").is(".submenu")){w.preventDefault();if(b(v).children("ul").css("display")!="none"){hideMegaMenu(u,r,v,t)}else{showMegaMenu(u,r,v,t)}}else{b(u).find("ul.submenu").hide()}})}};if((q.Orientation.toLowerCase()=="horizontal"&&q.MenuStyle.toLowerCase()=="accordion")||q.MenuStyle.toLowerCase()=="defaultmenu"){b("ul.submenu",this).hide().css({"min-width":"180px",position:"absolute"});b("ul.submenu",this).children("li").each(function(){if(b(this).children().is("ul")){b(this).addClass("has-children")}b(this).children(".submenu").css("min-width","180px")});eventOpenDefaultMenu(this,d,q,g)}if(q.Orientation.toLowerCase()=="vertical"&&q.MenuStyle.toLowerCase()=="accordion"){b(this).closest("#MenuV").addClass("accordion");b(this).children("li").children("ul").hide();if(typeof(q.Event)!=="undefined"){q.Event=q.Event.toLowerCase()}else{q.Event=h}if(q.Event=="click"){b("li",this).children("ul").each(function(){b(this).parent("li").addClass("has-children has-children-close")})}else{b("li",this).each(function(){if(b(this).children().is("ul")){if(b(this).parent("ul").is(".menu")){b(this).addClass("has-children has-children-close")}}})}eventOpenAccordionMenu(this)}if(q.MenuStyle.toLowerCase()=="megamenu"){b(this).parents("#MenuH, #MenuV").addClass("megamenu");b("head").append('<link id="styles-mobile-megamenu" rel="stylesheet" href="'+style_mobile_path+'mobile-megamenu.css" type="text/css" />');b(this).children("li").children("ul").each(function(){if(b(this).children("li").children("ul").is(".submenu")){b(this).parent().addClass("mega")}});b(this).children("li:not(.mega)").each(function(){b(this).children(".submenu").css("min-width","180px")});var p=0;var o=0;q.MinWidth=parseInt(q.MinWidth);q.MaxWidth=parseInt(q.MaxWidth);if(q.MinWidth>0){if(q.MinWidth>q.MaxWidth){q.MinWidth=150;q.MaxWidth=250}else{q.MinWidth}}else{q.MinWidth=150}if(q.MaxWidth>0){q.MaxWidth}else{q.MaxWidth=250}b(".submenu",this).css({left:"-9999px",display:"block",visibility:"hidden"});b(".mega > .submenu",this).each(function(){var x=0;b(this).children("li").each(function(){x++});b("li",this).each(function(){if(b(this).width()>p){var y=parseInt(b(this).css("padding-left").split("px")[0]);var B=parseInt(b(this).css("padding-right").split("px")[0]);var z=parseInt(b(this).css("margin-left").split("px")[0]);var A=parseInt(b(this).css("margin-right").split("px")[0]);p=b(this).width()+y+B+z+A;if(p>q.MaxWidth){p=q.MaxWidth;b("a",this).css("white-space","normal")}else{if(p<q.MinWidth){p=q.MinWidth}else{p}}if(b(this).outerHeight(true)>o){o=b(this).outerHeight(true)}}});var u=parseInt(b(".container").css("padding-left").split("px")[0]);var w=parseInt(b(".container").css("padding-right").split("px")[0]);var s=b(".container").width()+u+w;if(q.MaxColumns&&q.MaxColumns>0&&q.MaxColumns<=x){var t=b(this);var r=parseInt(p*x);megaMenuWithColumns(r,parseInt(q.MaxColumns),t,s,false,q.MinWidth,q.MaxWidth,q.Orientation,p);var v=b(this).children(".megamenu-row");b(window).resize(function(){if(b(window).width()>=f){var z=parseInt(b(".container").css("padding-left").split("px")[0]);var A=parseInt(b(".container").css("padding-right").split("px")[0]);var y=b(".container").width()+z+A;megaMenuWithColumns(r,parseInt(q.MaxColumns),v,y,true,q.MinWidth,q.MaxWidth,q.Orientation,p)}else{b("#MenuH .submenu, #MenuH .megamenu-row > li").removeAttr("style");b("#MenuH .submenu").css("display","none")}})}else{var t=b(this);var r=parseInt(p*x);megaMenuNoColumns(r,b(this),s,q.MinWidth,q.MaxWidth,x,o,p,q.Orientation);var t=b(this);b(window).resize(function(){if(b(window).width()>=f){var z=parseInt(b(".container").css("padding-left").split("px")[0]);var A=parseInt(b(".container").css("padding-right").split("px")[0]);var y=b(".container").width()+z+A;megaMenuNoColumns(r,t,y,q.MinWidth,q.MaxWidth,x,o,p,q.Orientation)}else{b("#MenuH .submenu, #MenuH .submenu > li").removeAttr("style");b("#MenuH .submenu").css("display","none")}})}});b(".submenu",this).css({display:"",visibility:""});b(this).children("li").children("ul").hide();eventOpenMegaMenu(this,d,q,g)}if(q.Orientation.toLowerCase()=="vertical"){var d=b(this);var n=q.MenuStyle.toLowerCase();if(a().width<=991){b("li",d).unbind();b(".submenu",d).css("position","");d.closest("#MenuV").removeClass().addClass("accordion");b("ul.submenu, ul.submenu > li, li > ul.submenu",d).attr("style","");b("li.mega",d).removeClass("mega");q.MenuStyle="Accordion";var l=d.closest("#MenuV");var m=l.parent();l.appendTo(m);eventOpenAccordionMenu(this)}b(window).resize(function(){if(a().width<=991){b("li",d).unbind();b("ul.submenu",d).css("position","");d.closest("#MenuV").removeClass().addClass("accordion");b("ul.submenu, ul.submenu > li, li > ul.submenu",d).removeAttr("style");b("li.mega",d).removeClass("mega");q.MenuStyle="Accordion";var r=d.closest("#MenuV");var s=r.parent();r.appendTo(s);eventOpenAccordionMenu(d)}else{var r=d.closest("#MenuV");var s=r.parent();r.prependTo(s);b("ul.submenu, li",d).unbind();d.closest("#MenuV").removeClass();switch(n){case"accordion":q.MenuStyle="Accordion";d.closest("#MenuV").addClass("accordion");eventOpenAccordionMenu(d);break;case"defaultmenu":q.MenuStyle="DefaultMenu";b("ul.submenu",d).css("position","absolute");b("ul.submenu",d).each(function(){b(this).css("min-width","180px")});eventOpenDefaultMenu(d,this,q,g);break;case"megamenu":q.MenuStyle="MegaMenu";d.closest("#MenuV").addClass("megamenu");d.children("li").children("ul").each(function(){if(b(this).children("li").children("ul").is(".submenu")){b(this).parent().addClass("mega")}if(b(this).children().hasClass("megamenu-row")){b(this).parent().addClass("mega")}});d.children("li:not(.mega)").each(function(){b(this).children(".submenu").css("min-width","180px")});b("li.mega > ul.submenu",d).css("display","none");eventOpenMegaMenu(d,d,q,g);break}}})}if(e&&q.Orientation.toLowerCase()=="horizontal"){var i=e.toLowerCase();var j=f.match(/^[0-9]*$/)?f:768;var d=b(this);var k=false;mobileMenu_MediaQuery=function(){b("head").append('<link id="styles-mobile" rel="stylesheet" href="'+style_mobile_path+"mobile-"+i+'.css" type="text/css" />');b('link[id="styles-mobile-megamenu"]').remove();if(q.MenuStyle.toLowerCase()=="megamenu"&&q.Orientation.toLowerCase()=="horizontal"){d.children("li.mega").removeClass("mega");d.closest("#MenuH").removeClass("megamenu");b(".menu > li, .submenu, .submenu > li, .megamenu-row > li",d).removeAttr("style");b(".submenu",d).css("display","none")}};if(a().width<j){mobileMenu_MediaQuery();b("li",d).unbind();showMobileMenu(i,d,q,this,g);b("#MenuV em.sf-sub-indicator").remove();k=true}b(window).resize(function(){if(a().width>=j){if(k==true){b('#MenuH em.sf-sub-indicator, link[id="styles-mobile"]').remove();d.closest("#MenuH").children("select, select + span").css("display","none");b("li",d).children("ul.submenu").css("display","none");if(q.Orientation.toLowerCase()=="horizontal"){if(q.MenuStyle.toLowerCase()=="defaultmenu"){b("li",d).children("ul.submenu").css({display:"none","min-width":"180px",position:"absolute"});eventOpenDefaultMenu(d,d,q,g)}else{d.closest("#MenuH").addClass("megamenu");d.children("li").children("ul").each(function(){if(b(this).children("li").children("ul").is(".submenu")){b(this).parent().addClass("mega")}if(b(this).children().hasClass("megamenu-row")){b(this).parent().addClass("mega")}});d.children("li:not(.mega)").each(function(){b(this).children(".submenu").css("min-width","180px")});b("li").children("ul.submenu").css({display:"none"});b("head").append('<link id="styles-mobile-megamenu" rel="stylesheet" href="'+style_mobile_path+'mobile-megamenu.css" type="text/css" />');eventOpenMegaMenu(d,d,q,g)}}k=false}}else{if(k==false){mobileMenu_MediaQuery();d.closest("#MenuH").children("select, select + span").css("display","");b("li",d).unbind();showMobileMenu(i,d,q,this,g);b("#MenuV em.sf-sub-indicator").remove();k=true}}})}}})(jQuery);