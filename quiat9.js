************************************************
Suicide IAT -- 
includes a flowers/insects IAT warm-up task

Last modified on 10-4-11

flowers/insects IAT (warmup) -- 16 practice trials; 24 critical trials
Death Life/Me Not Me -- 20 practice trials; 60 critical trials
************************************************

<defaults> / font = ("Arial", -21, 400, 0, 34)
/ txbgcolor = (0, 0, 0) / screencolor = (0, 0, 0)
/ pretrialpause = 0 / posttrialpause = 150 </defaults>

***********************************************************************************************************
<text flowers> / items = flowers / color = (0, 255, 0) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item flowers> /1 = "Daffodil" /2 = "Rose" /3 = "Daisy" /4 = "Sunflower" /5 = "Tulip" </item>
<text insects> / items = insects / color = (0, 255, 0) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item insects> /1 = "Bugs" /2 = "Fly" /3 = "Caterpillar" /4 = "Ant" /5 = "Dragonfly" </item>

<text good> / items = good / color = (255, 255, 255) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item good>  /1 = "peace" /2 = "pleasure" /3 = "joy" /4 = "love" /5 = "wonderful" </item>
<text Bad> / items = bad / color = (255, 255, 255) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item bad> /1 = "pain" /2 = "terrible" /3 = "rotten" /4 = "nasty" /5 = "sad" </item>


