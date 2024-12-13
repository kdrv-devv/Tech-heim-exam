import React, { useContext } from "react";
import axios from "axios";

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
import useAxios from "../../hooks/useAxios";
import { Korzinka } from "../../context/add-bag";

const BasketComponent = () => {
  const { state, dispatch } = useContext(Korzinka);
  console.log(state);

  return (
    <section className="basket">
      <div className="container">
        <div className="basket-header">
          <a href="#">Home > </a>
          <a href="#">Account ></a>
          <a href="#">Payment & Instalmets > </a>
          <a href="#" className="!text-blue-500">
            Instalment >{" "}
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
          <div className="subtotal">
            <h5>Subtotal </h5>
            <h6>2323$</h6>
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
