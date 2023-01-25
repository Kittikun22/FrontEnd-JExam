//Reserved Word & sign `` |   
//questions[i].length < 10
//choice not be same

export const thaiexam = {
    questioninfo : [
        { Title:'NETSAT ด้านภาษาไทย',
        Description_line_i:'ความฉลาดรู้ทั่วไป 101 ด้านภาษาไทย',
        Description_line_ii:'1. การอ่าน ความหมายของคำวลี ประโยค และข้อความ ถ้อยคำหรือข้อความแสดงเจตนาต่างๆ การสรุปใจความสำคัญ ข้อเท็จจริงและข้อคิดเห็น การตีความและประเมินคุณค่า การอ่านสื่อพิมพืและสื่ออิเล็กทรอนิกส์ ',
        Description_line_iii:'2. การเขียน การใช้คำ วลี ประโยค และข้อความ การเชื่อมโยงความ การใช้ภาษาในระดับต่างๆ การเขียนย่อหน้า',
        NumberofQuestions:30,
        Duration:60, //min
        //define liked question by array order 
        Linkedquestionid : [0,2,5,6,7,9,10,12,14], //index must be order asc
        Category:{'Conversation':3,'Grammar':2,'Reading':3,'Writing':1,'Error':2},
        //numberofquestionincategory:[3,2,3,3]
        }],
    questions: [
        /*----------  linked question id 1-4  ------------*/
        {   numberoflinkedquestion: 4,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 4 ข้อต่อไปนี้`,
            description_line_ii : `วิธีการป้องกันเชื้อไวรัส HPV “การป้องกันที่ดีที่สุดคือการไม่มีเพศสัมพันธ์ แต่คงเป็นสิ่งที่ทําไม่ได้ ดังนั้น ถ้าป้องกันไม่ได้ก็ต้องลดโอกาสเสี่ยง โดยการมีเพศสัมพันธ์ในวัยอันควรมีเพศสัมพันธ์กับสามีหรือภรรยาเพียงคนเดียวเพื่อลดความเสี่ยง ปัจจัยเสี่ยงอีกอย่างหนึ่งที่ก่อให้เกิดโรคมะเร็งปากมดลูกคือการสูบบุหรี่ ควรงดการสูบบุหรี่ วิธีป้องกันยังมีในส่วนของการตรวจภายในเช็คมะเร็งปากมดลูกตรวจหาการติดเชื้อ HPV อย่างสม่ำเสมอและการฉีดวัคซีนเพราะวัคซีนป้องกันการติดเชื้อ HPV จะเป็นการป้องกันมะเร็งปากมดลูกได้โดยตรง`,
             linkedquestion:[
                {   id: 1,
                    question: `ข้อใดมีความเชื่อมโยงกับเนื้อหาของบทอ่าน น้อยที่สุด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ควรตรวจภายในอย่างสม่ำเสมอ'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'มะเร็งปากมดลูกเกิดได้จากหลายปัจจัย'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'หากไม่อยากติดเชื้อไวรัสคือไม่มีเพศสัมพันธ์'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ไวรัสเหมือนกับทฤษฎีเรื่องกรรมทางพระพุทธศาสนา'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`เพราะกล่าวถึงพระพุทธศาสนา เนื่องจากบทอ่านข้างต้น ไม่มีข้อความหรือสิ่งที่สื่อถึงพระพุทธศาสนาและถือเป็นข้อความที่มีความเชื่อมดยงได้น้อยที่สุดเมื่อเทียบกับตัวเลือกข้ออื่น ๆ`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
            },
            {   id: 2,
                    question: 'ใจความสำคัญของบทอ่าน คืออะไร',
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ควรหลีกเลี่ยงการมีเพศสัมพันธ์'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'มะเร็งปากมดลูกเกิดได้จากหลายปัจจัย'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ปัจจุบันมีวัคซีนป้องกันการเกิดมะเร็งปากมดลูกแล้ว'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ควรฉีดวัคซีนเพื่อเป็นการป้องกันการเกิดมะเร็งปากมดลูก'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`หากพิจารณาจากตัวเลือกจะพบว่าทุกข้อมีความสัมพันธ์และเชื่อมโยงได้ แต่เมื่ออ่านและสรุปเป็นใจความจะพบว่า เนื้อหาในตัวเลือกต่าง ๆ เป็นเพียงข้อสนับสนุนและส่วนขยายของตัวเลือกที่ 4 เท่านั้น`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                },
            {   id: 3,
                    question:  `ข้อใดคือข้อคิดเห็นจากบทอ่าน `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'การป้องกันที่ดีที่สุดคือการไม่มีเพศสัมพันธ์ แต่คงเป็นสิ่งที่ทําไม่ได้'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ปัจจัยเสี่ยงอีกอย่างหนึ่งที่ก่อให้เกิดโรคมะเร็งปากมดลูกคือการสูบบุหรี่'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'การฉีดวัคซีนเพราะวัคซีนป้องกันการติดเชื้อ HPV จะเป็นการป้องกันมะเร็งปากมดลูกได้โดยตรง'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'วิธีป้องกันยังมีในส่วนของการตรวจภายในเช็คมะเร็งปากมดลูกตรวจหาการติดเชื้อ HPV อย่างสม่ำเสมอ'}
                    ],
                    Answer: 'a',
                    AnswerDescription:`<tab></tab>พจนานุกรมฉบับราชบัณฑิตยสถาน พ.ศ. ๒๕๒๕ (ราชบัณฑิตยสถาน ๒๕๒๕ : ๑๓๓) ให้ความหมายข้อเท็จจริง และข้อคิดเห็นไว้ว่า
                    <br></br><tab></tab>“ข้อเท็จจริง” หมายถึง ข้อความแห่งเหตุการณ์ที่เป็นมาหรือเป็นอยู่ตามจริง ข้อความหรือเหตุการณ์ที่จะต้องวินิจฉัยว่าเท็จหรือจริง
                    <br></br><tab></tab>“ข้อคิดเห็น” หมายถึง ความเห็น ความรู้สึกนึกคิดของผู้ส่งสารที่สอดแทรกอยู่ในเนื้อหา
                    <br></br><tab></tab>กล่าวคือ ข้อเท็จจริงต้องเป้นจริงเท่านั้นและสามารถหาข้อสนับสนุนหรือพิสูจน์ได้ แต่ข้อคิดเห็นคือ การแสดงความรู้สึกนึกคิดซึ่งอาจจะจริงหรือไม่จริงก็ได้ ข้อความนั้นยังไม่มีเหตุผลหรือข้อสนับสนุนมารองรับ หรือพูดขึ้นมาด้วยความไม่แน่นอน ตรงกับข้อที่ 1. เป็นข้อคิดเห็นจากบทอ่าน จากคำกล่าวที่ว่า การป้องกันที่ดีที่สุดคือการไม่มีเพศสัมพันธ์ แต่คงเป็นสิ่งที่ทำไม่ได้ ไม่มีงานวิจัยมารองรับว่าเป้นสิ่งที่ดีที่สุด และไม่สามารถยืนยันได้ว่าเป้นสิ่งที่ทำไม่ได้ เพราะเป็นเพียงข้อคิดเห็นเพิ่มเติมจากผู้เขียนเท่านั้น 
                   `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                },{   id: 4,
                    question: `จากบทอ่านข้างต้น ผู้เขียนควรเพิ่มประเด็นใดเพื่อให้มีความน่าเชื่อถือมากที่สุด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ชื่อผู้เขียน'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ชื่อยี่ห้อวัคซีน'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'งานวิจัยที่เกี่ยวข้อง'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'โรงพยาบาลที่สามารถฉีดวัคซีนได้'}
                    ],
                    Answer: 'c',
                    AnswerDescription:`เนื่องจากงานวิจัย หมายถึง การค้นคว้าหาความจริงโดยวิธีการอย่างเป็นระบบที่เชื่อถือได้ หรือวิธีการทางวิทยาศาสตร์ ซึ่งหลักการทางวิทยาศาสตร์เป็นที่ยอมรับโดยสากล ดังนั้นการเพิ่มประเด็นงานวิจัยที่เกี่ยวข้องจะช่วยให้บทอ่านมีความน่าเชื่อถือเพิ่มขึ้น`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                }
            ]
        },
        {   id: 5,
            question: 'ข้อใดเป็นการใช้ความเปรียบเทียบที่แตกต่างจากข้ออื่น',
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'ครูคือแม่พิมพ์ของชาติ'},{
                choicevalue:'b',choiceimg:false,choicetext: 'ท่าทางหล่อนราวกับนางพญา'},{
                choicevalue:'c',choiceimg:false,choicetext: 'ไพเราะกังวานปานเสียงนกร้อง'},{
                choicevalue:'d',choiceimg:false,choicetext: 'ฟันเรียงสลอนเหมือนข้าวโพดพันธุ์ดี'}
            ],
            Answer: 'a',
            AnswerDescription:`<tab></tab>อุปมา คือการเปรียบเทียบสิ่งหนึ่ง”เหมือน”กับอีกสิ่งหนึ่ง จะใช้คำที่มีความหมายว่าเหมือน เช่น เหมือน ดุจ ดั่ง ประดุจ เพี้ยง เฉก เล่ห์ ปาน เป็นต้น ในการเปรียบเทียบ เช่น สวยเหมือนนางฟ้า ขาวดั่งสำลี เร็วปานลมพัด
            <br></br><tab></tab>อุปลักษณ์ คือการเปรียบสิ่งหนึ่ง”เป็น” อีกสิ่งหนึ่ง จะใช้คำว่า เป็น คือ ในการเปรียบเทียบ 
            <br></br>เช่น พ่อเป็นเสาหลักของบ้าน ทหารคือรั้วของชาติ
            <br></br><tab></tab>1.	ครูคือแม่พิมพ์ของชาติ  (เปรียบเป็น)
            <br></br><tab></tab>2.	ท่าทางหล่อนราวกับนางพญา (เปรียบเหมือน)
            <br></br><tab></tab>3.	ไพเราะกังวานปานเสียงนกร้อง (เปรียบเหมือน)
            <br></br><tab></tab>4.	ฟันเรียงสลอนเหมือนข้าวโพดพันธุ์ดี (เปรียบเหมือน)
            `,
            AnswerDescriptionAttachImg:'',
            Category: 'Data handling',
        },
        /*----------  linked question id 6-8  ------------*/
        {   numberoflinkedquestion: 3,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 3 ข้อต่อไปนี้`,
            description_line_ii : `วิทยาศาสตร์ได้ก้าวล้ำหน้ากฎหมายและจริยธรรม มันเกิดมาตั้งแต่ปี ค.ศ. ๑๙๔๕ เมื่อมีการทําลายล้างชีวิตมนุษย์ด้วยระเบิดปรมาณู และทุกวันนี้มีวิทยาการใหม่ที่เกิดขึ้นคือ การสร้างชีวิตด้วยวิธีนอกเหนือธรรมชาติสําหรับบุคคลที่เป็นหมัน เราส่วนใหญ่คงจําได้ถึงความยินดีกับครอบครัว บราวน์ ชาวอังกฤษที่เด็กหลอดแก้วคนแรกถือกําเนิดขึ้น สังคมของเราทุกวันนี้ล้มเหลวในการใช้กฎระเบียบ เพื่อควบคุมการเพิ่มศักยภาพการพัฒนาของพลังนิวเคลียร์ที่ใช้ทําลายล้างกัน โอกาสที่จะนําความสามารถของนักวิทยาศาสตร์ไปใช้ในทางที่ผิดจะมีขึ้นมากมายอย่างชัดเจน จึงต้องมีการจํากัดขอบเขตทางด้านกฎหมายและจริยธรรมก่อนที่เราจะไปกันไกลเกินไป`,
             linkedquestion:[
            {   id: 6,
                    question: `ข้อใดคือข้อคิดเห็นจากบทอ่าน`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'วิทยาศาสตร์ได้ก้าวล้ำหน้ากฎหมายและจริยธรรม'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ปี ค.ศ. ๑๙๔๕ เมื่อมีการทําลายล้างชีวิตมนุษย์ด้วยระเบิดปรมาณู'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ครอบครัว บราวน์ ชาวอังกฤษที่เด็กหลอดแก้วคนแรกถือกําเนิดขึ้น'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ทุกวันนี้มีวิทยาการใหม่ที่เกิดขึ้นคือ การสร้างชีวิตด้วยวิธีนอกเหนือธรรมชาติสําหรับบุคคลที่เป็นหมัน'}
                    ],
                    Answer: 'a',
                    AnswerDescription:`วิทยาศาสตร์ได้ก้าวล้ำหน้ากฎหมายและจริยธรรม จากคำกล่าวนี้เป็นข้อคิดเห็นเนื่องจาก ไม่มีงานวิจัยใดมาเป้นเหตุผลรองรับว่าสิ่งนี้คือข้อเท็จจริงและไม่สามารถพิสูจน์ได้`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
            },
            {   id: 7,
                    question: 'จากบทอ่าน ไม่สามารถเชื่อมโยงกับประเด็นใด',
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ในอนาคตวิทยาศาสตร์จะสามารถพัฒนาสิ่งต่าง ๆ ได้มากขึ้น'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'หากใช้วิทยาศาสตร์ในทางที่ไม่ถูกต้อง อาจสร้างความเสียหายได้'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'วิทยาศาสตร์ไม่สามารถพัฒนาไปพร้อมกันกับกฎหมายและจริยธรรมได้'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'หลอดแก้วคนแรกถือกำเนิดขึ้นเพื่อเป็นพื้นฐานสร้างวิทยาศาสตร์ใหม่ ๆ'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`การสร้างชีวิตด้วยวิธีนอกเหนือธรรมชาติสําหรับบุคคลที่เป็นหมัน คือการสร้างเด็กหลอดแก้วขึ้นมา นั่นไม่ได้หมายความว่าเด็กหลอดแก้วจะถือกำเนิดเพื่อเป็นพื้นบานของวิทยาศาสตร์ ถึงแม้ว่าอาจจะใช่หรือไม่ใช่ แต่ว่าเป็นตัวเลือกที่มีความเชื่อมโยงกับประเด็นได้น้อยที่สุด`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                },
            {   id: 8,
                    question:  `“วิทยาศาสตร์ได้ก้าวล้ำหน้ากฎหมายและจริยธรรม” หมายถึงข้อใด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'มีข้อมูลทางวิทยาสาสตร์มากกว่ากฎหมายและจริยธรรม'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'กฎหมายและจริยธรรมไม่มีการพัฒนาเหมือนวิทยาศาสตร์'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'วิทยาศาสตร์พัฒนาออกจากกรอบของกฎหมายและจริยธรรม'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ผู้คนส่วนใหญ่ชื่นชอบวิทยาศาสตร์มากกว่ากฎหมายและจริยธรรม'}
                    ],
                    Answer: 'c',
                    AnswerDescription:`วิทยาศาสตร์ได้ก้าวล้ำหน้ากฎหมายและจริยธรรมไม่ได้มีความหมายว่าเจริญว่าหรือมีคุณค่ามากกว่า แต่หมายถึงการพัฒนาที่ออกไปจากกรอบเดิมที่เคยมี หรือข้อจำกัดเดิมที่เคยมี`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                }
            ]
        },
        {   id: 9,
            question: `จงเลือกคำหรือกลุ่มคำเพื่อเติมลงไปในช่องว่างเพื่อให้ประโยคสมบูรณ์และถูกต้อง
            คณะรัฐมนตรี__________เห็นชอบร่างพระราชบัญญัติส่งเสริมการใช้ประโยชน์ผลงานวิจัยและนวัตกรรม พ.ศ. 2564 ที่สำนักงานคณะกรรมการกฤษฎีกา__________แล้ว
            `,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'ลงชื่อ , พิจารณา'},{
                choicevalue:'b',choiceimg:false,choicetext: '- , ตรวจสอบ'},{
                choicevalue:'c',choiceimg:false,choicetext: 'มีมติ , ตรวจพิจารณา'},{
                choicevalue:'d',choiceimg:false,choicetext: 'ลงมติ , ยื่นเสนอ'}
            ],
            Answer: 'c',
            AnswerDescription:`<tab></tab>คณะรัฐมนตรีมีมติเห็นชอบร่างพระราชบัญญัติส่งเสริมการใช้ประโยชน์ผลงานวิจัยและนวัตกรรม พ.ศ. 2564 ที่สำนักงานคณะกรรมการกฤษฎีกาตรวจพิจารณาแล้ว 
            <br></br><tab></tab>เนื่องจากเป็นกลุ่มคำศัพท์เฉพาะวงการและใช้ได้อย่างเหมาะสม อีกทั้งคำว่ามติก็ยังใช้กับการลงความคิดเห้นของกลุ่มคนอีกด้วย
            `,
            AnswerDescriptionAttachImg:'',
            Category: 'Data handling',
        },
        {   id: 10,
            question: 'ผู้นำที่ดีจะต้องมี________ในการบริหารที่กว้างไกล  ในขณะที่ผู้นำที่บางประเภทมักจะชอบสร้าง_________ให้น่าเชื่อถือมากกว่าลงมือปฏิบัติ',
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'มุมมอง , ภาพพจน์'},{
                choicevalue:'b',choiceimg:false,choicetext: 'มุมมอง , ภาพลักษณ์'},{
                choicevalue:'c',choiceimg:false,choicetext: 'วิสัยทัศน์ , ภาพพจน์'},{
                choicevalue:'d',choiceimg:false,choicetext: 'วิสัยทัศน์ , ภาพลักษณ์'}
            ],
            Answer: 'd',
            AnswerDescription:`<tab></tab>ผู้นำที่ดีจะต้องมีวิสัยทัศน์ในการบริหารที่กว้างไกล  ในขณะที่ผู้นำที่บางประเภทมักจะชอบสร้างภาพลักษณ์ให้น่าเชื่อถือมากกว่าลงมือปฏิบัติ
            <br></br><tab></tab>เนื่องจาก  วิสัยทัศน์ หมายถึง การมองการไกลมองแบบมีแบบแผน ซึ่งสอดคล้องกันกับบริบทข้อความข้างต้น และ หากภาพที่เกิดจากพฤติกรรมของมนุษย์ทำให้ประจักษ์  เช่น  การกระทำ  การแต่งกาย  ความประพฤติที่สะท้อนออกมา  เราจะใช้คำว่า  “ภาพลักษณ์” ส่วน  “ภาพพจน์” นั้นเราจะพิจารณาที่ถ้อยคำหรือวรรณกรรมต่าง ๆ  ว่ามีศิลปะชั้นเชิงในการประพันธ์   การใช้สำนวนโวหาร  มีจินตนาการ  มีเจตนาไปในทิศทางใด  หรือไม่อย่างไร  เป็นต้น
            `,
            AnswerDescriptionAttachImg:'',
            Category: 'Data handling',
        },
        /*----------  linked question id 11-12  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 2 ข้อต่อไปนี้`,
            description_line_ii:`<img src="https://jknowledgetutor.com/attachfile/netsat/thai/tq10.png" width="90%"></img>`,
            linkedquestion:[
                {   id: 11,
                    question: `จากบทอ่าน ที่ปรากฏในศิลาจารึก อักษรไทยสุโขทัย หรือลายสือไทย มีความแตกต่างจากอักษรไทยในปัจจุบันอย่างไร`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ลายสือไทยมีจำนวนพยัญชนะและสระมากกว่า'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ลายสือไทยใช้เสียงวรรณยุกต์จัตวาแทนเสียงวรรณยุกต์โทร'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'อักษรไทยในปัจจุบันสามารถเขียนได้หลายแบบมากกว่าลายสือไทย'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'อักษรไทยในปัจจุบันมีลักษณะเหลี่ยมมากกว่า ส่วนลายสือไทยโค้ง กลม มน'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`อ้างอิงจากที่ปรากฏในศิลาจารึกแล้วนั้น จากตัวเลือกที่กำหนดมา มีเพียงข้อ 4. ที่เป้นความจริง คืออักษรไทยในปัจจุบันมีลักษณะเหลี่ยมมากกว่า ส่วนลายสือไทยโค้ง กลม มน`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
            },
            {   id: 12,
                    question: 'เพราะเหตุใด อักษรไทยสุโขทัย หรือลายสือไทย จึงมีรูปแบบและลักษณะโค้ง กลม มน',
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'คนสมัยก่อนกล้ามเนื้อไม่แข็งแรงไม่สามารถเขียนตัวตรงเหลี่ยมได้'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'เกิดจากสิ่งแวดล้อมและปัจจัยรอบข้างที่มีลักษณะโค้ง กลม มน'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'เนื่องจากการไหล่บ่าวัฒนธรรมสมัยก่อนเลยนิยมตัวหนังสือแบบกลม มน มากกว่า'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ต้องบันทึกลงบนหินและใบลานจึงไม่สามารถเขียนแบบเหลี่ยม เพราะอาจแตกหรือขาดได้ '}
                    ],
                    Answer: 'd',
                    AnswerDescription:`สาเหตุของลักษณะอักษรสุโขทัยที่มีลักษณะโค้ง กลม มน อาจจะมาจากหลายสาเหตุ แต่หนึ่งปัจจัยที่ทำให้เกิดคือ การเขียนตัวอักษรของคนสมัยก่อน ไม่มีปากกาหรือกระดาษ จะต้องบันทึกลงใบลานและหิน ดังนั้นการที่เราจะเขียนลงใบลานและหินนั้น หากเป็นตัวเหลี่ยมจะทำให้ขาดหรือแตกได้ จึงเป็นอีกหนึ่งสาเหตุหลักที่สมัยก่อนใช้อัการโค้งมน`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                },
            ]
        },
        /*----------  linked question id 13-15  ------------*/
        {   numberoflinkedquestion: 3,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 3 ข้อต่อไปนี้`,
            description_line_ii : `<tab></tab>ค่าปรึกษาหมอดู <3tab></3tab><space></space> 30,000 บาท
            <br></br><tab></tab>ค่าสั่งเสื้อสีมงคล	<3tab></3tab><space></space>14,000 บาท
            <br></br><tab></tab>ค่าบูชาด้ายมงคล และยันต์ <tab></tab><4space></4space>50,000 บาท
            <br></br><tab></tab>ค่าหินอ่อน ปีเซียะ	<3tab></3tab>100,000 บาท
            <br></br><tab></tab>ค่าปรึกษาหมอดู ครั้งที่ 2 <tab></tab><5space></5space>30,000 บาท
            <br></br><tab></tab>ค่ารื้อถอน ต่อเติม และทาสีใหม่ <6space></6space>687,000 บาท
            <br></br><3tab></3tab><3tab></3tab>รวม	808,000
            `,
             linkedquestion:[
            {   id: 13,
                    question:  `บทอ่านนี้ให้ความสำคัญกับประเด็นใดมากที่สุด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ค่าใช้จ่ายมีผลต่อการตัดสินใจ'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ความไม่ประมาทเป็นหนทางของความสุข'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ในการก่อสร้างหรือปรับเปลี่ยนควรปรึกษาหมอดู'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ความเชื่อกับสิ่งเหนือธรรมชาติเป็นสิ่งที่แยกออกจากกันไม่ได้'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`จากการพิจารณาจากข้อความข้างต้น จะพบว่า รายการค่าใช้จ่ายนั้น จะมีส่วนของความเชื่อเฉพาะบุคคลเข้ามาเกี่ยวด้วย `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                },
            {   id: 14,
                    question: `รายงาน ๆ ที่ปรากฏข้างต้น ไม่ควรเป็นรายการของสำนักงานใดมากที่สุด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'โรงพยาบาล'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'สถาบันกวดวิชา'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'สำนักงานเอกชน'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'สำนักงานการปกครองท้องถิ่น'}
                    ],
                    Answer: 'a',
                    AnswerDescription:`เนื่องจากรายการข้างต้น คาดเดาได้ว่าเป็นรายการการก่อสร้าง/ซ่อมแซม จากตัวเลือกดังกล่าว สถานที่ที่ไม่ควรก่อสร้างตามความเชื่อมากที่สุดคือ โรงพยาบาล เนื่องจากการก่อสร้างดรงพยาบาลนั้นต้องคำนึงถึงความเหมาะสมและความปลอดภัยในการใช้งานที่สำคัญที่สุด`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                },
            {   id: 15,
                    question: 'จากรายการค่าใช้จ่ายในบทอ่าน ค่าปรึกษาหมอดู ครั้งที่ 2 เกิดขึ้นจากสาเหตุใด',
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'สีเสื้อมงคลไม่ถูกต้อง'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ต้องการจะแก้ไขอาคาร'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ปรึกษาเพื่อความสบายใจ'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'หมอดูไม่ได้ให้คำปรึกษาอย่างละเอียดในช่วงแรก'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`เพราะตามรายการถัดมาคือ ค่ารื้อถอน ต่อเติม และทาสีใหม่`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                }
            ]
        },
        /*----------  linked question id 16-17  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 2 ข้อต่อไปนี้`,
            description_line_ii : `เชื่อว่ามีคุณพ่อคุณแม่หลายท่านที่กำลังรู้สึกหนักใจอยู่ว่าทำไมลูกถึงไม่ชอบกินผัก อาจเป็นเพราะผักมีรสชาติที่จืดชืดและผักบางชนิดก็มีรสชาติที่ขม ซึ่งเป็นรสชาติที่ไม่ถูกใจเด็ก แต่เนื่องจากผักเป็นอาหารที่มีประโยชน์มากมายเพราะอุดมไปด้วย ใยอาหาร วิตามิน แร่ธาตุ ซึ่งช่วยในการบำรุงสมองเป็นอย่างดี ดังนั้นจึงเป็นเรื่องจำเป็นที่คุณพ่อคุณแม่ต้องพยายามสรรหาวิธีการที่จะทำให้ลูกหันมากินผักให้ได้ เด็กควรเริ่มกินผักตั้งแต่อายุเท่าไหร่และผักชนิดใดเหมาะกับวัยของเด็ก โดยคุณพ่อคุณแม่สามารถให้ลูกเริ่มกินผักได้ตั้งแต่อายุ ๓ – ๕ เดือน`,
            linkedquestion:[
            {   id: 16,
                    question:  `ข้อใดคือสาระสำคัญของบทความข้างต้น`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'เด็กควรเริ่มรับประทานผักในวัยที่สมควร'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'คุณพ่อคุณแม่ต้องพยายามสรรหาวิธีการที่จะทำให้ลูกหันมากินผักให้ได้'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ผักเป็นอาหารที่มีประโยชน์มากมายเพราะอุดมไปด้วย ใยอาหาร วิตามิน แร่ธาตุ'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ผักเป็นอาหารที่มีประโยชน์จึงเป็นเรื่องจำเป็นที่คุณพ่อคุณแม่ต้องพยายามสรรหาวิธีการที่จะทำให้ลูกหันมากินผัก'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`สาระสำคัญ หมายถึง เรื่องที่ผู้เขียนต้องการจะสื่อสารถึงผู้อ่านโดยตรง ดังนั้นจากตัวเลือกที่กำหนดให้ ตอบข้อที่ 4 ครอบคลุมมากที่สุด`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Numbers and Mathematical',
                },
            {   id: 17,
                    question: `ข้อความใดต่อไปนี้เป็นข้อเท็จจริง`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'คุณพ่อคุณแม่ต้องพยายามสรรหาวิธีการที่จะทำให้ลูกหันมากินผักให้ได้'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'คุณพ่อคุณแม่หลายท่านที่กำลังรู้สึกหนักใจอยู่ว่าทำไมลูกถึงไม่ชอบกินผัก'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ผักมีรสชาติที่จืดชืดและผักบางชนิดก็มีรสชาติที่ขม ซึ่งเป็นรสชาติที่ไม่ถูกใจเด็ก'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ผักเป็นอาหารที่มีประโยชน์มากมายเพราะอุดมไปด้วย ใยอาหาร วิตามิน แร่ธาตุ'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`“ข้อเท็จจริง” หมายถึง ข้อความแห่งเหตุการณ์ที่เป็นมาหรือเป็นอยู่ตามจริง ข้อความหรือเหตุการณ์ที่จะต้องวินิจฉัยว่าเท็จหรือจริง จากตัวเลือกข้างต้นมีเพียงข้อ 4. ที่เป็นข้อเท็จจริง ที่ว่า ผักเป็นอาหารที่มีประโยชน์มากมายเพราะอุดมไปด้วย ใยอาหาร วิตามิน แร่ธาตุ ซึ่งสามารถตรวจสอบได้จริง`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                }
            ]
        },
        {   id: 18,
            question: `คำกล่าวใด สอดคล้องกับหลักวิทยาศาสตร์ `,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'ฆ่าสัตว์จะตกนรก'},{
                choicevalue:'b',choiceimg:false,choicetext: 'คนดีต้องถือศีลห้า'},{
                choicevalue:'c',choiceimg:false,choicetext: 'สิ่งที่เกิดย่อมมีสาเหตุ'},{
                choicevalue:'d',choiceimg:false,choicetext: 'ความทุกข์เป็นผลกรรมจากชาติก่อน'}
            ],
            Answer: 'c',
            AnswerDescription:`จากคำกล่าวที่ว่า “ความรู้ทางวิทยาศาสตร์ที่สังเกตได้โดยตรง และจะต้องมีความเป็นจริงสามารถทดสอบแล้วได้ผลเหมือนกันทุกครั้ง” ตรงกับตัวเลือกที่ 3. คือสิ่งที่เกิดขึ้นยอมมีสาเหตุ`,
            AnswerDescriptionAttachImg:'',
            Category: 'Data handling',
        },
        /*----------  linked question id 19-21  ------------*/
        {   numberoflinkedquestion: 3,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 3 ข้อต่อไปนี้`,
            description_line_ii : `นายสีมา สีมารักษ์ เลขาธิการ ก.พ. กล่าวถึง การปรับค่าให้แก้ข้าราชการทั้งระบบ ซึ่งจะมีผลในวันแรกของปีงบประมาณ 2549 ว่าจะปรับฐานเงินเดือนให้ข้าราชการทุกระดับเท่ากันที่ร้อยละ 5 ครอบคลุมบุคลากรภาครัฐทุกฝ่ายและเพิ่มเติมให้แก้ข้าราชการชั้นผู้น้อยโดยคนที่ได้รับเงินเดือนไม่ถึง7,000 บาทให้ได้รับเงินเดือน7,000 บาท และถ้าใครได้รับเกิน7,000 บาทแต่ไม่เกิน10,000บาท จะให้เพิ่มอีกเดือนละ1,000 บาท
            `,
             linkedquestion:[
                {   id: 19,
                    question: `"ปรับฐานเดือน" มีความหมายตรงกับข้อใด `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'คำนวณฐานเงินเดือนใหม่'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ขึ้นเงินเดือน'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ให้เพิ่มคนละเท่ากัน'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'เพิ่มคนละ1,000 บาท'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`จากตัวเลือกดังกล่าว เมื่อพิจารณาแล้ว คำว่าปรับฐานเงินเดือน มีความหมายตรงกับขึ้นเงินเดินมากที่สุด เพราะดูจากข้อมูลข้างต้นสามารถสรุปได้ว่าทุกคนทุกตำแหน่งจะได้ขึ้นเงินเดือนทุกคนแต่จะแตกต่างกันไป`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
                {   id: 20,
                    question: `ใจความสำคัญของบทอ่าน คืออะไร`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'เงินเดือนของแต่ละตำแหน่งไม่เท่ากัน'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'บุคลากรทุกคนต้องมาปรับฐานเงินเดือน'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'หากไม่มารายงานตัวจะไม่ได้ปรับฐานเงินเดือน'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'มีการปรับฐานเงินเดือนให้ข้าราชการทุกระดับ'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`ใจความสำคัญเป็นแก่นของย่อหน้าที่สามารถครอบคลุมเนื้อความในประโยคอื่น ๆ ในย่อหน้านั้นหรือประโยคที่สามารถเป็นหัวเรื่องของย่อหน้านั้นได้ ถ้าตัดเนื้อความของประโยคอื่นออกหมด จากบทอ่านข้างต้น พิจารณากับตัวเลือกแล้วจะเห็นได้ว่า ใจความสำคัญที่สมบูรณ์ คือ มีการปรับฐานเงินเดือนให้ข้าราชการทุกระดับ`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
                {   id: 21,
                    question: `จากบทอ่าน สามารถอนุมานได้ดังนี้ ยกเว้นข้อใด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ทุกคนจะมีเงินเดือนไม่ต่ำกว่า 7000 บาท'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'เงินเดือนของข้าราชการมีความแตกต่างกัน'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ทุกคนจะได้รับเงินเดือนที่เพิ่มมากขึ้นจากเดิม'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ผู้ที่เงินเดือนต่ำมีโอกาสได้เพิ่มเงินเดือนจำนวนที่มากกว่า'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`การอนุมาน หมายถึง คาดคะเนตามหลักเหตุผลหรือข้อมูลที่มี เมื่อพิจารณาจากข้อมูลในบทความสามารถอนุมานได้ตามตัวเลือกข้างต้นดังนี้ ทุกคนจะมีเงินเดือนไม่ต่ำกว่า 7000 บาท เงินเดือนของข้าราชการมีความแตกต่างกัน ทุกคนจะได้รับเงินเดือนที่เพิ่มมากขึ้นจากเดิม  ยกเว้น ผู้ที่เงินเดือนต่ำมีโอกาสได้เพิ่มเงินเดือนจำนวนที่มากกว่า เพราะ ผู้ที่ได้รับเงินเดือนต่ำสามารถเพิ่มเงินขึ้นมาได้ถึงเพียง 7000 บาทเท่านั้น`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
            ]
        },
        /*----------  linked question id 22-23  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 2 ข้อต่อไปนี้`,
            description_line_ii : `การศึกษาคือพื้นฐานของความสำเร็จที่เสมือนเป็นบันไดที่เป็นหนึ่งในก้าวสำคัญของชีวิต เพราะเมื่อเราได้รับการศึกษาที่ดีและเหมาะสมย่อมส่งผลให้ตัวเรานั้นสามารถใช้ความรู้ และความสามารถที่เรียนมาเพื่อก่อประโยชน์ให้ตัวเราและประเทศชาติ หากเราได้รับการศึกษาที่ถูกต้อง และตรงตามหลักสูตรนั้นจะทำให้เราสามารถพัฒนาตัวเองไปอย่างรวดเร็ว และในวันหนึ่งเมื่อเราได้มีโอกาสในการทำหน้าที่สอนผู้อื่น เราก็จะสามารถเข้าถึงผู้ที่เราสอนได้อย่างดี ถึงแม้ว่าเราจะเรียนจบแล้วแต่การหาความรู้ นั้นถือว่าเป็นส่วนหนึ่งของชีวิต ดังคำที่ว่า การศึกษาไม่มีที่สิ้นสุด`,
            linkedquestion:[
                {   id: 22,
                    question: `ผู้เขียนใช้วิธีการนำเสนอเนื้อหาด้วยกลวิธีต่าง ๆ ยกเว้นข้อใด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'การเปรียบเทียบ'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'การให้รายละเอียด'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'การแสดงเหตุและผล'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'การให้คำนิยามและคำจำกัดความ'}
                    ],
                    Answer: 'a',
                    AnswerDescription:`จากบทความข้างต้นไม่มีการนำเสนอเนื้อหาด้วยกลวิธีการเปรียบเทียบ`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                },
                {   id: 23,
                    question: `เพราะเหตุใดผู้เขียนจึงกล่าวว่า “การศึกษาไม่มีที่สิ้นสุด”`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'เพราะความรู้สามารถศึกษาได้ตลอดชีวิต'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'การศึกษาคือพื้นฐานของความสำเร็จ'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'เรียนมาเพื่อก่อประโยชน์ให้ตัวเราและประเทศชาติ'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ไม่มีข้อใดถูก'}
                    ],
                    Answer: 'd',
                    AnswerDescription:`กล่าวคือ ถึงแม้เราจะเรียบจบหรืออยู่ในช่วงวัยทำงาน หรือวัยชรา เราก็ยังต้องศึกษาหาความรู้ต่าง ๆ เพื่อใช้ในการดำรงชีวิตรอบตัวอยู่เสมอ เพียงแต่ลักษณะการศึกษานั้นไม่ใช่การศึกษาในห้องเรียนนั่นเอง`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
            ]
        },
        {   id: 24,
            question: `ข้อใดคือข้อเท็จจริง`,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'การศึกษาไม่มีที่สิ้นสุด'},{
                choicevalue:'b',choiceimg:false,choicetext: 'การศึกษาคือพื้นฐานของความสำเร็จ'},{
                choicevalue:'c',choiceimg:false,choicetext: 'เรียนมาเพื่อก่อประโยชน์ให้ตัวเราและประเทศชาติ'},{
                choicevalue:'d',choiceimg:false,choicetext: 'ไม่มีข้อใดถูก'}
            ],
            Answer: 'd',
            AnswerDescription:`เนื่องจากตัวเลือกข้างต้นเป็นข้อคิดเห็นทั้งหมด`,
            AnswerDescriptionAttachImg:'',
            Category: 'Data handling',
        },
        /*----------  linked question id 25-26  ------------*/
        {   numberoflinkedquestion: 2,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 2 ข้อต่อไปนี้`,
            description_line_ii : `สัตว์เลี้ยงบำบัด (pet therapy) นับเป็นรูปแบบหนึ่งของการบำบัดด้วยสัตว์ (animal-assisted therapy) ซึ่งมีงานวิจัยรองรับมากพอสมควรว่าได้ผลดี โดยเฉพาะในกลุ่มผู้สูงอายุ ช่วยเยียวยาด้านจิตใจเป็นอย่างดี สำหรับในเด็กที่ถูกทอดทิ้งหรือทารุณกรรม ก็พบว่าสัตว์เลี้ยงสามารถช่วยเยียวยาจิตใจได้ดีมาก ให้ทั้งความรู้สึกที่ปลอดภัยขึ้น ได้รับความรักโดยไม่มีเงื่อนไข และเด็กยังสามารถสื่อสารกับสัตว์เลี้ยงได้อีกด้วย พบว่าสัตว์สามารถช่วยในเรื่อง การรับรู้สัมผัส เสริมสร้างสมาธิ เพิ่มความไว้วางใจผู้อื่น ให้สัมผัสที่อบอุ่น ปลอดภัย และเป็นมิตร เพิ่มแรงจูงใจในการทำกิจกรรมต่าง ๆ อย่างต่อเนื่อง นอกจากนี้ยังช่วยให้เด็กเรียนรู้ในเรื่องสัมพันธภาพ และการตอบสนองทางอารมณ์ได้ดีขึ้นด้วย`,
            linkedquestion:[
                {   id: 25,
                    question: `ข้อใดคือวัตถุประสงค์ของการใช้สัตว์เลี้ยงบำบัด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'เพื่อฝึกและพัฒนาสัตว์'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'เพื่อลดปัญหาการเลี้ยงสัตว์'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'เพื่อบำบัดและเยียวยาจิตใจ'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'เพื่อใช้บูรณาการระหว่างการใช้ชีวิตและการเลี้ยงสัตว์'}
                    ],
                    Answer: 'c',
                    AnswerDescription:`จากข้อความ”โดยเฉพาะในกลุ่มผู้สูงอายุ ช่วยเยียวยาด้านจิตใจเป็นอย่างดี สำหรับในเด็กที่ถูกทอดทิ้งหรือทารุณกรรม ก็พบว่าสัตว์เลี้ยงสามารถช่วยเยียวยาจิตใจได้ดีมาก” มีการอธิบายผลของการใช้สัตว์เลี้ยงบำบัดอยู่ จึงตอบข้อ 3.`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
                {   id: 26,
                    question: `จากบทอ่าน ข้อใดกล่าวถูกต้อง`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'สัตว์แต่ละชนิดใช้บำบัดแตกต่างกัน'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'การเลือกสัตว์บำบัดต้องคำนึงถึงอายุด้วย'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'สัตว์บำบัดได้ผลดีโดยเฉพาะในกลุ่มผู้สูงอายุ'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'หากต้องการสัตว์เลี้ยงบำบัดจะต้องไปติดต่อกับทางสถาบัน'}
                    ],
                    Answer: 'c',
                    AnswerDescription:`เนื่องจากเป็นข้อมูลจากบทความโดยตรงที่ว่า “สัตว์เลี้ยงบำบัด (pet therapy) นับเป็นรูปแบบหนึ่งของการบำบัดด้วยสัตว์ (animal-assisted therapy) ซึ่งมีงานวิจัยรองรับมากพอสมควรว่าได้ผลดี โดยเฉพาะในกลุ่มผู้สูงอายุ ช่วยเยียวยาด้านจิตใจเป็นอย่างดี”`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
            ]
        },
        {   id: 27,
            question: `ผู้เขียนควรเพิ่มประเด็นใดเพื่อดึงดูดความน่าสนใจมากที่สุด`,
            choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'ประเภทของสัตว์เลี้ยงบำบัด'},{
                choicevalue:'b',choiceimg:false,choicetext: 'วิธีการเลี้ยงสัตว์เลี้ยงก่อนนำมาบำบัด'},{
                choicevalue:'c',choiceimg:false,choicetext: 'สถานที่ติดต่อสำหรับรับสัตว์เลี้ยงบำบัด'},{
                choicevalue:'d',choiceimg:false,choicetext: 'จำนวนของคนที่รักษาด้วยสัตว์เลี้ยงบำบัด'}
            ],
            Answer: 'a',
            AnswerDescription:`เนื่องจากสัตว์ที่ใช้บำบัดมีหลายประเภท หลายสายพันธ์ หลายชนิด ดังนั้นการนำเสนอประเภทจะทำให้ผู้อ่านรู้สึกเข้าถึง และใช้ประกอบการตัดสินใจได้`,
            AnswerDescriptionAttachImg:'',
            Category: 'Data handling',
        },
        /*----------  linked question id 28-30  ------------*/
        {   numberoflinkedquestion: 3,
            shufflequestion: true, //false or true
            description_line_i:`บทอ่าน อ่านบทความต่อไปนี้ แล้วตอบคำถาม 3 ข้อต่อไปนี้`,
            description_line_ii : `คนทั่วไปมักสับสนคำว่า "เสมอภาค" กับ "เหมือนกัน" (sameness) ตีความว่าการรับรองความเสมอภาคของมนุษย์เท่ากับการทำให้มนุษย์ทุกคนเท่ากัน จนมักโต้แย้งว่า "ความเสมอภาคไม่มีทางเป็นไปได้" จึงควรทำความเข้าใจเบื้องต้นว่าหลักการของความเสมอภาค ไม่ได้และไม่เคยเรียกร้องให้มนุษย์ทุกคนต้องเหมือนกันหมด เพราะมนุษย์ย่อมแตกต่างกันเป็นธรรมชาติทั้งโดยชาติพันธุ์ รูปร่าง ผิวพรรณ เพศสภาพ บุคลิก ความเชื่อ ศาสนา วัฒนธรรม และอื่น ๆ`,
             linkedquestion:[
                {   id: 28,
                    question: `ข้อใดคือสาระสำคัญของบทความข้างต้น`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ทุกคนต้องการความเสมอภาค'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'เหมือนกันไม่ได้แปลว่าเสมอภาค'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ความแตกต่างทำให้เกิดความเสมอภาค'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'อยากให้คำนึงถึงหลักการความเสมอภาค'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`เนื่องจากบทความข้างต้น พยายามอธิบายลักษณะ และความคิดที่ผิดของคนทั่วไป เกี่ยวกับเสมอภาคและเหมือนกัน ที่หลายคนคิดว่าคือความหมายเดียวกัน แต่ความจริงแล้วนั้นความหมายแตกต่างกัน`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
                {   id: 29,
                    question: `ข้อใดคือข้อเท็จจริง`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'ความเสมอภาคไม่มีทางเป็นไปได้'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'คนทั่วไปมักสับสนคำว่า "เสมอภาค" กับ "เหมือนกัน"'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'มนุษย์ย่อมแตกต่างกันเป็นธรรมชาติทั้งโดยชาติพันธุ์ '},{
                        choicevalue:'d',choiceimg:false,choicetext: 'ความเสมอภาคของมนุษย์เท่ากับการทำให้มนุษย์ทุกคนเท่ากัน '}
                    ],
                    Answer: 'c',
                    AnswerDescription:`มนุษย์ย่อมแตกต่างกันเป็นธรรมชาติทั้งโดยชาติพันธุ์ เป็นข้อเท็จจริงเพราะมีข้อมูลจากวิทยาศาสตร์สามารถตรวจสอบและพิสูจน์ได้`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    },
                {   id: 30,
                    question: `ข้อใดไม่อาจสรุปได้จากบทความข้างต้น`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'มนุษย์ทุกคนมีความแตกต่างกัน'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ความเสมอภาคไม่จำเป็นที่จะต้องเหมือนกัน'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ความแตกต่างจะเป็นพื้นฐานของความเสมอภาค'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'หากต้องการความเสมอภาคต้องเข้าใจความแตกต่างก่อน'}
                    ],
                    Answer: 'c',
                    AnswerDescription:`ไม่มีการกล่าวถึงว่าความแตกต่างเป็นพื้นฐานของความเสมอภาค และข้อความไม่เป็นเหตุเป็นผลซึ่งกันและกัน`,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Data handling',
                    }
            ]
        }
       ]
      }