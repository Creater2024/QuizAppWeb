import { Grid } from "@mui/material";
import React, { useState } from "react";
import CustomSelect from "../../components/customInput/CustomSelect";
import TestCard from "../../components/test/TestCard";
import { Margin } from "@mui/icons-material";
export default function TestPage() {
  const [exam, setExam] = useState(null);
  const labelExam = "Exam";
  const optionListExam = [];
  const testList = [
    { tittle: "SSC CGL Previous year paper 2023" },
    { tittle: "SSC CGL Previous year paper 2023" },
    { tittle: "SSC CGL Previous year paper 2023" },
    { tittle: "SSC CGL Previous year paper 2023" },
  ];
  const handleExamChange = (value) => {
    if (value == null || value == undefined) {
      setExam(null);
    } else {
      setExam(value);
    }
  };
  return (
    <div>
      <div className="select-container">
        <Grid container>
          <Grid Item xs={4}>
            <CustomSelect
              label={labelExam}
              options={optionListExam}
              onChange={handleExamChange}
              selectedOption={exam}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container justifyContent="space-around">
          {testList.map((test) => {
            return (
              <Grid Item sx={{ margin: "15px" }}>
                <TestCard />;
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
