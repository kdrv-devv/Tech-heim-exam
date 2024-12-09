import React from 'react'
import axios from 'axios';

import './style/index.scss'
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
import useAxios from '../../hooks/useAxios';

const BasketComponent = () => {
  const rows = [
    {
      id: 1,
      description: "#8967856",
      dueAmount: "$543.02",
      dueDate: "2023/08/20",
      actualAmount: "$543.02",
      paymentDate: "2023/08/15",
      count: "2",
      total: "$1385.52",
      image: "https://via.placeholder.com/50", // Rasmingiz URL manzili
    },
    {
      id: 2,
      description: "#8967856",
      dueAmount: "$433.00",
      dueDate: "2023/09/20",
      actualAmount: "-",
      paymentDate: "-",
      count: "2",
      total: "$842.50",
      image: "https://via.placeholder.com/50", // Rasmingiz URL manzili
    },
    {
      id: 3,
      description: "#8967856",
      dueAmount: "$433.00",
      dueDate: "2023/10/20",
      actualAmount: "-",
      paymentDate: "-",
      count: "2",
      total: "$409.50",
      image: "https://via.placeholder.com/50", // Rasmingiz URL manzili
    },
  ];

  return (
        <section className='basket'>
            <div className="container">
                  <div className="basket-header">
                    <a href="#">Home > </a>
                    <a href="#">Account ></a>
                    <a href="#">Payment & Instalmets > </a>
                    <a href="#" className='!text-blue-500'>Instalment > </a>
                  </div>

              <div className="basket-list">

                  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Description</TableCell>
            <TableCell>Due Amount</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Actual Amount</TableCell>
            <TableCell>Payment Date</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
                  {row.description}
                </div>
              </TableCell>
              <TableCell>{row.dueAmount}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.actualAmount}</TableCell>
              <TableCell>{row.paymentDate}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


              </div>

    
    <div className="basket-bottom">
      <div className='subtotal'>
          <h5>Subtotal </h5>
          <h6>842.50</h6>
      </div>
      <Button type='primary' variant="contained">Pay</Button>
    </div>
    
            </div>
        </section>
  )
}

export default BasketComponent