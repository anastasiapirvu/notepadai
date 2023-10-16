'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
<Typewriter
    options={{
        loop: true,
    }}
    onInit={(typewriter) => {
        typewriter
        .typeString("Write out today's thoughts🚀")
        .pauseFor(1000)
        .deleteAll()
        .typeString('AI powered🤖')
        .start() 
    }}
/>  

);
};

export default TypewriterTitle