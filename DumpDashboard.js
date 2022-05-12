import React, { useState } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { ArrowBack, SvgIcon } from '@mui/icons-material';
import Icon from '@mui/material/Icon';

import 'react-multi-carousel/lib/styles.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import './DumpDashboard.css';

export default function UserDashboard() {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Page C', uv: 100, pv: 2400, amt: 2400 },
    { name: 'Page D', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Page E', uv: 600, pv: 2400, amt: 2400 },
  ];

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName='.Mui-focusVisible'
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <div>
      <div className='Navbar-custom'>
        <Navbar bg='light' expand='lg'>
          <Container className={''}>
            <Navbar.Brand href='#home'>Techwa Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              className='justify-content-end'
              id='basic-navbar-nav'
            >
              <Nav className=' '>
                <Nav.Link href='#link'>rahul@gmail.com</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center mt-3'>
          <div className='d-flex align-items-center'>
            <Icon fontSize='small'>arrow_back</Icon>
            <span className='ps-2'>Back</span>
          </div>
          <div
            className='col align-items-center nameBox'
          >
            <p class='m-0'>Rahul Srivastav</p>
            <p class='m-0'>+91-9717440995</p>
          </div>
          <div className='col-lg-2 col-5 align-items-center'>
            <Form.Select aria-label='Default select example'>
              <option>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Form.Select>
          </div>
        </div>
        <div className='p-5 border border-1 mt-2'>
          <div className='row'>
            <div className='col-sm'>Today, 5 APRIL 2O22</div>
            <div className='col-sm'>MOTOR REPORT</div>
            <div className='col-sm d-flex justify-content-end'>
              <Form.Select
                aria-label='Default select example'
                style={{ width: '50%' }}
              >
                <option>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </div>
          </div>
          <div className='row justify-content-between'>
            {/* LEFT PANEL START */}

            <div className='col-sm-4  p-4'>
              <div className='row border1 border py-2 '>
                <p className='text-center' style={{ color: '#000000' }}>
                  MOTOR
                </p>
                <div className=' d-flex flex-row justify-content-center align-item-center'>
                  <span className='d-flex align-items-center mx-4'>ON</span>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </FormGroup>
                  <span className='d-flex align-items-center'>OFF</span>
                </div>
              </div>
              <div className='row  border1 border p-2'>
                <p style={{ color: '#8A8A8A' }}>AUTO CUT-OFF</p>
                <div className=' d-flex flex-row justify-content-between'>
                  <div className='py-2 d-flex flex-row'>
                    <span
                      className='rounded px-3 py-2'
                      style={{ backgroundColor: '#ECECEC' }}
                    >
                      45
                    </span>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        hrs
                      </span>
                    </div>
                  </div>
                  <div className='py-2 d-flex flex-row'>
                    <span
                      className='rounded px-3 py-2'
                      style={{ backgroundColor: '#ECECEC' }}
                    >
                      45
                    </span>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        min
                      </span>
                    </div>
                  </div>
                  <div className='py-2 d-flex flex-row'>
                    <span
                      className='rounded px-3 py-2'
                      style={{ backgroundColor: '#ECECEC' }}
                    >
                      45
                    </span>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        sec
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row border1 border p-2'>
                <p style={{ color: '#8A8A8A' }}>SET ALARM</p>
                <div className=' d-flex flex-row justify-content-between'>
                  <div className='py-2 d-flex flex-row'>
                    <span
                      className='rounded px-3 py-2'
                      style={{ backgroundColor: '#ECECEC' }}
                    >
                      45
                    </span>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        hrs
                      </span>
                    </div>
                  </div>
                  <div className='py-2 d-flex flex-row'>
                    <span
                      className='rounded px-3 py-2'
                      style={{ backgroundColor: '#ECECEC' }}
                    >
                      45
                    </span>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        min
                      </span>
                    </div>
                  </div>
                  <div className='py-2 d-flex flex-row'>
                    <span
                      className='rounded px-3 py-2'
                      style={{ backgroundColor: '#ECECEC' }}
                    >
                      45
                    </span>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        sec
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='d-flex justify-content-center align-items-center flex-column my-4'
                style={{ backgroundColor: '#DFDFDF', height: '60px' }}
              >
                <div
                  className='d-flex justify-content-center align-items-center flex-column'
                  style={{}}
                >
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      color: '#E43030',
                      fontSize: '14px',
                    }}
                  >
                    43 min
                  </p>
                  <p style={{ padding: 0, margin: 0, fontSize: '12px' }}>
                    left for motor to stop
                  </p>
                </div>
              </div>
              <div
                className='d-flex justify-content-center align-items-center flex-row my-4'
                style={{}}
              >
                <Checkbox
                  checked={true}
                  onChange={() => {}}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: '12px',
                    color: 'black',
                  }}
                >
                  Automatically switch off the motor once time is up
                </p>
              </div>
            </div>
            {/* RIGHT PANEL START */}
            <div id='rightPanel' className='col ms-4 p-5 ml-2'>
              <div className=''>
                <div>
                  <h5>Personal Details</h5>
                  <div className='p-3 border col-sm-8 dj' style={{}}>
                    <div className='d-flex flex-row'>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                      <div className='mx-4'>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-2'>
                  <h5>Purchase Details</h5>
                  <div className='p-3 border col-sm-8 dj' style={{}}>
                    <div className='d-flex flex-row'>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                      <div className='mx-4'>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-2'>
                  <h5>Status</h5>
                  <div className='p-3 border col-sm-8 dj' style={{}}>
                    <div className='d-flex flex-row'>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                      <div className='mx-4'>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p style={{ fontSize: '12px', color: 'grey' }}>Name</p>
                        <p style={{ fontSize: '12px' }}>John</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