<text remind1> / items = (" ") / color = (0, 255, 0) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text error> / items = ("X") / color = (255, 0, 0) / numitems = 1 / position = (50,60) / font = ("Arial", -35, 700, 0, 34) </text>
<text flowersrightremind> / items = ("Flowers") / position = (85,20) / color = (0, 255, 0) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text insectsleftremind>  / items = ("Insects") / position = (15,20) / color = (0, 255, 0) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text flowersleftremind> / items = ("Flowers") / position = (15,20) / color = (0, 255, 0) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text insectsrightremind>  / items = ("Insects") / position = (85,20) / color = (0, 255, 0) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text goodrightremind> / items = ("Good") / position = (85,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text badleftremind> / items = ("Bad") / position = (15,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text badrightremind> / items = ("Bad") / position = (85,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text goodleftremind> / items = ("Good") / position = (15,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text remind> / items = ("Check categories - Press space bar when ready") / position = (50, 75) / color = (255, 255, 255) / numitems = 1 </text>

<instruct> / font = ("Arial", -16, 400, 0, 49)</instruct>

<page beginIAT>
For this portion of the study, words will appear one at a time in the middle of the screen. Classify those words into groups which 
will be designated with labels appearing on the top half of the screen.  All words belonging to the groups on the left will be classified with the "e" key.  All words
belonging to the groups on the right will be classified with the "i" key. 
Classify the words as quickly as possible while making as few mistakes as possible.  
Accuracy and speed are both important.^^Pay close attention to the group labels, they will change from block to block. 
Direct any questions to the experimenter. 
</page>


<trial flowersright> / correctresponse = ("i") / frames = [1=flowers] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial insectsleft> / correctresponse = ("e") / frames = [1=insects] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial flowersleft> / correctresponse = ("e") / frames = [1=flowers] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial insectsright> / correctresponse = ("i") / frames = [1=insects] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial goodright> / correctresponse = ("i") / frames = [1=good] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial badleft> / correctresponse = ("e") / frames = [1=bad] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial badright> / correctresponse = ("i") / frames = [1=bad] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial goodleft> / correctresponse = ("e") / frames = [1=good] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial reminder> / correctresponse = (" ") / frames = [1=remind] / responsemode = correct / validresponse = ("e", "i") </trial> 


<block flowersgood>
/ bgstim = (insectsleftremind, goodrightremind, badleftremind, flowersrightremind)
/ trials = [1,12 = reminder; 3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41 = random (goodright, badleft);
  2,4,6,8,10,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42 = random (insectsleft, flowersright)] / errormessage = true(error, 200) </block>
<block flowersbad>
/ bgstim = (insectsrightremind, goodrightremind, badleftremind, flowersleftremind)
/ trials = [1,12 = reminder; 3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41 = random (goodright, badleft);
  2,4,6,8,10,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42 = random (flowersleft, insectsright)] / errormessage = true(error, 200) </block>
<block badgood> 
/ bgstim = (goodrightremind, badleftremind) / trials = [1 = reminder; 2-17 = random (goodright, badleft)] / errormessage = true(error, 200) </block>
<block flowersinsects> / preinstructions = (beginIAT)
/ bgstim = (flowersleftremind, insectsrightremind)
/ trials = [1 = reminder; 2-21 = random (flowersleft, insectsright)] / errormessage = true(error, 200) </block>
<block insectsflowers> / preinstructions = (beginIAT)
/ bgstim = (insectsleftremind, flowersrightremind)
/ trials = [1 = reminder; 2-21 = random (flowersright, insectsleft)] / errormessage = true(error, 200) </block>
<block flowersinsects1>
/ bgstim = (flowersleftremind, insectsrightremind)
/ trials = [1 = reminder; 2-41 = random (flowersleft, insectsright)] / errormessage = true(error, 200) </block>
<block insectsflowers1>
/ bgstim = (insectsleftremind, flowersrightremind)
/ trials = [1 = reminder; 2-41 = random (flowersright, insectsleft)] / errormessage = true(error, 200) </block>

***********************************************************************************************************

<text me> / items = me / color = (255, 255, 255) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item me>  /1 = "myself" /2 = "my" /3 = "mine" /4 = "I" /5 = "self" </item>
<text notme> / items = notme / color = (255, 255, 255) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item notme> /1 = "them" /2 = "they" /3 = "theirs" /4 = "their" /5 = "other" </item>

<text notmerightremind> / items = ("Not Me") / position = (85,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text meleftremind> / items = ("Me") / position = (15,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text merightremind> / items = ("Me") / position = (85,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text notmeleftremind> / items = ("Not Me") / position = (15,30) / color = (255, 255, 255) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>

<trial meright> / correctresponse = ("i") / frames = [1=me] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial notmeleft> / correctresponse = ("e") / frames = [1=notme] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial notmeright> / correctresponse = ("i") / frames = [1=notme] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial meleft> / correctresponse = ("e") / frames = [1=me] / responsemode = correct / validresponse = ("e", "i") </trial>


<text suicide> / items = suicide / color = (0, 255, 0) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item suicide> /1 = "Suicide" /2 = "Die" /3 = "Funeral" /4 = "Lifeless" /5 = "Deceased" </item>
<text living> / items = living / color = (0, 255, 0) / font = ("Arial", -48, 700, 0, 34) / numitems = 5 </text>
<item living> /1 = "Alive" /2 = "Live" /3 = "Thrive" /4 = "Survive" /5 = "Breathing" </item>

<text suiciderightremind> / items = ("Death") / color = (0, 255, 0) / position = (85,20) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text suicideleftremind> / items = ("Death") / color = (0, 255, 0) / position = (15,20) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text livingrightremind> / items = ("Life") / color = (0, 255, 0) / position = (85,20) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>
<text livingleftremind> / items = ("Life") / color = (0, 255, 0) / position = (15,20) / numitems = 1 / font = ("Arial", -35, 700, 0, 34) </text>

<trial suicideright> / correctresponse = ("i") / frames = [1=suicide] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial suicideleft> / correctresponse = ("e") / frames = [1=suicide] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial livingright> / correctresponse = ("i") / frames = [1=living] / responsemode = correct / validresponse = ("e", "i") </trial>
<trial livingleft> / correctresponse = ("e") / frames = [1=living] / responsemode = correct / validresponse = ("e", "i") </trial>


<page suicideinstruct>
For the next portion of this study, you will be asked to classify words into
the categories of DEATH and LIFE, as well as words related to ME and NOT ME. The words related to each of the categories are shown below.  Remember, when the word in the center corresponds 
to the category on the left, you will use the "e" key, and when the word in the center corresponds to the
category on the right, you will use the "i" key. Classify the words as quickly as possible while
making as few mistakes as possible.^^^

	DEATH		 LIFE		ME	  	NOT ME^^

	Suicide         	Alive		Myself  		Them^
	Die		Live		My		They^
	Funeral		Thrive		Mine	  	Theirs^
	Lifeless		Survive		I		Their^
	Deceased	Breathing	Self		Other^

  		
</page>


<block suicideme>
/ preinstructions = (suicideinstruct)
/ bgstim = (livingleftremind, merightremind, notmeleftremind, suiciderightremind)
/ trials = [1,12 = reminder; 3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41 = random (meright, notmeleft);
  2,4,6,8,10,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42 = random (livingleft, suicideright)] / errormessage = true(error, 200) </block>
<block suicidenotme>
/ preinstructions = (suicideinstruct)
/ bgstim = (livingrightremind, merightremind, notmeleftremind, suicideleftremind)
/ trials = [1,12 = reminder; 3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41 = random (meright, notmeleft);
  2,4,6,8,10,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42 = random (suicideleft, livingright)] / errormessage = true(error, 200) </block>
<block suicideliving>
/ bgstim = (suicideleftremind, livingrightremind)
/ trials = [1 = reminder; 2-17 = random (suicideleft, livingright)] / errormessage = true(error, 200) </block>
<block livingsuicide>
/ bgstim = (livingleftremind, suiciderightremind)
/ trials = [1 = reminder; 2-17 = random (livingleft, suicideright)] / errormessage = true(error, 200) </block>


<page complete> Thank you!  ^^Please let the experimenter know that you have finished. </page>

***********************************************************************************************************

<data> / columns = [date time build subject trialcode blocknum trialnum latency response correct stimulus blockcode] / format = TAB </data>

<expt> / blocks = [1=flowersinsects; 2=badgood; 3=flowersbad; 4=insectsflowers1; 5=flowersgood; 6-7 = random (suicideme, suicidenotme)]
/subjects = (1 of 2) /postinstructions=(complete) </expt>

<expt> / blocks = [1=flowersinsects; 2=badgood; 3=flowersbad; 4=insectsflowers1; 5=flowersgood; 6-7 = random (suicideme, suicidenotme)]
/subjects = (2 of 2) /postinstructions=(complete) </expt>
