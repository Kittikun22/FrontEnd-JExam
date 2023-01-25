//Reserved Word & sign `` |   
//questions[i].length < 10
//choice not be same

export const chemistryexam = {
    questioninfo : [
        { Title:'NETSAT ด้านเคมี',
        Description_line_i:'ความฉลาดรู้เฉพาะด้าน 202 ด้านเคมี',
        Description_line_ii:'-Competency การทำนายผลการทดลอง การใช้ประจักษ์พยานทางวิทยาศาสตร์ การแปลความหมายข้อมูลจากตารางหรือกราฟ การอธิบายและการให้เหตุผลทางวิทยาศาสตร์ การลงข้อมูลสรุป การสร้างแบบจำลอง การแก้ปัญหา การประยุกต์ใช้ความรู้ ',
        Description_line_iii:'-Interactions (อันตรกิริยา) โครงสร้างอะตอมและตารางธาตุ พันธะระหว่างโมเลกุล แก๊สและสมบัติของแก๊ส สารประกอบอินทรีย์ พอลิเมอร์',
        Description_line_iv:'-Energy (พลังงาน) ปฏิกิริยาเคมี และการเปลี่ยนแปลงพลังงาน (สมดุลเคมี อัตราการเกิด ปฏิกิริยาเคมี กรด-เบส ไฟฟ้าเคมี)',
        Description_line_v:'-Matter (สสาร) สถานะของสาร สารละลาย การเปลี่ยนแปลงทางเคมี ปริมาณสารสัมพันธ์',

        NumberofQuestions:30,
        Duration:60, //min
        //define liked question by array order 
        Linkedquestionid : [3], //index must be order asc
        Category:{'Conversation':3,'Grammar':2,'Reading':3,'Writing':1,'Error':2},
        //numberofquestionincategory:[3,2,3,3]
        }],
    questions: [
        {   id: 1,
            question: ` ที่ 25 ֯ C สาร ก , ข และ ค อยู่ในสภาพแก๊ส ของเหลว และของแข็ง <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq1.png" height="115px"></img><br></br> ตามลำดับ จุดเดือดและจุดหลอมเหลวของสารทั้ง 3 ควรเป็นข้อใด `,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                choicevalue:'d',choiceimg:false,choicetext: '4)'}
            ],
            Answer: 'c',
            AnswerDescription:`<tab></tab>ที่อุณหภูมิห้อง 25 ֯ C 
			<br></br><tab></tab>แก๊ส ก ควรมีจุดเดือดต่ำกว่า 25 ֯ C
			<br></br><tab></tab>ของเหลว ข ควรมีจุดหลอมเหลวที่สูงกว่า 25 ֯ C และมีจุดเดือดต่ำกว่า 25 ֯ C
			<br></br><tab></tab>ของแข็ง ค ควรมีจุดหลอมเหลวต่ำกว่า 25 ֯ C
            `,
            AnswerDescriptionAttachImg:'',
            Category: 'Numbers and Mathematical',
        },
        {   id: 2,
            question: ` รูปต่อไปนี้ <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq2.png" height="250px"></img><br></br> แสดงการจัดเรียงตัวของโมเลกุลของสารที่ความดัน 1 atm แต่อุณหภูมิต่างกัน รูปดังกล่าวแสดงการจัดเรียงตัวของโมเลกุลของสารใด `,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                choicevalue:'d',choiceimg:false,choicetext: '4)'}
            ],
                Answer: 'c',
                AnswerDescription:`<tab></tab>ที่ -100 ֯ C มีลักษณะการจัดเรียงอนุภาค เหมือนสถานะแก๊ส
				<br></br><tab></tab>ที่ -150 ֯ C มีลักษณะการจัดเรียงอนุภาค เหมือนสถานะของเหลว 
				<br></br><tab></tab>ดังนั้นสรุปได้ว่า จุดหลอมเหลวควรต่ำกว่า -150 ֯ C และจุดเดือดต่ำกว่า -100 ֯ C
 `,
                AnswerDescriptionAttachImg:'',
                Category: 'Conversation'
            },
            {   id: 3,
                question: `ของแข็งมีรูปร่างและปริมาตรคงที่ สามารถอธิบายด้วยเหตุผลข้อใด`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'โมเลกุลของของแข็งไม่มีพลังงานจลน์'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'โมเลกุลของของแข็งเคลื่อนที่ไม่ได้แต่สั่นสะเทือนได้'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'โมเลกุลเรียงตัวอย่างเป็นระเบียบจนไม่มีช่องว่างระหว่างโมเลกุล'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ที่ภาวะปกติจะมีแรงยึดเหนี่ยวระหว่างโมเลกุลมากกว่าพลังงานจลน์ของโมเลกุล'}
                ],
                    Answer: 'b',
                    AnswerDescription:`ของแข็ง คือ สารที่มีแรงยึดเหนี่ยวระหว่างอนุภาคสูงมาก ทำให้อนุภาคอยู่ชิดกันมาก จึงมีรูปร่างและปริมาตรคงที่	โดยไม่ เปลี่ยนแปลงไปตามรูปร่างของภาชนะที่บรรจุ โดยโมเลกุลของของแข็งเคลื่อนที่ไม่ได้แต่สั่นสะเทือนได้`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
                },
            /*----------  linked question id 4-5  ------------*/
                {   numberoflinkedquestion: 2,
                    shufflequestion: false, //false or true
                    description_line_i:`คำชี้แจง ข้อมูลต่อไปนี้ใช้ตอบคำถาม 2 ด้านล่างนี้ เมื่อผสมสารละลาย NaOH เข้มขัน 0.4 โมล/ลิตร  จำนวน 30 ลูกบาศก์เซนติเมตร กับสารละลาย NaOH เข้มข้น 0.3 โมล/ลิตร จำนวน 20 ลูกบาศก์เซนติเมตร`,
                    linkedquestion:[
                        {   id: 4,
                            question: 'สารละลายผสมมีความเข้มข้นกี่โมล/ลิตร ',
                            choice :[{
                                choicevalue:'a',choiceimg:false,choicetext: '0.35'},{
                                choicevalue:'b',choiceimg:false,choicetext: '0.36'},{
                                choicevalue:'c',choiceimg:false,choicetext: '0.70'},{
                                choicevalue:'d',choiceimg:false,choicetext: '0.72'}
                            ],
                            Answer: 'b',
                            AnswerDescription:`<tab></tab><space></space><space></space><space></space><space></space><space></space>V<sub>รวม</sub> = 30 + 20 = 50 cm<sup>3</sup>
                            <br></br><tab></tab>C<sub>รวม</sub>V<sub>รวม</sub>  =  C<sub>1</sub>V<sub>1</sub> + C<sub>2</sub>V<sub>2</sub> 
                            <br></br><tab></tab><space></space>C<sub>รวม</sub>(50) =  (0.4)(30) + (0.3)(20)
                            <br></br><tab></tab><space></space><space></space><space></space><space></space><space></space>C<sub>รวม</sub>		 =   0.36  mol/dm<sup>3 </sup>            
                             `,
                            AnswerDescriptionAttachImg:'',
                            Category: 'Grammar'
                        },
                        {   id: 5,
                            question: 'เมื่อผสมแล้วเติมน้ำกลั่นสารละลายมีปริมาตร 250 cm<sup>3</sup> ความเข้มข้นของสารละลายที่ได้จะเป็นกี่โมล/ลิตร ',
                            choice :[{
                                choicevalue:'a',choiceimg:false,choicetext: '0.35'},{
                                choicevalue:'b',choiceimg:false,choicetext: '0.175'},{
                                choicevalue:'c',choiceimg:false,choicetext: '0.09'},{
                                choicevalue:'d',choiceimg:false,choicetext: '0.072'}
                            ],
                            Answer: 'd',
                            AnswerDescription:`<tab></tab>จากข้อ 4 หลังการผสมกันแล้ว จะมีความเข้มข้น 0.36 mol/dm3 ปริมาตร 50 cm3
                            <br></br><tab></tab>เมื่อเติมน้ำกลั่นลงไปจนมีปริมาตร 250 cm3 ดังนั้นคือการเจือจาง
                            <br></br><tab></tab>จาก	<space></space><space></space>C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>
                            <br></br><tab></tab>(0.36)(50) = C<sub>2</sub>(250)
                            <br></br><tab></tab><tab></tab> C<sub>2</sub> = 0.072 mol/dm<sup>3</sup> `,
                            AnswerDescriptionAttachImg:'',
                            Category: 'Grammar'
                        },
                    ]
                },
            {   id: 6,
                question: `กำหนดให้มีสารละลายดังต่อไปนี้
                <br></br><tab></tab>(A) สารละลาย HCl 1 mol/kg ใน CH<sub>3</sub>COOH และสารละลาย HCl 1 mol/kg ในน้ำ
                <br></br><tab></tab>(B) สารละลาย HNO<sub>3</sub> 1 mol/kg ใน CH<sub>3</sub>COOH และสารละลาย HNO<sub>3</sub> 1 mol/kg ในเอทานอล
                <br></br><tab></tab>(C) สารละลาย HCl 1 mol/kg ในน้ำ และสารละลาย HNO<sub>3</sub> mol/kg ใน CH<sub>3</sub>COOH
                <br></br><tab></tab>(D) สารละลาย HCI 1 mol/kg ใน CH<sub>3</sub>COOH และสารละลาย HNO<sub>3</sub> 1 mol/kg ใน CH<sub>3</sub>COOH
                สารละลายในข้อใดมีจุดเดือดเท่ากัน `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'A'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'B'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'C'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'D'}
                  ],
                Answer: 'd',
                AnswerDescription:` <tab></tab>การพิจารณาจุดเดือด จุดเยือกแข็งของสารละลาย ต้องศึกษาจากสมบัติคอลิเกทีฟ โดยสมบัติของสารละลาย จุดเดือดของสารละลายต้องเพิ่มขึ้นและจุดเยือกแข็งของสารละลายต้องลดลง เมื่อเทียบกับสารบริสุทธ์  โดยการเปลี่ยนแปลงจุดเดือด จุด	หลอมเหลวขึ้นกับความเข้มข้นในหน่วยโมแลล (mol/kg) เท่านั้น!! หากสาร 2 ชนิด ที่มีความเข้มข้นเท่ากันในหน่วยโมและละลายในตัวทำละลายชนิดเดียวกันจะมีจุดเดือดที่เท่ากัน 
                <br></br><tab></tab>ดังนั้นสารละลายที่มีจุดเดือดเท่ากันคือสารละลายในข้อ d เท่านั้น เพราะมี 1 mol/kg เท่ากัน และละลายอยู่ในตัวทำละลายชนิดเดียวกัน
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {   id: 7,
                question: ` กำหนดข้อมูลดังนี้
                a. การเกิดสนิมเหล็ก      
                b. การละลายน้ำตาล
                c. การต้มนำให้เดือดเป็นไอ
                d. การขยายตัวของโลหะเมื่อได้รับความร้อน
                e. การเกิดหินงอกหินย้อย
                f. การสังเคราะห์ด้วยแสงของพืช
            จากข้อมูลข้างต้น ข้อใดบ้างที่เป็นการเปลี่ยนแปลงทางเคมี
             `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'a , b , e และ f'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'b , c , d และ e'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'a , e และ f'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'b , c และ d'}
                  ],
                Answer: 'c',
                AnswerDescription:`<tab></tab>การเปลี่ยนแปลงทางเคมี เป็นการเปลี่ยนแปลงที่ทำให้เกิดสารใหม่ มีการเปลี่ยนแปลงองค์ประกอบของสาร โดยอะตอมของสารตั้งต้นจะมีการจัดเรียงตัวใหม่ได้เป็นสารผลิตภัณฑ์ ซึ่งมีสมบัติแตกต่างจากสารตั้งต้นและอะตอมแต่ละชนิดก่อนและหลังเกิดปฏิกิริยาเคมีมีจำนวนเท่ากัน
                <br></br><tab></tab>a. การเกิดสนิมเหล็ก เป็นการเปลี่ยนแปลงทางเคมี			Fe + H<sub>2</sub>O + O<sub>2</sub> → Fe<sub>2</sub>O<sub>3</sub>·H<sub>2</sub>O
                <br></br><tab></tab>b. เป็นการละลายของน้ำตาลในน้ำ โมเลกุลน้ำตาลยังคงเหมือนเดิม
                <br></br><tab></tab>c. การต้มน้ำให้เดือดเป็นไป เป็นการเปลี่ยนสถานะ เป็นการเปลี่ยนแปลงทางกายภาพ
                <br></br><tab></tab>d. โลหะได้รับความร้อนเกิดการขยายตัว แต่ก็ยังมีโครงสร้างเหมือนเดิม
                <br></br><tab></tab>e. การเกิดหินงอกหินย้อย เป็นการเปลี่ยนแปลงทางเคมี เกิดจากฝนที่มีสมบัติเป็นกรดทำปฏิกิริยากับแคลเซียมคาร์บอเนตที่มีอยู่ในหินปูน
                <br></br><tab></tab>f. การสังเคราะห์ด้วยแสงของพืช เป็นการเปลี่ยนแปลงทางเคมี เป็นกระบวนการสร้างอาหารของพืช
                <br></br><tab></tab>	nCO<sub>2</sub> + 2nH<sub>2</sub>O + พลังงานแสงและคลอโรฟิลล์ → (CH<sub>2</sub>O) n + nO<sub>2</sub> + nH<sub>2</sub>O
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {   id: 8,
                question: 'เมื่อนำสังกะสีมาทำปฏิกิริยากับกรดไฮโดรคลอริก  จะได้ผลิตภัณฑ์เป็นซิงค์คลอไรด์และแก๊สชนิดหนึ่ง ปฏิกิริยานี้เขียนเป็นสมการเคมีได้ตามข้อใด',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext:'Zn(s) + 2HCl(l) → ZnCl(l) + H<sub>2</sub>(g)'},{
                    choicevalue:'b',choiceimg:false,choicetext:'Zn(s) + 2HCl(l) → ZnCl<sub>2</sub>(aq) + H<sub>2</sub>(g)'},{
                    choicevalue:'c',choiceimg:false,choicetext:'Zn(s) + 4HClO<sub>3</sub>(aq) → Zn(ClO<sub>3</sub>)<sub>2</sub>(aq) + 2H<sub>2</sub>O(g)'},{
                    choicevalue:'d',choiceimg:false,choicetext:'Zn(s) + 2HClO<sub>4</sub>(aq) → Zn(ClO<sub>4</sub>)<sub>2</sub>(l) + O<sub>2</sub>(g)'}
                ],
                Answer: 'b',
                AnswerDescription:`<tab></tab> เมื่อนำโลหะ Zn ทำปฏิกิริยากับกรดไฮโดรคลอริก (HCl) จะเกิดแก๊สไฮโดรเจน (H<sub>2</sub>) และซิงค์คลอไรด์ (ZnCl<sub>2</sub>)
				<br></br><tab></tab>Zn(s) + 2HCl(l) → ZnCl<sub>2</sub>(aq) + H<sub>2</sub>(g) 
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Numbers and Mathematical',
            },
            {   id: 9,
                question: ` กำหนดสมการเคมี ดังนี้ 
                <br></br>a. 4Al(s) + 3O<sub>2</sub>(g) → 2Al<sub>2</sub>O<sub>3</sub>(s)
	            <br></br>b. CaCO<sub>3</sub>(s)+H<sub>2</sub>SO<sub>4</sub>(aq)→CaSO<sub>4</sub>(aq)+H<sub>2</sub>O(l)+CO<sub>2</sub>(g)
	            <br></br>c. C<sub>5</sub>H<sub>12</sub>+ 8O<sub>2</sub>	→ 5CO<sub>2</sub> +  6H<sub>2</sub>O
                <br></br>จากสมการเคมีข้างต้น ข้อใดเขียนสมการในการเกิดปฏิกิริยาไม่ถูกต้อง `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'a'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'b'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'c'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'd'}
                  ],
                Answer: 'd',
                AnswerDescription:` ไม่มีข้อใดผิด ข้อแนะนำ ให้ตรวจการดุลสมการเคมีให้รอบคอบ  `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {   description_line_i:`นักเรียนคนหนึ่งทำการทดลองเพื่อหาอัตราส่วนโดยมวลของธาตุองค์ประกอบซิลเวอร์ไอโอไดด์ ดังนี้ รินสารละลายโพแทสเซียมไอโอไดด์ลงใน สารละลายซิลเวอร์ไนเตรต ซึ่งอยู่ในหลอดทดสอบ 8 หลอด ดังในตาราง แล้วเติมน้ำกลั่นลงในหลอดที่ 1 – 7 ให้มีปริมาตรเท่ากับหลอดที่ 8 สารละลายซิลเวอร์ไนเตรตที่ใช้มีซิลเวอร์ไนเตรตหนัก 8.5 กรัม ละลายอยู่ในสารละลาย 100 ลูกบาศก์เซนติเมตร สารละลายโพแทสเซียมไอโอไดด์ที่ใช้มีโพแทสเซียมไอโอไดด์หนัก 16.6 กรัม ละลายอยู่ในสารละลาย 100 ลูกบาศก์เซนติเมตร `,
                id: 10,
                question: '<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq10.png" height="230px"></img><br></br> ถ้าเขียนกราฟระหว่างความสูงของตะกอนซิลเวอร์ไอโอไดด์ (cm) ที่เกิดขึ้นในแต่ละหลอด (ในแนวตั้ง) กับปริมาตรของสารละลายโพแทสเซียมไอโอไดด์ (ลูกบาศก์เซนติเมตร) ที่ใช้ในแต่ละหลอด (ในแนวนอน) ควรจะได้กราฟที่ถูกต้องในข้อใด ',
                choice :[{
                    choicevalue:'a',choiceimg:true,imgheight:'80px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/chemistry/cc10-1.png'},{
                    choicevalue:'b',choiceimg:true,imgheight:'80px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/chemistry/cc10-2.png'},{
                    choicevalue:'c',choiceimg:true,imgheight:'80px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/chemistry/cc10-3.png'},{
                    choicevalue:'d',choiceimg:true,imgheight:'80px',choicetext: 'https://jknowledgetutor.com/attachfile/netsat/chemistry/cc10-4.png'}
                ],
                Answer: 'c',
                AnswerDescription:`<tab></tab>สมการเคมี	AgNO<sub>3</sub>(aq)	+  KI(aq) →  AgI(s)  +  KNO<sub>3</sub>(aq)  
                <br></br><tab></tab> กราฟระหว่างความสูงของตะกอนซิลเวอร์ไอโอไดด์ที่เกิดขึ้นในแต่ละหลอดกับปริมาตรของสารละลายโพแทสเซียมไอโอไดด์ที่ใช้ในแต่ละหลอด ต้องไปตรวจสอบว่า AgNO<sub>3</sub> ทำปฏิกิริยาพอดีกับ KI ในหลอดทดลองใด เราจึงจะทราบว่า KI ที่ปริมาตร เท่าไหร่จะเกิดตะกอน AgI สูงสุด
                <br></br><tab></tab> จากสมการเคมี AgNO<sub>3</sub>  1 mol จะทำปฏิกิริยาพอดีกับ KI  1 mol
                <br></br><tab></tab>mol ของ AgNO<sub>3</sub> =  <fraction>  8.5 g  | 170 g/mol  </fraction> = 0.05 mol <br></br>
                <br></br>ถ้าในสารละลาย 100 cm<sup>3</sup> มี AgNO<sub>3</sub> = 0.05 mol 
				<br></br>ดังนั้น	ในสารละลาย 8 cm<sup>3</sup> มี AgNO<sub>3</sub> = 0.004 mol
				<br></br>เราจึงได้ว่า KI ที่ทำปฏิกิริยาพอกับกับ AgNO<sub>3</sub> ก็ต้องมีจำนวน 0.004 mol เช่นกัน
                <br></br><tab></tab>mol ของ KI   = <fraction> 16.6 g | 166 g/mol </fraction> = 0.1 mol <br></br>
                <br></br>ถ้า มี KI = 0.1 mol	อยู่ในสารละลาย 100 cm<sup>3</sup> 
                <br></br>ดังนั้น มี KI = 0.004 mol อยู่ ในสารละลาย 4 cm<sup> 3</sup> 
                <br></br>เราจึงได้ว่า ปริมาตรของ KI ที่ทำปฏิกิริยาพอดีกับ AgNO<sub>3</sub> คือ 4 cm<sup>3</sup> 
                <br></br><tab></tab>กราฟระหว่างความสูงของตะกอนซิลเวอร์ไอโอไดด์ (cm) ที่เกิดขึ้นในแต่ละหลอด (ในแนวตั้ง) กับปริมาตรของสารละลายโพแทสเซียมไอโอไดด์ (cm<sup>3</sup>) ที่ใช้ในแต่ละหลอด (ในแนวนอน) ควรจะได้กราฟ	
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/ad10-1.png" height="170px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {   id: 11,
                question: 'ใช้หลอดหยดดูสารละลายใสจากหลอดที่ 3, 4, 5 และ 6 หลอดละ 5 หยด ใส่หลอดทดลองอีก 4 หลอดแยกกัน เติมสารละลาย โพแทสเซียมไอโอไดด์ลงไปหลอดละ 3 หยด หลอดใดได้ตะกอนสีเหลืองของซิลเวอร์ไอโอไดด์',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '3, 5, 6'},{
                    choicevalue:'b',choiceimg:false,choicetext: '3, 4'},{
                    choicevalue:'c',choiceimg:false,choicetext: '3, 4, 5'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4, 5, 6'}
                ],
                Answer: 'b',
                AnswerDescription:`<tab></tab>ใช้หลอดหยดดูดสารละลายจากหลอดที่ 3, 4, 5 และ 6 แล้วเติมสารละลายโพแทสเซียมไอโอไดด์ลงไป หลอดที่ได้ตะกอนสีเหลืองของซิลเวอร์ไอโอไดด์ คือหลอดที่ 3 และ 4 เพราะ ตั้งแต่หลอดที่ 1-4 AgNO<sub>3</sub> เหลือในระบบ เนื่องจาก AgNO<sub>3</sub> จะทำปฏิกิริยาหมดที่ KI มี 4 cm<sup>3</sup> ในหลอดที่ 5 ดังนั้น ตั้งแต่หลอดที่ 5-8 จะไม่มี AgNO<sub>3</sub> เหลือในระบบจึงจะไม่ทำปฏิกิริยากับ KI ที่เติมลงไป และจะไม่มีตะกอนเกิดขึ้น `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {   id: 12,
                question: ` ปฏิกิริยาการเผาไหม้แก๊สเอทิลีน (C<sub>2</sub>H<sub>4</sub>) ในอากาศอย่างสมบูรณ์ เป็นดังสมการ 
                C<sub>2</sub>H<sub>4</sub>(g) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) + H<sub>2</sub>O(g) (สมการยังไม่ดุล) 
                ถ้าเผาไหม้เอทิลีน 20 dm<sup>3</sup> ที่ STP ในอากาศอย่างสมบูรณ์ จะเกิดแก๊สคาร์บอนไดออกไซด์กี่ลูกบาศก์เดซิเมตรที่ STP     
                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1.8'},{
                    choicevalue:'b',choiceimg:false,choicetext: '10'},{
                    choicevalue:'c',choiceimg:false,choicetext: '20'},{
                    choicevalue:'d',choiceimg:false,choicetext: '40'}
                  ],
                Answer: 'd',
                AnswerDescription:` สมการเคมี C<sub>2</sub>H<sub>4</sub>(g) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)
                <br></br><space></space>mol เอทิลีน  = <fraction> mol คาร์บอนไดออกไซด์  | 2 </fraction> <br></br>
                <br></br><space></space> <fraction> V เอทิลีน | 22.4 </fraction> = <fraction> V คาร์บอนไดออกไซด์ | 2 x 22.4 </fraction> <br></br>
                <br></br><space></space> <fraction> 20 | 22.4 </fraction> = <fraction> V คาร์บอนไดออกไซด์ | 2 x 22.4 </fraction> <br></br>
                <br></br><space></space>V คาร์บอนไดออกไซด์ =  40 dm<sup>3</sup>
                
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {   id: 13,
                question: `สเปกตรัมของแสงขาวแยกออกเป็นแสงสีรุ้งซึ่งมีความยาวคลื่นเพิ่มขึ้นจากสีม่วงถึงสีแดง เมื่อเผาสารประกอบของลิเทียม โซเดียมและโพแทสเซียม จะเห็นเปลวไฟสีแดง เหลือง และม่วง ตามลำดับ
                <br></br><tab></tab>พิจารณาข้อความต่อไปนี้      
                <br></br><tab></tab>ก. แสงสีแดงมีพลังงานมากกว่าแสงสีม่วงเพราะให้ความร้อนสูง
                <br></br><tab></tab>ข. ลำดับความถี่ของแสง เป็นดังนี้ แสงสีแดง > แสงสีเหลือง > แสงสีม่วง
                <br></br><tab></tab>ค. เมื่ออิเล็กตรอนของโซเดียมถูกกระตุ้นจะมีการจัดอิเล็กตรอนเป็น [Ne] 3s<sup>1</sup> 3p<sup>1</sup> 
                <br></br><tab></tab>ง. เมื่อฟ้าผ่าจะเห็นแสงสายฟ้าเป็นแสงสีขาว เนื่องจากแก๊สหลายชนิดในอากาศถูกกระตุ้น แล้วคายพลังงานออกมาเป็นสเปกตรัมสีต่างๆ   
                <br></br><tab></tab>จ. เมื่อเผาสารประกอบของสทรอนเซียมแล้วได้เปลวไฟสีแดง แสดงว่าพลังงานที่คายออกมาใกล้เคียงกับเมื่อเผาสารประกอบของลิเทียม 
                <br></br>ข้อใด ถูกต้อง      `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ก และ ข'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ข และ ค'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ค และ ง เท่านั้น'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ง และ จ เท่านั้น'}
                ],
                Answer: 'd',
                AnswerDescription:`<tab></tab>ก. ผิด เพราะ แสงสีแดงมีพลังงานน้อยกว่าแสงสีม่วง
				<br></br><tab></tab>ข. ผิด เพราะ ความถี่ของแสง สีม่วง > สีเหลือง > สีแดง
				<br></br><tab></tab>ค. ผิด เพราะ <sub>11</sub>Na จัดเรียงอิเล็กตรอนเป็น [Ne] 3s<sup>1</sup> หากจะกระตุ้นต้องกระตุ้นอย่างน้อยเป็น  [Ne] 3p<sup>1</sup>
				<br></br><tab></tab>ง. ถูก เพราะ เมื่อฟ้าผ่าจะเห็นแสงสายฟ้าเป็นแสงสีขาว เนื่องจากแก๊สหลายชนิดในอากาศถูกกระตุ้น แล้วคายพลังงานออกมาเป็น							  สเปกตรัมสีต่าง ๆ ซึ่งสายตาเราแยกไม่ออก จึงเห็นสีขาว
				<br></br><tab></tab>จ. ถูก เพราะ สีเปลวไฟคือสีของสเปกตรัมที่เด่นชัดที่สุด ดังนั้นเผาสารประกอบของสทรอนเซียมแล้วได้เปลวไฟสีแดง แสดงว่า								  พลังงานที่คายออกมาใกล้เคียงกับเมื่อเผาสารประกอบของ	ลิเทียม
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {
                id: 14,
                question: ` <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq14.png" height="150px"></img><br></br> จากรูป Y และ Z คือธาตุใด  
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq14-2.png" height="140px"></img><br></br> `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4)'}
                ],
                    Answer: 'a',
                    AnswerDescription:`<tab></tab> ที่ Y มีจุดกลมรอบ ๆ ทั้งหมด 6 จุด หมายความว่า Y มีเวเลนซ์อิเล็กตรอน 6 ตัว ซี่งเป็นสมบัติขิงหมู่ 6A
                    <br></br><tab></tab> ที่ Z มีกากบาทรอบ ๆ ทั้งหมด 7 จุด หมายความว่า Z มีเวเลนซ์อิเล็กตรอน 7 ตัว ซี่งเป็นสมบัติขิงหมู่ 7A
                    <br></br><tab></tab> Y จึงควรเป็น S และ Z จึงควรเป็น Cl
     `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {   id: 15,
            question: ` อะตอมของธาตุที่เสถียรที่สุดในคาบที่ 5 มีจำนวนอิเล็กตรอนเท่าใด  `,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: '8'},{
                choicevalue:'b',choiceimg:false,choicetext: '36'},{
                choicevalue:'c',choiceimg:false,choicetext: '54'},{
                choicevalue:'d',choiceimg:false,choicetext: '72'}
            ],
                Answer: 'c',
                AnswerDescription:`<tab></tab>อะตอมที่เสถียร (Stable) ต้องมีเวเลนซ์อิเล็กตรอน 8 ตัว และอยู่ในคาบ 5 แสดงว่ามี 5 ระดับพลังงาน
				<br></br><tab></tab>ดังนั้นการจัดเรียงอิเล็กตรอนควรเป็น 2 8 18 18 8 ( 54 e<sup>-</sup>)
				 `,
                AnswerDescriptionAttachImg:'',
                Category: 'Conversation'
            },
            {   id: 16,
                question: `พิจารณาแผนภาพต่อไปนี้  <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq16.png" width="85%"></img><br></br> ภาพใดแสดงการจัดเรียงอิเล็กตรอนในสภาวะพื้นของอะตอม ไม่ถูกต้อง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ภาพที่ 1 และภาพที่ 2 เท่านั้น'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ภาพที่ 2 และภาพที่ 3 เท่านั้น'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ภาพที่ 1 และภาพที่ 3 เท่านั้น'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ภาพที่ 1 ภาพที่ 2 และภาพที่ 3'}
                  ],
                Answer: 'd',
                AnswerDescription:` <tab></tab> ภาพที่ 1 ผิด เพราะ อะตอมมี 7 โปรตอนที่สถานะพื้น ก็ควรมี 7 อิเล็กตรอนเท่ากัน 
				<br></br><tab></tab>ภาพที่ 2 ผิด เพราะ อิเล็กตรอนที่อยู่ชั้น n = 3 จำนวน 1 ตัวนั้น ควรมาอยู่ในชั้น n = 2
				<br></br><tab></tab>ภาพที่ 3 ผิด เพราะ อิเล็กตรอนในชั้น n = 1 มีได้เพียง 2 ตัวเท่านั้น 

`,
                AnswerDescriptionAttachImg:'',
                Category: 'Grammar'
            },
            {
                id: 17,
                question: `พิจารณาธาตุสมมติต่อไปนี้ 
                <sub>9</sub>A		<sub>11</sub>B		<sub>12</sub>C		<sub>15</sub>D		<sub>17</sub>E
                ธาตุคู่ใดทำปฏิกิริยากันได้สารประกอบไอออนิก และคู่ใดได้สารประกอบโคเวเลนต์  
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq17-2.png" height="140px"></img> `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4)'}
                ],
                    Answer: 'd',
                    AnswerDescription:`<tab></tab>การจัดเรียงอิเล็กตรอน
                    <br></br><tab></tab><sub>9</sub>A =  2 7 เป็นอโลหะหมู่ 7A					
                    <br></br><tab></tab><sub>11</sub>B = 2 8 1 เป็นโลหะหมู่ 1A
                    <br></br><tab></tab><sub>12</sub>C = 2 8 2 เป็นโลหะหมู่ 2A					
                    <br></br><tab></tab><sub>15</sub>D	= 2 8 5 เป็นอโลหะหมู่ 5A 
                    <br></br><tab></tab><sub>17</sub>E = 2 8 7 เป็นอโลหะหมู่ 7A
                    <br></br><tab></tab>สารประกอบไอออนิก เกิดจาก โลหะ + อโลหะ สารประกอบโคเวเลนตื เกิดจาก อโลหะ + อโลหะ 
    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 18,
                question: `จากรูปแสดงการเปลี่ยนแปลงพลังงานในการเกิดสารประกอบ ข้อใดถูก <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq18.png" height="140px"></img><br></br>  `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ความเสถียรของโมเลกุล C-D > X-Y > A-B'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ความยาวพันธะของ C-D < X-Y < A-B'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'C และ X เป็นธาตุหมู่เดียวกัน แต่ C อยู่คาบน้อยกว่า X ในตารางธาตุ'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'X-Y และ C-D เป็นโมเลกุลโคเวเลนต์แบบมีขั้ว ส่วน A-B เป็นไอออนิก'}
                ],
                    Answer: 'a',
                    AnswerDescription:` <tab></tab>	ก. ถูก เพราะ ความเสถียร คือ มีพลังงานต่ำ 
                    <br></br><tab></tab> ข. ผิด เพราะ ความยาวพันธะ A-B > C-D > X-Y
                    <br></br><tab></tab> ค. ผิด เพราะ ข้อมูลไม่เพียงพอ
                    <br></br><tab></tab> ง. ผิด เพราะ ข้อมูลไม่เพียงพอ
     `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 19,
                question: `
                พิจารณาไอของสารประกอบฟอสฟอรัสฟลูออไรด์สามชนิดคือ PF<sub>3</sub>, PF<sub>5</sub> และ P<sub>2</sub>F<sub>4</sub> 
                ซึ่งมีสมบัติเป็นแก๊สอุดมคติไอของสารใดมีค่าความหนาแน่นเท่ากับ 4.60 g/L ที่ความดัน 0.82 atm 
                และอุณหภูมิ 27 ֯C และถ้าปล่อยให้ไอของสารทั้งสามชนิดผ่านท่อเล็ก ๆ ในสภาวะเดียวกัน ดังรูป
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq19.png" width="85%"></img>
                <br></br>ไอของสารใดแพร่จากจุด A ไปถึงจุด B ได้เร็วที่สุด 
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq19-2.png" height="120px"></img>
                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4)'}
                ],
                    Answer: 'c',
                    AnswerDescription:`<tab></tab>สารที่แพร่ได้เร็วที่สุดคือสารที่เบา มีมวลต่อโมลน้อย
                    <br></br><tab></tab>มวลต่อโมล PF<sub>3</sub> = 88 g/mol PF<sub>5</sub> = 126 g/mol P<sub>2</sub>F<sub>4</sub> = 138 g/mol
                    <br></br><tab></tab>ดังนั้น PF<sub>3</sub> แพร่ได้เร็วที่สุด จะถึงจุด B ก่อน
                    <br></br><tab></tab>สารที่มีความหนาแน่นเท่ากับ 4.6 g/L ,   T = 300 K , P = 0.82 atm
                    <br></br><tab></tab>จาก	P MW = dRT
                    <br></br><tab></tab><space></space><space></space> MW = <fraction> dRT | P </fraction> = <fraction> (4.6)(0.082)(300) | 0.82 </fraction> <br></br>
                    <br></br><tab></tab><space></space><space></space> MW  = 138 g/mol 
                    <br></br><tab></tab>แก๊สที่ที่ MW = 138 g/mol คือ P<sub>2</sub>F<sub>4</sub>
     `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 20,
                question: `ในการสังเคราะห์แก๊ส NO โดยบรรจุสารตั้งต้นในภาชนะดังรูป
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq20.png" height="160px"></img><br></br>
                ภาชนะบรรจุแก๊ส NO มีปริมาตรเป็น 2 เท่าของภาชนะบรรจุแก๊ส O<sub>2</sub>
                ความดันของแก๊ส O<sub>2</sub> เป็น 3 เท่าของ แก๊ส NO และภาชนะทั้งสองอยู่ภายใต้อุณหภูมิเดียวกัน เปิดลิ้นให้แก๊สทั้งสองทําปฏิกิริยากันดังสมการ
				2NO(g) + O<sub>2</sub>(g) → 2NO<sub>2</sub>(g)
                เมื่อปฏิกิริยาเกิดสมบูรณ์ องค์ประกอบของแก๊สภายในภาชนะเป็นดังข้อใด 

                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'แก๊ส NO<sub>2</sub> เพียงชนิดเดียว'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'แก๊ส NO และ NO<sub>2</sub> ที่มีจํานวนโมลเท่ากัน '},{
                    choicevalue:'c',choiceimg:false,choicetext: 'แก๊ส O<sub>2</sub> และ NO<sub>2</sub> ที่มีจํานวนโมลเท่ากัน  '},{
                    choicevalue:'d',choiceimg:false,choicetext: 'แก๊ส O<sub>2</sub> และ NO<sub>2</sub> ที่มีจํานวนโมลของ NO<sub>2</sub> เป็น 2 เท่าของ O<sub>2</sub>'}
                ],
                    Answer: 'c',
                    AnswerDescription:`<tab></tab>ถ้าแก๊ส NO มีปริมาตร 2V แก๊ส O<sub>2</sub> จะมีปริมาตร V และถ้าแก๊ส NO มีความดัน P แก๊ส O<sub>2</sub> จะมีความดัน 3P
                    จำนวนโมลของแก๊ส หาได้จาก PV = nRT
                    <br></br><tab></tab><fraction> n | P </fraction> = <fraction> PV | RT </fraction> ,
                    mol NO  = <fraction> 2PV | RT </fraction>,  mol O<sub>2</sub> = <fraction> 3PV | RT </fraction> <br></br>
                    <br></br><tab></tab>เมื่อทำปฏิกิริยากันแก๊ส NO จะหมดก่อน เป็นสารกำหนดปริมาณ
                    <br></br><tab></tab>(เพื่อให้ง่ายต่อการพิจารณา เราจะตัดส่วน RT ออกก่อน)
                    <br></br><tab></tab><space></space><space></space><space></space>2NO(g) + O<sub>2</sub>(g) → 2NO<sub>2</sub>(g)
                    <br></br><tab></tab><space></space><space></space>มี	2PV	<space></space><space></space><space></space>3PV <space></space><space></space> 0 mol
                    <br></br><tab></tab><space></space>ใช้	-2PV <space></space><space></space><space></space>-PV <space></space><space></space> +2PV  mol
                    <br></br><tab></tab><space></space>เหลือ 0  <space></space><space></space><space></space><space></space>2PV	<space></space><space></space><space></space> 2PV  mol
                    <br></br><tab></tab>เมื่อเกิดปฏิกิริยาสมบูรณ์ แก๊ส O2 และแก๊ส NO2 มีจำนวนโมลเท่ากัน
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 21,
                question: `ในการทดสอบสารประกอบไฮโดรคาร์บอน A B C และ D ได้ผลดังนี้ <br></br> <img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq21.png" height="160px"></img><br></br> ถ้านำสารทั้งสี่ชนิดไปทดสอบกับการฟอกจางสีกับโบรมีนในที่ที่มีแสง แล้วทดสอบด้วยกระดาษลิตมัส สารใดที่มีความเป็นไปได้ที่จะให้ผลิตภัณฑ์ที่เปลี่ยนสีกระดาษลิตมัสจากสีน้ำเงินเป็นสีแดง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4)'}
                ],
                    Answer: 'a',
                    AnswerDescription:`สารชนิดไปทดสอบกับการฟอกจางสีกับโบรมีนในที่ที่มีแสง แล้วทดสอบด้วยกระดาษลิตมัสแล้วให้ผลิตภัณฑ์ที่เปลี่ยนสีกระดาษ	ลิตมัสจากสีน้ำเงินเป็นสีแดง (มีฤทธิ์เป็นกรด) ควรเกิดปฏิกิริยาการแทนที่ ซึ่งเป็นสมบัติของสารประกอบไฮโดรคาร์บอนที่เป็น 	Alkane ซึ่งสมบัติของ Alkane ตรงกับสาร C ในตาราง  `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 22,
                question: `ข้อใดเป็นชื่อ IUPAC ของสารที่มีสูตรโครงสร้างดังแสดง <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq22.png" height="100px"></img><br></br> ถ้านำสารทั้งสี่ชนิดไปทดสอบกับการฟอกจางสีกับโบรมีนในที่ที่มีแสง แล้วทดสอบด้วยกระดาษลิตมัส สารใดที่มีความเป็นไปได้ที่จะให้ผลิตภัณฑ์ที่เปลี่ยนสีกระดาษลิตมัสจากสีน้ำเงินเป็นสีแดง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '2-เมทิล-3-เอทิลเฮกเซน'},{
                    choicevalue:'b',choiceimg:false,choicetext: '4-เอทิล-5-เมทิลเฮกเซน'},{
                    choicevalue:'c',choiceimg:false,choicetext: '2-เอทิล-3-เมทิลเฮกเซน'},{
                    choicevalue:'d',choiceimg:false,choicetext: '3-เอทิล-2-เมทิลเฮกเซ'}
                ],
                    Answer: 'd',
                    AnswerDescription:`<img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/ad22-1.png" height="140px"></img>
                    <br></br>อ่านว่า 3-เอทิล-2-เมทิลเฮกเซน
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 23,
                question: `พิจารณาโครงสร้างพอลิเมอร์ 4 ชนิดดังนี้ <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq23.png" height="250px"></img> <br></br>
                ความสัมพันธ์ระหว่างโครงสร้างกับสมบัติของพอลิเมอร์ต่อไปนี้ 
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq23-2.png" height="170px"></img><br></br> ข้อความใดถูกต้อง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ก เท่านั้น'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ข เท่านั้น'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ก และ ข'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ข และ ค'}
                ],
                    Answer: 'c',
                    AnswerDescription:` <tab></tab> โครงสร้างที่  1 เป็นแบบเส้น	 , โครงสร้างที่ 2 และ 3 เป็นแบบกิ่ง  และโครงสร้างที่ 4 เป็นแบบร่างแห
                    <br></br><tab></tab> ก. ถูก จุดเดือด จุดหลอมหลอมเหลว โครงสร้าง 4 > 1 > 2 > 3
                    <br></br><tab></tab> ข. ถูก ท่อพีวีซี หูกระทะ ผลิตจากโครงสร้างแบบร่างแห
                    <br></br><tab></tab> ค. ผิด โครงสร้างที่ 4 แบบร่างแห ไม่สามารถหลอมขึ้นรูปใหม่ได้   `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 24,
                question: `พิจารณากราฟที่แสดงความสัมพันธ์ของความเข้มข้นของสารตั้งต้นและผลิตภัณฑ์กับเวลาการ	เกิดปฏิกิริยาเคมี ดังนี้
                <br></br><2tab></2tab><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq24.png" height="150px"></img> <br></br>
                 ข้อความใดถูก`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ทุกช่วงเวลา อัตราการลดลงขอสาร A เท่ากัน'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'สมการเคมีของปฏิกิริยานี้คือ B + C → A'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'อัตราการเกิดสาร B มากกว่าอัตราการเกิดสาร C'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'อัตราการเกิดปฏิกิริยาเป็นค่าเฉลี่ยของอัตราการเกิดสาร B และสาร C'}
                ],
                    Answer: 'c',
                    AnswerDescription:`<tab></tab> 1) ผิด เพราะ ในช่วงแรกอัตราการลดลงของ A ลดลงอย่างรวดเร็ว เมื่อเวลาผ่านไปจะลดลงช้าลง
                    <br></br><tab></tab> 2) ผิด เพราะ สมการเคมีควรเป็น A → 2B + C
                    <br></br><tab></tab> 3) ถูก เพราะ B มีการเพิ่มขึ้นมากกว่า C สังเกตจากกราฟ
                    <br></br><tab></tab> 4) ผิด เพราะ อัตราการเกิดปฏิกิริยา เกิดจากการวัดอัตราการเปลี่ยนแปลงของสารตัวใดก็ได้ในสมการเคมีแล้วหารด้วยเลขดุลหน้าโมล จะมีค่าเท่ากัน`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 25,
                question: `พิจารณาการทดลอง A B และ C เพื่อศึกษาอัตราการเกิดปฏิกิริยาเคมีระหว่างโลหะกับกรดไฮโดรคลอริก ต่อไปนี้
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq25.png" height="200px"></img> <br></br>
                การเปรียบเทียบอัตราการเกิดปฏิกิริยาที่เกิดขึ้นจากการทดลองข้างต้น ข้อใดถูกต้อง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'A > B'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'B > C'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'C > A'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'A = B'}
                ],
                    Answer: 'c',
                    AnswerDescription:` การเปรียบเทียบอัตราการเกิดฏิกิริยา ของ C > B เพราะ มีพื้นที่ผิวมากกว่าจะเกิดปฏิกิริยาได้ดีกว่า รวดเร็วกว่า เหตุผลเดียวกัน 	C จึงมีอัตราการเกิดฏิกิริยามากกว่า A `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 26,
                question: `ในระบบปิดมีสมดุล ดังนี้ C(g) ⇌ A(g) + B(g) ที่อุณหภูมิคงที่  
                ถ้านำแก๊ส C มาจำนวนหนึ่งใส่ในภาชนะ 2 dm<sup>3</sup> ที่สมดุลพบว่า 
                ความเข้มข้นของ C เท่ากับ 0.2 mol/dm<sup>3</sup> เมื่อเติม C ลงไปอีกจำนวนหนึ่งพบว่าความเข้มข้นของ C เท่ากับ 1.8 mol/dm<sup>3</sup> ความเข้มข้นของ A(g) 
                ที่สมดุลใหม่จะเปลี่ยนแปลงอย่างไร
                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'เพิ่มขึ้นเป็น 2 เท่า'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'เพิ่มขึ้นเป็น 3 เท่า'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'เพิ่มขึ้นเป็น 6 เท่า '},{
                    choicevalue:'d',choiceimg:false,choicetext: 'เพิ่มขึ้น 9 เท่า'}
                ],
                    Answer: 'b',
                    AnswerDescription:`<br></br><tab></tab><space></space><space></space><space></space><space></space>C(g)  ⇌ A(g) + B(g) 
                    <br></br>สมดุลแรก 0.2<space></space><space></space> X <space></space><space></space> X mol/dm<sup>3</sup>
					<br></br>สมดุลใหม่ <space></space> 1.8<space></space><space></space> Y <space></space><space></space> Y mol/dm<sup>3</sup>
                    <br></br><tab></tab>สมดุลแรก ค่า K<sub>1</sub>  = <fraction> X•X | 0.2 </fraction> <br></br>  
                    <br></br><tab></tab>และสมดุลใหม่ K<sub>2</sub> = <fraction> Y•Y | 1.8 </fraction> <br></br>
                    <br></br><tab></tab>เนื่องจากเป็นการเปลี่ยนแปลงความเข้มข้น จึงไม่ส่งผลต่อค่าคงที่สมดุล K 
                    <br></br><tab></tab>ดังนั้น K<sub>1</sub> =  K<sub>2</sub>
                    <br></br><tab></tab><tab></tab><fraction> X•X | 0.2 </fraction> = <fraction> Y•Y | 1.8 </fraction> <br></br>
                    <br></br><tab></tab><tab></tab><fraction> Y•Y | X•X  </fraction> = <fraction> 1.8 | 0.2 </fraction> = 9 <br></br>
                    <br></br><tab></tab><tab></tab>Y = 3X 
                    <br></br><tab></tab>ดังนั้น ความเข้มข้นของ A ที่สมดุลใหม่ เพิ่มขึ้น 3 เท่าจากสมดุลเดิม
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 27,
                question: `ตามทฤษฎีของเบรินสเตน-ลาวรี โมเลกุลหรือไอออนคู่ใดต่อไปนี้ไม่ใช่กรดและคู่เบสของกรดนั้น <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq27.png" height="120px"></img><br></br> `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1)'},{
                    choicevalue:'b',choiceimg:false,choicetext: '2)'},{
                    choicevalue:'c',choiceimg:false,choicetext: '3)'},{
                    choicevalue:'d',choiceimg:false,choicetext: '4)'}
                ],
                    Answer: 'd',
                    AnswerDescription:`<tab></tab>ข้อสังเกต คู่กรดจะมี H<sup>+</sup> มากกว่าคู่เบส 1 ตัว เท่านั้น!!
                    <br></br><tab></tab>4) ผิด เพราะ กรดคือ HPO<sub>4</sub><sup>2-</sup>  ดังนั้นคู่เบสคือ PO<sub>3</sub><sup>3-</sup> ไม่ใช่ H<sub>2</sub>PO<sub>4</sub><sup>-</sup>
     `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 28,
                question: `ถ้าการเปลี่ยนสีของอินดิเคเตอร์ A → E ในช่วง pH ต่าง ๆ เป็นดังนี้ 
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq28.png" height="220px"></img><br></br> 
                ถ้าหยดอินดิเคเตอร์เหล่านี้ลงในสารละลาย 4 ชนิด ผลการทดลองข้อใดไม่ถูกต้อง
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/chemistry/cq28-2.png" height="160px"></img> <br></br>ข้อความใดถูกต้อง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ก เท่านั้น'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ข เท่านั้น'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ก และ ข'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ข และ ค'}
                ],
                    Answer: 'd',
                    AnswerDescription:`<tab></tab>1) น้ำลายมีค่า pH ช่วง 7.0 – 7.5
                    <br></br><tab></tab>2) CH<sub>3</sub>COONa เป็นเกลือเบส มีค่า pH > 7
                    <br></br><tab></tab>3) K<sub>2</sub>CO<sub>3</sub> เหลือในระบบ ซึ่งเป็นเกลือเบส มีค่า pH > 7
                    <br></br><tab></tab>4) ผิด เพราะ NaCl เป็นเกลือกลาง มีค่า pH = 7 ดังนั้นเมื่อทดสอบกับอินดิเคเตอร์ B ควรได้สีเหลืองไม่ใช่สีส้ม
     `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 29,
                question: `ข้อมูลต่อไปนี้ใช้ประกอบการตอบคําถาม
                <br></br><tab></tab>ปฏิกิริยาครึ่งเซลล์ <tab></tab> E0 (V) 
                <br></br>Pt<sup>2+</sup>	 + 2e<sup>-</sup>	 → Pt <tab></tab> +1.20 
                <br></br>Cu<sup>2+</sup>	 + 2e<sup>-</sup> → Cu  <tab></tab> +0.34 
                <br></br>Sn<sup>2+</sup>	 + 2e<sup>-</sup> → Sn 	<tab></tab> -0.14 
                <br></br>Ni<sup>2+</sup>	 + 2e<sup>-</sup> → Ni 	<tab></tab> -0.23 
                <br></br>Fe<sup>3+</sup>	 + e<sup>-</sup>  → Fe<sup>2+</sup> <tab></tab> -0.77 
