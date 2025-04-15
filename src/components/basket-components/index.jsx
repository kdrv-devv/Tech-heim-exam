import React, { useContext, useEffect } from "react";

import "./style/index.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";
import { Korzinka } from "../../context/add-bag";

const BasketComponent = () => {
  const { state, dispatch } = useContext(Korzinka);

  useEffect(()=>{
    localStorage.setItem("shop" , JSON.stringify(state.data))
  },[state.data])

  let subtotal = state.data.reduce((acc, cur) => {
    const price = Number(cur.newPrice); // agar string bo‘lsa
    const count = cur.count || 1;
    return acc + price * count;
  }, 0);

  return (
    <section className="basket">
      <div className="container">
        <div className="basket-header">
          <a href="#">Home  </a>
          <a href="#">Account </a>
          <a href="#">Payment & Instalmets  </a>
          <a href="#" className="!text-blue-500">
            Instalment {">"}
          </a>
        </div>

        <div className="basket-list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Photo</TableCell>
                  <TableCell>Due Amount</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Ram</TableCell>
                  <TableCell>Payment Date</TableCell>
                  <TableCell>Count</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={row.image}
                          alt="item"
                          style={{ width: "50px", marginRight: "10px" }}
                        />
                        {row.brand}
                      </div>
                    </TableCell>
                    <TableCell>{row.newPrice}</TableCell>
                    <TableCell>{row.rate}</TableCell>
                    <TableCell>{row.ram}</TableCell>
                    <TableCell>{row.catagory}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-5">
                          <Button
                            onClick={() =>
                              dispatch({ type: "decrement", idd: row.id })
                            }
                            variant="contained"
                          >
                            -
                          </Button>
                          <span className="text-[20px] text-blue-600">
                            {row.count}
                          </span>
                          <Button
                            onClick={() =>
                              dispatch({ type: "increment", idd: row.id })
                            }
                            variant="contained"
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          onClick={() => {
                            dispatch({ type: "delete", idd: row.id });
                          }}
                          className="!bg-red-700"
                          type=""
                          variant="contained"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="basket-bottom">
          <div className="subtotal flex items-center gap-3">
            <h5>Subtotal </h5>
            <h6>{subtotal}$</h6>
          </div>
          <Button type="primary" variant="contained">
            Pay
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BasketComponent;
