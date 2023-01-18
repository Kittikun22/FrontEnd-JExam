import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const province = [{
    "id": 1,
    "name_th": "กรุงเทพมหานคร",
    "province_order": 1
}, {
    "id": 64,
    "name_th": "กระบี่",
    "province_order": 2
}, {
    "id": 56,
    "name_th": "กาญจนบุรี",
    "province_order": 3
}, {
    "id": 34,
    "name_th": "กาฬสินธุ์",
    "province_order": 4
}, {
    "id": 49,
    "name_th": "กำแพงเพชร",
    "province_order": 5
}, {
    "id": 28,
    "name_th": "ขอนแก่น",
    "province_order": 6
}, {
    "id": 13,
    "name_th": "จันทบุรี",
    "province_order": 7
}, {
    "id": 15,
    "name_th": "ฉะเชิงเทรา",
    "province_order": 8
}, {
    "id": 11,
    "name_th": "ชลบุรี",
    "province_order": 9
}, {
    "id": 9,
    "name_th": "ชัยนาท",
    "province_order": 10
}, {
    "id": 25,
    "name_th": "ชัยภูมิ",
    "province_order": 11
}, {
    "id": 69,
    "name_th": "ชุมพร",
    "province_order": 12
}, {
    "id": 45,
    "name_th": "เชียงราย",
    "province_order": 13
}, {
    "id": 38,
    "name_th": "เชียงใหม่",
    "province_order": 14
}, {
    "id": 72,
    "name_th": "ตรัง",
    "province_order": 15
}, {
    "id": 14,
    "name_th": "ตราด",
    "province_order": 16
}, {
    "id": 50,
    "name_th": "ตาก",
    "province_order": 17
}, {
    "id": 17,
    "name_th": "นครนายก",
    "province_order": 18
}, {
    "id": 58,
    "name_th": "นครปฐม",
    "province_order": 19
}, {
    "id": 36,
    "name_th": "นครพนม",
    "province_order": 20
}, {
    "id": 63,
    "name_th": "นครศรีธรรมราช",
    "province_order": 22
}, {
    "id": 19,
    "name_th": "นครราชสีมา",
    "province_order": 22
}, {
    "id": 47,
    "name_th": "นครสวรรค์",
    "province_order": 23
}, {
    "id": 3,
    "name_th": "นนทบุรี",
    "province_order": 24
}, {
    "id": 76,
    "name_th": "นราธิวาส",
    "province_order": 25
}, {
    "id": 43,
    "name_th": "น่าน",
    "province_order": 26
}, {
    "id": 77,
    "name_th": "บึงกาฬ",
    "province_order": 27
}, {
    "id": 20,
    "name_th": "บุรีรัมย์",
    "province_order": 28
}, {
    "id": 4,
    "name_th": "ปทุมธานี",
    "province_order": 29
}, {
    "id": 62,
    "name_th": "ประจวบคีรีขันธ์",
    "province_order": 30
}, {
    "id": 16,
    "name_th": "ปราจีนบุรี",
    "province_order": 31
}, {
    "id": 74,
    "name_th": "ปัตตานี",
    "province_order": 32
}, {
    "id": 44,
    "name_th": "พะเยา",
    "province_order": 33
}, {
    "id": 5,
    "name_th": "พระนครศรีอยุธยา",
    "province_order": 34
}, {
    "id": 65,
    "name_th": "พังงา",
    "province_order": 35
}, {
    "id": 73,
    "name_th": "พัทลุง",
    "province_order": 36
}, {
    "id": 53,
    "name_th": "พิจิตร",
    "province_order": 37
}, {
    "id": 52,
    "name_th": "พิษณุโลก",
    "province_order": 38
}, {
    "id": 61,
    "name_th": "เพชรบุรี",
    "province_order": 39
}, {
    "id": 54,
    "name_th": "เพชรบูรณ์",
    "province_order": 40
}, {
    "id": 42,
    "name_th": "แพร่",
    "province_order": 41
}, {
    "id": 66,
    "name_th": "ภูเก็ต",
    "province_order": 42
}, {
    "id": 32,
    "name_th": "มหาสารคาม",
    "province_order": 43
}, {
    "id": 37,
    "name_th": "มุกดาหาร",
    "province_order": 44
}, {
    "id": 46,
    "name_th": "แม่ฮ่องสอน",
    "province_order": 45
}, {
    "id": 24,
    "name_th": "ยโสธร",
    "province_order": 46
}, {
    "id": 75,
    "name_th": "ยะลา",
    "province_order": 47
}, {
    "id": 33,
    "name_th": "ร้อยเอ็ด",
    "province_order": 48
}, {
    "id": 68,
    "name_th": "ระนอง",
    "province_order": 49
}, {
    "id": 12,
    "name_th": "ระยอง",
    "province_order": 50
}, {
    "id": 55,
    "name_th": "ราชบุรี",
    "province_order": 51
}, {
    "id": 7,
    "name_th": "ลพบุรี",
    "province_order": 52
}, {
    "id": 40,
    "name_th": "ลำปาง",
    "province_order": 53
}, {
    "id": 39,
    "name_th": "ลำพูน",
    "province_order": 54
}, {
    "id": 30,
    "name_th": "เลย",
    "province_order": 55
}, {
    "id": 22,
    "name_th": "ศรีสะเกษ",
    "province_order": 56
}, {
    "id": 35,
    "name_th": "สกลนคร",
    "province_order": 57
}, {
    "id": 70,
    "name_th": "สงขลา",
    "province_order": 58
}, {
    "id": 71,
    "name_th": "สตูล",
    "province_order": 59
}, {
    "id": 2,
    "name_th": "สมุทรปราการ",
    "province_order": 60
}, {
    "id": 60,
    "name_th": "สมุทรสงคราม\r\n",
    "province_order": 61
}, {
    "id": 59,
    "name_th": "สมุทรสาคร",
    "province_order": 62
}, {
    "id": 18,
    "name_th": "สระแก้ว",
    "province_order": 63
}, {
    "id": 10,
    "name_th": "สระบุรี",
    "province_order": 64
}, {
    "id": 8,
    "name_th": "สิงห์บุรี",
    "province_order": 65
}, {
    "id": 51,
    "name_th": "สุโขทัย",
    "province_order": 66
}, {
    "id": 57,
    "name_th": "สุพรรณบุรี",
    "province_order": 67
}, {
    "id": 67,
    "name_th": "สุราษฎร์ธานี",
    "province_order": 68
}, {
    "id": 21,
    "name_th": "สุรินทร์",
    "province_order": 69
}, {
    "id": 31,
    "name_th": "หนองคาย",
    "province_order": 70
}, {
    "id": 27,
    "name_th": "หนองบัวลำภู",
    "province_order": 71
}, {
    "id": 6,
    "name_th": "อ่างทอง",
    "province_order": 72
}, {
    "id": 26,
    "name_th": "อำนาจเจริญ",
    "province_order": 73
}, {
    "id": 29,
    "name_th": "อุดรธานี",
    "province_order": 74
}, {
    "id": 41,
    "name_th": "อุตรดิตถ์",
    "province_order": 75
}, {
    "id": 48,
    "name_th": "อุทัยธานี",
    "province_order": 76
}, {
    "id": 23,
    "name_th": "อุบลราชธานี",
    "province_order": 77
}]

