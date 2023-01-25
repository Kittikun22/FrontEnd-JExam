//Reserved Word & sign `` |   
//questions[i].length < 10
//choice not be same

export const englishexam = {
    questioninfo : [
        { Title:'NETSAT ด้านภาษาอังกฤษ',
        Description_line_i:'ความฉลาดรู้ทั่วไป 102 ด้านภาษาอังกฤษ',
        Description_line_ii:'Reading :Including 3 Part 1.Reading Instructions 2.Reading Correspondence 3.Reading for Information and Argument',
        Description_line_iii:'Writing :Including 2 Part 1.Sentence Completion 2.Error Detection',
        Description_line_iv:'',
        Description_line_v:'',
        NumberofQuestions:11,
        Duration:60, //min
        //define liked question by array order 
        Linkedquestionid : [0,1,2,3,4,5], //index must be order asc
        Category:{'Sentence Completion':6,'Error Detection':8,'Reading Instruction':3,'Reading Correspondence':3,'Reading for information and Argument':4},
        //numberofquestionincategory:[3,2,3,3]
        }],
    questions: [
        /*----------  linked question id 1-6  ------------*/
        {   numberoflinkedquestion: 6,
            shufflequestion: true, //false or true
            description_line_i:`Sentence Completion (6 Points)`,
            linkedquestion:[
            {   id: 1,
                    question: 'Professor had been arrived before we ________ her homework.',
                    choice :[{
                        choicevalue:'a',choicetext:'finished'},{
                        choicevalue:'b',choicetext: 'finish'},{
                        choicevalue:'c',choicetext: 'is finished'},{
                        choicevalue:'d',choicetext: 'will finish'}
                    ],
                Answer: 'a',
                AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Tense
                <br></br><tab></tab> ●	เราสามารถสังเกตได้ว่าประโยคนี้เป็นอดีตแน่นอนสังเกตได้จาก “had been arrived”
                <br></br><tab></tab> ●	ข้อนี้เป็น Tense คู่ระหว่าง Past Perfect (เหตุการณ์ที่เกิดขึ้นก่อนและจบลง) + Past Simple (เหตุการณ์ที่เกิดตามมา)
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'
            },
            {   id: 2,
                    question: 'May I have ________ kind to support me with your device. Due to ________ device is broken yesterday and those are not ________.',
                    choice :[{
                        choicevalue:'a',choicetext:'your, my, mine'},{
                        choicevalue:'b',choicetext: 'you, me, mine'},{
                        choicevalue:'c',choicetext: 'yours, mine, you'},{
                        choicevalue:'d',choicetext: 'your, mine, my'}
                    ],
                    Answer: 'a',
                    AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Pronoun และ Adjective
                    <br></br><tab></tab> ●	ข้อนี้หากสามารถจับจุดได้ ก็จะสามารถคำตอบได้ทันทีนั้นคือ “my / mine” ซึ่ง my เป็น Possessive Adj. ซึ่งต้องตามด้วย คำนามเสมอ ส่วน mine เป็น possessive pronoun ไม่จำเป็นต้องมี คำนามตามหลังนั่นเอง 

                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
            {   id: 3,
                    question: 'Communities along the surrounding coasts of the Indian Ocean ________, and the tsunamis ________ an estimated 227,898 people in 14 countries, making it one of the deadliest natural disasters in recorded history.',
                    choice :[{
                        choicevalue:'a',choicetext: 'were devastated, killed'},{
                        choicevalue:'b',choicetext: 'were devastated, were killed'},{
                        choicevalue:'c',choicetext: 'is devastated, are killed'},{
                        choicevalue:'d',choicetext: 'are devastated, killed'},
                    ],
                    Answer: 'a',
                    AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Tense, Subject & Verb agreement, และ Active & Passive voice
                    <br></br><tab></tab> ●	ในส่วนของ Tense นั้นจะสังเกตได้ว่า เรื่องนี้เป็นเหตุการณ์ Tsunami ที่ผ่านมาแล้ว จึงสามารถทำให้รู้ทันทีว่าต้องเป็นการพูดถึงอดีต ทั้งสองส่วน ดังนั้นเราจึงสามารถตัดข้อที่ไม่ใช้ Past Tense ออกได้เลย นั่นคือ c. และ d.
                    <br></br><tab></tab> ●	ในส่วนของ Subject & Verb agreement นั่น สามารถสังเกตได้จากประธานของประโยคนั้นๆ ซึ่งความยากจะอยู่ที่ประโยคแรกที่หลายๆคนอาจจะเข้าใจว่า “the Indian Ocean” นั้นเป็นประธานของประโยค แต่จริงๆแล้วประธาน คือ “Communities” ส่วนข้อความที่ว่า “along the surrounding coasts of the Indian Ocean” เป็นเพียงแค่ส่วนเติมเต็มเท่านั้น ดังนั้น V ในส่วนแรกจะต้องตามด้วย Plural Verb หรือ กริยาพหูพจน์นั่นเอง
                    <br></br><tab></tab> ●	ในส่วนของ Active & Passive Voice สามารถเดาได้เลยว่า ใครถูกกระทำ ใครเป็นผู้กระทำ ซึ่งแน่นอนว่า ส่วนที่ 2 “Tsunami” เป็นผู้กระทำแน่นอนจึงสามารถตัดข้อที่เป็น “Passive Voice”ออกได้เลยนั่นคือ b. และ d. เพียงเท่านี้ เราก็จะได้คำตอบทั้งหมด
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
                {   id: 4,
                    question: 'Mr. Ronald asked his ________ for the meeting minutes.',
                    choice :[{
                        choicevalue:'a',choicetext: 'assistance'},{
                        choicevalue:'b',choicetext: 'assistant'},{
                        choicevalue:'c',choicetext: 'assisted'},{
                        choicevalue:'d',choicetext: 'assists'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Possessive Adjective (คุณศัพท์เจ้าของ) และความหมายของคำศัพท์
                    <br></br><tab></tab> ●	โดยปกติแล้ว Possessive Adjective จะทำหน้าที่แสดงความเป็นเจ้าของของคำนามใดๆที่มาต่อท้าย นั่นจึงทำให้เราสามารถตัดข้อ c. และ d. ได้เลย เนื่องจากเป็น Verb 
                    <br></br><tab></tab> ●	แต่ข้อ a. และ b. หากรู้ความหมายอยู่แล้วและตีความจากรูปประโยคจะรู้ได้ทันทีว่าส่วนที่หายไปจะต้องเป็นคน นั่นคือข้อ b. ที่มีความหมายว่า “ผู้ช่วย” นั่นเอง
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
                {   id: 5,
                    question: 'Maria is ________ a plane while her twin a boy and a girl are ________ a car.',
                    choice :[{
                        choicevalue:'a',choicetext: 'in, in'},{
                        choicevalue:'b',choicetext: 'on, in'},{
                        choicevalue:'c',choicetext: 'in, on'},{
                        choicevalue:'d',choicetext: 'on, on'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Preposition
                    <br></br><tab></tab> ●	ข้อนี้เป็น Preposition of place ซึ่ง on จะใช้คู่กับ plane และ in จะใช้คู่กับ car นั่นเอง
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
                {   id: 6,
                    question: '________ try to keep the noise down, and ________ never do it again.',
                    choice :[{
                        choicevalue:'a',choicetext: '-, does'},{
                        choicevalue:'b',choicetext: '-, do'},{
                        choicevalue:'c',choicetext: 'Do, -'},{
                        choicevalue:'d',choicetext: 'Does, -'}
                    ],
                    Answer: 'c',
                    AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Imperative Sentence
                    <br></br><tab></tab> ●	โดยปกติแล้ว ประโยคมักจะต้องเขียนประธานไว้ด้านหน้าประโยคเสมอ แต่เมื่ออยู่ในรูป Imperative Sentence จะมีการละประธานโดยใช้ V.inf without to มาขึ้นประโยค ซึ่งประโยคนั้นๆ มักจะละ “You” นั่นเอง
                    <br></br><tab></tab> ●	ซึ่งข้อนี้หากใครรู้อยู่แล้วก็จะเดาได้ทันทีว่า ตอบ c. แต่ทำไมด้านหลังถึงไม่มี V.inf ขึ้นต้น จริงๆแล้วมันคือคำว่า do นั่นเอง เพียงแต่ Imperative ใดก็ตามที่มี always, never, และ ever สามารถใช้คำเหล่านี้วางหน้า V.inf ได้เลย 
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
            ]
        },
         /*----------  linked question id 7-12  ------------*/
        {   numberoflinkedquestion: 6,
            shufflequestion: true, //false or true
            description_line_i:`Sentence Completion (6 Points)`,
            description_line_ii:`
            <tab></tab>As of 30 September Thailand’s Disaster Prevention and Mitigation Department (DDPM) reported flooding ___(A)___ 229,220 households across 6,827 villages ___(B)___ 193 districts of 31 provinces. A total of 7 fatalities have been reported, including 6 in Lopburi Province and 1 in Phetchabun Province where 1 person was reported missing.
            <br></br><tab></tab>Chaiyaphum Province is one of ___(C)___ hit areas, with 71,379 household affected, while in Lopburi a total of 56,138 households ___(D)___. 
            <br></br><tab></tab>Other hard hit provinces include Nakhon Sawan (20,902 households affected), Nakhon Ratchasima (8,787 households affected), Suphanburi (10,798 households affected) and Phra Nakhon Si Ayutthaya (13,445 households affected) ___(E)___ the Chao Phraya river has inundated the districts of Pak Hai, Sena, Bang BanPhra Nakhon Si Ayutthaya and Bang Sai. 
            <br></br><tab></tab>Heavy rain from the storm caused rivers to overflow. According to figures from Thai Water, rivers are above flood level ___(F)___ 40 locations along the Bang Pakong, Tha Chin, Pa Sak, Sakae Krang, Chao Phraya, Nan, Yom, Ping, Mun and Chi rivers, as of 01 October 2021.`,
            attachref:`Ref: https://floodlist.com/asia/thailand-flood-update-september-2021`,
            linkedquestion:[{
                id: 7,
              question: '(A)',
              choice :[{
                    choicevalue:'a',choicetext: 'has affected'},{
                    choicevalue:'b',choicetext: 'has effected'},{
                    choicevalue:'c',choicetext: 'have affected'},{
                    choicevalue:'d',choicetext: 'have effected'}
              ],
              Answer: 'a', 
              AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นการเลือกใช้คำศัพท์ โดยเลือกระหว่าง affect กับ effect ซึ่งปกติแล้ว affect จะเป็น Verb แปลว่า “ส่งผลกระทบ” และ effect จะเป็น Noun แปลว่า “ผลกระทบที่ได้รับ” ดังนั้นจึงต้องเลือกเป็น affect 
              <br></br><tab></tab> ●	แต่จริงๆแล้วมันสามารถ……. ไปฟังต่อใน VDO นะครับ อิอิ
              `,
              AnswerDescriptionAttachImg:'',
              Category: 'Sentence Completion'},{
              id: 8,
              question: '(B)',
              choice :[{
                    choicevalue:'a',choicetext: 'on'},{
                    choicevalue:'b',choicetext: 'at'},{
                    choicevalue:'c',choicetext: 'in'},{
                    choicevalue:'d',choicetext: 'with'}
              ],
              Answer: 'c', 
              AnswerDescription:`<tab></tab> ●	เนื่องจาก in จะใช้กับสถานที่ใหญ่ๆ เช่น หมู่บ้าน `,
              AnswerDescriptionAttachImg:'',
              Category: 'Sentence Completion'},{
              
              attachimglink_ii:` https://i.pinimg.com/originals/ad/4a/74/ad4a7466370ddc4b66e1ab2218d35b8e.gif`,
              id: 9,
              question: '(C)',
              choice :[{
                    choicevalue:'a',choicetext: 'worse'},{
                    choicevalue:'b',choicetext: 'bad'},{
                    choicevalue:'c',choicetext: 'bader'},{
                    choicevalue:'d',choicetext: 'the worst '}
              ],
              Answer: 'd', 
              AnswerDescription:`<tab></tab> ●	ข้อเป็นเรื่อง Comparison
              <br></br><tab></tab> ●	โดยตัวประโยคนั้นต้องการบอกว่าชัยภูมิเป็นหนึ่งในพื้นที่ที่โดนหนักมากที่สุดจึงต้องเลือกเป็น the worst ที่เป็นขั้นสุดนั่นเอง
              `,
              AnswerDescriptionAttachImg:'',
              Category: 'Sentence Completion'},{
                id: 10,
                question: '(D)',
                choice :[{
                      choicevalue:'a',choicetext: 'was affected'},{
                      choicevalue:'b',choicetext: 'were affected'},{
                      choicevalue:'c',choicetext: 'was effected'},{
                      choicevalue:'d',choicetext: 'were effected'}
                ],
                Answer: 'b', 
                AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นการเลือกใช้ affect หรือ effect เหมือนข้อ 7. นั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'},{
                id: 11,
                question: '(E)',
                choice :[{
                      choicevalue:'a',choicetext: 'which'},{
                      choicevalue:'b',choicetext: 'whose'},{
                      choicevalue:'c',choicetext: 'whom'},{
                      choicevalue:'d',choicetext: 'where'}
                ],
                Answer: 'd', 
                AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Adjective Cluase
                <br></br><tab></tab> ●	เนื่องจากคำหน้าเป็น “สถานที่” จึงต้องใช้ where นั่นเอง
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'},{

                id: 12,
                question: '(F)',
                choice :[{
                      choicevalue:'a',choicetext: 'the most'},{
                      choicevalue:'b',choicetext: 'more than'},{
                      choicevalue:'c',choicetext: 'as much as'},{
                      choicevalue:'d',choicetext: 'as many as'}
                ],
                Answer: 'b', 
                AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Comparison
                <br></br><tab></tab> ●	เนื่องจากเป็นการเปรียบเทียบระดับน้ำที่มากกว่าสถานที่อื่นๆนั่นเอง
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'}
            ]
        },
        /*----------  linked question id 13-20  ------------*/
        {   numberoflinkedquestion: 8,
            shufflequestion: true, //false or true
            description_line_i:`Error Detection (8 Points)`,
            linkedquestion:[
              {   //description_line_i:`Look at the picture then Answer the questions below`,
                    id: 13,
                question: '(a.)Dressing up the corset and (b.)other accouterments of aristocratic women (c.)were one of (d.)the more popular grooming in 1898.',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากข้อนี้เป็นเรื่อง Subject and Verb agreement ประธานของประโยคคือ “Dressing up” ซึ่งอยู่ในรูปเอกพจน์ จึงต้องเปลี่ยน were เป็น was นั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                    id: 14,
                question: 'One thing I (a.)should like to do immensely, and that is to tell her, in the way authors have, that the (b.)childs are coming back, that (c.)indeed they will be here (d.)on Thursday.',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'b', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากรูปพหูพจน์ของ child คือ children`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                    id: 15,
                question: 'Some (a.)person have a gift for coming up with ideas. (b.)But for those (c.)that don’t it is (d.)a real struggle.',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'a', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากรูปพหูพจน์ของ person คือ people`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
             {   
                    id: 16,
                question: 'It took all her (a.)self-discipline not to (b.)spent (c.)all day (d.)staring out of the window.',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากโดยทั่วไปแล้วกริยาทีตามหลัง to จะต้องอยู่ในรูป V.inf จึงต้องเปลี่ยน spent เป็น spend นั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
             {   
                    id: 17,
                question: '(a.)Nowadays more travelers are choosing (b.)alternative quarantine (c.)instead of (d.)stayed conventional quarantine.',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'd', 
                AnswerDescription:`<tab></tab> ●	เนื่องจาก “instead of” ส่วนมากจะต้องตามด้วย “V.ing” จึงต้องเปลี่ยน stayed เป็น staying นั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                    id: 18,
                question: 'We pushed ourselves (a.)along the wreck (b.)until we reached the end, just (c.)a fifty-yards swim in (d.)open water to the lighthouse rocks.',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab> ●	โดยปกติแล้วการบอกจำนวนของสิ่งนั้น ๆ เรามักจะใช้ จำนวนตามด้วยคำนามรูปพหูพจน์ แต่ในกรณีที่มี “-” เราสามารถ ใช้คำนามในรูปเอกพจน์ได้เลย`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                    id: 19,
                question: 'You (a.)must have had (b.)a bad time on your vacation. You (c.)seem unhappy and (d.)stress. ',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'd', 
                AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง (Parallel Structure 
                    <br></br><tab></tab> ●	เนื่องจากหน้า and และด้านหลังต้องมีความเป็นคู่ขนาน จึงต้องเปลี่ยน stress (n.) เป็น stressful (adj.) นั่นเอง
                    `,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                    id: 20,
                question: '(a.)Artwork on cave walls (b.)around Europe (c.)was thought to be (d.)first in the world. ',
                choice :[{
                   choicevalue:'a',choicetext: '(a.)'},{
                   choicevalue:'b',choicetext: '(b.)'},{
                   choicevalue:'c',choicetext: '(c.)'},{
                   choicevalue:'d',choicetext: '(d.)'}
                ],
                Answer: 'd', 
                AnswerDescription:`<tab></tab> ●	ข้อนี้เป็นเรื่อง Article
                <br></br><tab></tab> ●	เมื่อเป็นเลขลำดับที่ first, second, third จะต้องใช้ the นำหน้า
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            ]
        },
        /*----------  linked question id 21-23  ------------*/
        {   numberoflinkedquestion: 3,
            shufflequestion: true, //false or true
            description_line_i:`Reading Instruction (3 Points)`,
            description_line_ii:`<img src="https://jknowledgetutor.com/attachfile/netsat/english/q21.png" width="95%"></img>`,
            //attachimglink:`https://jknowledgetutor.com/attachfile/netsat/english/q21.png`,
            attachref:`Ref: https://fccid.io/Z6QFC15024GR/User-Manual/User-Manual-4114432`,
            linkedquestion:[
            {   id: 21,
            
            question: 'In the instruction above, how many parts are there to assemble the car in total?',
            choice :[{
                choicevalue:'a',choicetext: '41'},{
                choicevalue:'b',choicetext: '43'},{
                choicevalue:'c',choicetext: '45'},{
                choicevalue:'d',choicetext: '47'}
            ],
            Answer: 'c', 
            AnswerDescription:`<tab></tab> ●	สามารถนับจำนวนรวมของอุปกรณ์ทั้งหมดจาก Contents`,
            AnswerDescriptionAttachImg:'',
            Category: 'Reading Instruction'
        },{   
                id: 22,
            question: 'Which of the following is incorrect about “RC CAR KIT”? ',
            choice :[{
                choicevalue:'a',choicetext: 'Battery cover plate must loosen by screwdriver.'},{
                choicevalue:'b',choicetext: 'This toy is not appropriate for children under 4 years'},{
                choicevalue:'c',choicetext: 'This toy requires a total of 2 types of batteries: 4 pieces of 1.5V batteries and 1 piece of 9V battery.'},{
                choicevalue:'d',choicetext: 'None of all above.'}
            ],
            Answer: 'b', 
            AnswerDescription:`<tab></tab> ●	สามารถสังเกตได้จาก “Warning” ด้านขวาล่าง`,
            AnswerDescriptionAttachImg:'',
            Category: 'Reading Instruction'
        },{   
                id: 23,
            question: 'Which of the following was showed in “SAFETY WARNING” section?',
            choice :[{
                choicevalue:'a',choicetext: 'Do not mix old batteries.'},{
                choicevalue:'b',choicetext: `Children's use should be under adult supervision.`},{
                choicevalue:'c',choicetext: 'Cat can be used to be the obstacle.'},{
                choicevalue:'d',choicetext: 'Do not charge the non-recharge battery.'}
            ],
            Answer: 'b', 
            AnswerDescription:`<tab></tab> ●	สามารถดูได้ในข้อที่ 8 ของ Safety Warning`,
            AnswerDescriptionAttachImg:'',
            Category: 'Reading Instruction'
        }
            ]
        },/*----------  linked question id 24-26  ------------*/
        {   numberoflinkedquestion: 3,
            shufflequestion: true, //false or true
            description_line_i:`Reading Correspondence (3 Points)`,
            description_line_ii : `
            Dear Ms.Maximoff ,
            <br></br>
            <br></br> I am writing up as a follow-up to our previous phone conversation on September 5 1971, Friday, informing you about your selection in the current year's 'Outstanding' student of the year list. All the faculties of the department made a list. We congratulate you on this achievement!
            For this award, eligibility is judged on the following criteria: 
            <br></br><tab></tab>-3.5+ GPA for combine summer program and winter course for ASIAN languagescourse
            <br></br><tab></tab>- Strong performance in Chinese
            <br></br>Additionally, the selected student must also demonstrate a passion for Chinese language studies, exemplify a commitment to the same profession, and show a positive attitude towards program instructors and peers..
            <br></br>You have successfully met these criteria and demonstrated the outstanding qualities that we look for the student recipients of this award. We invite you and your guests to Student Recognition Event, sponsored by CBAT University, on December 20, 8 AM to 10 AM in Center BAT Room.
            <br></br><tab></tab>Please contact me if you have any more questions.
            <br></br><tab></tab>Congratulations again Ms. Maximoff, we are looking forward to welcoming you and celebrate with you at the awards event on December 20.
            <br></br>
            <br></br>Best
            <br></br>Tony Strank
            <br></br>Chancellor 
            <br></br>CBAT University

            `,
            attachref:`Ref: https://www.aplustopper.com/sample-congratulation-letters/`,
            linkedquestion:[
              {   
                    id: 24,
                question: 'What is the type of the above letter? ',
                choice :[{
                   choicevalue:'a',choicetext: 'Fundraising letter'},{
                   choicevalue:'b',choicetext: 'Internship letter'},{
                   choicevalue:'c',choicetext: 'Congratulations letter'},{
                   choicevalue:'d',choicetext: 'Request letter'}
                ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab> ●	จากตัวจดหมายจะแสดงให้เห็นถึงว่า Ms.Maximoff ได้ GPA สูงและได้รับเลือกให้ได้รางวัลนักเรียนดีเด่นและแสดงความยิรดีนั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading Correspondence'
            },{   
                    id: 25,
                question: 'What kind does Ms. Maximoff study at?',
                choice :[{
                   choicevalue:'a',choicetext: 'Management Sciences'},{
                   choicevalue:'b',choicetext: 'Humanities'},{
                   choicevalue:'c',choicetext: 'Sciences'},{
                   choicevalue:'d',choicetext: 'Agriculture'}
                ],
                Answer: 'b', 
                AnswerDescription:`<tab></tab> ●	จากคอร์ส Asian และ Chinese language สามารถทำให้ทราบว่าข้างต้น Ms. Maximoff เรียนเกี่ยวกับภาษา ข้อนี้จึงเป็นข้อที่ใกล้เคียงที่สุดนั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading Correspondence'
            },{   
                    id: 26,
                question: 'Which of the following is incorrect?',
                choice :[{
                   choicevalue:'a',choicetext: 'Ms. Maximoff got 3.5 GPA.'},{
                   choicevalue:'b',choicetext: 'Ms. Maximoff was invited to the event on December 20, 1971. '},{
                   choicevalue:'c',choicetext: 'The event allows Ms. Maximoff’s guest to join.'},{
                   choicevalue:'d',choicetext: 'All the above is incorrect.'}
                ],
                Answer: 'a', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากตัวจดหมายบอกเพียงว่า 3.5+ ไม่ได้ระบุว่าได้ GPA ที่ 3.5`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading Correspondence'
            },
            ]
        },/*----------  linked question id 27-30  ------------*/
        {   numberoflinkedquestion: 4,
            shufflequestion: true, //false or true
            description_line_i:`Reading for information and Argument (4 Points)`,
            attachimglink:`https://jknowledgetutor.com/attachfile/netsat/english/q27.png`,
            linkedquestion:[
              {   
                    id: 27,
                question: 'Where is this event held?',
                choice :[{
                   choicevalue:'a',choicetext: 'Danny’s Bowling Lane'},{
                   choicevalue:'b',choicetext: '8989 Waverly Road'},{
                   choicevalue:'c',choicetext: 'Both a. and b. are correct'},{
                   choicevalue:'d',choicetext: 'None of all above'}
                ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากทั้ง 2 ข้อเป็นการระบุสถานที่กี่จัดงานนั่นเอง`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },{   
                    id: 28,
                question: 'What is the purpose of this Fundraising event?',
                choice :[{
                   choicevalue:'a',choicetext: 'For care equipment'},{
                   choicevalue:'b',choicetext: 'For education'},{
                   choicevalue:'c',choicetext: 'For veterans'},{
                   choicevalue:'d',choicetext: 'For the disabled'}
                ],
                Answer: 'a', 
                AnswerDescription:`<tab></tab> ●	สามารถสังเกตได้จากคำว่า “… for support programs, equipment and new staff to provide best care for our patients”`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },{   
                    id: 29,
                question: 'How much do you need to pay if you want to attend the event?',
                choice :[{
                   choicevalue:'a',choicetext: '$10'},{
                   choicevalue:'b',choicetext: '$15'},{
                   choicevalue:'c',choicetext: 'Both a. and b. are correct.'},{
                   choicevalue:'d',choicetext: 'There is no mention in the poster.'}
                ],
                Answer: 'd', 
                AnswerDescription:`<tab></tab> ●	จากโปสเตอร์มีเพียงการบอกว่าให้ไปซื้อผ่านเว็ปไซต์เท่านั้น`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },{   
                    id: 30,
                question: 'Which of the following is incorrect about the event?',
                choice :[{
                   choicevalue:'a',choicetext: 'There is Live Band and Lunch.'},{
                   choicevalue:'b',choicetext: 'The event was held between November 6-12.'},{
                   choicevalue:'c',choicetext: 'Both a. and b. are incorrect.'},{
                   choicevalue:'d',choicetext: 'None of the above. '}
                ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab> ●	เนื่องจากงานถูกจัดในวันที่ November 15 และ มีเพียงอาหารค่ำเท่านั้น`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },
            ]
        },
       ]
      }
