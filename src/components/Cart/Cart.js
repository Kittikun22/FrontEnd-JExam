import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import CartBottomBar from "./CartBottomBar";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuthState } from "../../context/AuthContext";
import Axios from "axios";

const columns = [
  { field: "name", headerName: "รายการ", minWidth: 150, flex: 1 },
  { field: "amount", headerName: "ราคา (บาท)", minWidth: 125, flex: 0 },
];

export default function Cart({ rowsData, setRowsData }) {
  const { user } = useAuthState();

  const [itemInCart, setItemInCart] = useState();
  const [codeList, setCodeList] = useState();
  const [promotion, setPromotion] = useState();

  useEffect(() => {
    const arr_id = [];
    rowsData.map((val) => {
      return arr_id.push(val.product_id);
    });

    Axios.post("http://localhost:8000/getProductInCart", {
      product_id: arr_id,
    }).then((res) => {
      setItemInCart(res.data);
    });

    Axios.get("http://localhost:8000/getCode").then((res) => {
      setCodeList(res.data);
    });

    Axios.get("http://localhost:8000/getPromotion").then((res) => {
      setPromotion(res.data);
    });

    localStorage.setItem("selectItem", JSON.stringify([]));
    localStorage.setItem("discount", JSON.stringify([]));
  }, []);

  const [pageSize, setPageSize] = useState(itemInCart?.length <= 5 ? 5 : 10);
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const onRowsSelectionHandler = (product_ids) => {
    const selectedRowsData = product_ids.map((product_id) =>
      itemInCart.find((row) => row.product_id === product_id)
    );
    setSelectedItem(selectedRowsData);
    onSelectedAmount(selectedRowsData);
    handlePromoDiscount(selectedRowsData, promotion);
  };

  const onSelectedAmount = (selectedRowsData) => {
    let total = 0;
    selectedRowsData.map((val) => {
      return (total += val.amount);
    });
    setSelectedAmount(total);
  };

  const handlePromoDiscount = (selectedRowsData, promotions) => {
    const selected = selectedRowsData?.length;
    const matchedPromotions = promotions.filter(
      (promo) => promo.promotion_min <= selected
    );
    const discount = matchedPromotions.length
      ? Math.max(...matchedPromotions.map((promo) => promo.promotion_discount))
      : 0;
    setPromoDiscount(discount);
  };

  const handleDelete = (itemToDelete) => {
    const updateItemInCart = itemInCart.filter(
      (row) => !itemToDelete.includes(row)
    );

    localStorage.setItem("cart", JSON.stringify(updateItemInCart));
    setItemInCart(updateItemInCart);

    Axios.put("http://localhost:8000/updateCart", {
      user_id: user.user_id,
      updateCart: JSON.stringify(updateItemInCart),
    });
  };

  if (itemInCart) {
    return (
      <>
        <Box
          m={2}
          sx={{ height: pageSize === 5 ? 375 : 631, marginBottom: "400px" }}
        >
          <Box
            m={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                display: "inline",
                borderBottom: 5,
                borderColor: "#a0d64b",
                mb: 2,
              }}
            >
              รถเข็นสินค้า
            </Typography>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{
                borderRadius: 10,
                width: "100px",
              }}
              onClick={() => handleDelete(selectedItem)}
            >
              ลบ
            </Button>
          </Box>

          <DataGrid
            rows={itemInCart}
            getRowId={(row) => row.product_id}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10]}
            checkboxSelection
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            sx={{ fontSize: "1.2rem" }}
          />
        </Box>


        <Box mx={{ xs: 0, md: 2 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CartBottomBar
            selectedItem={selectedItem}
            selectedAmount={selectedAmount}
            promoDiscount={promoDiscount}
            user_id={user.user_id}
            promotion={promotion}
            codeList={codeList}
          />
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Typography sx={{ textAlign: "center", fontSize: "2rem", mt: "15%" }}>
          ไม่มีสินค้าในตะกร้า
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          <a href="/exam-library">ดูข้อสอบทั้งหมด</a>
        </Typography>
      </>
    );
  }
}