const MyComponent = () => {

    console.log(province);

    const [exam, setExam] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/getTest').then((res) => {
            setExam(JSON.parse(res.data.exam));
            setInfo(JSON.parse(res.data.info));
        })
    }, [])

    console.log(exam);

    try {
        console.log(info[0].Category['SentenceCompletion']);

        if (exam && info) {
            console.log(info[0].Category);
            return (
                <div style={{ margin: 25 }}>
                    {info.map((val, key) => {
                        return (
                            <div key={key}>
                                <h2>{val.Title}</h2>
                                <p>{val.Description_line_i}</p>
                                <p>{val.Description_line_ii}</p>
                                <p>{val.Description_line_iii}</p>
                                <p>{val.Description_line_iv}</p>
                                <p>{val.Description_line_v}</p>
                                <p>เวลา : {val.Duration} นาที</p>
                                <p>จำนวนข้อ : {val.NumberofQuestions} ข้อ</p>
                            </div>
                        )
                    })}

                    {exam.map((val, key) => {
                        return (
                            <div key={key}>
                                <hr/>
                                <h3>{val.id}. {val.question}</h3>
                                {val.choice.map((val, key) => {
                                    return <>
                                        <p key={key}>
                                            {val.choicevalue} ) {val.choicetext}
                                        </p>
                                    </>
                                })}
                                <h3 >Answer is : {val.Answer}</h3>
                                <h3 >Category is : {val.Category}</h3>
                                
                            </div>
                        )
                    })}

                </div>
            );
        }
    } catch (error) {

    }
};

export default MyComponent;