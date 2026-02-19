import {useRef, useState} from 'react';

export function Page4({number}){
    const ref=useRef(Array(number).fill(0));

    return <div>
        {Array(number).fill(1).map((x,index)=><SubOtpBox key={index} reference={(e)=> ref.current[index]=e} onDone={()=>{
            if(index+1>=number) return;
            ref.current[index+1].focus();
        }} onBack={()=>{
            if(index==0) return;
            ref.current[index-1].focus();
        }}/>)}
        <button>Hello there</button>
    </div>
}

function SubOtpBox({reference,onDone,onBack}){
    const [inputBoxValue,setInputBoxValue]=useState("");
    return <input ref={reference} onKeyUp={(e)=>{
        if(e.key=="Backspace"){
            
            onBack();
        }
    }} onChange={(e)=>{
        const val=e.target.value;
        if(val=='1' || val=='2' || val=='3' || val=='4' || val=='5' || val=='6' || val=='7' ||val=='8' ||val=='9'){
            setInputBoxValue(val);
            onDone();
        }else{

        }
    }} type="number" className='w-10 h-10 rounded-xl bg-green-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center mr-2 outline-0 text-white text-xl'/>
}