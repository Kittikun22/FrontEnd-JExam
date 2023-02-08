import React, { useEffect } from "react";
import { Box, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,

);


const colorSet = ['#39B5E0', '#A31ACB', '#54B435', '#FF6D28', '#FB2576', '#FFFF00', '#28DF99', '#B983FF']

const options = {
  scales: {
    r: {
      angleLines: {
        display: true
      },
      pointLabels: {
        display: false
      },
      suggestedMin: 0,
      suggestedMax: 100
    },
  },
  plugins: {
    legend: {
      display: false
    },
  }
};


function AnalysisContent({ answered, exam, selectExam }) {

  console.log(answered);


  const pointByGroup = answered.reduce((acc, item) => {
    const exists = acc.find(i => i.category === item.category)
    if (!exists) {
      acc.push({
        category: item.category,
        point: item.point,
        fullScore: item.fullScore,
      });
    } else {
      exists.point += item.point;
      exists.fullScore += item.fullScore;
    }

    return acc;
  }, []);

  console.log(pointByGroup);

  const data = {
    labels: pointByGroup.map(val => val.category),
    datasets: [
      {
        label: exam[selectExam].exam_name,
        data: pointByGroup.map(val => (val.point / val.fullScore) * 100),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "black",
        borderWidth: 5,
        pointRadius: 7,
        pointBackgroundColor: colorSet,
        pointBorderColor: colorSet
      },
    ],
  };

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center'
    }}>
      <Box my={2} sx={{ width: { xs: '250px', md: '500px' }, alignSelf: 'center' }}>
        <Radar data={data} options={options} />
      </Box>

      <Box mb={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} sx={{ width: { xs: '90%', md: '80%' } }}>
          <Table >
            <TableHead>
              <TableRow sx={{ background: '#0e3746' }}>
                <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem' }}>หัวข้อ</TableCell>
                <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem', width: '100px' }} align="right">คะแนนเต็ม</TableCell>
                <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem', width: '100px' }} align="right">คะแนนที่ได้</TableCell>
                <TableCell sx={{ color: '#a3cc53', fontSize: '1.2rem', width: '100px' }} align="right">ร้อยละ(%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pointByGroup.map((row, key) => (
                <TableRow
                  key={key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ display: 'flex' }}>
                    <CircleIcon sx={{ alignSelf: 'center', color: colorSet[key] }} />
                    <Typography sx={{ fontSize: '1rem', color: colorSet[key] }} > {row.category}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: '1rem' }}>{row.fullScore}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: '1rem' }}>{row.point}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: '1rem' }}>{((row.point / row.fullScore) * 100).toFixed(2)}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>

  )
}

export default AnalysisContent;
