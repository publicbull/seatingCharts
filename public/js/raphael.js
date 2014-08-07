


window.onload = function() {

    var paper = new Raphael(document.getElementById('canvas_container'), 670, 410);
    	var background = paper.set();
    	background.push(paper.path("M125,154L225,70L328,13L391,2L474,2L539,32L573,61L611,120Q622,188,611,286L572,347L540,375L476,406L392,406L327,394L224,337L125,253Z")).attr({stroke: "#fff", fill: "#e5e1e1"})
	    var stage = paper.set();
	    stage.push(paper.path("M133,159L133,249L149,249Q185,204,149,158L133,158").attr({fill: "#63636b", opacity: 0.5, title: "Stage"}));
	    var poolCircle = paper.set();
	    poolCircle.push(paper.path("M166,160L176,149Q210,200,176,259L166,249Q195,201,166,160").attr({fill: "#778dac"}));
	    var sideAC1 = paper.set();
	    sideAC1.push(paper.path("M166,136L177,125L186,130L176,142Z").attr({fill: "#ffc552"}));
	    var sideAC2 = paper.set();
	    sideAC2.push(paper.path("M178,124L200,100L208,106L187,130Z").attr({fill: "#428cbd"}));
	    var gardenOne = paper.set();
	    gardenOne.push(paper.path("M180,144L206,117L207,119L224,101L241,120L190,155Q187,149,180,144").attr({fill: "#b23535"}));
	    var gardenTwo = paper.set();
	    gardenTwo.push(paper.path("M193,160L243,125L257,151L200,173Q198,166,193,160").attr({fill: "#b23535"}));
	    var gardenThree = paper.set();
	    gardenThree.push(paper.path("M202,177L258,155L266,185L205,192Q204,185,202,177").attr({fill: "#b23535"}));
	    var gardenFour = paper.set();
	    gardenFour.push(paper.path("M206,196L266,189L267,219L206,212Q207,204,206,196").attr({fill: "#b23535"}));
	    var gardenfive = paper.set();
	    gardenfive.push(paper.path("M205,216L266,223L259,253L202,232Q205,224,205,216").attr({fill: "#b23535"}));
	    var gardenSix = paper.set();
	    gardenSix.push(paper.path("M200,236L257,258L244,284L193,249Q198,243,200,236").attr({fill: "#b23535"}));
	    var gardenSeven = paper.set();
	    gardenSeven.push(paper.path("M190,252L241,287L224,307L208,290L206,292L180,264Q186,259,190,252").attr({fill: "#b23535"}));
	    var sideAC3 = paper.set();
	    sideAC3.push(paper.path("M166,272L176,266L186,277L176,283L166,272").attr({fill: "#ffc552"}));
	    var sideAC4 = paper.set();
	    sideAC4.push(paper.path("M178,284L188,278L208,301L200,308Z").attr({fill: "#428cbd"}));
	    var e = paper.set();
	    e.push(paper.path("M222,322L230,330L267,351L280,339L296,352L309,334L250,293Q238,308,222,321").attr({fill: "#ff7b7b"}));
	    var d = paper.set();
	    d.push(paper.path("M223,87L230,78L268,57L280,70L296,57L309,74L250,116Q237,99,223,87").attr({fill: "#ff7b7b"}));
	    var terrace1 = paper.set();
	    terrace1.push(paper.path("M252,120L312,79L333,121L267,147Q260,131,252,120").attr({fill: "#c0cfa3"}));
	    var terrace2 = paper.set();
	    terrace2.push(paper.path("M270,154L337,132L346,176L276,185Q275,169,270,154").attr({fill: "#c0cfa3"}));
	    var terrace3 = paper.set();
	    terrace3.push(paper.path("M277,188L346,180L347,228L277,220Q278,204,277,188").attr({fill: "#c0cfa3"}));
	    var terrace4 = paper.set();
	    terrace4.push(paper.path("M276,225L346,233L336,276L270,254Q275,239,276,225").attr({fill: "#c0cfa3"}));
	    var terrace5 = paper.set();
	    terrace5.push(paper.path("M266,262L333,287L312,330L252,289Q261,277,266,262").attr({fill: "#c0cfa3"}));
	    var k3 = paper.set();
	    k3.push(paper.path("M302,366Q313,354,321,342L378,376L369,390L355,391Q322,385,302,366").attr({fill: "#c4e8c8"}));
	    var k2 = paper.set();
	    k2.push(paper.path("M324,336Q331,326,336,315L396,342L382,370Z").attr({fill: "#c4e8c8"}));
	    var k1 = paper.set();
	    k1.push(paper.path("M338,310Q344,299,347,289L410,305L399,336Z").attr({fill: "#c4e8c8"}));
	    var j2 = paper.set();
	    j2.push(paper.path("M350,280Q355,266,357,251L420,262L413,296Z").attr({fill: "#c4e8c8"}));
	    var j1 = paper.set();
	    j1.push(paper.path("M358,246Q361,234,360,222L425,255L422,256L358,246").attr({fill: "#a68cc0"}));
	    var h = paper.set();
	    h.push(paper.path("M361,216Q362,204,361,193L426,189L426,219Z").attr({fill: "#a68cc0"}));
	    var g1 = paper.set();
	    g1.push(paper.path("M360,187Q361,175,358,163L421,152L425,183Z").attr({fill: "#a68cc0"}));
	    var g2 = paper.set();
	    g2.push(paper.path("M357,158Q356,143,350,129L413,113L421,147Z").attr({fill: "#c4e8c8"}));
	    var f1 = paper.set();
	    f1.push(paper.path("M347,120Q344,109,339,99L399,72L410,103Z").attr({fill: "#c4e8c8"}));
	    var f2 = paper.set();
	    f2.push(paper.path("M336,93Q332,83,324,72L382,38L396,66Z").attr({fill: "#c4e8c8"}));
	    var f3 = paper.set();
	    f3.push(paper.path("M320,67Q312,54,301,42Q318,24,352,17L369,18L379,33Z").attr({fill: "#c4e8c8"}));
	    var p3 = paper.set();
	    p3.push(paper.path("M388,388Q397,375,402,362L454,389L450,398L396,398L398,395Z").attr({fill: "#c5a5b5"}));
	    var p2 = paper.set();
	    p2.push(paper.path("M405,356Q411,346,416,333L470,355L457,384Z").attr({fill: "#c5a5b5"}));
	    var p1 = paper.set();
	    p1.push(paper.path("M418,328Q422,317,425,308L484,307L472,349Z").attr({fill: "#c5a5b5"}));
	    var n3 = paper.set();
	    n3.push(paper.path("M428,297Q432,286,433,274L489,286L488,298Z").attr({fill: "#c5a5b5"}));
	    var n2 = paper.set();
	    n2.push(paper.path("M434,269Q438,255,438,241L495,246L491,280Z").attr({fill: "#c5a5b5"}));
	    var n1 = paper.set();
	    n1.push(paper.path("M438,236Q441,220,440,207L498,207L496,240Z").attr({fill: "#c5a5b5"}));
	    var m1 = paper.set();
	    m1.push(paper.path("M440,202Q441,188,439,173L496,168L,498,201Z").attr({fill: "#c5a5b5"}));
	    var m2 = paper.set();
	    m2.push(paper.path("M438,167Q438,155,434,139L490,128L496,162Z").attr({fill: "#c5a5b5"}));
	    var m3 = paper.set();
	    m3.push(paper.path("M434,134Q432,122,427,111L488,111L490,123Z").attr({fill: "#c5a5b5"}));
	    var l1 = paper.set();
	    l1.push(paper.path("M424,100Q423,91,418,81L472,59L485,101Z").attr({fill: "#c5a5b5"}));
	    var l2 = paper.set();
	    l2.push(paper.path("M416,75Q412,63,405,52L457,25L470,54Z").attr({fill: "#c5a5b5"}));
	    var l3 = paper.set();
	    l3.push(paper.path("M403,46Q398,33,388,22L398,15L395,10L450,11L454,19Z").attr({fill: "#c5a5b5"}));
	    var u3 = paper.set();
	    u3.push(paper.path("M470,390Q475,381,478,372L505,382L479,394Z").attr({fill: "#ffa55a"}));
	    var u2 = paper.set();
	    u2.push(paper.path("M481,366Q487,354,490,342L538,358L534,369L514,379Z").attr({fill: "#ffa55a"}));
	    var u1 = paper.set();
	    u1.push(paper.path("M492,336Q497,322,499,307L521,300L518,316L552,325L544,354Z").attr({fill: "#ffa55a"}));
	    var u1partial = paper.set();
	    u1partial.push(paper.path("M525,312L528,298L560,289L554,320Z").attr({fill: "#ffa55a"}));
	    var t2 = paper.set();
	    t2.push(paper.path("M502,296Q507,278,508,262L563,266L562,279Z").attr({fill: "#ffa55a"}));
	    var t1 = paper.set();
	    t1.push(paper.path("M509,257Q512,241,511,227L567,227L564,261Z").attr({fill: "#ffa55a"}));
	    var s = paper.set();
	    s.push(paper.path("M511,221Q513,204,512,188L567,188L567,221Z").attr({fill: "#ffa55a"}));
	    var r1 = paper.set();
	    r1.push(paper.path("M511,182Q513,167,509,152L564,148L567,182Z").attr({fill: "#ffa55a"}));
	    var r2 = paper.set();
	    r2.push(paper.path("M508,146Q507,130,502,112L562,130L563,142Z").attr({fill: "#ffa55a"}));
	    var q1 = paper.set();
	    q1.push(paper.path("M500,102Q498,87,491,73L544,55L552,82L518,92L522,108Z").attr({fill: "#ffa55a"}));
	    var q1partial = paper.set();
	    q1partial.push(paper.path("M528,110L525,97L554,89L560,118Z").attr({fill: "#ffa55a"}));
	    var q2 = paper.set();
	    q2.push(paper.path("M489,67Q488,54,480,43L514,29L534,39L539,50Z").attr({fill: "#ffa55a"}));
	    var q3 = paper.set();
	    q3.push(paper.path("M478,37Q476,28,470,19L478,14L506,25Z").attr({fill: "#ffa55a"}));
	    var x2 = paper.set();
	    x2.push(paper.path("M563,341Q568,326,569,314L586,317L568,341Z").attr({fill: "#1a9644"}));
	    var x1 = paper.set();
	    x1.push(paper.path("M571,308Q575,295,575,283L606,266L604,284L589,312Z").attr({fill: "#1a9644"}));
	    var w1 = paper.set();
	    w1.push(paper.path("M578,271Q580,256,580,242L608,243L608,255Z").attr({fill: "#1a9644"}));
	    var w2 = paper.set();
	    w2.push(paper.path("M580,236Q583,204,580,172L609,172L609,236Z").attr({fill: "#1a9644"}));
	    var w3 = paper.set();
	    w3.push(paper.path("M580,167Q,581,153,577,137L608,153L609,166Z").attr({fill: "#1a9644"}));
	    var v1 = paper.set();
	    v1.push(paper.path("M575,125Q575,112,570,100L589,97L604,123L606,142Z").attr({fill: "#1a9644"}));
	    var v2 = paper.set();
	    v2.push(paper.path("M570,95Q569,83,563,68L568,67L586,91Z").attr({fill: "#1a9644"}));


	    var rosebowl = [stage, poolCircle, sideAC1, sideAC2, gardenOne, gardenTwo, gardenThree, gardenFour, gardenfive, gardenSix, gardenSeven, sideAC3, sideAC4, e, d, terrace1, terrace2, terrace3, terrace4, terrace5, k3, k2, k1, j2, j1, h, g1, g2, f1, f2, f3, p3, p2, p1, n3, n2, n1, m1, m2, m3, l1, l2, l3, u3, u2, u1, u1partial, t2, t1, s, r1, r2, q1, q1partial, q2, q3, x2, x1, w1, w2, w3, v1, v2];
	    // console.log(rosebowl);

	    for (var i = 0, len = rosebowl.length; i < len; i++) {
	    	var el = rosebowl[i];

	    	el.mouseover(function() {
	    		this.toFront();
	    		var x = this.id;
	    		$(".section_info").hide();
	    		$("#section" + x).show();
	    		this.attr({
	    			cursor: 'pointer',
	    			stroke: '#fff',
	    			'stroke-width': '2',
	    			opacity: '0.8',
	    		});
	    		this.animate({
	    			transform: 's3'
	    		}, 200);
	    	});
	    	el.mouseout(function(){
	    		this.animate({
	    			transform: 's1'
	    		}, 200);
	    		this.attr({
	    			opacity: '1.0'
	    		})
	    	});
	    	el.click(function(){
	    		var x = this.id;
	    		$(".section_info").hide();
	    		$("#section" + x).show();
	    	});
	      };



	    var json = paper.toJSON();

	    paper2 = new Raphael(document.getElementById('canvas_container_two'), 670, 410);
	    	paper2.fromJSON(json);

	    	// console.log(json);

    
    	


};
