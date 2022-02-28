import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./form.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";


const Mainform = ({ data, handleFormSubmit, handleEditForm }) => {
  const history = useNavigate();
  const { id } = useParams();

const initialState = () => {
    return {
      symptomList: "",
      diagnosed: "",
      physical: "",
      mental: "",
      experince: "",
      when: [
        { name: "Not relevant", isChecked: false },
        { name: "when lying down", isChecked: false },
        { name: "When sitting", isChecked: false },
        { name: "Under Standing", isChecked: false },
        { name: "In walking", isChecked: false },
      ],
      average: "",
    };
  };
  const [info, SetInfo] = useState([initialState]);

  const handleChange = (e) => {
    SetInfo({ ...info, [e.target.name]: e.target.value });
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleEditForm(id, info);
    } else {
      const uniqueId = (Math.random() + 1).toString(36).substring(7);
      handleFormSubmit({ ...info, id: uniqueId });
      SetInfo(initialState);
    }
  };
  useEffect(() => {
    if (id) {
      const Editdata = data?.find((item, index) => item.id === id);
      SetInfo(Editdata);
    }
  }, [id]);

  const handleCheckboxChange = (i) => {
    const state = [{ ...info }];
    state.when[i].isChecked = !state.when[i].isChecked;
    SetInfo(state);
  };
  return (
    <Container className="Contain">
     
        {info?.map((data)=>{
          return(<div>
            <center>
            <h1 className="Heading">Pain & Functional Description</h1>
      </center>
      <center>
        <p>The Description of the current situation gives your optimum</p>
        <p> Trainer a picture of and clues to the underlying cause of</p>
        <p>problem.</p>

        <p>if you have problems with pain/aches</p>
        <textarea
          className="textArea"
          onChange={handleChange}
          value={data?.symptomList}
          name="symptomList"
        ></textarea>
      </center>
      <br/>
      <div onChange={handleChange} value={data?.diagnosed}>
        <span>Have you been diagnosed with this problem?</span>
        <input
          className="radio"
          type="radio"
          value="Not relevant"
          checked={data?.diagnosed === "Not relevant"}
          name="diagnosed"
          onChange={handleChange}
        />{" "}
        Not relevant
        <input
          type="radio"
          value="Yes"
          name="diagnosed"
          checked={data?.diagnosed === "Yes"}
          onChange={handleChange}
        />{" "}
        Yes
        <input
          type="radio"
          value="No"
          name="diagnosed"
          checked={data?.diagnosed === "No"}
          onChange={handleChange}
        />{" "}
        No
      </div>
      <br />
      <div onChange={handleChange}>
        <span>Did the problem start after a physical trauma?</span>
        <input
          className="radio1"
          type="radio"
          value="Not relevant"
          name="physical"
          checked={data?.physical === "Not relevant"}
          onChange={handleChange}
        />{" "}
        Not relevant
        <input
          type="radio"
          value="Yes"
          name="physical"
          checked={data?.physical === "Yes"}
          onChange={handleChange}
        />{" "}
        Yes
        <input
          type="radio"
          value="No"
          name="physical"
          checked={data?.physical === "No"}
          onChange={handleChange}
        />{" "}
        No
      </div>
      <br />
      <div onChange={handleChange}>
        <span>Did the problem start after a mental trauma?</span>
        <input
          className="radio"
          type="radio"
          value="Not relevant"
          name="mental"
          checked={data?.mental === "Not relevant"}
          onChange={handleChange}
        />{" "}
        Not relevant
        <input
          type="radio"
          value="Yes"
          name="mental"
          checked={data?.mental === "Yes"}
          onChange={handleChange}
        />{" "}
        Yes
        <input
          type="radio"
          value="No"
          name="mental"
          checked={data?.mental === "No"}
          onChange={handleChange}
        />{" "}
        No
      </div>
      <br />
      <div onChange={handleChange}>
        <p>How often do you experince the problem? </p>
        <input
          type="radio"
          value="Not relevant"
          name="experince"
          checked={data?.experince === "Not relevant"}
          onChange={handleChange}
        />{" "}
        Not relevant
        <input
          type="radio"
          value="Daily"
          name="experince"
          checked={data?.experince === "Daily"}
          onChange={handleChange}
        />{" "}
        Daily
        <input
          type="radio"
          value="week"
          name="experince"
          checked={data?.experince === "week"}
          onChange={handleChange}
        />{" "}
        Several times /week
        <input
          type="radio"
          value="month"
          name="experince"
          checked={data?.experince === "month"}
          onChange={handleChange}
        />{" "}
        A few times per month
        <input
          type="radio"
          value="year"
          name="experince"
          checked={data?.experince === "year"}
          onChange={handleChange}
        />{" "}
        A few times/ year
      </div>
      <br />
      <div>
        <p>When do you experince problem?</p>

        {data?.when?.map((item, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <label style={{ width: "17%", lineHeight: "31px" }}>
                {item.name}
              </label>
              <input
                type="checkbox"
                id="When"
                name={item.name}
                value={item.name}
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
          );
        })}
      </div>
      <div onChange={handleChange}>
        <p>
          How intense is the experinse of the problem on an average on a 0-10
          scale?
        </p>
        <input
          className="dist"
          type="radio"
          value="1"
          name="average"
          checked={data?.average === "1"}
          onChange={handleChange}
        />
        1
        <input
          className="dist"
          type="radio"
          value="2"
          name="average"
          checked={data?.average === "2"}
          onChange={handleChange}
        />
        2
        <input
          className="dist"
          type="radio"
          value="3"
          name="average"
          checked={data?.average === "3"}
          onChange={handleChange}
        />
        3
        <input
          className="dist"
          type="radio"
          value="4"
          name="average"
          checked={data?.average === "4"}
          onChange={handleChange}
        />
        4
        <input
          className="dist"
          type="radio"
          value="5"
          name="average"
          checked={data?.average === "5"}
          onChange={handleChange}
        />
        5
        <input
          className="dist"
          type="radio"
          value="6"
          name="average"
          checked={data?.average === "6"}
          onChange={handleChange}
        />
        6
        <input
          className="dist"
          type="radio"
          value="7"
          name="average"
          checked={data?.average === "7"}
          onChange={handleChange}
        />
        7
        <input
          className="dist"
          type="radio"
          value="8"
          name="average"
          checked={data?.average === "8"}
          onChange={handleChange}
        />
        8
        <input
          className="dist"
          type="radio"
          value="9"
          name="average"
          checked={data?.average === "9"}
          onChange={handleChange}
        />
        9
        <input
          className="dist"
          type="radio"
          value="10"
          name="average"
          checked={data?.average === "10"}
          onChange={handleChange}
        />
        10
      </div>
      </div>
          )
        })}
        
      <br />
      <center>
        <div onClick={Handlesubmit}>
          <BsPlusCircleFill />
        </div>
        <br />

        <div>
          <Button>Back</Button>
          <Button onClick={() => {SetInfo([...info,{initialState}])}}>Next</Button>
        </div>
      </center>
    </Container>
  );
};

export default Mainform;
