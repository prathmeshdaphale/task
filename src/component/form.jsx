import React,{useEffect, useState} from 'react'
import {Button,Container} from 'react-bootstrap'
import './form.css'
import {BsPlusCircleFill} from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'

const Mainform = ({data,Newdata}) => {
    const history= useNavigate()
    const [info, SetInfo]=useState({
        symptomList:"",
        diagnosed:"",
        physical:"",
        mental:"",
        experince:"",
        When:"",
        average:""
    })
    // const {symptomList,diagnosed,physical,mental,experince,when,average}= info

    const handleChange=(e)=>{
        SetInfo({...info,[e.target.name]:e.target.value})
    }
    const Handlesubmit=(e)=>{
        e.preventDefault();
        Newdata(info)
    }
    const id=useParams()
    useEffect(()=>{
       if(id){
            const Editdata = data?.find((item,index)=>index==id.id)
           console.log(Editdata)
           SetInfo(Editdata)
        }
    },[id])
    return (
        <Container className='Contain'>
            <center><h1 className="Heading">Pain & Functional Description</h1></center>
            <center><p>The Description of the current situation gives your optimum</p>
               <p> Trainer a picture  of and clues to the underlying  cause of</p>
               <p>problem.</p>

            <p>if you have problems with pain/aches</p>
            <textarea className='textArea' onChange={handleChange} value={info?.symptomList} name="symptomList"></textarea></center><br/>
            <div onChange={handleChange} value={info?.diagnosed}>
                <span>Have you been diagnosed with this problem?</span>
                <input type="radio" value= "Not relevant" checked={info?.diagnosed==="Not relevant"} name="diagnosed" onChange={handleChange}/> Not relevant
                <input type="radio" value="Yes" name="diagnosed" checked={info?.diagnosed==="Yes"}  onChange={handleChange}/> Yes
                <input type="radio" value="No" name="diagnosed" checked={info?.diagnosed==="No"}  onChange={handleChange}/> No
            </div><br/>
            <div onChange={handleChange}>
                <span>Did the problem start after a physical trauma?</span>
                <input type="radio" value="Not relevant" name="physical" checked={info?.physical==="Not relevant"} onChange={handleChange}/> Not relevant
                <input type="radio" value="Yes" name="physical" checked={info?.physical==="Yes"} onChange={handleChange}/> Yes
                <input type="radio" value="No" name="physical" checked={info?.physical==="No"} onChange={handleChange}/> No
            </div><br/>
            <div onChange={handleChange}>
                <span>Did the problem start after a mental trauma?</span>
                <input type="radio" value="Not relevant" name="mental" checked={info?.mental==="Not relevant"} onChange={handleChange}/> Not relevant
                <input type="radio" value="Yes" name="mental" checked={info?.mental==="Yes"} onChange={handleChange}/> Yes
                <input type="radio" value="No" name="mental" checked={info?.mental==="No"} onChange={handleChange}/> No
            </div><br/>
            <div onChange={handleChange}>
                <p>How often do you experince the problem?  </p>
                <input type="radio" value="Not relevant" name="experince" checked={info?.experince==="Not relevant"} onChange={handleChange}/> Not relevant
                <input type="radio" value="Daily" name="experince" checked={info?.experince==="Daily"} onChange={handleChange}/> Daily
                <input type="radio" value="week" name="experince" checked={info?.experince==="week"} onChange={handleChange}/> Several times /week
                <input type="radio" value="month" name="experince" checked={info?.experince==="month"} onChange={handleChange}/> A few times per month
                <input type="radio" value="year" name="experince" checked={info?.experince==="year"} onChange={handleChange}/> A few times/ year
            </div><br/>
            <div >
                <p>When do you experince problem?</p>
                <input type="checkbox" id="When" name="When" value="Not relevant" onChange={handleChange}/>Not Relevant <br/><br/>
                <input type="checkbox" id="When" name="When" value="when lying down" onChange={handleChange} />when lying down<br/><br/>
                <input type="checkbox" id="When" name="When" value="When sitting" onChange={handleChange}/>When sitting<br/><br/>
                <input type="checkbox" id="When" name="When" value="Under Standing" onChange={handleChange}/>Under Standing<br/><br/>
                <input type="checkbox" id="When" name="When" value="In walking" onChange={handleChange} />In walking
            </div><br/>
            <div onChange={handleChange}> 
                <p>How intense is the experinse of the problem on an average on a 0-10 scale?</p>
                <input className='dist' type="radio" value="1" name="average" checked={info?.average==="1"} onChange={handleChange}/>1
                <input className='dist' type="radio" value="2" name="average" checked={info?.average==="2"} onChange={handleChange}/>2
                <input className='dist' type="radio" value="3" name="average" checked={info?.average==="3"} onChange={handleChange}/>3
                <input className='dist' type="radio" value="4" name="average" checked={info?.average==="4"} onChange={handleChange}/>4
                <input className='dist' type="radio" value="5" name="average" checked={info?.average==="5"} onChange={handleChange}/>5
                <input className='dist' type="radio" value="6" name="average" checked={info?.average==="6"} onChange={handleChange}/>6
                <input className='dist' type="radio" value="7" name="average" checked={info?.average==="7"} onChange={handleChange}/>7
                <input className='dist' type="radio" value="8" name="average" checked={info?.average==="8"} onChange={handleChange}/>8
                <input className='dist' type="radio" value="9" name="average" checked={info?.average==="9"} onChange={handleChange}/>9
                <input className='dist' type="radio" value="10" name="average" checked={info?.average==="10"} onChange={handleChange}/>10
            </div><br/>
            <center>
            <div onClick={Handlesubmit}><BsPlusCircleFill/></div><br/>
            
            <div><Button >Back</Button><Button onClick={()=>history('/list')}>Next</Button></div></center>
        </Container>
    )
}

export default Mainform