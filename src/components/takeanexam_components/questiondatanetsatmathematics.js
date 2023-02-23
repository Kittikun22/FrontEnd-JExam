//Reserved Word & sign `` |   
//questions[i].length < 10
//choice not be same

export const mathematicsexam = {
    questioninfo : [
        { Title:'NETSAT ด้านคณิตศาสตร์',
        Description_line_i:'ความฉลาดรู้ทั่วไป 103 ด้านคณิตศาสตร์',
        Description_line_ii:' - Functions กราฟ ฟังก์ชั่น',
        Description_line_iii:' - Geometrical Figures เรขาคณิต การหาพื้นที่ ตรีโกณมิติ ปริมาตรของรูปทรงต่างๆ จำนวนเชิงซ้อน',
        Description_line_iv:' - Data handling อัตราส่วน เปอร์เซ็นต์ ความน่าจะเป็น สถิติพื้นฐาน การวิเคราะห์ข้อมูล',
        Description_line_v:' - Numbers and Mathematical สมการ สมการพหุนาม การวาดกราฟ เลขยกกำลัง ค่าคงที่',
        NumberofQuestions:40,
        Duration:60, //min
        //define liked question by array order 
        Linkedquestionid : [3,19,20,35], //index must be order asc
        Category:{'Functions':5,'Geometrical Figures':15,'Data handling':10,'Numbers and Mathematical':10},
        //numberofquestionincategory:[3,2,3,3]
        }],
    questions: [
        {   id: 1,
                question: ` ทศนิยมซ้ำ 0.45<overline>56</overline> สามารถเขียนเป็นทศนิยมรูปเศษส่วนได้ตามข้อใด `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '<fraction>  4511  | 9900  </fraction>'},{
                    choicevalue:'b',choiceimg:false,choicetext: '<fraction>  4511  | 9999  </fraction>'},{
                    choicevalue:'c',choiceimg:false,choicetext: '<fraction>  4556  | 9900  </fraction>'},{
                    choicevalue:'d',choiceimg:false,choicetext: '<fraction>  4556  | 9999  </fraction><br></br>'}
                ],
                Answer: 'a',
                Category: 'Numbers and Mathematical',
                AnswerDescription:`<2tab></2tab>โจทย์ต้องการถามว่าทศนิยมซ้ำแบบไม่รู้จบ สามารถเขียนในรูปเศษส่วนได้อย่างไร  
                <br></br> Trick  <fraction>  เลขทั้งหมด - เลขที่ไม่ซ้ำ  | จำนวนตัวเลขที่ซ้ำหรือไม่ซ้ำหลังจุดทศนิยม  </fraction><br></br>
                <br></br><tab></tab>โดย	แทนเลข 9 เท่ากับ จำนวนตัวเลขที่ซ้ำ
                <br></br><tab></tab><space></space><space></space><space></space>แทนเลข 0 เท่ากับ จำนวนตัวเลขที่ไม่ซ้ำ
                <br></br><2tab></2tab> <fraction>  4556 - 45  | 9900  </fraction> = <fraction>  4511  | 9900  </fraction><br></br>
                `,
                AnswerDescriptionAttachImg:'',

        },
        {   id: 2,
                question: 'ข้อใดต่อไปนี้ถูกต้อง',
                choice :[{
                    choicevalue:'a',choiceimg:true,imgheight:'21px',choicetext:'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc2-1.png'},{
                    choicevalue:'b',choiceimg:true,imgheight:'21px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc2-2.png'},{
                    choicevalue:'c',choiceimg:true,imgheight:'39px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc2-3.png'},{
                    choicevalue:'d',choiceimg:true,imgheight:'35px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc2-4.png'}
                ],
                Answer: 'b',
                AnswerDescription:`<tab></tab>ข้อ (1) จะได้ว่า <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad2-1.png" height="22px"></img> =6-(-3)=9≠3 
                <br></br><3tab></3tab><3tab></3tab> ผิด
                <br></br><tab></tab>ข้อ (2)	จะได้ว่า
                <br></br><3tab></3tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad2-2.png" height="120px"></img> 
                <br></br><3tab></3tab><3tab></3tab> ถูก
                <br></br><tab></tab>ถูกข้อ (3)	ใช้วิธีการสังยุค (ทางคณิตศาสตร์ไม่นิยมให้ตัวส่วนติดราก)
		        <br></br><tab></tab>จะได้ว่า 
                <br></br><3tab></3tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad2-3.png" height="145px"></img> 
                <br></br><3tab></3tab><3tab></3tab> ผิด
                <br></br><tab></tab>ข้อ (4)	ใช้วิธีการสังยุค (ทางคณิตศาสตร์ไม่นิยมให้ตัวส่วนติดราก)
		        <br></br><tab></tab>จะได้ว่า 
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad2-4.png" height="35px"></img>  
                <br></br><3tab></3tab><3tab></3tab> ผิด
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
        {   id: 3,
                question:  `รากที่สองของ <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq3.png" height="22px"></img>  มีค่าเท่ากับข้อใด`,
                 choice :[{
                    choicevalue:'a',choiceimg:true,imgheight:'18px',choicetext:'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc3-1.png'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2'},{
                    choicevalue:'c',choiceimg:true,imgheight:'18px',choicetext:'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc3-3.png'},{
                    choicevalue:'d',choiceimg:false,choicetext: '-2'}
                ],
                Answer: 'a',
                AnswerDescription:` จาก
                <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad3-1.png" height="25px"></img> 
                <br></br>จะได้
                <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad3-2.png" height="130px"></img> 
                <br></br>ดังนั้น
                <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad3-3.png" height="40px"></img> 
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
                
            },
             /*----------  linked question id 4-5  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: false, //false or true
            linkedquestion:[
                {   id: 4,
                    question: `คุณแม่แบ่งเงินจำนวน 5,000 บาท ให้ลูก 2 คน คือ ดำกับแดง ด้วยอัตราส่วน ดำ: แดง =2∶3 ข้อใดต่อไปนี้ถูกต้อง`,
                     choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ดำได้เงินมากกว่าแดง 10,000 บาท'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ดำได้เงินน้อยกว่าแดง 1,000 บาท'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ดำได้เงิน 3,000 บาท'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'แดงได้เงิน 2,000 บาท'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`<tab></tab>จะได้ว่า เงิน 5,000  แบ่งในอัตราส่วน ดำ : แดง  = 2∶ 3
                    <br></br> จะได้ว่า 1 ส่วน <fraction>  5,000  | 2 + 3  </fraction> = <fraction>  5,000  | 5  </fraction> = 1,000 <br></br>
                    <br></br><tab></tab>จะได้ว่า ดำ ได้เงิน 2×1,000=2,000 บาท 
                    <br></br><tab></tab>แดง ได้เงิน 3×1,000=3,000 บาท
                    <br></br>ดังนั้น ดำได้เงินน้อยกว่าแดง 1,000 บาท
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    // attachimganslink:`https://jknowledgetutor.com/wp-content/uploads/2022/11/answer-from-exam.webp`
                },
                {   id: 5,
                    question: 'จากข้อก่อนหน้า แดงได้นำเงินไปฝากธนาคารโดยธนาคารได้ดอกเบี้ย ร้อยละ 3 บาทต่อปี เมื่อครบ 1 ปี แล้วแดงจะมีเงินรวมทั้งหมดเท่าไหร่',
                     choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '3,300 บาท'},{
                        choicevalue:'b',choiceimg:false,choicetext: '3,030 บาท'},{
                        choicevalue:'c',choiceimg:false,choicetext: '3,900 บาท'},{
                        choicevalue:'d',choiceimg:false,choicetext: '3,090 บาท'}
                      ],
                    Answer: 'd',
                    AnswerDescription:` <tab></tab>จะได้ว่าแดงนำเงิน 3,000 ไปฝากธนาคาร แล้วได้ดอกเบี้ย 3 % ต่อปี 
                    <br></br>จะได้ว่า
                    <br></br>แดงมีเงินรวมทั้งหมด = <fraction>  100 + 3  | 100  </fraction>x 3,000 = 3,090 บาท <br></br>
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                },
            ]
        },
            {   id: 6,
                question: `ให้ y เป็นสัดส่วนโดยตรงกับกำลังสองของ x เมื่อ y=-5 และ x=-2 ถ้าบ x=-4 จะได้ y เท่ากับข้อใด`,
                 choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '20'},{
                    choicevalue:'b',choiceimg:false,choicetext: '-20'},{
                    choicevalue:'c',choiceimg:false,choicetext: '10'},{
                    choicevalue:'d',choiceimg:false,choicetext: '-10'}
                  ],
                Answer: 'b',
                AnswerDescription:`จาก y เป็นสัดส่วนโดยตรงกับกำลังสองของ x 
                <br></br>จะได้ว่า	y=kx<sup>2</sup>
                <br></br>โดย y = -5 เมื่อ x = -2	นั่นคือ -5=k(-2)<sup>2</sup>
                <br></br>จะได้ k=-<fraction> 5 | 4 </fraction> <br></br>
                <br></br><tab></tab>ดังนั้น	y=-<fraction> 5 | 4 </fraction> x<sup>2</sup>
                <br></br><tab></tab>ถ้า	x=4
                <br></br>จะได้ว่า y=-<fraction> 5 | 4 </fraction>(4)<sup>2</sup>=(-5)(4)=-20
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Data handling',
            },
            {   id: 7,
                question: 'ข้อใดต่อไปนี้กระจายนิพจน์ได้ถูกต้อง',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext:'(x - 3)<sup>2</sup> - (x - 2)<sup>2</sup>=10x + 13'},{
                    choicevalue:'b',choiceimg:false,choicetext: '(x + 1)<sup>2</sup> - 4(x<sup>2</sup> + 1)= - 3x<sup>2</sup> + 2x + 5'},{
                    choicevalue:'c',choiceimg:false,choicetext: ' 4(x<sup>2</sup> - 3x) - (3x<sup>2</sup> - 5x - 4)=x<sup>2</sup> - 7x + 4'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                ],
                Answer: 'c',
                AnswerDescription:` [1.] (x - 3)<sup>2</sup> - (x - 2)<sup>2</sup>=x<sup>2</sup> - 6x + 9 - (x<sup>2</sup> - 4x + 4)
                <br></br><2tab></2tab>=x<sup>2</sup> - 6x + 9 - x<sup>2</sup> + 4x - 4
                <br></br><2tab></2tab>= - 2x + 5 <tab></tab> ผิด
                <br></br>[2.] (x + 1)<sup>2</sup> - 4(x<sup>2</sup> + 1)=x<sup>2</sup> + 2x + 1 - 4x<sup>2</sup> - 4
			    <br></br><2tab></2tab>= - 3x<sup>2</sup> + 2x - 3 <tab></tab>ผิด
                <br></br>[3.] 4(x<sup>2</sup> - 3x) - (3x<sup>2</sup> - 5x - 4)=4x<sup>2</sup> - 12x - 3x<sup>2</sup> + 5x + 4
				<br></br><2tab></2tab>=x<sup>2</sup> - 7x + 4 <tab></tab>ถูก
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 8,
                question: 'การแยกตัวประกอบของนิพจน์ในข้อใดถูกต้อง',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext:'9x<sup>4</sup> - 6x<sup>2</sup> + 1=(3x<sup>2</sup> - 1)<sup>2</sup>'},{
                    choicevalue:'b',choiceimg:false,choicetext: '27x<sup>3</sup> + 125y<sup>3</sup>=(3x + 5y)(9x<sup>2</sup> - 15xy + 25y<sup>2</sup>)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '64x<sup>2</sup> - 49y<sup>2</sup>=(8x - 7y)(8x + 7y)'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                ],
                Answer: 'd',
                AnswerDescription:`  [1.] (3x<sup>2</sup> - 1)<sup>2</sup>=(3x<sup>2</sup><space></space> - <space></space>1)(3x<sup>2</sup><space></space> - <space></space>1) 
                <br></br><2tab></2tab>=9x<sup>4</sup><space></space> - <space></space>3x<sup>2</sup><space></space> - <space></space>3x<sup>2</sup><space></space> + <space></space>1
                <br></br><2tab></2tab>=9x<sup>4</sup> - 6x<sup>2</sup> + 1	
                <br></br> [2.] 27x<sup>3</sup><space></space> + <space></space>125y<sup>3</sup>=(3x)<sup>3</sup><space></space> + <space></space>(5y)<sup>3</sup>
                <br></br><2tab></2tab>=(3x<space></space> + <space></space>5y)(9x<sup>2</sup><space></space> - <space></space>15xy<space></space> + <space></space>25y<sup>2</sup>)
                <br></br>[3.] 64x<sup>2</sup><space></space> - <space></space>49y<sup>2</sup>=(8x)<sup>2</sup><space></space> - <space></space>(7y)<sup>2</sup>
                <br></br><2tab></2tab>=(8x<space></space> - <space></space>7y)(8x<space></space> + <space></space>7y)	
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 9,
                question: 'กำหนดให้ a,b และ c เป็นคำตอบของสมการ x<sup>3</sup> - 5x<sup>2</sup> - 4x + 20=0  ข้อใดถูกต้อง',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext:'a + b + c=-9'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>=81'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'abc=-20'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                ],
                Answer: 'c',
                AnswerDescription:`จาก x<sup>3</sup> - 5x<sup>2</sup> - 4x + 20=0
                <br></br><tab></tab>จะได้	(x + 2)(x - 2)(x - 5)=0 		
                <br></br><tab></tab>นั่นคือ	 x=-2,2,5
                <br></br><tab></tab>วิเคราะห์	
                <br></br><tab></tab>[1.] a + b + c=-2 + 2 + 5=5≠-9	<tab></tab>ผิด
                <br></br><tab></tab>[2.] a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>=(-2)<sup>2</sup> + 2<sup>2</sup> + 5<sup>2</sup>=4 + 4 + 25=33≠81 <tab></tab>ผิด
                <br></br><tab></tab>[3.] abc=(-2)(2)(5)=-20	
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 10,
                question: `ให้ y เป็นสัดส่วนโดยตรงกับกำลังสองของ x เมื่อ y=-5 และ x=-2 ถ้าบ x=-4 จะได้ y เท่ากับข้อใด`,
                 choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'x<-3'},{
                    choicevalue:'b',choiceimg:false,choicetext: '-x>1/3'},{
                    choicevalue:'c',choiceimg:false,choicetext: '-3<x<1/3'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                  ],
                Answer: 'c',
                AnswerDescription:`<tab></tab>จาก	3x<sup>2</sup>+8x-3<0
                <br></br> จะได้ว่า		(3x-1)(x+3)<0
                <br></br>                 x< <fraction> 1 | 3 </fraction>,-3  <br></br>
                <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad10-1.png" height="90px"></img> 
                ดังนั้น		xϵ(-3,-<fraction> 1 | 3 </fraction>)  <br></br>         
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 11,
                question: `กำหนดให้ P(x)=x<sup>2</sup> - 1   และ Q(x)=3x - 2 ถ้า R(x)=P(x) - Q(x) แล้วค่าของ R(2) - P(2) มีค่าเท่ากับข้อใด`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '-4'},{
                    choicevalue:'b',choiceimg:false,choicetext: '-2'},{
                    choicevalue:'c',choiceimg:false,choicetext: '0'},{
                    choicevalue:'d',choiceimg:false,choicetext: '2'}
                  ],
                Answer: 'a',
                AnswerDescription:`จาก<tab></tab><2space></2space> R(x)=P(x) - Q(x)
                <br></br>จะได้<tab></tab><2space></2space> R(x)=x<sup>2</sup> - 1 - (3x - 2)=x<sup>2</sup> - 1 - 3x + 2=x<sup>2</sup> - 3x + 1    
                <br></br>ดังนั้น R(2) - P(2)=((2)<sup>2</sup> - 3(2) + 1 ) - ((2)<sup>2</sup> - 1)		
                <br></br><3tab></3tab>=-1 - 3= - 4 `,
                AnswerDescriptionAttachImg:'',
                Category: 'Functions',
            },
            {   id: 12,
                question: `กำหนดให้ (ax + 2)(x - b)=3x<sup>2</sup> + cx + 10  ข้อใดถูกต้อง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'a>b '},{
                    choicevalue:'b',choiceimg:false,choicetext: 'b>c '},{
                    choicevalue:'c',choiceimg:false,choicetext: 'c=-17'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                  ],
                Answer: 'a',
                AnswerDescription:`จาก <tab></tab> (ax + 2)(x-b)=3x<sup>2</sup> + cx + 10
                <br></br><tab></tab>ax<sup>2</sup> + (2 - ab)x - 2b=3x<sup>2</sup> + cx + 10
                <br></br><tab></tab>จะได้	a=3	
                <br></br><tab></tab> - 2b=10	นั่นคือ b=10/(-2)=-5
                <br></br><tab></tab>2 - ab=c
                <br></br><tab></tab>2 - (3)(-5)=c	นั่นคือ c=17
                <br></br><tab></tab>ดังนั้น	a>b
                 `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 13,
                question: `ถ้าพหุนาม x<sup>3</sup> - 2x<sup>2</sup> + ax - 5  ถูกหารด้วย (x + 3) เหลือเศษ 1 แล้ว a มีค่าเท่ากับข้อใด `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '-13'},{
                    choicevalue:'b',choiceimg:false,choicetext: '13'},{
                    choicevalue:'c',choiceimg:false,choicetext: '-17'},{
                    choicevalue:'d',choiceimg:false,choicetext: '17'}
                  ],
                Answer: 'c',
                AnswerDescription:`<tab></tab> จากทฤษฎีบทเศษเหลือ	ถ้า P(x) หารด้วย x - a จะเหลือเศษ P(a)
                <br></br><tab></tab>นั่นคือ	x<sup>3</sup> - 2x<sup>2</sup> + ax - 5 ถูกหารด้วย (x + 3) เหลือเศษ 1
                <br></br><tab></tab>จะได้ P(-3)=(-3)<sup>3</sup> - 2(-3)<sup>2</sup> + a(-3) - 5=1
                <br></br><tab></tab>-27 - 18 - 3a - 5=1
                <br></br><tab></tab>-3a=1 + 27 + 18 + 5
                <br></br><tab></tab>-3a=51
                <br></br><tab></tab>a=<fraction> 51 | -3 </fraction>=-17
             `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 14,
                question: `ร้านขายอาหารทะเลแห่งหนึ่งขายกุ้งกิโลกรัมละ x บาท ปลาหมึกกิโลกรัมละ y บาท กุ้ง 1 กิโลกรัม และปลาหมึก 1 กิโลกรัมราคารวมกัน 500 บาท ขายกุ้งไป 20 กิโลกรัม และขายปลาหมึกไป 10 กิโลกรัม ได้เงินรวม 7,000 บาท ข้อใดถูกต้อง`,
                 choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'กุ้งแพงกว่าปลาหมึก'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ปลาหมึกแพงกว่ากุ้ง'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'กุ้งและปลาหมึกราคาเท่ากัน'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'กุ้งราคากิโลกรัมละ 300 บาท'}
                  ],
                Answer: 'b',
                AnswerDescription:`จากโจทย์จะได้สมการว่า	
                <br></br><3tab></3tab><2space></2space>x + y=500…………(1)
                <br></br><2tab></2tab><2space></2space>20x + 10y=7,000………(2)
                <br></br><tab></tab>(2)÷10; <5space></5space> 2x  + y=700…..……(3)
                <br></br><tab></tab>(3) - (1);<4space></4space> x=200 
                <br></br><tab></tab>แทนค่า x=200 ใน (1) จะได้ y=300
                <br></br>ดังนั้น	กุ้งราคากิโลกรัมละ 200 บาท
                <br></br>ปลาหมึกราคากิโลกรัมละ 300 บาท
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Functions',
            },
            {   id: 15,
                question: `พิกัดจุดยอดของพาราโบลา y=x<sup>2</sup> + 6x - 5  คือข้อใด`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '(3,14)'},{
                    choicevalue:'b',choiceimg:false,choicetext: '(3,-14)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '(-3,14)'},{
                    choicevalue:'d',choiceimg:false,choicetext: '(-3,-14)'}
                  ],
                Answer: 'd',
                AnswerDescription:`<tab></tab>จากสูตรในการหาจุดยอดของพาราโบลา คือ
                <br></br><tab></tab>จะได้จุดยอดของสมการพาราโบลาy=x<sup>2</sup>+6x-5 
	            <br></br><tab></tab>คือ
                <br></br><3tab></3tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad15-1.png" height="40px"></img> 
                <br></br><tab></tab>จะได้จุดยอดของสมการพาราโบลาy=x<sup>2</sup>+6x-5 
	            <br></br><tab></tab>คือ
                <br></br><3tab></3tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad15-2.png" height="100px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Functions',
            },
            {   id: 16,
                question: `จงสร้างสมการพาราโบลาที่มีจุดยอดอยู่ที่ (0,0) ซึ่งมีแกนสมมาตรอยู่บนแกน y และพาราโบลานี้ผ่านจุด (4,2)`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'x<sup>2</sup>=8y'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'x<sup>2</sup>=-8y'},{
                    choicevalue:'c',choiceimg:false,choicetext: '-x<sup>2</sup>=8y'},{
                    choicevalue:'d',choiceimg:false,choicetext: '-x<sup>2</sup>=-8y'}
                ],
                Answer: 'a',
                AnswerDescription:`จากสมการพาราโบลา (x - h)<sup>2</sup>=4c(y - k)
                <br></br><tab></tab>เมื่อจุดยอดอยู่มี่จุด (0,0) จะได้	(x - 0)<sup>2</sup>=4c(y - 0)
                <br></br><tab></tab>x<sup>2</sup>=4cy
                <br></br><tab></tab>เมื่อผ่านจุด (4,2) จะได้ (4)<sup>2</sup>=4c(2)		
                <br></br><tab></tab>นั่นคือ c=16/8=2
                <br></br>ดังนั้นจะได้สมการพาราโบลา ดังนี้	(x - 0)<sup>2</sup>=4c(y - 0)
                <br></br><2tab></2tab>x<sup>2</sup>=4(2)y
                <br></br><2tab></2tab>x<sup>2</sup>=8y
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Functions',
            },
            {   id: 17,
                // attachimglink:`https://jknowledgetutor.com/attachfile/netsat/mathematics/mq17.png`,
                question: `<img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq17.png" height="200px"></img> จากรูปสามเหลี่ยมมุมฉาก x มีค่าเท่ากับข้อใด`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '8'},{
                    choicevalue:'b',choiceimg:false,choicetext: '10'},{
                    choicevalue:'c',choiceimg:true,imgheight:'18px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc17-3.png'},{
                    choicevalue:'d',choiceimg:true,imgheight:'18px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc17-4.png'}
                ],
                Answer: 'c',
                AnswerDescription:`<br></br><tab></tab>จากทฤษฎีบทพีทาโกรัส
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad17-1.png" height="150px"></img>
                <br></br><tab></tab>จะได้ว่า
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad17-2.png" height="65px"></img>
                  `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 18,
                question: `<img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq18.png" height="160px"></img> จากรูป กำหนดให้ l∥m แล้ว x มีค่าเท่ากับข้อใด `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '160°'},{
                    choicevalue:'b',choiceimg:false,choicetext: '165°'},{
                    choicevalue:'c',choiceimg:false,choicetext: '170°'},{
                    choicevalue:'d',choiceimg:false,choicetext: '175°'}
                ],
                Answer: 'd',
                AnswerDescription:`  
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad18-1.png" height="150px"></img>
                <br></br><tab></tab>จะได้ว่า x=P+Q
                <br></br><tab></tab>เนื่องจาก Q เป็นมุมแย้งกับมุม 30° ดังนั้น Q=30°
                <br></br><tab></tab>เนื่องจาก R เป็นมุมแย้งกับ 35° ดังนั้น R=35°
                <br></br><tab></tab>เมื่อ P=180°-35°=145° 
                <br></br><tab></tab>ดังนั้น x=P+Q=145°+30°=175°

                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 19,
                question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq19.png" height="180px"></img><br></br> จาก x มีค่าเท่ากับข้อใด  `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '60°'},{
                    choicevalue:'b',choiceimg:false,choicetext: '61°'},{
                    choicevalue:'c',choiceimg:false,choicetext: '62°'},{
                    choicevalue:'d',choiceimg:false,choicetext: '63°'}
                ],
                Answer: 'b',
                AnswerDescription:`<tab></tab>จากทฤษฎีบท : รูปสี่เหลี่ยมใดๆ ที่แนบอยู่ในวงกลมผลบวกของขนาดของมุมตรงข้ามเท่ากับ 180° 
                <br></br><tab></tab>จะได้ว่า (2x - 3) + x=180°
                <br></br><2tab></2tab>3x - 3=180°
                <br></br><2tab></2tab>3x=183°
                <br></br><tab></tab>ดังนั้น	 x=<fraction> 183° | 3 </fraction> =61°
            `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 20,
                question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq20.png" height="180px"></img><br></br> จากรูป ข้อใดถูกต้อง `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'y - x=70°'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'x + y=180°'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'y=125°'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                ],
                Answer: 'd',
                AnswerDescription:` <br></br><tab></tab>จากทฤษฎีบท : มุมที่จุดศูนย์กลางของวงกลมจะมีขนาดเป็นสองเท่าของขนาดของมุมในส่วนโค้งของวงกลมที่รองรับด้วยส่วนโค้งเดียวกัน
                <br></br><3tab></3tab> <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad20-1.png" height="90px"></img>
                <br></br><tab></tab>จะได้ ∠x= <fraction> 110° | 2 </fraction> =55°  <br></br>
                <br></br><tab></tab>จากทฤษฎีบท : รูปสี่เหลี่ยมใดๆ ที่แนบอยู่ในวงกลมผลบวกของขนาดของมุมตรงข้ามเท่ากับ 180° 
	            <br></br><tab></tab>เนื่องจาก	∠x เป็นมุมตรงข้าม ∠y  จะได้ว่า	∠x+∠y=180°
				<br></br><3tab></3tab>55°+∠y=180°	
				<br></br><3tab></3tab>∠y=180° - 55°
				<br></br><3tab></3tab>∠y=125°
                 `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
             /*----------  linked question id 21-22  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: false, //false or true
            linkedquestion:[
                {   id: 21,
                    //attachimglink:`https://jknowledgetutor.com/attachfile/netsat/mathematics/mq21.png`,
                    question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq21.png" height="200px"></img><br></br> จากรูป แสดงรูปพีระมิดที่ฐานเป็นรูปสี่เหลี่ยมจัตุรัสซึ่งมีทุก ๆ ขอบยาว 4 เซนติเมตร แล้วพื้นที่ผิวทั้งหมดของพีระมิดรูปนี้เป็นเท่าใด `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '16 เซนติเมตร'},{
                        choicevalue:'b',choiceimg:false,choicetext: '64 เซนติเมตร'},{
                        choicevalue:'c',choiceimg:true,imgheight:'18px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc21-3.png'},{
                        choicevalue:'d',choiceimg:true,imgheight:'17px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc21-4.png'}
                    ],
                    Answer: 'c',
                    AnswerDescription:` พื้นที่ผิวทั้งหมด หาได้จาก พื้นที่ฐาน + พื้นที่ผิวข้างทั้งหมด
                    <br></br><tab></tab>วิเคราะห์พื้นที่รูปสามเหลี่ยมด้านข้าง
                    <br></br><tab></tab>จะได้ว่า
                    <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad21-1.png" width="90%"></img>
                    <br></br><tab></tab>จากทฤษฎีบทพีทาโกรัส	จะได้ว่า 	x<sup>2</sup>=4<sup>2</sup>-2<sup>2</sup>
                    <br></br><3tab></3tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad21-2.png" height="25px"></img>
                    <br></br><tab></tab>ดังนั้น	พื้นที่ผิวทั้งหมด	= (4×4)+4(<fraction> 1 | 2 </fraction>×4×2√3)
                    <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad21-3.png" height="25px"></img>
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Geometrical Figures',
                },
                {   id: 22,
                    question: `จากข้อก่อนหน้า ปริมาตรของพีระมิดนี้เท่ากับกี่ลูกบาศก์เซนติเมตร  `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '32 ลูกบาศก์เซนติเมตร'},{
                        choicevalue:'b',choiceimg:true,imgheight:'30px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc22-2.png'},{
                        choicevalue:'c',choiceimg:false,choicetext: '64 ลูกบาศก์เซนติเมตร'},{
                        choicevalue:'d',choiceimg:true,imgheight:'30px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc22-4.png'}
                    ],
                    Answer: 'b',
                    AnswerDescription:` <tab></tab>จากสูตรการหาปริมาตรของพีระมิด	= <fraction> 1 | 3 </fraction> ×พื้นที่ฐาน×สูง
                    <br></br><tab></tab>จากของ (21) จะสามารถหาส่วนสูงได้ ดังนี้
                    <br></br><tab></tab> <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad22-1.png" width="90%"></img>
                    <br></br><tab></tab>จากทฤษฎีบทพีทาโกรัส	จะได้ว่า 
                    <br></br><tab></tab> <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad22-2.png" height="50px"></img>
                    <br></br>ดังนั้น	ปริมาตรของพีระมิด	=<fraction> 1 | 3 </fraction> × พื่นที่ฐาน×สูง  <br></br>
					                      =<fraction> 1 | 3 </fraction> ×(4×4)×2√2
                    <br></br><3tab></3tab> <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad22-3.png" height="40px"></img>
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Geometrical Figures',
                },
            ]
        },

              /*----------  linked question id 23-24  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: false, //false or true
            linkedquestion:[
                {   id: 23,
                    //attachimglink:`https://jknowledgetutor.com/attachfile/netsat/mathematics/mq23.png`,
                    question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq23.png" height="150px"></img><br></br> หลังคาโรงเรียนเป็นรูปทรงโค้งครึ่งวงกลม ซึ่งกว้าง 14 เมตร ยาว 20 เมตร ดังภาพ ถามว่าหลังคานี้มีปริมาตรเท่าใด (กำหนดให้ π=22/7) `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '280 ลูกบาศก์เมตร'},{
                        choicevalue:'b',choiceimg:false,choicetext: '880 ลูกบาศก์เมตร'},{
                        choicevalue:'c',choiceimg:false,choicetext: '1450 ลูกบาศก์เมตร'},{
                        choicevalue:'d',choiceimg:false,choicetext: '1540 ลูกบาศก์เมตร '}
                      ],
                    Answer: 'd',
                    AnswerDescription:`ปริมาตรของทรงครึ่งกระบอก	= พื้นที่ฐาน×สูง
                    <br></br><3tab></3tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad23-1.png" height="70px"></img>
                    <br></br><3tab></3tab>=22 × 7 × 10 = 1,540 ลูกบาศก์เมตร
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Geometrical Figures',
                },
                {   id: 24,
                    question: `จากข้อก่อนหน้า ถ้าต้องการทาสีหลังคานี้ด้านบนและด้านข้างทั้งหมด โดยที่ช่างทาสีคิดค่าทาสีตารางเมตรละ 10 บาท จะต้องจ่ายค่าจ้างช่างทาสีเท่าไหร่ (กำหนดให้ π=22/7)  `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '594 บาท'},{
                        choicevalue:'b',choiceimg:false,choicetext: '2,860 บาท'},{
                        choicevalue:'c',choiceimg:false,choicetext: '4,400 บาท'},{
                        choicevalue:'d',choiceimg:false,choicetext: '5,940 บาท'}
                      ],
                    Answer: 'd',
                    AnswerDescription:` พื้นที่ผิวทั้งด้านบนและด้านข้างทั้งหมด = พื้นที่ผิวหน้าตัด + พื้นที่ผิวข้าง 
                    <br></br><tab></tab>=πr<sup>2</sup> + πrh
					<br></br><tab></tab>=(<fraction> 22 | 7 </fraction>×7<sup>2</sup> ) + (<fraction> 22 | 7 </fraction>×7×20)<br></br> 	
					<br></br><tab></tab>=154 + 440=594 ตารางเมตร
	                <br></br><tab></tab>ดังนั้น	ต้องจ่ายค่าทาสีทั้งหมด 594×10=5,940 บาท	
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Geometrical Figures',
                },
            ]
        },
            {   id: 25,
                question: 'ถ้า cotθ=-<fraction> 12 | 5 </fraction> , 90°<θ<180° แล้ว sinθ มีค่าเท่ากับเท่าใด ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '5/13'},{
                    choicevalue:'b',choiceimg:false,choicetext: '-5/13'},{
                    choicevalue:'c',choiceimg:false,choicetext: '12/13'},{
                    choicevalue:'d',choiceimg:false,choicetext: '-12/13'}
                  ],
                Answer: 'a',
                AnswerDescription:`<tab></tab>จาก 90°<θ<180° และ cotθ=-12/5 แสดงว่าตกที่ Q<sub>2</sub>	
	            <br></br><tab></tab>จะได้ว่า cotθ= <fraction> ชิด | ข้าม </fraction> = <fraction> 12 | 5 </fraction> ดังภาพ
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad25-1.png" height="180px"></img>
                <br></br><tab></tab>หา (AC) จากทฤษฎีพีทาโกรัส 
                <br></br><tab></tab>จะได้
                <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad25-2.png" height="22px"></img>
                <br></br><tab></tab>นั่นคือ	
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad25-3.png" height="22px"></img>
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad25-4.png" height="180px"></img>
                <br></br><tab></tab>จะได้ว่า sinA= <fraction> ข้าม | ฉาก </fraction> = <fraction> 5 | 13 </fraction> <br></br>
	            <br></br><tab></tab>และจากที่ว่า A ตกที่ Q<sub>2</sub> ค่า sin ต้องเป็นบวก <br></br>
	            <br></br><tab></tab> ดังนั้น sinA=<fraction> 5 | 13 </fraction><br></br>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 26,
                question: 'กำหนดให้ π<A< <fraction> 3 | 2 </fraction> π, sinA=-<fraction> 3 | 5 </fraction>  จงหาค่าของ sin2A',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '-<fraction> 24 | 25 </fraction>'},{
                    choicevalue:'b',choiceimg:false,choicetext: '<fraction> 24 | 25 </fraction>'},{
                    choicevalue:'c',choiceimg:false,choicetext: '-<fraction> 25 | 24 </fraction>'},{
                    choicevalue:'d',choiceimg:false,choicetext: '<fraction> 25 | 24 </fraction>'}
                  ],
                Answer: 'b',
                AnswerDescription:`<tab></tab>จาก sinA=-<fraction> 3 | 5 </fraction>  และ  π<A<2π แสดงว่าตกที่ Q<sub>3</sub> <br></br>
                <br></br><tab></tab>จะได้ว่า sinA =<fraction> ข้าม | ฉาก </fraction> = <fraction> 3 | 5 </fraction>  <br></br>
                <br></br><tab></tab>และหาด้านที่เหลือโดยใช้ทฤษฎีพีทาโกรัส ดังภาพ
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad26-1.png" height="160px"></img>
                <br></br><tab></tab>หา (AC) จากกทฤษฎีพีทาโกรัส 
	            <br></br><tab></tab>จะได้
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad26-2.png" height="25px"></img>
                <br></br><tab></tab>นั่นคือ
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad26-3.png" height="25px"></img>
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad26-4.png" height="160px"></img>
                <br></br><tab></tab>จะได้ว่า cosA=<fraction> ชิด | ฉาก </fraction>=<fraction> 4 | 5 </fraction> <br></br>
                <br></br><tab></tab>และจากที่ว่า A ตกที่ Q<sub>3</sub> ค่า cos ต้องติดลบ
                <br></br><tab></tab>ดังนั้น cosθ=-<fraction> 4 | 5 </fraction><br></br>
                <br></br><2tab></2tab>จาก sin2A=2sinAcosA
                <br></br><tab></tab>จะได้ 2(-<fraction> 3 | 5 </fraction>)(-<fraction> 4 | 5 </fraction>) = <fraction> 24 | 25 </fraction> <br></br>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 27,
                question: 'สำหรับ △ABC ที่มี AB=4,AC=5 และ ∠A=120° แล้ว BC ยาวเท่าไร ',
                choice :[{
                    choicevalue:'a',choiceimg:true,imgheight:'20px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc27-1.png'},{
                    choicevalue:'b',choiceimg:true,imgheight:'20px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc27-2.png'},{
                    choicevalue:'c',choiceimg:true,imgheight:'20px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc27-3.png'},{
                    choicevalue:'d',choiceimg:true,imgheight:'20px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc27-4.png'}
                ],
                Answer: 'b',
                AnswerDescription:`จากโจทย์สามารถวาดภาพได้ ดังนี้
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad27-1.png" width="90%"></img>
                <br></br><tab></tab>จากกฎของ cosine
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad27-2.png" width="90%"></img>
                <br></br><tab></tab>จะได้	x<sup>2</sup>=3<sup>2</sup>+6<sup>2</sup>-2(3)(6)cos120°
                <br></br><tab></tab>x<sup>2</sup>=9+36-36(-<fraction> 1 | 2 </fraction>) <br></br>
		        <br></br><tab></tab>x<sup>2</sup>=9+36+18=63
	            <br></br><tab></tab>ดังนั้น	x=√63=3√7
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 28,
                question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq28.png" height="300px"></img><br></br> จากรูปสามเหลี่ยม แล้ว x มีค่าเท่ากับข้อใด `,
                choice :[{
                    choicevalue:'a',choiceimg:true,imgheight:'21px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc28-1.png'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2'},{
                    choicevalue:'c',choiceimg:true,imgheight:'20px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc28-3.png'},{
                    choicevalue:'d',choiceimg:false,choicetext: '3'}
                ],
                Answer: 'a',
                AnswerDescription:` <tab></tab> จากกฎของ sine
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad28-1.png" width="90%"></img>
                <br></br><tab></tab>จะได้	
                <br></br><tab></tab><fraction> x | sin45° </fraction>=<fraction> 4 | sin30° </fraction> <br></br>
			    <br></br><tab></tab><fraction> x | √2/2 </fraction>=<fraction> 4 | 1/2 </fraction> <br></br>
                <br></br><tab></tab>x=8×<fraction> √2 | 2 </fraction>= 4√2
                 `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 29,
                question: 'กำหนดให้ a และ b เป็นจำนวนจริงที่สอดคล้องกับสมการ (2 + 3i)<sup>2</sup> - (1 - 3i)=a + bi เมื่อ i เป็นหน่วยจินตภาพ ข้อใดถูกต้อง ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'a + b=-7'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'a - b=-21'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ab=90'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                  ],
                Answer: 'b',
                AnswerDescription:`(2 + 3i)<sup>2</sup> - (1 - 3i)=a + bi 
                <br></br><tab></tab>จะได้ว่า (2 + 3i)(2 + 3i) - (1 - 3i)=a + bi	
				<br></br><tab></tab>-5 + 12i - 1 + 3i=a + bi	
				<br></br><tab></tab>-6 + 15i=a + bi
	            <br></br><tab></tab>ดังนั้น	a=-6 และ b=15
	            <br></br>วิเคราะห์	
                <br></br><tab></tab>[1.] a + b= - 6 + 15=7≠-7	ผิด
                <br></br><tab></tab>[2.] a - b=-6 - 15=-21 	ถูก
                <br></br><tab></tab>[3.] ab=(-6)(15)=-90≠90            
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 30,
                question: 'เมื่อ i เป็นหน่วยจินตภาพ ถ้า<img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq30.png" height="35px"></img> แล้ว |z| มีค่าเท่ากับเท่าใด ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1'},{
                    choicevalue:'b',choiceimg:false,choicetext: '√2	'},{
                    choicevalue:'c',choiceimg:false,choicetext: '√3	'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4'}
                  ],
                Answer: 'c',
                AnswerDescription:` จาก
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-1.png" height="40px"></img>
                <br></br>จะได้ 
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-2.png" height="45px"></img>
                <br></br><tab></tab>ใช้วิธีการสังยุค (ทางคณิตศาสตร์ไม่นิยมให้ตัวส่วนติด i) จะได้ว่า
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-3.png" height="40px"></img>
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-4.png" height="40px"></img>
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-5.png" height="40px"></img>
                <br></br><tab></tab>นั่นคือ
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-6.png" height="40px"></img>
                <br></br><tab></tab>ดังนั้น
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad30-7.png" height="45px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 31,
                question: 'เมื่อ i เป็นหน่วยจินตภาพ <br></br>แล้ว<img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq31.png" height="36px"></img> เท่ากับเท่าใด ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '-1'},{
                    choicevalue:'b',choiceimg:false,choicetext: '1'},{
                    choicevalue:'c',choiceimg:false,choicetext: '-i'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'i'}
                  ],
                Answer: 'a',
                AnswerDescription:` <tab></tab>Trick	n หารด้วย 4 ลงตัว หรือ เหลือเศษ 0 จะได้ i^0=1
                <br></br><tab></tab>n หารด้วย 4 เหลือเศษ 1 จะได้ i<sup>1</sup>=i		
                <br></br><tab></tab>n หารด้วย 4 เหลือเศษ 2 จะได้ i<sup>2</sup>=-1	
                <br></br><tab></tab>n หารด้วย 4 เหลือเศษ 3 จะได้ i<sup>3</sup>=-i	
                <br></br><tab></tab>จาก
                <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad31-1.png" height="40px"></img>
                <br></br><tab></tab>จะได้	77 หารด้วย 4 เหลือเศษ 1 จะได้ i<sup>1</sup>=i
		        <br></br><tab></tab>88 หารด้วย 4 ลงตัว หรือ เหลือเศษ 0 จะได้ i<sup>0</sup>=1
		        <br></br><tab></tab>22 หารด้วย 4 เหลือเศษ 2 จะได้ i<sup>2</sup>=-1
		        <br></br><tab></tab>11 หารด้วย 4 เหลือเศษ 3 จะได้ i<sup>3</sup>=-i	
	            <br></br><tab></tab>ดังนั้น
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad31-2.png" height="80px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 32,
                question: 'กำหนดให้  z<sup>1</sup>=2(cos50°+isin50°) , z<sup>2</sup>=2(cos40°+isin40°)  จงหาค่าของ <img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/mq32-2.png" height="40px"></img> ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '-1'},{
                    choicevalue:'b',choiceimg:false,choicetext: '1'},{
                    choicevalue:'c',choiceimg:false,choicetext: '-i'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'i'}
                  ],
                Answer: 'd',
                AnswerDescription:`<tab></tab>จาก	z<sub>1</sub>=2(cos50°+isin50°)	จะได้	z<sub>1</sub>=2cis50°	
                <br></br><tab></tab>z<sub>2</sub>=2(cos40°+isin40°)	 จะได้	z<sub>1</sub>=2cis40°
                <br></br><tab></tab>จะได้
                <br></br><tab></tab>Trick	สังยุคของรูปเชิงขั้ว ให้เปลี่ยน θ เป็นลบของตัวเดิม
	            <br></br><tab></tab>จะได้
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad32-1.png" height="50px"></img>
                <br></br><tab></tab>จากทฤษฎี	กำหนดให้ Z<sub>1</sub>=r<sub>1</sub> cisθ<sub>1</sub> และ Z<sub>2</sub>=r<sub>2</sub> cisθ<sub>2</sub>
			    <br></br><tab></tab>จะได้	Z<sub>1</sub>Z<sub>2</sub>=r<sub>1</sub>r<sub>2</sub>cis(θ<sub>1</sub>+θ<sub>2</sub>)
			    <br></br><tab></tab>และ	Z<sup>n</sup>=r<sup>n</sup>cis(nθ)
	            <br></br><tab></tab>จะได้	
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad31-2.png" height="80px"></img>
                <br></br><tab></tab>=cis(-50°-40°)=cis(-90°)=cis270°
	            <br></br><tab></tab>นั่นคือ	cis270°=cos270°+isin270°
			    <br></br><2tab></2tab>=0+i(1)=i
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Geometrical Figures',
            },
            {   id: 33,
                question: `ถ้ากราฟฟังก์ชันเส้นตรง y=f(x) ขนานกับกราฟเส้นตรง 2x - 4y + 3=0 และผ่านจุด (3,-4) แล้วฟังก์ชัน y=f(x) คือข้อใด `,
                choice :[{
                    choicevalue:'a',choiceimg:true,imgheight:'30px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc33-1.png'},{
                    choicevalue:'b',choiceimg:true,imgheight:'30px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc33-2.png'},{
                    choicevalue:'c',choiceimg:true,imgheight:'30px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc33-3.png'},{
                    choicevalue:'d',choiceimg:true,imgheight:'30px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/mathematics/mc33-4.png'}
                ],
                Answer: 'a',
                AnswerDescription:`จาก  l<sub>1</sub>∥l<sub>2</sub>	จะได้ว่า 	m<sub>1</sub>=m<sub>2</sub> 
                <br></br>จากเส้นตรง l<sub>1</sub>  ; 	2x - 4y + 3=0 	
                <br></br>มีความชันเป็น 
                <br></br>m<sub>1</sub>=-<fraction> A | B </fraction>=-<fraction> 2 | (-4) </fraction>= <fraction> 2 | 4 </fraction>=<fraction> 1 | 2 </fraction> <br></br>
                <br></br>นั่นคือ	<sub>1</sub>=m<sub>2</sub>=<fraction> 1 | 2 </fraction> <br></br>
                <br></br>จากสมการการสร้างสมการเส้นตรง y - y<sub>1</sub>=m(x - x<sub>1</sub> )
                <br></br>จะได้	<tab></tab>		y - (-4)=<fraction> 1 | 2 </fraction>(x - 3) <br></br>
                <br></br>นั่นคือ	 <tab></tab>     y + 4=<fraction> x | 2 </fraction>-<fraction> 3 | 2 </fraction> <br></br>
                <br></br><2tab></2tab>y=<fraction> x | 2 </fraction> - <fraction> 3 | 2 </fraction>-4	<br></br>
                <br></br><2tab></2tab>y=<fraction> x | 2 </fraction> - <fraction> 11 | 2 </fraction>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Functions',
            },
            {   id: 34,
                question: 'โยนเหรียญ 1 อัน แล้วทอดลูกเต๋า 1ลูก จงหาความน่าจะเป็นที่เหรียญขึ้นหน้าอะไรก็ได้ แต่ลูกเต๋าได้แต้มเป็นจำนวนเฉพาะ ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1/2'},{
                    choicevalue:'b',choiceimg:false,choicetext: '1/3'},{
                    choicevalue:'c',choiceimg:false,choicetext: '1/4'},{
                    choicevalue:'d',choiceimg:false,choicetext: '1/5'}
                  ],
                Answer: 'a',
                AnswerDescription:`จะได้	n(S)=6×2=12   **เพราะลูกเต๋ามี 6 หน้า และ เหรียญมี 2 หน้า
                <br></br><tab></tab>n(E)=(H,2)  (H,3)  (H,5)  (T,2)  (T,3)  (T,5)=6
                <br></br>ดังนั้น	ความน่าจะเป็น =P(E)=(n(E))/(n(S))=<fraction> 6 | 12 </fraction>=<fraction> 1 | 2 </fraction>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Data handling',
            },
            {   id: 35,
                question: 'ครูแจกสมุดที่เหมือนกัน5 เล่ม ให้นักเรียน 3 คน โดยมีบางคนอาจจะไม่ได้รับ ครูจะสามารถแจกได้ทั้งหมดกี่วิธี ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '14 วิธี'},{
                    choicevalue:'b',choiceimg:false,choicetext: '21 วิธี'},{
                    choicevalue:'c',choiceimg:false,choicetext: '28 วิธี'},{
                    choicevalue:'d',choiceimg:false,choicetext: '35 วิธี'}
                  ],
                Answer: 'b',
                AnswerDescription:` Trick	แจกของ n สิ่งให้คน r คน โดยอาจจะมีบางคนไม่ได้ 
                <br></br><tab></tab>จะทำได้ทั้งหมด (<sup>n + r - 1</sup><sub>r - 1</sub>) วิธี
                <br></br><tab></tab>จะได้	ครูแจกสมุดที่เหมือนกัน 5 เล่ม ให้นักเรียน 3 คน โดยมีบางคนอาจจะไม่ได้รับ      
                <br></br><tab></tab>=(<sup>5 + 3 - 1</sup><sub>3 - 1</sub>)  =(<sup>7</sup><sub>2</sub>)=<fraction> 7! | (7 - 2)!2! </fraction> <br></br>
                <br></br><tab></tab>= <fraction> 7! | 5!2!</fraction> = <fraction> 7×6 | 2×1</fraction>=21 วิธี
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Data handling',
            },
            {   id: 36,
                question: 'แอนกดหมายเลขโทรศัพท์ 7 ตัวอย่างสุ่ม (ซ้ำเลขได้) จงหาความน่าจะเป็นที่หมายเลขโทรศัพท์ที่จะหมุนขึ้นต้นด้วย 099 ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1'},{
                    choicevalue:'b',choiceimg:false,choicetext: '1/10'},{
                    choicevalue:'c',choiceimg:false,choicetext: '1/100'},{
                    choicevalue:'d',choiceimg:false,choicetext: '1/1000'}
                  ],
                Answer: 'd',
                AnswerDescription:`<br></br><tab></tab>จะได้ n(S)=10×10×10×10×10×10×10=10<sup>7</sup>
                <br></br><tab></tab>n(E)=1×1×1×10×10×10×10=10<sup>4</sup>
                <br></br><tab></tab>ดังนั้น	ความน่าจะเป็น 
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/mathematics/ad36-1.png" height="85px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Data handling',
            },
            {   id: 37,
                question: 'มีธงชาติประเทศในอาเซียน 10 ประเทศ นำมาจัดประดับรอบวงกลม โดยไม่ให้ธงประเทศไทยติดกับธงประเทศเวียดนาม จะมีจำนวนวิธีในการจัดกี่วิธี ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '5∙6! วิธี'},{
                    choicevalue:'b',choiceimg:false,choicetext: '6∙7! วิธี'},{
                    choicevalue:'c',choiceimg:false,choicetext: '7∙8! วิธี'},{
                    choicevalue:'d',choiceimg:false,choicetext: '8∙9! วิธี'}
                ],
                Answer: 'c',
                AnswerDescription:`คิดแบบวิธีการหักออก
                <br></br><tab></tab>จะได้ว่าธงชาติไทยไม่ติดกับธงชาติเวียดนาม = โอกาสทั้งหมด – ธงชาติไทยติดกับธงชาติเวียดนาม
                <br></br><tab></tab>โอกาสทั้งหมด 	=(10 - 1)!=9! วิธี
                <br></br><tab></tab>โอกาสที่ธงชาติไทยติดกับธงชาติเวียดนาม	=(9 - 1)!2!=8!2!=2∙8! วิธี
                <br></br><tab></tab>ดังนั้น ธงชาติไทยไม่ติดกับธงชาติเวียดนาม = โอกาสทั้งหมด – ธงชาติไทยติดกับธงชาติเวียดนาม
                <br></br><2tab></2tab>=9! - 2∙8!
                <br></br><2tab></2tab>=9∙8! - 2∙8!
                <br></br><2tab></2tab>=8!(9 - 2)	
                <br></br><2tab></2tab>=7∙8! วิธี
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Data handling',
            },
            {   id: 38,
                question: 'ข้อมูลชุดหนึ่งประกอบไปด้วย 10,11,15,17,18,21,26,27,<br></br>32,33,35 ,39,40,43,44,45,46,49,51 ข้อใดต่อไปนี้ถูกต้อง ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'มัธยฐานของข้อมูลชุดนี้คือ 33'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ควอไทล์ที่ 1 ของข้อมูลชุดนี้คือ 18'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'เดไซล์ที่ 5 ของข้อมูลชุดนี้คือ 33'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                  ],
                Answer: 'd',
                AnswerDescription:`  จากข้อมูล 10,11,15,17,18,21,26,27,<br></br>
                32,33,35,39,40,43,44,45,46,49,51 
                <br></br><tab></tab>วิเคราะห์ 
                <br></br>[1.] มัธยฐาน	ตำแหน่งของ med=<fraction> (N + 1) | 2 </fraction>= <fraction> (19 + 1) | 2 </fraction>=10 <br></br>
                <br></br><tab></tab>ตำแหน่งที่ 10 ของข้อมูล คือ 33	<tab></tab>ถูก
                <br></br>[2.] ควอไทล์ที่ 1 	ตำแหน่งของ Q<sub>1</sub>=<fraction> 1  | 4 </fraction> (N + 1)=<fraction> 1 | 4 </fraction>(19 + 1)=5 <br></br>
                <br></br><tab></tab>ตำแหน่งที่ 5 ของข้อมูล คือ 18	<tab></tab>ถูก
                <br></br>[3.] เดไซล์ที่ 5 ตำแหน่งของ D<sub>5</sub>=<fraction> 5 | 10 </fraction> (N + 1)= <fraction> 5 | 10 </fraction> (19 + 1)=10  <br></br>
                <br></br><tab></tab>ตำแหน่งที่ 10 ของข้อมูล คือ 33	<tab></tab>ถูก
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Data handling',
            },
            /*----------  linked question id 39-40  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: false, //false or true
            linkedquestion:[
                {   id: 39,
                    question: 'จากการสำรวจน้ำหนักของนักเรียนระดับชั้นประถมศึกษาปีที่ 1 จำนวน 10คน มีดังนี้ 20,22,18,25,15,25,20,21,26,18 ข้อใดถูกต้อง',
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ค่าเฉลี่ยเลขคณิตของข้อมูลชุดนี้คือ 21'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ฐานนิยมของข้อมูลชุดนี้คือ 18,20 และ 25 '},{
                        choicevalue:'c',choiceimg:false,choicetext: 'เดไซล์ที่ 5 ของข้อมูลชุดนี้คือ 33'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                      ],
                    Answer: 'a',
                    AnswerDescription:`<br></br>ประกอบด้วย	<overline>x</overline> ค่าเฉลี่ยเลขคณิต
                    <br></br><tab></tab>med คือ ค่ามัธยฐาน (ตัวที่อยู่ตรงกลาง)
                    <br></br><tab></tab>mod คือ ค่าฐานนิยม (ตัวที่ซ้ำกันมากที่สุด)
                    <br></br>ดังนี้	
                    <br></br>[1.] ค่าเฉลี่ยเลขคณิต	<overline>x</overline> = <fraction> 15 + 18 + 18 + 20 + 20 + 21 + 22 + 25 + 25 + 26 | 10 </fraction> <br></br>
                    <br></br><tab></tab>=<fraction> 210 | 10 </fraction> =21 <tab></tab> ถูก  <br></br>
                    <br></br>[2.] ฐานนิยม ไม่มีฐานนิยม เนื่องจากมีข้อมูลที่มากที่สุดมากว่า 2 ค่า <tab></tab> ผิด
                    <br></br>[3.] มัธยฐาน med= <fraction> 20 + 21 | 2 </fraction>=20.5 <tab></tab> ผิด
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                },
                {   id: 40,
                    question: 'จากข้อก่อนหน้า ถ้าหากมีนักเรียนมาเพิ่ม 1 คน นำหนัก 25 กิโลกรัม ข้อใดถูกต้อง ',
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ค่าเฉลี่ยเลขคณิตของข้อมูลเพิ่มขึ้น '},{
                        choicevalue:'b',choiceimg:false,choicetext: 'มัธยฐานของข้อมูลลดลง'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ฐานนิยมของข้อมูลไม่เปลี่ยน'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ถูกต้องทุกข้อ'}
                      ],
                    Answer: 'a',
                    AnswerDescription:`<br></br><tab></tab>จากโจทย์ ถ้าหากมีนักเรียนมาเพิ่ม 1 คน นำหนัก 25 กิโลกรัม
                    <br></br><tab></tab>ทำให้ข้อมูลเป็น 15,18,18,20,20,21,22,25,25,25,26
                    <br></br><tab></tab>จะได้ ค่าเฉลี่ยเลขคณิต		
                    <br></br><tab></tab><overline>x</overline> = <fraction> 210 + 25 | 10 + 1 </fraction>=<fraction> 235 | 11 </fraction>=21.36 <br></br>
                    <br></br><tab></tab>ค่าฐานนิยม <tab></tab> mod=25
                    <br></br><tab></tab>ค่ามัธยฐาน <tab></tab> med=21
                    <br></br>วิเคราะห์	
                    <br></br>[1.] ค่าเฉลี่ยเลขคณิตของข้อมูลเพิ่มขึ้น	<tab></tab> ถูก 
                    <br></br>[2.] มัธยฐานของข้อมูลลดลง <tab></tab> ผิด
                    <br></br>[3.] ฐานนิยมของข้อมูลไม่เปลี่ยน <tab></tab> ผิด
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                },
            ]
        },
       ]
      }