`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ภาชนะที่ทําจากโลหะดีบุกหรือนิกเกิลควรใช้บรรจุสารละลาย CuSO<sub>4</sub> ได้ '},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ลําดับความสามารถในการรีดิวซ์ของโลหะต่าง ๆ คือ Ni > Sn > Cu > Pt '},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ถ้าต่อครึ่งเซลล์ Sn(s) | Sn<sup>2+</sup>(aq) เข้ากับครึ่งเซลล์ไฮโดรเจนมาตรฐาน Sn(s) | Sn<sup>2+</sup> (aq) จะเป็นฝ่ายรับอิเล็กตรอน '},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ถ้าต่อครึ่งเซลล์ Sn(s)|Sn<sup>2+</sup>(aq) เข้ากับครึ่งเซลล์ไฮโดรเจนมาตรฐานและไม่เกิดก๊าซ H<sub>2</sub> ขึ้นที่ครึ่งเซลล์ไฮโดรเจนมาตรฐาน'}
                ],
                    Answer: 'b',
                    AnswerDescription:`<tab></tab>1) ผิด เพราะ หากต้องการภาชนะที่สามารถบรรจุ CuSO<sub>4</sub> ได้ จะต้องเลือกใช้โลหะที่มีค่า E<sup>0</sup> สูงกว่า Cu<sup>2+</sup>
                    <br></br><tab></tab>2) ถูก เพราะ ตัวรีดิวซ์ที่ดีคือมีค่า E<sup>0</sup> ต่ำ ๆ 
                    <br></br><tab></tab>3) ผิด เพราะ ต่อครึ่งเซลล์ Sn(s)|Sn<sup>2+</sup>(aq) เข้ากับครึ่งเซลล์ไฮโดรเจนมาตรฐาน Sn(s)|Sn<sup>2+</sup> (aq) จะเป็นฝ่ายให้									  อิเล็กตรอน	
                    <br></br><tab></tab>4) ผิด เพราะ ต่อครึ่งเซลล์ Sn(s)|Sn<sup>2+</sup>(aq) เข้ากับครึ่งเซลล์ไฮโดรเจนมาตรฐาน Sn(s)|Sn<sup>2+</sup> (aq) จะเกิดแก๊ส H<sub>2</sub>
                `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
            {
                id: 30,
                question: `<space></space><space></space><space></space>Ga<sup>3+</sup> + 3e<sup>-</sup> → Ga <tab></tab>E<sup>0</sup> = -0.53 V 
                <br></br><tab></tab>Mg<sup>2+</sup> + 2e<sup>-</sup> → Mg <tab></tab>E<sup>0</sup> = -2.38 V 
                <br></br><tab></tab><space></space>2H<sup>+</sup> + 2 e<sup>-</sup> → H<sub>2</sub> <tab></tab>E<sup>0</sup> =  0.00 V
                <br></br><tab></tab><space></space>Ag<sup>+</sup> + e<sup>-</sup> →  Ag <tab></tab>E<sup>0</sup> = +0.80 V 
                <br></br>แผนภาพเซลล์ใดที่สอดคล้องกับปฏิกิริยาที่เกิดขึ้นจริง`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'Ag(s) | Ag<sup>+</sup> (aq) || Ga<sup>3+</sup> (aq) | Ga(s) '},{
                    choicevalue:'b',choiceimg:false,choicetext: 'Mg(s) | Mg<sup>2+</sup> (aq) || Ga<sup>3+</sup> (aq) | Ga(s) '},{
                    choicevalue:'c',choiceimg:false,choicetext: 'Pt | H<sup>2</sup> (1 atm) | H<sup>+</sup> (1 mol/l) || Ga<sup>3+</sup> (aq) | Ga(s) '},{
                    choicevalue:'d',choiceimg:false,choicetext: 'Ag(s) | Ag<sup>+</sup> (aq) || Mg<sup>2+</sup> (aq) | Mg(s)'}
                ],
                    Answer: 'b',
                    AnswerDescription:`<tab></tab>2) ถูก เพราะ 
                    <br></br> <space></space>Mg(s) | Mg<sup>2+</sup> (aq) <space></space>|| Ga<sup>3+</sup> (aq) | Ga(s)
                    <br></br><tab></tab><tab></tab>ฝั่งให้ e<sup>-</sup> || ฝั่งรับ e<sup>-</sup> 
                    <br></br><tab></tab><tab></tab>Anode || Cathode
                    <br></br><tab></tab><space></space><space></space><space></space><space></space>Oxidation || Reduction
                    <br></br><tab></tab><tab></tab><space></space><space></space><space></space>E<sup>0</sup>ต่ำ || E<sup>0</sup>สูง
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Conversation'
            },
       ]
      }