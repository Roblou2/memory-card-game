import {useState} from 'react'
import React, { Component } from 'react';

function Card ({indexNum, notSeen, background, seen}) {
   
return (
   <>
<div id = {indexNum} style = {{
    backgroundImage: background,
    width: 400,
    height: 400,
    backgroundRepeat: 'no-repeat',
    marginBottom: -100
}}
>
</div>
<div className="memory-buttons">
<button onClick = {notSeen} className='not-seen'>Not seen</button>
<button onClick = {seen} className='seen'>Seen</button>
</div>
</>
)
}

export default Card