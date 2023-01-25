//Reserved Word & sign `` |   
//questions[i].length < 10
//choice not be same

export const biologyexam = {
    questioninfo : [
        { Title:'NETSAT ด้านชีววิทยา',
        Description_line_i:'ความฉลาดรู้เฉพาะด้าน 203 ด้านชีววิทยา',
        Description_line_ii:'Competency การทำนายผลการทดลอง การใช้ประจักษ์พยานทางวิทยาศาสตร์ การแปลความหมายข้อมุล การอธิบายและการให้เหตุผลทางวิทยาศาสตรื การลงข้อสรุป การประยุกต์ใช้ความรุ้',
        Description_line_iii:'ธรรมชาติของสิ่งมีชีวิต การศึกษาชีววิทยา และวิธีการทางวิทยาศาสตร์ โครงสร้างและหน้าที่ของเซลล์ สารชีวโมเลกุล การลำเลียงสารผ่านเข้า-ออกจากเซลล์ การแบ่งเซลล์ และการสร้างเซลล์สืบพันธ์ด้วยแสง การหายใจระดับเซลล์ และการสังเคราะห์',
        Description_line_iv:'สิ่งมีชีวิต พืช สัตว์  และสิ่งมีชีวิตต่างๆ การลำเลียงสาร การหายใจและการแลกเปลี่ยนแก๊ส การรักษาดุลยภาพ การสืบพันธุ์และการเจริญเติบโต วิวัฒนาการ',
        Description_line_iv:'การถ่ายทอดลักษณะทางพันธุกรรม การถ่ายทอดยีนบนโครโมโซม ตามกฏและนอกกฏของเมนเดล สมบัติและหน้าที่ของสารพันธุกรรม การเกิดการกลาย ',
        Description_line_iv:'นิเวศวิทยาและวิวัฒนาการ ระบบนิเวศและการถ่ายทอด พลังงานในระบบนิเวศ ชีวภูมิศาสตร์ ชีวมณฑล วิวัฒนาการ',
        NumberofQuestions:30,
        Duration:60, //min
        //define liked question by array order 
        Linkedquestionid : [15], //index must be order asc
        Category:{'Conversation':3,'Grammar':2,'Reading':3,'Writing':1,'Error':2},
        //numberofquestionincategory:[3,2,3,3]
        }],
    questions: [
        {   id: 1,
                    question: `การทดลองเพาะเลี้ยงเนื้อเยื่อพืชส่วนปลายยอด โดยใช้อาหารเลี้ยงทั้งหมด 3 สูตร พบว่า 
                    <br></br><tab></tab>สูตร ก. เนื้อเยื่อเจริญอย่างรวดเร็ว
                    <br></br><tab></tab>สูตร ข. เนื้อเยื่อไม่เจริญ แต่เซลล์ยังมีชีวิต
                    <br></br><tab></tab>สูตร ค. เนื้อเยื่อตาย
                    <br></br>จากข้อมูล ข้อใดจัดเป็นสมมติฐาน`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'เนื้อเยื่อส่วนปลายยอดเหมาะสมสำหรับทำการทดลองสูตรของอาหารเลี้ยง'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'สูตร ก. เท่านั้นเหมาะสมต่อการเพาะเลี้ยงเนื้อเยื่อพืชส่วนปลายยอด'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'เนื้อเยื่อแต่ละบริเวณของพืชตอบสนองต่อสูตรอาหารแตกต่างกัน'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'อัตราการรอดของเนื้อเยื่อพืชขึ้นกับสูตรของอาหารเลี้ยง'}
                    ],
                    Answer: 'd',
                AnswerDescription:`<tab></tab> การทดลองเพาะเลี้ยงเนื้อเยื่อพืชส่วนปลายยอด โดยใช้อาหารเลี้ยงทั้งหมด 3 สูตร พบว่า 
                <br></br><tab></tab>สูตร ก. เนื้อเยื่อเจริญอย่างรวดเร็ว
                <br></br><tab></tab>สูตร ข. เนื้อเยื่อไม่เจริญ แต่เซลล์ยังมีชีวิต
                <br></br><tab></tab>สูตร ค. เนื้อเยื่อตาย
                <br></br>ข้อ 4 อัตราการรอดของเนื้อเยื่อพืชขึ้นกับสูตรของอาหารเลี้ยงจัดเป็นสมมติฐาน เพราะเป็นการคาดการณ์ผลซึ่งเกี่ยวข้องกับการทดลอง
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'
            },
            {   id: 2,
                question: 'นักเรียนคนหนึ่งทำการศึกษาวิชาชีววิทยาพบว่า มีสาขาย่อยที่ศึกษาสิ่งมีชีวิตต่าง ๆ มากมาย โดยนักเรียนคนนี้สนใจศึกษาเกี่ยวกับพืชในแง่มุมต่าง ๆ และสนใจการศึกษาเกี่ยวกับพฤติกรรมของสัตว์ ข้อใดกล่าวถูกต้อง',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'วิชาที่ศึกษาเกี่ยวกับพืช คือ Botany  วิชาที่ศึกษาเกี่ยวกับพฤติกรรมสัตว์ คือ Ethology'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'วิชาที่ศึกษาเกี่ยวกับพืช คือ Botany  วิชาที่ศึกษาเกี่ยวกับพฤติกรรมสัตว์ คือ Entomology'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'วิชาที่ศึกษาเกี่ยวกับพืช คือ Ecology วิชาที่ศึกษาเกี่ยวกับพฤติกรรมสัตว์ คือ Ethology'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'วิชาที่ศึกษาเกี่ยวกับพืช คือ Ornithology วิชาที่ศึกษาเกี่ยวกับพฤติกรรมสัตว์ คือ Histology'}
                ],
                Answer: 'a',
                    AnswerDescription:`<tab></tab>วิชาที่ศึกษาเกี่ยวกับพืช คือ Botany  วิชาที่ศึกษาเกี่ยวกับพฤติกรรมสัตว์ คือ Ethology
                    <br></br><tab></tab>ส่วนวิชาอื่น ๆ	วิชาที่ศึกษาเกี่ยวกับแมลง คือ Entomology
                    <br></br><tab></tab>วิชาที่ศึกษาเกี่ยวกับระบบนิเวศ คือ Ecology
                    <br></br><tab></tab>วิชาที่ศึกษาเกี่ยวกับนก คือ Ornithology 
                    <br></br><tab></tab>วิชาที่ศึกษาเกี่ยวกับเนื้อเยื่อ คือ Histology
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
            {   id: 3,
                question:  `โครงสร้างส่วนของสเปิร์มบรรจุเอนไซม์ที่ใช้ย่อยสารเคลือบเซลล์ของเซลล์ไข่ โครงสร้างดังกล่าวเรียกว่า ถุง Acrosome จากข้อความการสร้างถุง Acrosome เกี่ยวข้องกับออร์แกเนลล์ใด`,
                choice :[{
                   choicevalue:'a',choiceimg:false,choicetext:'ไมโทคอนเดรีย'},{
                   choicevalue:'b',choiceimg:false,choicetext: 'ไลโซโซม '},{
                   choicevalue:'c',choiceimg:false,choicetext:'แวคคิวโอล'},{
                   choicevalue:'d',choiceimg:false,choicetext: 'กอลจิ บอดี'}
               ],
               Answer: 'd',
                    AnswerDescription:`<tab></tab> โครงสร้างส่วนของสเปิร์มบรรจุเอนไซม์ที่ใช้ย่อยสารเคลือบเซลล์ของเซลล์ไข่ โครงสร้างดังกล่าวเรียกว่า Acrosome โดย Acrosome ถูกผลิตจาก กอลจิ บอดี
                    <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad3-1.png" height="220px"></img> 
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
                {   id: 4,
                    question: `ข้อใดต่อไปนี้ ศึกษาภายใต้กล้องจุลทรรศน์ได้อย่างเหมาะสม 
                    <br></br><tab></tab>I. โครโมโซมใช้กล้องจุลทรรศน์แบบใช้แสงเชิงประกอบในการศึกษา
                    <br></br><tab></tab>II. ไวรัสใช้กล้องจุลทรรศน์แบบใช้แสงแบบสเตอริโอในการศึกษา
                    <br></br><tab></tab>III. ละอองเกสรใช้กล้องจุลทรรศน์แบบใช้แสงแบบสเตอริโอในการศึกษา
                        `,
                 choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'I'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'II'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'II และ III'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'I และ III'}
                  ],
                 Answer: 'd',
                    AnswerDescription:`<tab></tab> I. โครโมโซมใช้กล้องจุลทรรศน์แบบใช้แสงเชิงประกอบในการศึกษา - เหมาะสม
                    <br></br><tab></tab>II. ไวรัสใช้กล้องจุลทรรศน์แบบใช้แสงแบบสเตอริโอในการศึกษา – ไม่เหมาะสม
                    <br></br><2tab></2tab>การศึกษาไวรัสควรใช้กล้องจุลทรรศน์อิเล็กตรอนในการศึกษา
                    <br></br><tab></tab>III. ละอองเกสรใช้กล้องจุลทรรศน์แบบใช้แสงแบบสเตอริโอในการศึกษา - เหมาะสม
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
                {   id: 5,
                    question: `<img src="https://jknowledgetutor.com/attachfile/netsat/biology/bq5-1.png" height="150px"></img> 
                    <br></br> ข้อใดกล่าวไม่ถูกต้อง`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext:'น้ำตาลทั้งสองชนิดจัดเป็น น้ำตาล Pentose'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ในดีเอ็นเอจะมีน้ำตาล Ribose เป็นองค์ประกอบ'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ในสารพลังงานสูง เช่น ATP มีน้ำตาล Ribose เป็นองค์ประกอบ'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'น้ำตาล 2-Deoxyribose มีอะตอมออกซิเจนน้อยกว่าน้ำตาล Ribose'}
                    ],
                    Answer: 'b',
                    AnswerDescription:`<tab></tab> ในดีเอ็นเอจะมีน้ำตาล 2-Deoxyribose เป็นองค์ประกอบ โดยหน่วยย่อยของดีเอ็นเอ คือ
                    ดีออกซีไรโบนิวคลีโอไทด์ (Deoxyribonucleotide)
                    <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad5-1.png" height="220px"></img>
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
                {   id: 6,
                    question: `สารละลายภายนอกเซลล์มีความเข้มข้นมากกว่าสารละลายภายในเซลล์ จะส่งผลให้น้ำแพร่ออกจากเซลล์ 
                    <br></br><tab></tab>สารละลายนี้จัดเป็น 
                    <br></br><2tab></2tab>A. hypertonic 
                    <br></br><2tab></2tab>B. hypotonic
                    <br></br><2tab></2tab>C. isotonic 
                    <br></br><tab></tab>ซึ่งเมื่อนำเซลล์เม็ดเลือดแดงใส่ลงไปในสารละลายนี้ ผลที่จะเกิดกับเซลล์เม็ดเลือดแดง คือ
                    <br></br><2tab></2tab>I. hemolysis
                    <br></br><2tab></2tab>II. plasmolysis`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext:'A , II'},{
                            choicevalue:'b',choiceimg:false,choicetext: 'B , II'},{
                            choicevalue:'c',choiceimg:false,choicetext: 'C , I'},{
                            choicevalue:'d',choiceimg:false,choicetext: 'B , I'}
                    ],
                    Answer: 'a',
                    AnswerDescription:`<tab></tab> สารละลายภายนอกเซลล์มีความเข้มข้นมากกว่าสารละลายภายในเซลล์ จะส่งผลให้น้ำแพร่ออกจากเซลล์ สารละลายนี้จัดเป็น hypertonic ซึ่งเมื่อนำเซลล์เม็ดเลือดแดงใส่ลงไปในสารละลายนี้ ผลที่จะเกิดกับเซลล์เม็ดเลือดแดง คือ เซลล์เหี่ยว (plasmolysis)
                    <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad6-1.png" width="90%"></img>
                    `,
                    AnswerDescriptionAttachImg:'',
                    Category: 'Sentence Completion'
                },
         {  id: 7,
              question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม
              <br></br><2tab></2tab>A. เกิดครอสซิงโอเวอร์ (crossing over)
              <br></br><2tab></2tab>B. สร้างแผ่นกั้นเซลล์ (cell plate)
              <br></br><2tab></2tab>C. ฮอมอโลกัสโครโมโซมเรียงตัวแนวกึ่งกลาง (metaphase plate)
              <br></br><2tab></2tab>D. แยกฮอมอโลกัสโครโมโซม (homologous chromosome)
              <br></br><2tab></2tab>E. แยกซิสเตอร์โครมาทิด (sister chromatids)
              <br></br><tab></tab>เมื่อกำหนดให้
              <br></br><2tab></2tab>I. ระยะแอนาเฟส I
              <br></br><2tab></2tab>II. ระยะแอนาเฟส II
              <br></br><2tab></2tab>III. ระยะเทโลเฟส II
              <br></br>ข้อใดจับคู่ได้ถูกต้อง
                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext:'A , III'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'B , I'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'D , I และ E , II'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'A , II และ C , III'}
                ],
                Answer: 'c',
              AnswerDescription:`<br></br><tab></tab>A. เกิดครอสซิงโอเวอร์ (crossing over) – ระยะโพรเฟส I
              <br></br><tab></tab>B. สร้างแผ่นกั้นเซลล์ (cell plate) - ระยะแบ่งไซโตพลาสซึม
              <br></br><tab></tab>C. ฮอมอโลกัสโครโมโซมเรียงตัวแนวกึ่งกลาง (metaphase plate) - ระยะเมทาเฟส
              <br></br><tab></tab>D. แยกฮอมอโลกัสโครโมโซม (homologous chromosome) - ระยะแอนาเฟส I
              <br></br><tab></tab>E. แยกซิสเตอร์โครมาทิด (sister chromatids) - ระยะแอนาเฟส II
              `,
              AnswerDescriptionAttachImg:'',
              Category: 'Sentence Completion'
            },
            { id: 8,
                question: `ขั้นตอนการสร้าง Acetyl Co-A เกิดขึ้นบริเวณใด`,
                 choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'cytosol'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'stroma'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'matrix'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'extracellular matrix'}
                  ],
                 Answer: 'c',
              AnswerDescription:`<tab></tab> ขั้นตอนการสร้าง Acetyl Co-A เกิดขึ้นบริเวณ matrix (ของเหลวภายในไมโทคอนเดรีย) `,
              AnswerDescriptionAttachImg:'',
              Category: 'Sentence Completion'},
              {
              id: 9,
              question: 'ข้อใดกล่าวถูกต้องเกี่ยวกับวัฏจักรคัลวิน',
              choice :[{
                choicevalue:'a',choiceimg:false,choicetext: 'สารเสถียรตัวแรก คือ PGA'},{
                choicevalue:'b',choiceimg:false,choicetext: 'ขั้นตอนรีดักชันไม่มีการใช้สารพลังงานสูง'},{
                choicevalue:'c',choiceimg:false,choicetext: 'เอนไซม์ที่ช่วยเร่งปฏิกิริยา คือ RuBP'},{
                choicevalue:'d',choiceimg:false,choicetext: 'น้ำตาลที่ได้จากวัฏจักรคัลวินมีคาร์บอน 4 อะตอม'}
              ],
                Answer: 'a',
              AnswerDescription:`<tab></tab>เมื่อพิจาณาจากตัวเลือก
              <br></br><tab></tab>1.สารเสถียรตัวแรก คือ PGA – ถูกต้อง
              <br></br><tab></tab>2.ขั้นตอนรีดักชันไม่มีการใช้สารพลังงานสูง – ไม่ถูกต้อง
              <br></br><2tab></2tab>ขั้นตอนนี้มีการใช้ NADPH และ ATP ในการเปลี่ยน PGA ให้เป็น PGAL
              <br></br><tab></tab>3.เอนไซม์ที่ช่วยเร่งปฏิกิริยา คือ RuBP – ไม่ถูกต้อง
              <br></br><2tab></2tab>เอนไซม์ที่ช่วยเร่งปฏิกิริยา คือ Rubisco
              <br></br><tab></tab>4.น้ำตาลที่ได้จากวัฏจักรคัลวินมีคาร์บอน 4 อะตอม – ไม่ถูกต้อง
              <br></br><2tab></2tab>น้ำตาลที่ได้ คือ PGAL มีคาร์บอน 3 อะตอม
                `,
              AnswerDescriptionAttachImg:'',
              Category: 'Sentence Completion'},{
                id: 10,
                question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม 
                <br></br><tab></tab>1. ลิ้นไตรคัสปิด (Tricuspid valve) 
                <br></br><tab></tab>2. ลิ้นไบคัสปิด (Bicuspid valve) 
                <br></br><tab></tab>3. ลิ้นเอออร์ติกเซมิลูนาร์ (Aortic semilunar valve) 
                <br></br><tab></tab>4. ลิ้นพัลโมนารีเซมิลูนาร์ (Pulmonary semilunar valve ) 
                <br></br>กำหนดให้
                <br></br>หัวใจห้องบนซ้าย (ลิ้น X) หัวใจห้องล่างซ้าย
                <br></br>หัวใจห้องล่างซ้าย (ลิ้น Y) หลอดเลือดเอออร์ตา
                <br></br>จากข้อมูลข้อใดถูกต้อง
                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ลิ้น X คือ หมายเลข 1'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ลิ้น Y คือ หมายเลข 2'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ลิ้น X คือ หมายเลข 4'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ลิ้น Y คือ หมายเลข 3'}
                  ],
                Answer: 'd',
                AnswerDescription:`<tab></tab> หัวใจห้องบนซ้าย (ลิ้น X) หัวใจห้องล่างซ้าย
                <br></br><tab></tab>ลิ้น X คือ ลิ้นไบคัสปิด (Bicuspid valve)
                <br></br><tab></tab>หัวใจห้องล่างซ้าย (ลิ้น Y) หลอดเลือดเอออร์ตา
                <br></br><tab></tab>ลิ้น Y คือ ลิ้นเอออร์ติกเซมิลูนาร์ (Aortic semilunar valve)
                
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'
            },{
                id: 11,
                question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม
                <br></br><tab></tab>เมื่อร่างกายมีปรสิต หรือ พยาธิเข้ามาในร่างกาย จะตรวจพบเม็ดเลือดขาวชนิด
                <br></br><2tab></2tab>A. Neutrophil
                <br></br><2tab></2tab>B. Basophil
                <br></br><2tab></2tab>C. Eosinophil
                <br></br><tab></tab>สังเกตเม็ดเลือดขาวชนิดนี้โดยการย้อมติดสี
                <br></br><2tab></2tab>I. ย้อมติดสีกรด
                <br></br><2tab></2tab>II. ย้อมติดสีเบส
                `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'A , II'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'C , I'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'B , I'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'B , II'}
                  ],
                Answer: 'b',
                AnswerDescription:`<tab></tab> เมื่อร่างกายมีปรสิต หรือ พยาธิเข้ามาในร่างกาย จะตรวจพบเม็ดเลือดขาวชนิด Eosinophil
                สังเกตเม็ดเลือดขาวชนิดนี้โดยการย้อมติดสีกรด
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad11-1.png" height="135px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'
                },{

                id: 12,
                question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม
                <br></br><2tab></2tab>A. ผิวร่างกาย
	            <br></br><2tab></2tab>B. ระบบท่อลม
	            <br></br><2tab></2tab>C. แผงปอด (book lung)
	            <br></br><2tab></2tab>D. ปอด
	            <br></br><2tab></2tab>E. ดาวทะเล
	            <br></br><2tab></2tab>F. หอยทาก
	            <br></br><2tab></2tab>G. แมงมุม
	            <br></br><2tab></2tab>H. กิ้งกือ
                ข้อใดจับคู่ได้ถูกต้อง
                `,
                 choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'C-G และ D-F'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'A-H และ B-G'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'B-G และ A-E'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'C-H และ D-G'}
                  ],
                 Answer: 'a',
                AnswerDescription:`<br></br><2tab></2tab>G. แมงมุม 	ใช้ C. แผงปอด (book lung)
                <br></br><2tab></2tab>F. หอยทาก 	ใช้ D. ปอด
                <br></br><2tab></2tab>ส่วนตัวเลือก 	ดาวทะเล ใช้ เหงือก
                <br></br><2tab></2tab>กิ้งกือ ใช้ ระบบท่อลม
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad12-1.png" width="70%"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Sentence Completion'
            },
              {  
                    id: 13,
                    question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม
                    <br></br><2tab></2tab>1. trachea
                    <br></br><2tab></2tab>2. lungs
                    <br></br><2tab></2tab>3. anterior air sac
                    <br></br><2tab></2tab>4. posterior air sac
                    <br></br>จากโครงสร้างของระบบหายใจของนก เริ่มจากหายใจเข้าเอาอากาศเข้าไปจนหายใจออก          
                    <br></br>จงเรียงลำดับว่าอากาศจะผ่านโครงสร้างใดบ้าง
                    `,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '1 3 4 2 1'},{
                        choicevalue:'b',choiceimg:false,choicetext: '1 4 2 3 1'},{
                        choicevalue:'c',choiceimg:false,choicetext: '1 2 3 4 1'},{
                        choicevalue:'d',choiceimg:false,choicetext: '1 4 3 2 1'}
                      ],
                    Answer: 'b',
                AnswerDescription:`<tab></tab> เริ่มจากหายใจเข้าเอาอากาศเข้าไปจนหายใจออกอากาศจะผ่านโครงสร้าง 
                <br></br><tab></tab>trachea > posterior air sac > lungs  > anterior air sac > trachea
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad13-1.png" height="165px"></img>
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                id: 14,
                question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/bq14-1.png" height="175px"></img><br></br>
                <br></br><3tab></3tab><tab></tab>สัตว์ชนิดหนึ่ง
                <br></br><tab></tab>จากโครงสร้างของท่อหน่วยไต จะสังเกตว่าในสัตว์ชนิดหนึ่ง Loop of Henle มีลักษณะที่ยาวมาก                   
                <br></br><tab></tab>โครงสร้างลักษณะนี้น่าจะพบในสัตว์ชนิดใด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'แมว'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'สุนัขจิ้งจอก'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'หนูทะเลทราย'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'กระต่าย'}
                    ],
                Answer: 'c',
                AnswerDescription:`<tab></tab> Loop of Henle มีลักษณะที่ยาวมาก โครงสร้างลักษณะนี้น่าจะพบในสัตว์เลี้ยงลูกด้วยน้ำนมที่อาศัยในทะเลทราย เช่น อูฐ หนูทะเลทราย เพื่อเพิ่มประสิทธิภาพในการดูดน้ำ และรักษาสมดุลน้ำ`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
            id: 15,
                question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม
                <br></br><2tab></2tab>1. กลูโคส
                <br></br><2tab></2tab>2. โปรตีน
                <br></br><2tab></2tab>3. ยูเรีย
                <br></br><2tab></2tab>4. โซเดียม
                <br></br><2tab></2tab>5. น้ำ
                <br></br>สารในข้อใดที่สามารถพบในของเหลวที่ผ่านจากท่อหน่วยไตมายังท่อไตของมนุษย์
               `,
               choice :[{
                   choicevalue:'a',choiceimg:false,choicetext: '1 2 3'},{
                   choicevalue:'b',choiceimg:false,choicetext: '2 3 5'},{
                   choicevalue:'c',choiceimg:false,choicetext: '3 4 5'},{
                   choicevalue:'d',choiceimg:false,choicetext: '1 3 4'}
               ],
               Answer: 'c',
                AnswerDescription:`เมื่อพิจารณาแต่ละสาร 
                <br></br><tab></tab>1. กลูโคส ถูกดูดกลับหมดบริเวณท่อขดส่วนต้น
                <br></br><tab></tab>2. โปรตีน ไม่สามารถผ่านเข้ามาในท่อหน่วยไต (ขนาดใหญ่)
                <br></br><tab></tab>3. ยูเรีย พบได้เพราะเป็นของเสียที่ร่างกายต้องขับทิ้ง
                <br></br><tab></tab>4. โซเดียม พบได้เพราะละลายปนในน้ำส่วนเกินที่ร่างกายต้องขับทิ้ง
                <br></br><tab></tab>5. น้ำ พบได้เพราะน้ำส่วนเกินที่ร่างกายต้องขับทิ้ง (ปัสสาวะ)
                `,
                AnswerDescriptionAttachImg: ``,
                Category: 'Error Detection'
            },/*----------  linked question id 16-17  ------------*/
            {   numberoflinkedquestion: 2,
                shufflequestion: true, //false or true
                description_line_i:`จากภาพใช้ตอบคำถาม 2 ข้อต่อไปนี้ 
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/bq16-1.png" width="85%"></img>`,
                linkedquestion:[
                    {   id: 16,
                        question: `สัตว์ในกลุ่มใดต่อไปนี้ที่มีลักษณะเอ็มบริโอตามแผนภาพ
                        <br></br><tab></tab>1. ปลากระดูกแข็ง
                        <br></br><tab></tab>2. สัตว์เลื้อยคลาน
                        <br></br><tab></tab>3. สัตว์ปีก
                        <br></br><tab></tab>4. สัตว์สะเทินน้ำสะเทินบก
                        <br></br><tab></tab>5. สัตว์เลี้ยงลูกด้วยน้ำนม
                    `,
                        choice :[{
                            choicevalue:'a',choiceimg:false,choicetext: '1 2 4'},{
                            choicevalue:'b',choiceimg:false,choicetext: '2 3 5'},{
                            choicevalue:'c',choiceimg:false,choicetext: '1 3 4'},{
                            choicevalue:'d',choiceimg:false,choicetext: '3 4 5'}
                        ],
                        Answer: 'b',
                        AnswerDescription:`<tab></tab>สัตว์ในกลุ่มใดต่อไปนี้ที่มีลักษณะเอ็มบริโอตามแผนภาพ ซึ่งคือ กลุ่มตัวอ่อนอยู่ในถุงน้ำคร่ำ
                        พบได้ใน สัตว์เลื้อยคลาน / สัตว์ปีก / สัตว์เลี้ยงลูกด้วยน้ำนม
                        `,
                        AnswerDescriptionAttachImg:'',
                        Category: 'Grammar'
                    },
                    {   id: 17,
                        question: `รกของสัตว์เลี้ยงลูกด้วยน้ำนม ทำหน้าที่เดียวกันกับโครงสร้างใดในภาพ`,
                        choice :[{
                            choicevalue:'a',choiceimg:false,choicetext: 'A , B'},{
                            choicevalue:'b',choiceimg:false,choicetext: 'C , F'},{
                            choicevalue:'c',choiceimg:false,choicetext: 'D , E'},{
                            choicevalue:'d',choiceimg:false,choicetext: 'C , D'}
                        ],
                        Answer: 'c',
                        AnswerDescription:`<tab></tab>รกของสัตว์เลี้ยงลูกด้วยน้ำนม ทำหน้า ส่งอาหารจากแม่ให้ตัวอ่อน และกำจัดของเสีย
                        <br></br><tab></tab>โดยจากภาพ extraembryonic membrane 		
                        <br></br><2tab></2tab>D – allantois (จัดการของเสีย)
                        <br></br><2tab></2tab>E – Yolk sac (เก็บอาหารของตัวอ่อน)
                         `,
                        AnswerDescriptionAttachImg:'',
                        Category: 'Grammar'
                    },
                ]
            },
            {   
                id: 18,
                question: `<br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/bq18-1.png" height="125px"></img>
                <br></br>จากภาพโครงสร้างของเนื้อเยื่อพืชต่อไปนี้ 
                <br></br>หากย้อมด้วย safranin ด้วยวิธีมาตรฐานในห้องปฏิบัติการ เนื้อเยื่อในข้อใดจะย้อมติดสีแดงของสารนี้
                
                `,
                choice :[{
                   choicevalue:'a',choicetext: '1'},{
                   choicevalue:'b',choicetext: '2'},{
                   choicevalue:'c',choicetext: '2,3'},{
                   choicevalue:'d',choicetext: '1,3'}
                ],
                Answer: 'a', 
                AnswerDescription:`<img src="https://jknowledgetutor.com/attachfile/netsat/biology/bq18-1.png" height="125px"></img>
                <br></br>จากภาพโครงสร้างของเนื้อเยื่อพืชหากย้อมด้วย safranin ด้วยวิธีมาตรฐานในห้องปฏิบัติการ 
                <br></br>เนื้อเยื่อหมายเลข 1 จะย้อมติดสีแดงของสารนี้ หมายเลข 1 คือ Sclerenchyma 
                <br></br>มีผนังเซลล์ทุติยภูมิจึงย้อมติดสีของ safranin
                <br></br><2tab></2tab>-	หมายเลข 2 Parenchyma
                <br></br><2tab></2tab>-	หมายเลข 3 Collenchyma
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                id: 19,
                    question: `ข้อใดกล่าวถูกต้องเกี่ยวกับการลำเลียงอาหารในพืช`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: 'เซลล์หลักที่ใช้ในการลำเลียงไม่มี vacuole'},{
                        choicevalue:'b',choiceimg:false,choicetext: 'ลำเลียงอาหารในท่อในรูปของน้ำตาลโมเลกุลเดี่ยวเป็นหลัก'},{
                        choicevalue:'c',choiceimg:false,choicetext: 'ลำเลียงอาหารจากแหล่ง sink ไปยัง source'},{
                        choicevalue:'d',choiceimg:false,choicetext: 'การลำเลียงอาหารไม่ต้องอาศัยน้ำจากท่อ xylem'}
                    ],
                    Answer: 'a',
                AnswerDescription:`<tab></tab> เมื่อพิจารณาตัวเลือก
                <br></br><tab></tab>ตัวเลือก 2 ลำเลียงอาหารในท่อในรูปของน้ำตาลโมเลกุลคู่เป็นหลัก
                <br></br><tab></tab>ตัวเลือก 3 ลำเลียงอาหารจากแหล่ง source ไปยัง sink
                <br></br><tab></tab>ตัวเลือก 4 การลำเลียงอาหารต้องอาศัยน้ำจากท่อ xylem
                <br></br><tab></tab><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad19-1.png" height="125px"></img>
                <br></br><tab></tab>เซลล์หลักที่ใช้ในการลำเลียงไม่มี vacuole กล่าวถูกต้อง ซึ่งเซลล์หลัก คือ sieve tube member ในตอนแรกจะยังมีนิวเคลียสและออร์แกเนลล์ต่าง ๆ แต่เมื่อโตเต็มที่จะสลายส่วนที่อยู่ภายในเซลล์ออก ดังนั้น ออร์แกเนลล์ต่าง ๆ รวมถึง vacuole จึงไม่มี`,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
            {   
                id: 20,
                question: `ส่วนใดของมะพร้าวมีชุดโครโมโซมเป็น 3n`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'กะลามะพร้าว'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'กาบมะพร้าว'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'จาวมะพร้าว'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'น้ำมะพร้าว'}
                ],
                Answer: 'd',
                AnswerDescription:`ส่วนใดของมะพร้าวมีชุดโครโมโซมเป็น 3n คือ endosperm (อาหารเลี้ยงตัวอ่อน)
                <br></br><tab></tab>ซึ่งในมะพร้าวส่วนของ endosperm คือ เนื้อมะพร้าว และ น้ำมะพร้าว
                <br></br><tab></tab>ส่วนโครงสร้าง	1. กะลามะพร้าว – ผนังผล
                <br></br><tab></tab>2. กาบมะพร้าว - ผนังผล
                <br></br><tab></tab>3. จาวมะพร้าว - ใบเลี้ยง + ยอดอ่อน
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Error Detection'
            },
        {   id: 21,
                question: `สีของดอกไม้ชนิดหนึ่ง มีลักษณะการข่มไม่สมบูรณ์ ข้อใดกล่าวถูกต้อง 
                <br></br><tab></tab>I. ผสมระหว่างดอกสีแดงกับดอกสีแดง ลูกที่เกิดขึ้นมีฟีโนไทป์ 1 แบบ 
                <br></br><tab></tab>II. ผสมระหว่างดอกสีชมพูกับดอกสีชมพู ลูกที่เกิดขึ้นฟีโนไทป์ต่างจากพ่อแม่ทุกต้น 
                <br></br><tab></tab>III. ผสมระหว่างดอกสีชมพูกับดอกสีขาว ลูกที่เกิดขึ้นมีทั้งดอกสีแดง สีขาว สีชมพู `,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'I'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'II'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'I,II'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'I,III'}
                  ],
                Answer: 'a',
            AnswerDescription:` สีของดอกไม้ชนิดหนึ่ง มีลักษณะการข่มไม่สมบูรณ์ 
            <br></br><tab></tab>I. ผสมระหว่างดอกสีแดงกับดอกสีแดง ลูกที่เกิดขึ้นมีฟีโนไทป์ 1 แบบ
            <br></br><tab></tab>II. ผสมระหว่างดอกสีชมพูกับดอกสีชมพู ลูกที่เกิดขึ้นฟีโนไทป์ต่างจากพ่อแม่ทุกต้น
            <br></br><tab></tab>III. ผสมระหว่างดอกสีชมพูกับดอกสีขาว ลูกที่เกิดขึ้นมีทั้งดอกสีแดง สีขาว สีชมพู   
            <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad21-1.png" width="90%"></img>     
            `,
            AnswerDescriptionAttachImg:'',
            Category: 'Reading Instruction'
        },{   
                id: 22,
            question: `จงตอบคำถามต่อไปนี้ 
            <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/bq22-1.png" width="90%"></img> 
            <br></br>บุคคลในพงศาวลีนี้มีรูปแบบการถ่ายทอดลักษณะทางพันธุกรรมเป็นแบบใด
            `,
            choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'ยีนด้อยบนโครโมโซมร่างกาย'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ยีนด้อยบนโครโมโซมเพศ'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'ยีนเด่นบนโครโมโซมร่างกาย'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ยีนเด่นบนโครโมโซมเพศ'}
                  ],
            Answer: 'b', 
            AnswerDescription:`
            <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad22-1.png" width="90%"></img> 
            <br></br>พงศาวลีนี้มีรูปแบบการถ่ายทอดลักษณะทางพันธุกรรมเป็นแบบ ยีนด้อยบนโครโมโซมเพศ`,
            AnswerDescriptionAttachImg:'',
            Category: 'Reading Instruction'
        },{   
                id: 23,
                question: 'ข้อใดกล่าวผิดเกี่ยวกับการจำลองดีเอ็นเอ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'สาย leading strand มีตำแหน่ง primer น้อยกว่าสาย lagging strand'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'สาย leading strand ไม่พบการใช้ DNA ligase'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'เอนไซม์ helicase ทำหน้าที่สลายพันธะไฮโดรเจนของเบสคู่สม'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ยีเอนไซม์ DNA polymerase เป็นเอนไซม์ที่เติมนิวคลีโอไทด์จากด้าน 3’'}
                ],
                Answer: 'b',
            AnswerDescription:`<tab></tab> 1. สาย leading strand มีตำแหน่ง primer น้อยกว่าสาย lagging strand - ถูก
            <br></br><tab></tab>3. เอนไซม์ helicase ทำหน้าที่สลายพันธะไฮโดรเจนของเบสคู่สม - ถูก
            <br></br><tab></tab>4. เอนไซม์ DNA polymerase เป็นเอนไซม์ที่เติมนิวคลีโอไทด์จากด้าน 3’ - ถูก
            <br></br>เมื่อพิจารณาข้อความ
            <br></br><tab></tab>2. สาย leading strand ไม่พบการใช้ DNA ligase - ผิด
            <br></br><3tab></3tab>เพราะ สาย leading strand พบการใช้ DNA ligase หลังจากการนำ primer ออก จำเป็นต้องเชื่อมสายนิวคลีโอไทด์เช่นกัน
            `,
            AnswerDescriptionAttachImg:'',
            Category: 'Reading Instruction'
        },
              {   
                id: 24,
                question: `ในประชากร 300 คน พบเป็นโรคทางพันธุกรรมที่มีจีโนไทป์ yy จำนวน 27 คน จากข้อมูลที่กำหนดจะมีคนจีโนไทป์ YY จำนวนกี่คน`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '36'},{
                    choicevalue:'b',choiceimg:false,choicetext: '49'},{
                    choicevalue:'c',choiceimg:false,choicetext: '147'},{
                    choicevalue:'d',choiceimg:false,choicetext: '273'}
                ],
                Answer: 'c',
                AnswerDescription:`พบคนที่มีจีโนไทป์ YY จำนวน 147 คน
                <br></br><img src="https://jknowledgetutor.com/attachfile/netsat/biology/ad24-1.png" width="90%"></img> 
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading Correspondence'
            },{   
                    id: 25,
                    question: `ให้นำข้อมูลจากหมายเลขดังต่อไปนี้ ไปใช้ในการตอบคำถาม 
                    <br></br><2tab></2tab>1. temporal isolation 
                    <br></br><2tab></2tab>2. behavioral isolation 
                    <br></br><2tab></2tab>3. mechanical isolation 
                    <br></br><2tab></2tab>4. habitat isolation 
                    <br></br><2tab></2tab>5. gametic isolation 
                    <br></br>ทางตอนเหนือของเกาะสุมาตรา มีคางคก 2 ชนิด 
                    <br></br><tab></tab>-ชนิด A อาศัยในป่า และผสมพันธุ์ช่วงเดือนสิงหาคม 
                    <br></br><tab></tab>-ชนิด B อาศัยในพื้นที่ชุ่มน้ำชายป่า และผสมพันธุ์ช่วงเดือนตุลาคม 
                    <br></br>จากข้อมูลข้อใดน่าจะเป็นกลไกการแบ่งแยกก่อนการผสมพันธุ์ของคางคก 2 ชนิด`,
                    choice :[{
                        choicevalue:'a',choiceimg:false,choicetext: '2 3'},{
                        choicevalue:'b',choiceimg:false,choicetext: '4 5'},{
                        choicevalue:'c',choiceimg:false,choicetext: '2 5'},{
                        choicevalue:'d',choiceimg:false,choicetext: '1 4'}
                      ],
                    Answer: 'd', 
                AnswerDescription:`กลไกการแบ่งแยกก่อนการผสมพันธุ์ของคางคก 2 ชนิด
                <br></br><tab></tab>1. temporal isolation ฤดูกาลแบ่งแยก
                <br></br><tab></tab>4. habitat isolation ที่อยู่อาศัยแบ่งแยก
                <br></br>เพราะ 
                <br></br><tab></tab>- ชนิด A อาศัยในป่า และผสมพันธุ์ช่วงเดือนสิงหาคม
                <br></br><tab></tab>- ชนิด B อาศัยในพื้นที่ชุ่มน้ำชายป่า และผสมพันธุ์ช่วงเดือนตุลาคม
                <br></br>ดังนั้น ทั้งสองชนิดผสมพันธุ์คนละช่วงเวลา และอาศัยอยู่คนละแหล่ง
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading Correspondence'
            },{   
                id: 26,
                question: 'อีกามักจะลงมาจิกกินเมล็ดข้าวจนเกิดความเสียหาย เกษตรกรจึงแก้ปัญหาโดยนำหุ่นไล่กามาตั้งไว้ ในระยะแรกได้ผลดี อีกาไม่กล้าลงมาจิกกินเมล็ดข้าว แต่เวลาผ่านไป 1 สัปดาห์ อีกากลับมาจิกกินเมล็ดข้าว แม้ว่าจะมีหุ่นไล่กาตั้งอยู่ เหตุการณ์ที่เกิดจัดเป็นพฤติกรรมแบบใด ',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'habituation'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'imprinting	'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'classical conditioning'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'operant conditioning'}
                  ],
                Answer: 'a',
                AnswerDescription:`<tab></tab> อีกามักจะลงมาจิกกินเมล็ดข้าวจนเกิดความเสียหาย เกษตรกรจึงแก้ปัญหาโดยนำหุ่นไล่กามาตั้งไว้ ในระยะแรกได้ผลดี อีกาไม่กล้าลงมาจิกกินเมล็ดข้าว แต่เวลาผ่านไป 1 สัปดาห์ อีกากลับมาจิกกินเมล็ดข้าว
                 แม้ว่าจะมีหุ่นไล่กาตั้งอยู่ เหตุการณ์ที่เกิดจัดเป็นพฤติกรรมแบบ habituation`,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading Correspondence'
            },
              {   
                id: 27,
                question: `ไบโอมบกที่ความหลากหลายทางชีวภาพสูงสุด ฝนตกชุกตลอดปี จัดเป็น 
                <br></br><tab></tab>1. ไบโอมป่าดิบชื้น 
                <br></br><tab></tab>2. ไบโอมป่าผลัดใบเขตอบอุ่น 
                <br></br><tab></tab>3. ไบโอมทุนดรา
                ซึ่งไบโอมลักษณะนี้ พบบริเวณ 
                <br></br><tab></tab>A เกาะกรีนแลนด์ 
                <br></br><tab></tab>B เกาะบอว์เนียว บรูไน/อินโดนีเซีย/มาเลเซีย
                <br></br><tab></tab>C เกาะเชจู เกาหลีใต้`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: '1, A'},{
                    choicevalue:'b',choiceimg:false,choicetext: '3, A'},{
                    choicevalue:'c',choiceimg:false,choicetext: '1, B'},{
                    choicevalue:'d',choiceimg:false,choicetext: '2, C'}
                  ],
                Answer: 'c',
                AnswerDescription:`<tab></tab> ไบโอมบกที่ความหลากหลายทางชีวภาพสูงสุด ฝนตกชุกตลอดปี จัดเป็น ไบโอมป่าดิบชื้น
                ซึ่งไบโอมลักษณะนี้ พบบริเวณ เกาะบอว์เนียว ของประเทศบรูไน/อินโดนีเซีย/มาเลเซีย
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },{   
                id: 28,
                question: 'ลักษณะความสัมพันธ์ของสิ่งมีชีวิตใดต่างจากพวก',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'โพรโตซัวย่อยไม้ - ปลวก'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'รา - สาหร่าย'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'กล้วยไม้ - ต้นไม้'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ปะการัง - สาหร่ายซูแซนเทลลี'}
                  ],
                Answer: 'c', 
                AnswerDescription:`<tab></tab>ลักษณะความสัมพันธ์ของสิ่งมีชีวิตที่ต่างจากพวก คือ กล้วยไม้ – ต้นไม้ (ภาวะอิงอาศัย)
                ส่วนตัวเลือกข้ออื่นอยู่ใน ภาวะพึ่งพา
                <br></br><tab></tab>1. โพรโตซัวย่อยไม้ - ปลวก
                <br></br><tab></tab>2. รา - สาหร่าย
                <br></br><tab></tab>4. ปะการัง – สาหร่ายซูแซนเทลลี
                
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },{   
                id: 29,
                question: `ข้อใดเป็นลักษณะที่มีร่วมกันระหว่าง งูจงอาง นกเค้าแมว หมูป่า`,
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'หัวใจ 4 ห้องสมบูรณ์'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'ชนิดของอาหาร'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'สัตว์เลือดอุ่น'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'ตัวอ่อนอยู่ในถุงน้ำคร่ำ'}
                ],
                Answer: 'd',
                AnswerDescription:`<tab></tab>ลักษณะที่มีร่วมกันระหว่าง งูจงอาง นกเค้าแมว หมูป่า คือ ตัวอ่อนอยู่ในถุงน้ำคร่ำ
                <br></br><tab></tab>พบได้ใน สัตว์เลื้อยคลาน / สัตว์ปีก / สัตว์เลี้ยงลูกด้วยน้ำนม
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },{   
                id: 30,
                question: 'มนุษย์กลุ่มใดเริ่มมีการใช้ไฟและเครื่องมือในการทำอาหาร',
                choice :[{
                    choicevalue:'a',choiceimg:false,choicetext: 'Homo erectus'},{
                    choicevalue:'b',choiceimg:false,choicetext: 'Homo habilis'},{
                    choicevalue:'c',choiceimg:false,choicetext: 'Homo sapiens'},{
                    choicevalue:'d',choiceimg:false,choicetext: 'Australopithecus afarensis'}
                  ],
                Answer: 'a',
                AnswerDescription:`<tab></tab>มนุษย์กลุ่มใดเริ่มมีการใช้ไฟและเครื่องมือในการทำอาหาร
                <br></br><tab></tab>1. Homo erectus เริ่มรู้จักใช้ไฟ ล่าสัตว์เพื่อเป็นอาหาร
                <br></br><tab></tab>2. Homo habilis พวกแรกที่ประดิษฐ์เครื่องมือหิน ยังคงกินแมลง และผลไม้
                <br></br><tab></tab>3. Homo sapiens ประดิษฐ์เครื่องมือที่ซับซ้อน ใช้สัญลักษณ์ มนุษย์ในปัจจุบัน      
                `,
                AnswerDescriptionAttachImg:'',
                Category: 'Reading for information and Argument'
            },
       ]
      }