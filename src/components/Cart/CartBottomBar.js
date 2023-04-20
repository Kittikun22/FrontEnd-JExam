import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import Axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { motion } from 'framer-motion'

const CryptoJS = require("crypto-js");
const EncryptSecret = 'Jknow2022'

const CartBottomBar = ({
  selectedItem,
  selectedAmount,
  promoDiscount,
  user_id,
  promotion,
  codeList
}) => {
  const [code, setCode] = useState();
  const [codeDis, setCodeDis] = useState(0);
  const [checkCode, setCheckCode] = useState(false)

  const discount = selectedAmount * (promoDiscount / 100);

  const netAmount = selectedAmount - discount - codeDis;

  const selectedAmountInthai = new Intl.NumberFormat("th").format(selectedAmount);
  const netInThai = new Intl.NumberFormat("th").format(netAmount);

  const handleChangeCode = (event, codeList) => {
    const code = event.target.value.toUpperCase();
    setCode(code)
    const selectedCode = codeList.find(codeItem => codeItem.code_name === code);
    if (selectedCode) {
      setCodeDis(selectedCode.code_discount);
      setCheckCode(true)
    } else {
      setCodeDis(0);
      setCheckCode(false)
    }
  };

  const handleSelectPromotion = (selectedItem, promotions) => {
    let selected = selectedItem?.length;
    let promotion = promotions.find((promo) => selected < promo.promotion_min);
    if (!promotion) {
      return;
    }
    return `เพิ่มอีก ${promotion.promotion_min - selected
      } รายการเพื่อรับโปรโมชั่นส่วนลด ${promotion.promotion_discount}%`;
  };

  const handleOnCheckOut = (
    selectedItem,
    code,
    codeDis,
    promoDiscount,
    discount
  ) => {

    const ciphertext_discount = CryptoJS.AES.encrypt(JSON.stringify([
      {
        code: code,
        codeDis: codeDis,
        promoDiscount: promoDiscount,
        discount: discount,
      },
    ]), EncryptSecret).toString();

    const ciphertext_selectItem = CryptoJS.AES.encrypt(JSON.stringify(selectedItem), EncryptSecret).toString();

    localStorage.setItem("selectItem", ciphertext_selectItem);
    localStorage.setItem('discount', ciphertext_discount)

    Axios.put("http://localhost:8000/updateSelectItem", {
      user_id: user_id,
      itemSelected: JSON.stringify(selectedItem),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        background: "#E8F3D6",
        height: "150px",
        borderTop: "5px solid #a0d64b",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderLeft: "2px solid #a0d64b",
        borderRight: "2px solid #a0d64b",
        bottom: { xs: 61, md: 0 },
        width: { xs: '100%', md: '95%' },
      }}
      component={motion.div}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 0.5,
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "1rem", md: "1.3rem" }, textAlign: "center" }}
        >
          {promoDiscount === 0 ? null : `ได้รับส่วนลดแล้ว ${promoDiscount} % `}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "1rem", md: "1.3rem", textAlign: "center" } }}
        >
          {selectedItem?.length === 0
            ? "คุณยังไม่ได้เลือกสินค้า"
            : handleSelectPromotion(selectedItem, promotion)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          mx: { xs: 0, md: 2 },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            mx: 0.5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ mr: 1 }}>โค้ดส่วนลด </Typography>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon sx={{ display: checkCode === true ? 'flex' : 'none', color: '#a0d64b' }} />
                </InputAdornment>
              ),
            }}
            size="small"
            label="กรอกโค้ดส่วนลด..."
            autoComplete='off'
            value={code}
            onChange={(event) => handleChangeCode(event, codeList)}
            sx={{ width: { xs: "175px", md: "250px" } }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            mx: 0.5,
            mt: 0.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: ".8rem", md: "1.2rem" },
              mr: 1,
            }}
          >
            รวม ( {selectedItem?.length} รายการ )
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography
              sx={{
                fontSize: { xs: ".9rem", md: "1.2rem" },
                mr: 1,
              }}
            >
              ราคา
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: ".9rem", md: "1.2rem" },
                mr: 1,
                textDecoration:
                  promoDiscount !== 0 || codeDis !== 0
                    ? "line-through"
                    : "none",
                textDecorationThickness: "3.5px",
              }}
            >
              {selectedAmountInthai}{" "}
              {promoDiscount !== 0 || codeDis !== 0 ? "" : "บาท"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                color: "#FF1E1E",
                fontWeight: 800,
                display: promoDiscount !== 0 || codeDis !== 0 ? "flex" : "none",
                alignItems: "flex-end",
                mr: 0.5,
              }}
            >
              {netInThai <= 0 ? 0 : netInThai} บาท
            </Typography>

            <Button
              variant="contained"
              color="error"
              href="/checkout"
              disabled={selectedItem?.length === 0 ? true : false}
              onClick={() =>
                handleOnCheckOut(
                  selectedItem,
                  code,
                  codeDis,
                  promoDiscount,
                  discount
                )
              }
              size="small"
              sx={{
                fontSize: "1.2rem",
                width: { xs: "125px", md: "250px" },
                p: 1,
                borderRadius: 5,
              }}
            >
              สั่งซื้อ
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CartBottomBar;
